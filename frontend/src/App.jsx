import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { BookingProvider } from './context/BookingContext.jsx'
import PassengerPage from './pages/PassengerPage.jsx'
import JourneyPage from './pages/JourneyPage.jsx'
import BookingPage from './pages/BookingPage.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PassengerPage />} />
      <Route path="/journey" element={<JourneyPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <AppRoutes />
      </BookingProvider>
    </BrowserRouter>
  )
}
