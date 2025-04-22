import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/flowbite.css'
import './index.css'
import ReactRoute from './ReactRoutes.jsx'
import { AuthProvider } from './context/authContext.jsx'
import { LoadingProvider } from './context/loadingContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <LoadingProvider>
      <ReactRoute />
    </LoadingProvider>
  </AuthProvider>,
)
