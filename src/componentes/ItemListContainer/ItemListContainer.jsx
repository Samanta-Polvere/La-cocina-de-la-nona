
import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'




const ItemListContainer = ({ saludo }) => {

  const [categorias, setCategorias] = useState([])

  useEffect(() => {

    setTimeout(() => {

      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(respuesta => respuesta.json())
      .then(data => setCategorias(data.categories))
      .catch(error => console.log(error))
    }, 1000);
 
  }, [])

  return (
    <div className='itemListContainer'>
      <h2>{saludo}</h2>
      <h1>Listado por categoria</h1>
      <ItemList categorias={categorias} />
    </div>
  )
}

export default ItemListContainer