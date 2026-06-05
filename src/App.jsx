/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App */

/*import { useState } from 'react'

function App() {
  const [symbol, setSymbol] = useState('AAPL')

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📈 Stock Pulse</h1>
      <p>Tracking: {symbol}</p>
    </div>
  )
}

export default App */


/*import { useState, useEffect } from 'react'

function App() {
  const [symbol, setSymbol] = useState('AAPL')
  const [price, setPrice] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=YOUR_API_KEY_HERE`)
      .then(res => res.json())
      .then(data => {
        const stockPrice = data['Global Quote']['05. price']
        setPrice(stockPrice)
        setLoading(false)
      })
  }, [symbol])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📈 Stock Pulse</h1>
      <p>Symbol: {symbol}</p>
      {loading ? (
        <p>Loading price...</p>
      ) : (
        <p>Live Price: ${parseFloat(price).toFixed(2)}</p>
      )}
    </div>
  )
}

export default App */









/*import { useState, useEffect } from 'react'

function App() {
  const [symbol, setSymbol] = useState('AAPL')
  const [inputValue, setInputValue] = useState('')
  const [price, setPrice] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=YOUR_API_KEY_HERE`)
      .then(res => res.json())
      .then(data => {
        const stockPrice = data['Global Quote']['05. price']
        setPrice(stockPrice)
        setLoading(false)
      })
  }, [symbol])

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      setSymbol(inputValue.toUpperCase())
      setInputValue('')
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📈 Stock Pulse</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter stock symbol..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          style={{ padding: '8px', fontSize: '16px', marginRight: '8px' }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
        >
          Search
        </button>
      </div>

      <p>Symbol: {symbol}</p>
      {loading ? (
        <p>Loading price...</p>
      ) : (
        <p>Live Price: ${parseFloat(price).toFixed(2)}</p>
      )}
    </div>
  )
}

export default App */











/*import { useState, useEffect } from 'react'

function App() {
  const [symbol, setSymbol] = useState('AAPL')
  const [inputValue, setInputValue] = useState('')
  const [price, setPrice] = useState(null)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [postsLoading, setPostsLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=YOUR_API_KEY_HERE`)
      .then(res => res.json())
      .then(data => {
        const stockPrice = data['Global Quote']['05. price']
        setPrice(stockPrice)
        setLoading(false)
      })

    setPostsLoading(true)
    fetch(`https://api.stocktwits.com/api/2/streams/symbol/${symbol}.json`)
      .then(res => res.json())
      .then(data => {
        setPosts(data.messages.slice(0, 5))
        setPostsLoading(false)
      })
  }, [symbol])

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      setSymbol(inputValue.toUpperCase())
      setInputValue('')
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📈 Stock Pulse</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter stock symbol..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          style={{ padding: '8px', fontSize: '16px', marginRight: '8px' }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
        >
          Search
        </button>
      </div>

      <p>Symbol: {symbol}</p>
      {loading ? (
        <p>Loading price...</p>
      ) : (
        <p>Live Price: ${parseFloat(price).toFixed(2)}</p>
      )}

      <hr />

      <h2>💬 Latest StockTwits Posts</h2>
      {postsLoading ? (
        <p>Loading posts...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {posts.map(post => (
            <li key={post.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '10px'
            }}>
              <strong>@{post.user.username}</strong>
              <p style={{ margin: '6px 0' }}>{post.body}</p>
              <small style={{ color: 'gray' }}>{new Date(post.created_at).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App*/










