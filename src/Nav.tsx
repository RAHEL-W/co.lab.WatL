import React from 'react'

const Nav = () => {
    const name= 'lets remenber react'
  return (
    <>
     
     <h1>{name && ''}</h1>
     <h1>{name ? name : 'hello rahel'}</h1>
    </>
   
  )
}

export default Nav