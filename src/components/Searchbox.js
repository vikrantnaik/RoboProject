import React from 'react'

function Searchbox({onChangeInput}) {
   
  return (
    <div>
        <input type="text" 
        placeholder='Search your robot Here'
        className='pa3 ba b--green bg-lightest-pink'
        onChange = {(event) => onChangeInput(event.target.value)}/>
    </div>
  )
}

export default Searchbox