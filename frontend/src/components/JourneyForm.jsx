import { useNavigate } from 'react-router-dom'
import { useBooking } from '../context/BookingContext.jsx'

export default function JourneyForm() {
  const navigate = useNavigate()
  const { passenger, journey, setJourney, setFlights } = useBooking()
  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:8000/flight-listing', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...passenger, ...journey }),
    })
    setFlights(await response.json())
    navigate('/booking')
  }

  const handleBack = () => {
    navigate('/')
  }

  const handleSource = (event) => {
    const source = event.target.value
    setJourney({
      ...journey,
      source,
      destination: journey.destination === source ? '' : journey.destination,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Travel Date
        <input
          type="date"
          name="travel date"
          value={journey.travel_date}
          min={today}
          onChange={(event) => setJourney({ ...journey, travel_date: event.target.value })}
          required
        />
      </label>
      <label>
        Travel From
        <select value={journey.source} onChange={handleSource} required>
          <option value="">Select City...</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Chennai">Chennai</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </label>
      <label>
        Destination
        <select
          value={journey.destination}
          onChange={(event) => setJourney({ ...journey, destination: event.target.value })}
          required
        >
          <option value="">Select City...</option>
          {journey.source !== 'Bengaluru' && <option value="Bengaluru">Bengaluru</option>}
          {journey.source !== 'Chennai' && <option value="Chennai">Chennai</option>}
          {journey.source !== 'Hyderabad' && <option value="Hyderabad">Hyderabad</option>}
        </select>
      </label>
      <span className="journey-button">
        <button type="button" onClick={handleBack}>
        Back
        </button>
        <button type="submit">
        Search Flights
        </button>
      </span>
    </form>
  )
}
