// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function GetCurrentDateTime(){
  return (new Date()).toLocaleString();
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <GetCurrentDateTime />
  </>,
)

export default GetCurrentDateTime