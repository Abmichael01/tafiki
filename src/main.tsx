// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@/assets/fonts/fonts.css'
import App from './App.tsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from "@/components/ui/sonner"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 1,
    },
    mutations: {
      retry: 1,
    },
  },
})

createRoot(document.getElementById('root')!).render(

    <QueryClientProvider client={queryClient}
    >
      <App />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
)
