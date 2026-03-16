import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Destinations from './components/Destinations.jsx'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([ 
  {path:'/',element: <App/>,children: [{path: '/Home',element: <App/>},
{path: '/Destinations',element: <Destinations/>}] }
 ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router} />
  </StrictMode>,
)
