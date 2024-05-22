import React from 'react'

function City() {
  const cities = ['sf', 'san jose', 'dc']
  return (
    <>

      <ul className="list-group">
        {cities.map((city, idx) => (
          <li className="list-group-item" key={idx} onClick={ ()=>{
            console.log(city) 
          }}>
            {city}
            
            </li>
        ))}

      </ul>


    </>
  )
}

export default City