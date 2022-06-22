import { NavLink } from 'react-router-dom'

const Navbar = () => {

	return (
		<>
			<nav>
				<NavLink to="/" >Home</NavLink>
				<NavLink to="/about" >About</NavLink>
				<NavLink to="/contact" >Fale conosco</NavLink>
			</nav>
		</>
	)
}

export default Navbar;