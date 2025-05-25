import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/flowbite.css'
import './index.css'
import ReactRoute from './ReactRoutes.jsx'
import { AuthProvider } from './context/authContext.jsx'
import { LoadingProvider } from './context/loadingContext.jsx'
import { ToastProvider } from './context/toastContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <LoadingProvider>
      <ToastProvider>
        <ReactRoute />
      </ToastProvider>
    </LoadingProvider>
  </AuthProvider>,
)
