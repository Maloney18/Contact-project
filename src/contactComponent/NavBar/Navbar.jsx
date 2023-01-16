import { NavLink, Outlet } from "react-router-dom"
import { FaHistory, FaUser } from "react-icons/fa"
import { BsHeartFill } from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {

    const activeStyle = ({ isActive }) => (
        isActive ?
        {
            borderBottom: '2px solid orangered'
        } :
        {borderBottom: 'none'}
    )

    return (
        <>
            <nav>
                <div className="nav-ele">

                    <NavLink 
                        className='nav-links'
                    >
                        <FaHistory/>History
                    </NavLink>

                    <NavLink 
                        className='nav-links'
                        style={activeStyle} 
                        to='/favorites'
                    >
                        <BsHeartFill />Favorites
                    </NavLink>

                    <NavLink 
                        className='nav-links'
                        style={activeStyle}
                        to='/'
                    >
                        <FaUser />Contacts
                    </NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;