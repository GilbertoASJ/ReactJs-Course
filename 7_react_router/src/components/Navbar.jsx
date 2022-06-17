import './Navbar.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {

	return (
		<>
			<nav>
				{/*
					<Link to="/">Home</Link>
					<Link to="/about">Sobre</Link>
				*/}

				<NavLink 
					to="/" 
					// className={({isActive}) => (isActive ? 'active' : 'not-active')}
				>
					Home
				</NavLink>

				<NavLink 
					to="/about" 
					// className={({isActive}) => (isActive ? 'active' : 'not-active')}
				>
					Sobre
				</NavLink>
			</nav>	
		</>
	)
}

export default Navbar;