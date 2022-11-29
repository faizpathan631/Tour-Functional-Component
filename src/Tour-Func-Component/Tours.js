import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <h2>our tours</h2>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />
      })}
    </>
  )
}

export default Tours