/*import { useState, useEffect } from 'react'

function App() {
  const [symbol, setSymbol] = useState('AAPL')
  const [inputValue, setInputValue] = useState('')
  const [price, setPrice] = useState(null)
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [newsLoading, setNewsLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=05RK7DTQHMB3TH7T`)
      .then(res => res.json())
      .then(data => {
        const quote = data['Global Quote']
        if (quote && quote['05. price']){
        setPrice(quote['05.price'])
      } else {
        setPrice('Rate limit reached. Try again tomorrow.')
      }
        setLoading(false)
      })
      .catch(() => {
        setPrice('Failed to load price.')
        setLoading(false)
      })

    setNewsLoading(true)
    const today = new Date()
    const lastWeek = new Date(today)
    lastWeek.setDate(lastWeek.getDate() - 7)
    const toDate = today.toISOString().split('T')[0]
    const fromDate = lastWeek.toISOString().split('T')[0]

    fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=d8ft219r01qp8bvdpdtgd8ft219r01qp8bvdpdu0`)
      .then(res => res.json())
      .then(data => {
        setNews(data.slice(0, 5))
        setNewsLoading(false)
      })
  }, [symbol])

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      setSymbol(inputValue.toUpperCase())
      setInputValue('')
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📈 Stock Pulse</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter stock symbol..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          style={{ padding: '8px', fontSize: '16px', marginRight: '8px' }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
        >
          Search
        </button>
      </div>

      <p>Symbol: {symbol}</p>
      {loading ? (
        <p>Loading price...</p>
      ) : (
        <p>Live Price: {isNaN(parseFloat(price)) ? price : `$${parseFloat(price).toFixed(2)}`}</p>
      )}

      <hr />

      <h2>📰 Latest News</h2>
      {newsLoading ? (
        <p>Loading news...</p>
      ) : news.length === 0 ? (
        <p>No news found for {symbol}</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {news.map(article => (
            <li key={article.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '10px'
            }}>
              <strong>{article.headline}</strong>
              <p style={{ margin: '6px 0', color: '#555' }}>{article.summary}</p>
              <small style={{ color: 'gray' }}>
                {new Date(article.datetime * 1000).toLocaleString()} — {article.source}
              </small>
              <br />
              <a href={article.url} target="_blank" rel="noreferrer">Read more</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App*/











/*import { useState, useEffect } from 'react'

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

  if (bullishScore > bearishScore) return { label: '🟢 Bullish', color: 'green' }
  if (bearishScore > bullishScore) return { label: '🔴 Bearish', color: 'red' }
  return { label: '🟡 Neutral', color: 'goldenrod' }
}

function App() {
  const [symbol, setSymbol] = useState('AAPL')
  const [inputValue, setInputValue] = useState('')
  const [price, setPrice] = useState(null)
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [newsLoading, setNewsLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=05RK7DTQHMB3TH7T`)
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

    setNewsLoading(true)
    const today = new Date()
    const lastWeek = new Date(today)
    lastWeek.setDate(lastWeek.getDate() - 7)
    const toDate = today.toISOString().split('T')[0]
    const fromDate = lastWeek.toISOString().split('T')[0]

    fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=d8ft219r01qp8bvdpdtgd8ft219r01qp8bvdpdu0`)
      .then(res => res.json())
      .then(data => {
        setNews(data.slice(0, 5))
        setNewsLoading(false)
      })
  }, [symbol])

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      setSymbol(inputValue.toUpperCase())
      setInputValue('')
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '800px' }}>
      <h1>📈 Stock Pulse</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter stock symbol..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          style={{ padding: '8px', fontSize: '16px', marginRight: '8px' }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
        >
          Search
        </button>
      </div>

      <p>Symbol: <strong>{symbol}</strong></p>
      {loading ? (
        <p>Loading price...</p>
      ) : (
        <p>Live Price: <strong>{isNaN(parseFloat(price)) ? price : `$${parseFloat(price).toFixed(2)}`}</strong></p>
      )}

      <hr />

      <h2>📰 Latest News & Sentiment</h2>
      {newsLoading ? (
        <p>Loading news...</p>
      ) : news.length === 0 ? (
        <p>No news found for {symbol}</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {news.map(article => {
            const sentiment = getSentiment(article.headline)
            return (
              <li key={article.id} style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '10px'
              }}>
                <strong>{article.headline}</strong>
                <p style={{ margin: '6px 0', color: '#555' }}>{article.summary}</p>
                <p style={{ 
                  color: sentiment.color, 
                  fontWeight: 'bold',
                  margin: '4px 0'
                }}>
                  {sentiment.label}
                </p>
                <small style={{ color: 'gray' }}>
                  {new Date(article.datetime * 1000).toLocaleString()} — {article.source}
                </small>
                <br />
                <a href={article.url} target="_blank" rel="noreferrer">Read more</a>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default App */











