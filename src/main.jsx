import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CountriesApp } from './CountriesApp.jsx'
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store={store}>
    <CountriesApp />
    </Provider>
  </React.StrictMode>

)
