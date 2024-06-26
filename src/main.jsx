import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './store/reduxstore.js'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer : {
    chat : chatReducer
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
)