/*import { useState, useEffect } from 'react'
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

  if (bullishScore > bearishScore) return { label: '🟢 Bullish', color: 'green' }
  if (bearishScore > bullishScore) return { label: '🔴 Bearish', color: 'red' }
  return { label: '🟡 Neutral', color: 'goldenrod' }
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
    setLoading(true)
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`)
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

    setChartLoading(true)
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=demo`)
      .then(res => res.json())
      .then(data => {
        const timeSeries = data['Time Series (Daily)']
        if (timeSeries) {
          const formatted = Object.entries(timeSeries)
            .slice(0, 30)
            .reverse()
            .map(([date, values]) => ({
              date: date.slice(5),
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

    setNewsLoading(true)
    const today = new Date()
    const lastWeek = new Date(today)
    lastWeek.setDate(lastWeek.getDate() - 7)
    const toDate = today.toISOString().split('T')[0]
    const fromDate = lastWeek.toISOString().split('T')[0]

    fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=d8ft219r01qp8bvdpdtgd8ft219r01qp8bvdpdu0`)
      .then(res => res.json())
      .then(data => {
        setNews(data.slice(0, 5))
        setNewsLoading(false)
      })
  }, [symbol])

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      setSymbol(inputValue.toUpperCase())
      setInputValue('')
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '900px' }}>
      <h1>📈 Stock Pulse</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter stock symbol..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          style={{ padding: '8px', fontSize: '16px', marginRight: '8px' }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
        >
          Search
        </button>
      </div>

      <p>Symbol: <strong>{symbol}</strong></p>
      {loading ? (
        <p>Loading price...</p>
      ) : (
        <p>Live Price: <strong>{isNaN(parseFloat(price)) ? price : `$${parseFloat(price).toFixed(2)}`}</strong></p>
      )}

      <hr />

      <h2>📊 Price History (Last 30 Days)</h2>
      {chartLoading ? (
        <p>Loading chart...</p>
      ) : chartData.length === 0 ? (
        <p>Chart data unavailable. Rate limit may have been reached.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 11 }} interval={4} />
            <YAxis domain={['auto', 'auto']} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}

      <hr />

      <h2>📰 Latest News & Sentiment</h2>
      {newsLoading ? (
        <p>Loading news...</p>
      ) : news.length === 0 ? (
        <p>No news found for {symbol}</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {news.map(article => {
            const sentiment = getSentiment(article.headline)
            return (
              <li key={article.id} style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '10px'
              }}>
                <strong>{article.headline}</strong>
                <p style={{ margin: '6px 0', color: '#555' }}>{article.summary}</p>
                <p style={{
                  color: sentiment.color,
                  fontWeight: 'bold',
                  margin: '4px 0'
                }}>
                  {sentiment.label}
                </p>
                <small style={{ color: 'gray' }}>
                  {new Date(article.datetime * 1000).toLocaleString()} — {article.source}
                </small>
                <br />
                <a href={article.url} target="_blank" rel="noreferrer">Read more</a>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default */









