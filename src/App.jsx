import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

function getSentiment(headline) {
  const bullish = ['surge', 'rally', 'growth', 'beats', 'profit', 'high',
                   'gain', 'rise', 'strong', 'record', 'up', 'soars',
                   'jumps', 'positive', 'upgrade', 'buy', 'outperform']

  const bearish = ['crash', 'fall', 'loss', 'drop', 'fear', 'weak', 'down',
                   'decline', 'risk', 'warns', 'cut', 'miss', 'below',
                   'negative', 'downgrade', 'sell', 'underperform', 'lawsuit']

  const lower = headline.toLowerCase()
  const bullishScore = bullish.filter(word => lower.includes(word)).length
  const bearishScore = bearish.filter(word => lower.includes(word)).length

  if (bullishScore > bearishScore) return { label: '▲ Bullish', color: '#007a4d' }
  if (bearishScore > bullishScore) return { label: '▼ Bearish', color: '#990000' }
  return { label: '● Neutral', color: '#66605a' }
}

function App() {
  const [symbol, setSymbol] = useState('AAPL')
  const [inputValue, setInputValue] = useState('')
  const [price, setPrice] = useState(null)
  const [news, setNews] = useState([])
  const [chartData, setChartData] = useState([])
  const [loading, setLoading] = useState(true)
  const [newsLoading, setNewsLoading] = useState(true)
  const [chartLoading, setChartLoading] = useState(true)

  useEffect(() => {
    const ALPHA_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY
    const FINNHUB_KEY = import.meta.env.VITE_FINNHUB_KEY

    // live prices
    setLoading(true)
    fetch(`https://www.alphavantage.co/query?
      function=GLOBAL_QUOTE&symbol=${symbol}&apikey=5LSX6UCP1UVJVE60`)
      .then(res => res.json())
      .then(data => {
        const quote = data['Global Quote']
        if (quote && quote['05. price']) {
          setPrice(quote['05. price'])
        } else {
          setPrice('Rate limit reached. Try again tomorrow.')
        }
        setLoading(false)
      })
      .catch(() => {
        setPrice('Failed to load price.')
        setLoading(false)
      })

      // chart data
    setChartLoading(true)
   
    fetch(`https://www.alphavantage.co/query?
      function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=5LSX6UCP1UVJVE60`)
      .then(res => res.json())
      .then(data => {
        const timeSeries = data['Time Series (Daily)']
        if (timeSeries) {
          const formatted = Object.entries(timeSeries)
            .slice(0, 30)
            .reverse()
            .map(([date, values]) => ({
              date: date,
              price: parseFloat(values['4. close'])
        }))
        setChartData(formatted)
        } else {
          setChartData([])
        }
        setChartLoading(false)
      })
      .catch(() => {
        setChartData([])
        setChartLoading(false)
      })

      //News
    setNewsLoading(true)
    const today = new Date()
    const lastWeek = new Date(today)
    lastWeek.setDate(lastWeek.getDate() - 7)
    const toDate = today.toISOString().split('T')[0]
    const fromDate = lastWeek.toISOString().split('T')[0]

    fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=d8jq7rpr01qh6g3rrn1gd8jq7rpr01qh6g3rrn20`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setNews(data.slice(0, 5))
        } else {
          setNews([])
        }
        setNewsLoading(false)
      })
      .catch(() => {
        setNews([])
        setNewsLoading(false)
      })
  }, [symbol])

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      setSymbol(inputValue.toUpperCase())
      setInputValue('')
    }
  }

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <div>

      {/* Top Bar */}
      <div style={{
        background: '#fff1e5',
        borderBottom: '3px solid #33302e',
        padding: '12px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <p style={{ fontSize: '13px', color: '#66605a', fontFamily: 'Georgia, serif' }}>{today}</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="Search symbol..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{
              padding: '8px 12px',
              fontSize: '14px',
              border: '1px solid #33302e',
              background: '#fff1e5',
              color: '#33302e',
              fontFamily: 'Georgia, serif',
              outline: 'none',
              width: '200px'
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: '8px 18px',
              fontSize: '14px',
              border: '1px solid #33302e',
              background: '#33302e',
              color: '#fff1e5',
              fontFamily: 'Georgia, serif',
              cursor: 'pointer',
              letterSpacing: '0.5px'
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Masthead */}
      <div style={{
        textAlign: 'center',
        padding: '28px 40px 20px',
        borderBottom: '1px solid #c9b99a',
        background: '#fff1e5'
      }}>
        <p style={{ fontSize: '12px', letterSpacing: '3px', color: '#66605a', marginBottom: '8px' }}>
          MARKET INTELLIGENCE
        </p>
        <h1 style={{
          fontSize: '52px',
          fontFamily: 'Georgia, serif',
          fontWeight: 'bold',
          color: '#33302e',
          letterSpacing: '-1px'
        }}>
          Stock Pulse
        </h1>
        <p style={{ fontSize: '13px', color: '#66605a', marginTop: '6px', fontStyle: 'italic' }}>
          Live prices · Sentiment · Market news
        </p>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 40px' }}>

        {/* Price + Chart Side by Side */}
        <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>

          {/* Price Block */}
          <div style={{
            minWidth: '200px',
            borderTop: '3px solid #33302e',
            paddingTop: '16px'
          }}>
            <p style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#66605a',
              marginBottom: '8px'
            }}>
              TRACKING
            </p>
            <h2 style={{
              fontSize: '42px',
              fontWeight: 'bold',
              color: '#33302e',
              marginBottom: '16px',
              letterSpacing: '-1px'
            }}>
              {symbol}
            </h2>
            <p style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#66605a',
              marginBottom: '8px'
            }}>
              LAST PRICE
            </p>
            {loading ? (
              <p style={{ color: '#a09890', fontStyle: 'italic' }}>Fetching...</p>
            ) : (
              <h3 style={{
                fontSize: '36px',
                color: '#007a4d',
                fontWeight: 'bold',
                letterSpacing: '-1px'
              }}>
                {isNaN(parseFloat(price)) ? (
                  <span style={{ fontSize: '14px', color: '#990000', fontStyle: 'italic' }}>{price}</span>
                ) : (
                  `$${parseFloat(price).toFixed(2)}`
                )}
              </h3>
            )}
          </div>

          {/* Chart Block */}
          <div style={{
            flex: 1,
            borderTop: '3px solid #33302e',
            paddingTop: '16px'
          }}>
            <p style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#66605a',
              marginBottom: '16px'
            }}>
              30-DAY PRICE HISTORY
            </p>
            {chartLoading ? (
              <p style={{ color: '#a09890', fontStyle: 'italic' }}>Loading chart...</p>
            ) : chartData.length === 0 ? (
              <p style={{ color: '#a09890', fontStyle: 'italic' }}>Chart unavailable — rate limit reached.</p>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e8d9c8" />
                  <XAxis dataKey="date" tick={{ fontSize: 10, fill: '#66605a', fontFamily: 'Georgia' }} interval={4} />
                  <YAxis domain={['auto', 'auto']} tick={{ fontSize: 10, fill: '#66605a', fontFamily: 'Georgia' }} />
                  <Tooltip
                    contentStyle={{
                      background: '#fff1e5',
                      border: '1px solid #c9b99a',
                      borderRadius: '0px',
                      fontFamily: 'Georgia',
                      fontSize: '13px'
                    }}
                    labelStyle={{ color: '#33302e' }}
                    itemStyle={{ color: '#007a4d' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#33302e"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '3px solid #33302e', marginBottom: '32px' }} />

        {/* Overall Sentiment Block */}
        {!newsLoading && news.length > 0 && (() => {
          const scores = news.map(article => getSentiment(article.headline).label)
          const bullishCount = scores.filter(s => s.includes('Bullish')).length
          const bearishCount = scores.filter(s => s.includes('Bearish')).length
          const neutralCount = scores.filter(s => s.includes('Neutral')).length

          let overall, overallColor, overallDesc
          if (bullishCount > bearishCount) {
            overall = '▲ Bullish'
            overallColor = '#007a4d'
            overallDesc = 'Market mood is broadly positive'
          } else if (bearishCount > bullishCount) {
            overall = '▼ Bearish'
            overallColor = '#990000'
            overallDesc = 'Market mood is broadly negative'
          } else {
            overall = '● Neutral'
            overallColor = '#66605a'
            overallDesc = 'Market mood is mixed'
          }

          return (
            <div style={{
              borderTop: '3px solid #33302e',
              borderBottom: '1px solid #c9b99a',
              padding: '24px 0',
              marginBottom: '32px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
             <div>
               <p style={{
                  fontSize: '11px',
                  letterSpacing: '3px',
                  color: '#66605a',
                  marginBottom: '8px'
            }}>
                  OVERALL SENTIMENT
            </p>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: overallColor,
              fontFamily: 'Georgia, serif',
              letterSpacing: '-1px',
              marginBottom: '6px'
            }}>
             {overall}
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#66605a',
              fontStyle: 'italic'
            }}>
             {overallDesc}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '32px', textAlign: 'center' }}>
            <div>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#007a4d' }}>{bullishCount}</p>
              <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#66605a' }}>BULLISH</p>
            </div>
             <div>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#990000' }}>{bearishCount}</p>
              <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#66605a' }}>BEARISH</p>
            </div>
            <div>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#66605a' }}>{neutralCount}</p>
              <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#66605a' }}>NEUTRAL</p>
            </div>
          </div>
        </div>
      )
    })()}

        {/* News Section */}
        <div>
          <p style={{
            fontSize: '11px',
            letterSpacing: '3px',
            color: '#66605a',
            marginBottom: '20px'
          }}>
            LATEST NEWS & SENTIMENT
          </p>

          {newsLoading ? (
            <p style={{ color: '#a09890', fontStyle: 'italic' }}>Loading news...</p>
          ) : news.length === 0 ? (
            <p style={{ color: '#a09890', fontStyle: 'italic' }}>No news found for {symbol}.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {news.map((article, index) => {
                const sentiment = getSentiment(article.headline)
                return (
                  <li key={article.id} style={{
                    borderTop: index === 0 ? 'none' : '1px solid #c9b99a',
                    paddingTop: index === 0 ? '0' : '20px',
                    marginBottom: '20px'
                  }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#33302e',
                      lineHeight: '1.4',
                      marginBottom: '8px',
                      fontFamily: 'Georgia, serif'
                    }}>
                      {article.headline}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#66605a',
                      lineHeight: '1.6',
                      marginBottom: '10px',
                      fontStyle: 'italic'
                    }}>
                      {article.summary}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <span style={{
                          fontSize: '13px',
                          fontWeight: 'bold',
                          color: sentiment.color,
                          letterSpacing: '0.5px'
                        }}>
                          {sentiment.label}
                        </span>
                        <small style={{ color: '#a09890', fontSize: '12px' }}>
                          {new Date(article.datetime * 1000).toLocaleDateString('en-GB', {
                            day: 'numeric', month: 'long', year: 'numeric'
                          })} — {article.source}
                        </small>
                      </div>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontSize: '13px', color: '#990000' }}
                      >
                        Read more →
                      </a>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '3px solid #33302e',
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px',
        background: '#fff1e5'
      }}>
        <p style={{ fontSize: '12px', color: '#a09890', fontStyle: 'italic' }}>
          Stock Pulse — Built with React · Alpha Vantage · Finnhub
        </p>
      </div>

    </div>
  )
}

export default App





