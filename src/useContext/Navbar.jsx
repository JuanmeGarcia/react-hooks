import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Navbar
				</Link>
				<div>
					<ul className="navbar-nav">
                        <NavLink 
                            to='/'
                            className={(args)=> (
                                `nav-link 
                                ${args.isActive 
                                    ? 'active' 
                                    : ''}`
                                )
                            } 
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to='/about'
                            className={(args)=> (
                                `nav-link 
                                ${args.isActive 
                                    ? 'active' 
                                    : ''}`
                                )
                            } 
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to='/login'
                            className={(args)=> (
                                `nav-link 
                                ${args.isActive 
                                    ? 'active' 
                                    : ''}`
                                )
                            } 
                        >
                            Login
                        </NavLink>
					</ul>
				</div>
			</div>
		</nav>
	)
}