/*import { useState, useEffect } from 'react'
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

  if (bullishScore > bearishScore) return { label: '🟢 Bullish', color: '#22c55e' }
  if (bearishScore > bullishScore) return { label: '🔴 Bearish', color: '#ef4444' }
  return { label: '🟡 Neutral', color: '#eab308' }
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
    setLoading(true)
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=05RK7DTQHMB3TH7T`)
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

    setChartLoading(true)
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=05RK7DTQHMB3TH7T`)
      .then(res => res.json())
      .then(data => {
        const timeSeries = data['Time Series (Daily)']
        if (timeSeries) {
          const formatted = Object.entries(timeSeries)
            .slice(0, 30)
            .reverse()
            .map(([date, values]) => ({
              date: date.slice(5),
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

    setNewsLoading(true)
    const today = new Date()
    const lastWeek = new Date(today)
    lastWeek.setDate(lastWeek.getDate() - 7)
    const toDate = today.toISOString().split('T')[0]
    const fromDate = lastWeek.toISOString().split('T')[0]

    fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=d8ft219r01qp8bvdpdtgd8ft219r01qp8bvdpdu0`)
      .then(res => res.json())
      .then(data => {
        setNews(data.slice(0, 5))
        setNewsLoading(false)
      })
  }, [symbol])

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      setSymbol(inputValue.toUpperCase())
      setInputValue('')
    }
  }

  return (
    <div>
      /* Header */
/*      <div style={{
        background: '#1e293b',
        padding: '20px 40px',
        borderBottom: '1px solid #334155',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <h1 style={{ fontSize: '24px', color: '#38bdf8' }}>📈 Stock Pulse</h1>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="Enter symbol... e.g TSLA"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{
              padding: '10px 14px',
              fontSize: '15px',
              borderRadius: '8px',
              border: '1px solid #475569',
              background: '#0f172a',
              color: '#f1f5f9',
              outline: 'none',
              width: '220px'
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: '10px 20px',
              fontSize: '15px',
              borderRadius: '8px',
              border: 'none',
              background: '#38bdf8',
              color: '#0f172a',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </div>
      </div>

      /* Main Content */
 /*     <div style={{ padding: '30px 40px', maxWidth: '1000px', margin: '0 auto' }}>

        /* Price Card */
/*        <div style={{
          background: '#1e293b',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px',
          border: '1px solid #334155'
        }}>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '6px' }}>SYMBOL</p>
          <h2 style={{ fontSize: '32px', color: '#38bdf8', marginBottom: '8px' }}>{symbol}</h2>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '4px' }}>LIVE PRICE</p>
          {loading ? (
            <p style={{ color: '#f1f5f9' }}>Loading price...</p>
          ) : (
            <h3 style={{ fontSize: '28px', color: '#22c55e' }}>
              {isNaN(parseFloat(price)) ? price : `$${parseFloat(price).toFixed(2)}`}
            </h3>
          )}
        </div>

        /* Chart Card */
/*        <div style={{
          background: '#1e293b',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px',
          border: '1px solid #334155'
        }}>
          <h2 style={{ marginBottom: '20px', color: '#f1f5f9' }}>📊 Price History (Last 30 Days)</h2>
          {chartLoading ? (
            <p style={{ color: '#94a3b8' }}>Loading chart...</p>
          ) : chartData.length === 0 ? (
            <p style={{ color: '#94a3b8' }}>Chart data unavailable. Rate limit may have been reached.</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#94a3b8' }} interval={4} />
                <YAxis domain={['auto', 'auto']} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                <Tooltip
                  contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                  labelStyle={{ color: '#38bdf8' }}
                  itemStyle={{ color: '#22c55e' }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#38bdf8"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        /* News Card */
