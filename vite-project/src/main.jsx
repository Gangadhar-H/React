import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const user = 'Chai'

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit google',
  user // Injecting variables
)

createRoot(document.getElementById('root')).render(
  reactElement
)
