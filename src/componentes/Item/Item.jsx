import React from 'react'
import './Item.css'

const Item = ({ strCategory, strCategoryThumb }) => {


  return (
    <div className="categoria">

      <h3 className="tituloCategoria">{strCategory}</h3>
      <a href="#" >
        <img src={strCategoryThumb} alt={strCategory} />
      </a>



    </div>
  )
}

export default Item