/*        <div style={{
          background: '#1e293b',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #334155'
        }}>
          <h2 style={{ marginBottom: '20px', color: '#f1f5f9' }}>📰 Latest News & Sentiment</h2>
          {newsLoading ? (
            <p style={{ color: '#94a3b8' }}>Loading news...</p>
          ) : news.length === 0 ? (
            <p style={{ color: '#94a3b8' }}>No news found for {symbol}</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {news.map(article => {
                const sentiment = getSentiment(article.headline)
                return (
                  <li key={article.id} style={{
                    background: '#0f172a',
                    border: '1px solid #334155',
                    borderRadius: '10px',
                    padding: '16px',
                    marginBottom: '12px'
                  }}>
                    <strong style={{ fontSize: '15px', color: '#f1f5f9' }}>{article.headline}</strong>
                    <p style={{ margin: '8px 0', color: '#94a3b8', fontSize: '14px' }}>{article.summary}</p>
                    <p style={{
                      color: sentiment.color,
                      fontWeight: 'bold',
                      margin: '6px 0',
                      fontSize: '14px'
                    }}>
                      {sentiment.label}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                      <small style={{ color: '#475569' }}>
                        {new Date(article.datetime * 1000).toLocaleString()} — {article.source}
                      </small>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#38bdf8', fontSize: '13px' }}
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
    </div>
  )
}

export default App */




/*import { useState, useEffect } from 'react'
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

  if (bullishScore > bearishScore) return { label: '🟢 Bullish', color: '#16a34a' }
  if (bearishScore > bullishScore) return { label: '🔴 Bearish', color: '#dc2626' }
  return { label: '🟡 Neutral', color: '#ca8a04' }
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
    setLoading(true)
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=05RK7DTQHMB3TH7T`)
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

    setChartLoading(true)
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=05RK7DTQHMB3TH7T`)
      .then(res => res.json())
      .then(data => {
        const timeSeries = data['Time Series (Daily)']
        if (timeSeries) {
          const formatted = Object.entries(timeSeries)
            .slice(0, 30)
            .reverse()
            .map(([date, values]) => ({
              date: date.slice(5),
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

    setNewsLoading(true)
    const today = new Date()
    const lastWeek = new Date(today)
    lastWeek.setDate(lastWeek.getDate() - 7)
    const toDate = today.toISOString().split('T')[0]
    const fromDate = lastWeek.toISOString().split('T')[0]

    fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=d8ft219r01qp8bvdpdtgd8ft219r01qp8bvdpdu0`)
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

  return (
    <div>
      /* Header */
/*      <div style={{
        background: '#b45309',
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 12px rgba(180,83,9,0.3)'
      }}>
        <h1 style={{ fontSize: '26px', color: '#fff7ed', letterSpacing: '1px' }}>📈 Stock Pulse</h1>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="Enter symbol... e.g TSLA"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{
              padding: '10px 14px',
              fontSize: '15px',
              borderRadius: '8px',
              border: '1px solid #fed7aa',
              background: '#fff7ed',
              color: '#1a1a1a',
              outline: 'none',
              width: '220px'
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: '10px 20px',
              fontSize: '15px',
              borderRadius: '8px',
              border: 'none',
              background: '#fff7ed',
              color: '#b45309',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Main Content */
/*      <div style={{ padding: '30px 40px', maxWidth: '1000px', margin: '0 auto' }}>

        {/* Price Card */
/*        <div style={{
          background: '#ffffff',
          borderRadius: '14px',
          padding: '24px',
          marginBottom: '24px',
          border: '1px solid #fed7aa',
          boxShadow: '0 4px 16px rgba(180,83,9,0.08)'
        }}>
          <p style={{ color: '#92400e', fontSize: '13px', marginBottom: '4px', fontWeight: 'bold', letterSpacing: '1px' }}>SYMBOL</p>
          <h2 style={{ fontSize: '34px', color: '#b45309', marginBottom: '12px' }}>{symbol}</h2>
          <p style={{ color: '#92400e', fontSize: '13px', marginBottom: '4px', fontWeight: 'bold', letterSpacing: '1px' }}>LIVE PRICE</p>
          {loading ? (
            <p style={{ color: '#a3a3a3' }}>Loading price...</p>
          ) : (
            <h3 style={{ fontSize: '30px', color: '#16a34a' }}>
              {isNaN(parseFloat(price)) ? price : `$${parseFloat(price).toFixed(2)}`}
            </h3>
          )}
        </div>

        {/* Chart Card */
