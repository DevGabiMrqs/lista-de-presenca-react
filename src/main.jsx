import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '../src/pages/Home'
import './index.css'
import './styles/global.css'
import Card from './components/card'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
