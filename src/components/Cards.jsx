
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Cards = (props) => {
    const [boton, setBoton]= useState({})

    return (
      
        <div className="card col-3 mx-auto  my-3" style={{color:'#FFFFFF',background:'#ff8888'}} >
        <div className="card-body " >
          <img src={props.imagen}/>
          <h5 className="card-title">Libro: {props.title}</h5>
          <p className="card-text">Autor: {props.author}</p>
          <button className="" onClick={()=>setBoton({display:"none"})}>Eliminar</button>
        </div>
      </div>
       
    )
}

export default Cards;