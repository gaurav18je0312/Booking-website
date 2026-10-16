import PassengerForm from '../components/PassengerForm.jsx'
import './PassengerPage.css'

export default function PassengerPage() {

  return (
    <main className="passenger">
      <section className="card">
        <h1>Screen 1</h1>
        <h2>✈ Passenger Info</h2>
        <hr/>
        <PassengerForm />
      </section>
    </main>
  )
}
