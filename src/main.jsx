import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import Cars from './pages/Cars.jsx'
import CardDetails from './components/CardDetails.jsx'
import WishList from './pages/WishList.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx';
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <WishlistProvider>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CardDetails />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </WishlistProvider>
)
