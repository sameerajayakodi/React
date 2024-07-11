import React from 'react'


const Unit = ({image,name,city,position}) => {
  return (
    <div className='unit_container'>
      <img src={image} alt={name} /><br />
      <h3>{name}</h3>
      <h4>{city}</h4>
      <p>{position}</p>
    </div>
  )
}

export default Unit
