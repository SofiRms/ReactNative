
import {useState} from 'react'


const Cards = (props) => {
    const [boton, setBoton]= useState({})

    return (
      
        <div className="card col-3" style={boton} >
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.author}</p>
          <button className="" onClick={()=>setBoton({display:"none"})}>Eliminar</button>
        </div>
      </div>
       
    )
}

export default Cards;