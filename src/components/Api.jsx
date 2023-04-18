import React, { useEffect ,useState} from 'react'
import Cards from './Cards'


const Api = () => {
//estado de variable Libros inicializado como un array vacío
    const [libros, setLibros] = useState([])
    const api = 'https://www.etnassoft.com/api/v1/get/?any_tags=[html,css,javascript]'

    //uso de hook para que ejecuta la función cuando un estado cambie
    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((res) => { setLibros(res) })//en setLibros se guarda res
            .catch((e) => console.log(e))
    }, [])


    return (
    //map recorre el array Libros, i es un contador usado en Key para generar identificadores, libro.title accede a la clave titulo  
        <div className='row'> {libros.map((libro, i) => (
            <Cards key={i} title={libro.title} author={libro.author} imagen={libro.thumbnail}/>
        ))}</div>
        
    )
}

export default Api