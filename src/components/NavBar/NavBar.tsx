// src/components/NavBar/NavBar.tsx

import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <NavLink to="/" className="nav-logo">
                Ariana Porroche
            </NavLink>
            <ul className="nav-links">
                <li>
                    <NavLink
                        to="/proyectos"
                        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
                    >
                        Proyectos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sobre-mi"
                        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
                    >
                        Sobre mí
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contacto"
                        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
                    >
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
