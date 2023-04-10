import React, { useEffect } from 'react'
import { useState } from 'react'
const Api = () => {
  
    const [libros, setLibros]=useState([])

    
   const api= 'https://www.etnassoft.com/api/v1/get/?any_tags=[html,css,javascript]'
   
   useEffect(() => {
    fetch(api)
   .then((res)=>res.json())
   .then((res)=>{setLibros(res)})
    .catch((e)=>console.log(e))
   }, [])

  return (
    <div> {libros.map((libro, i)=>(
        <p key={i}>{ libro.title }</p>
    ))}</div>
  )
}

export default Api