import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from "./App.css"
import Root from './Root'

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
registerServiceWorker()
