import React from 'react'

function Card({id,name,email}) {
  return (
    <div className='bg-light-blue dib br3 pa3 ma2 grow bw3 shadow5'>
        <img src={`https://robohash.org/45${id}`} alt="Robo_img"  />
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default Card