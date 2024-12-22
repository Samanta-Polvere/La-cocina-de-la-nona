
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {

  const imgLogo = "./src/img/logo.png"
  return (
    <header>
      <div className='logoContenedor'>
        <img className='logo' src={imgLogo} alt="Logo de La cocina de la Nona" />
        <h1 className='nombreProyecto'>La cocina de la nona</h1>
      </div>
      
      <nav>
        <ul>
          <a href='#'><li>Recetas</li></a>
          <a href='#'><li>Sobre Nosotros</li></a>
          <a href='#'><li>Contacto</li></a>

        </ul>
      </nav>

      <CartWidget></CartWidget>
    </header>
  )
}

export default NavBar