/*        <div style={{
          background: '#ffffff',
          borderRadius: '14px',
          padding: '24px',
          marginBottom: '24px',
          border: '1px solid #fed7aa',
          boxShadow: '0 4px 16px rgba(180,83,9,0.08)'
        }}>
          <h2 style={{ marginBottom: '20px', color: '#92400e' }}>📊 Price History (Last 30 Days)</h2>
          {chartLoading ? (
            <p style={{ color: '#a3a3a3' }}>Loading chart... (may be rate limited)</p>
          ) : chartData.length === 0 ? (
            <p style={{ color: '#a3a3a3' }}>Chart data unavailable. Rate limit reached — try again tomorrow.</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#fed7aa" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#92400e' }} interval={4} />
                <YAxis domain={['auto', 'auto']} tick={{ fontSize: 11, fill: '#92400e' }} />
                <Tooltip
                  contentStyle={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '8px' }}
                  labelStyle={{ color: '#b45309' }}
                  itemStyle={{ color: '#16a34a' }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#b45309"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* News Card */
/*         <div style={{
          background: '#ffffff',
          borderRadius: '14px',
          padding: '24px',
          border: '1px solid #fed7aa',
          boxShadow: '0 4px 16px rgba(180,83,9,0.08)'
        }}>
          <h2 style={{ marginBottom: '20px', color: '#92400e' }}>📰 Latest News & Sentiment</h2>
          {newsLoading ? (
            <p style={{ color: '#a3a3a3' }}>Loading news...</p>
          ) : news.length === 0 ? (
            <p style={{ color: '#a3a3a3' }}>No news found for {symbol}</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {news.map(article => {
                const sentiment = getSentiment(article.headline)
                return (
                  <li key={article.id} style={{
                    background: '#fff7ed',
                    border: '1px solid #fed7aa',
                    borderRadius: '10px',
                    padding: '16px',
                    marginBottom: '12px'
                  }}>
                    <strong style={{ fontSize: '15px', color: '#1a1a1a' }}>{article.headline}</strong>
                    <p style={{ margin: '8px 0', color: '#78716c', fontSize: '14px' }}>{article.summary}</p>
                    <p style={{
                      color: sentiment.color,
                      fontWeight: 'bold',
                      margin: '6px 0',
                      fontSize: '14px'
                    }}>
                      {sentiment.label}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                      <small style={{ color: '#a8a29e' }}>
                        {new Date(article.datetime * 1000).toLocaleString()} — {article.source}
                      </small>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#b45309', fontSize: '13px', fontWeight: 'bold' }}
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
    </div>
  )
}

export default App */




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
    setLoading(true)
//    console.log(import.meta.env.VITE_ALPHA_VANTAGE_KEY)
    const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;
    fetch(`https://www.alphavantage.co/query?
      function=GLOBAL_QUOTE&symbol=${symbol}&apikey=05RK7DTQHMB3TH7T`)
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

    setChartLoading(true)
//    const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;
    fetch(`https://www.alphavantage.co/query?
      function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=05RK7DTQHMB3TH7T`)
      .then(res => res.json())
      .then(data => {
        const timeSeries = data['Time Series (Daily)']
        if (timeSeries) {
          const formatted = Object.entries(timeSeries)
            .slice(0, 30)
            .reverse()
            .map(([date, values]) => ({
              date: date.slice(5),
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

    setNewsLoading(true)
    const today = new Date()
    const lastWeek = new Date(today)
    lastWeek.setDate(lastWeek.getDate() - 7)
    const toDate = today.toISOString().split('T')[0]
    const fromDate = lastWeek.toISOString().split('T')[0]

    fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=d8ft219r01qp8bvdpdtgd8ft219r01qp8bvdpdu0`)
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





