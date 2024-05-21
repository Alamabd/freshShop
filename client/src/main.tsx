import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Product from './pages/Product.tsx'
import Cart from './pages/Cart.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Product />
  },
  {
    path: '/cart',
    element: <Cart />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
