import { useState } from 'react'
import { useBooking } from '../context/BookingContext.jsx'
import './BookingPage.css'

function formatTime(value) {
  return new Date(value).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }).toLowerCase()
}

function endTime(startTime, durationMinutes) {
  const date = new Date(startTime)
  date.setMinutes(date.getMinutes() + durationMinutes)
  return formatTime(date)
}

export default function BookingPage() {
  const { flights } = useBooking()
  const [sort, setSort] = useState('asc')
  const [rating, setRating] = useState('all')

  const shown = flights
    .filter((flight) => rating === 'all' || flight.rating === Number(rating))
    .slice()
    .sort((a, b) => (sort === 'asc' ? a.price - b.price : b.price - a.price))

  return (
    <main className="booking">
      <section className="card">
        <h1>SCREEN 3 (RESULTS VIEW)</h1>
        <hr />
        <div className="booking-controls">
          <button type="button" onClick={() => setSort('asc')}>
            Price Low to High
          </button>
          <button type="button" onClick={() => setSort('desc')}>
            Price High to Low
          </button>
          <button type="button" onClick={() => setRating(rating === '5' ? 'all' : '5')}>
            5-Star Only
          </button>
          <button type="button" onClick={() => setRating(rating === '4' ? 'all' : '4')}>
            4-Star Only
          </button>
        </div>
        {shown.length === 0 ? <p>No flights found</p> : null}
        {shown.map((flight) => (
          <article key={flight.id} className="flight">
            <p>
              {formatTime(flight.start_time)} — {endTime(flight.start_time, flight.duration_minutes)}
            </p>
            <p>
              {flight.source} → {flight.destination} • {flight.duration_minutes}m
            </p>
            <p>
              {'★'.repeat(flight.rating)}
              {'☆'.repeat(5 - flight.rating)} {flight.rating}-Star
            </p>
            <p>₹{flight.price.toLocaleString('en-IN')}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
