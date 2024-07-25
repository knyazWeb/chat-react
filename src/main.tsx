import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="top-right" toastOptions={{
          style: {
            fontSize: "14px",
            padding: "10px",
          }
        }} />
    
    </Provider>
  </React.StrictMode>
);
