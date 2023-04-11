import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './navbar.css';
import {CartWidget} from '../cartwidget/cartwidget';

export const NavBar = () => {
	return(
		<nav>
			<h3>Ediciones El Panda</h3>
			<div>
				<Button variant="primary">El Coloso Justicialista</Button>
				<Button variant="primary">Nuevo Libro</Button>
			</div>
			<CartWidget />
		</nav>	

	)
}

