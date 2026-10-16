import { useNavigate } from 'react-router-dom'
import { useBooking } from '../context/BookingContext.jsx'

export default function PassengerForm() {
  const navigate = useNavigate()
  const { passenger, setPassenger } = useBooking()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/journey')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name
        <input
          type="name"
          name="first name"
          value={passenger.first_name}
          maxLength={100}
          onChange={(event) => setPassenger({ ...passenger, first_name: event.target.value })}
          required
        />
      </label>
      <label>
        Last Name
        <input
          type="name"
          name="last name"
          value={passenger.last_name}
          maxLength={100}
          onChange={(event) => setPassenger({ ...passenger, last_name: event.target.value })}
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={passenger.email}
          onChange={(event) => setPassenger({ ...passenger, email: event.target.value })}
          required
        />
      </label>
      <label>
        Phone Number
        <input
          type="number"
          name="Phone Number"
          value={passenger.phone}
          onChange={(event) => setPassenger({ ...passenger, phone: event.target.value })}
          required
        />
      </label>
      <button type="submit">
      Next: Journey Details →
      </button>
    </form>
  )
}
