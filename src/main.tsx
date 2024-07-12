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
      <section className="flex w-screen h-screen justify-center items-center px-3">
        <RouterProvider router={router} />
        <Toaster position="bottom-right" />
      </section>
    </Provider>
  </React.StrictMode>
);
