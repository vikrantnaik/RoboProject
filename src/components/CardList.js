import React from 'react'
import Card from './Card'



function CardList({robots}) {
    const CardComponents = robots.map ((robot) => {
        return<Card id={robot.id} name ={robot.name} email ={robot.email}/>
       
    } )
  return (
    <div>
    {CardComponents}
    </div>
  )
}

export default CardList