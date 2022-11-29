import React, { useState, useEffect } from 'react'
import Tours from './Tours'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((t) => t.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://course-api.com/react-tours-project')
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return <main>Loading...</main>
  }
  if (tours.length === 0) {
    return (
      <>
        <h3>No tours left</h3>
        <button onClick={() => fetchTours()}>Refresh to get all tours</button>
      </>
    )
  }
  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  )
}

export default App
