import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Ceo from './sections/Ceo.jsx'
import Contact from './sections/Contact.jsx'


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {path: "/ceo", element: <Ceo />},
  {path: "/contact", element: <Contact />}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
