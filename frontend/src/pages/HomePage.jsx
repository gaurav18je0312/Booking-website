import { useState } from "react";


export default function HomePage() {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount((prev) => prev+1 )
    }

    return (
        <>
        <div className="count-heading">
            count - {count}
        </div>
        <div className="count-button">
            <button onClick={handleCount}>
                Increment
            </button>
        </div>
        </>
    )
}