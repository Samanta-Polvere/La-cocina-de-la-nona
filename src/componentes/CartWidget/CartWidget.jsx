
import './CartWidget.css'



const CartWidget = () => {

   const imgCarrito = "./src/img/img-carrito.png"
  return (
    <>
        <div className='contenedorCarrito'>
        <img className='imgCarrito' src={imgCarrito} alt="Imagen del Carrito de compras" />
        <strong>3</strong>
        </div>
    </>
  )
}

export default CartWidget