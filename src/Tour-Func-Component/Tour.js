import React, { useState } from 'react'

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [read, setRead] = useState(false)
  return (
    <>
      <button onClick={() => removeTour(id)}>Remove this tour</button>
      &nbsp;&nbsp;
      <button onClick={() => setRead(!read)}>
        {read ? 'show less' : '  read more'}
      </button>
      <br />
      <br />
      <img src={image} alt={name} width={100} height={100} />
      <div>
        <h4>{name}</h4>
        <h4>${price}</h4>
      </div>
      <p>{read ? info : `${info.substring(0, 200)}...`}</p>
      <hr />
    </>
  )
}

export default Tour
