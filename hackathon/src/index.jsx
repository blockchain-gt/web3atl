import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './pages/Home'
import { Sprint } from './pages/Sprint'
import { NoMatch } from './pages/NoMatch'
import './styles.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sprint" element={<Sprint />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
