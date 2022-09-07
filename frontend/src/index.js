import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/scss/main.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { StoreProvider } from './Store'

// add code below to work in docker:
// fetch('http://127.0.0.1:5000/api/')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <PayPalScriptProvider deferLoading={true}>
          <App />
        </PayPalScriptProvider>{' '}
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
