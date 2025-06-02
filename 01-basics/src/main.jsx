import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  //uygulamayı 2 kez cılıştırır ilkinde değil ikincisinde sonuc gelir stricmode sayesinde
  <StrictMode>
    <App />
  </StrictMode>
);
