import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import "./App.css"
import Root from './Root'

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
registerServiceWorker()
