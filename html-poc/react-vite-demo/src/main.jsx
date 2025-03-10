// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CurrentDateTime from './CurrentDateTime.jsx';
import FruitProducts from './FruitProducts.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <CurrentDateTime />
    <FruitProducts />
  </>
)
