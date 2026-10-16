import { createContext, useContext, useState } from 'react'

const BookingContext = createContext(null)

export function BookingProvider({ children }) {
  const [passenger, setPassenger] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  })
  const [journey, setJourney] = useState({
    travel_date: '',
    source: '',
    destination: '',
  })
  const [flights, setFlights] = useState([])

  return (
    <BookingContext.Provider
      value={{ passenger, setPassenger, journey, setJourney, flights, setFlights }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return context
}
