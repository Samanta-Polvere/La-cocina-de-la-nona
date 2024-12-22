
import './Footer.css'

const Footer = () => {
    const imgLogo = "./src/img/logo.png"
    const imgMail = "./src/img/mail.gif"
    const imgIg = "./src/img/instagram.gif"
    const imgFace = "./src/img/facebook.gif"

    return (

        <footer className='footer'>

            <div className='logoContenedor'>
                <img className='logo' src={imgLogo} alt="Logo de La cocina de la Nona" />

                <h2 className='nombreProyecto'>La cocina de la nona</h2>
            </div>
            
            <spam className='copyright'>©2024 La cocina de la Nona</spam>

            <div className='redes'>
                <img className='mail' src={imgMail} alt="Mail La cocina de la Nona" />
                <img className='ig' src={imgIg} alt="Ig La cocina de la Nona" />
                <img className='face' src={imgFace} alt="Facebook La cocina de la Nona" />
            </div>

        </footer>


    )
}

export default Footer