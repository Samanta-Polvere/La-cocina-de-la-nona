import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'


const ItemList = ({categorias}) => {
  return (
    <div>
       {categorias.map( item => <Item key={item.idCategory} {...item} />)}
    </div>
  )
}

export default ItemList