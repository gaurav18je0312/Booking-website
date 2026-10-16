import JourneyForm from "../components/JourneyForm"
import "./JourneyPage.css"

export default function JourneyPage() {

  return (
    <main className="passenger">
      <section className="card">
        <h1>Screen 2</h1>
        <h2>📅 Journey Details</h2>
        <hr/>
        <JourneyForm />
      </section>
    </main>
  )
}
