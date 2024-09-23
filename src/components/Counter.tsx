import { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <span className="text-yellow-300 text-xl mr-4">Counter: {counter}</span>
      <button
        className=" border px-4 py-2 text-xl"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <button
        className="border px-4 py-2 text-xl"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </>
  )
}
