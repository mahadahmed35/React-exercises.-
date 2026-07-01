import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
import Counter from './Counter.jsx'
import Input from './Input.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Input />
    < Counter />
    {/* <App /> */}
  </StrictMode>,
)
