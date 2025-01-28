
import './app.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Footer from './componentes/Footer/Footer'


const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer saludo="Bienvenidos a la cocina de la Abuela. Aquí podras comprar diferentes recetas de muchos paises para que tus comidas salgan deliciosas y puedas sorprender a tus invitados!!!"/>
          

      <Footer></Footer>
    </>
  )
}

export default App
