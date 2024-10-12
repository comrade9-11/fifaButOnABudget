import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './notFound/notFound.jsx'
import StartScreen from './startScreen/startScreen.jsx'
import './index.css'
import Menu from './menu/menu.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartScreen />
  },
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/menu',
    element: <Menu />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
