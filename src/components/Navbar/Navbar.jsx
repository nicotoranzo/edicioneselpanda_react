import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import {CartWidget} from '../cartwidget/Cartwidget';
import Avatar from '../../assets/avatar.png'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
	return(
		<nav className='container principal sticky-top mb-2'>
			<div className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<NavLink to="/" className='navbar-brand'><img src={Avatar} alt="logo" className='header__logo' /></NavLink>
					<div className="navbar principal header">
						<ul className="navbar-nav p-1 me-auto mb-1 mb-lg-0 ">
							<li className="nav-item">	
								<NavLink to={"/category/Novelas"} className="nav-link">Novelas</NavLink>
							</li>	
							<li className="nav-item">	
								<NavLink to={"/category/Cuentos"} className="nav-link">Cuentos</NavLink>
							</li>
						</ul>
					</div>		
					<CartWidget className="principal header" />									
				</div>	
			</div>
		</nav>	

	)
}

export default NavBar