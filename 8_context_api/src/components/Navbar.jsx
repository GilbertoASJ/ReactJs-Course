import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {

	return (
		<>
			<nav>
				<NavLink to="/" >Home</NavLink>
				<NavLink to="/about" >Sobre nós</NavLink>
				<NavLink to="/contact" >Contato</NavLink>
			</nav>
		</>
	)
}

export default Navbar;