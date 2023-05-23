import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import LogoInsta from '../../assets/logoinsta.jpg';
import LogoTwitter from '../../assets/twitter.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container principal d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center mb-2 h4">Nicolás Toranzo - 2023</div>
        <ul className="nav col-12 col-md-4 d-flex justify-content-center
        justify-content-md-end list-unstyled d-flex">
        <li className="ms-3">            
            <NavLink to={"https://www.instagram.com/edicioneselpanda/"}>
                <img className="footer-logo me-2" src={LogoInsta} alt="logo instagram"/>
            </NavLink>        
        </li>
        <li className="ms-3">
            <NavLink to={"https://twitter.com/edicionespanda"}>
                <img src={LogoTwitter} className="footer-logo me-2" alt="logo twitter"/>
            </NavLink>   
        </li>
        </ul>
    </div>
  )
}

export default Footer