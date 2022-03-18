import React from "react";
import { AreaHeader } from './styled';
import { Link } from 'react-router-dom';

function Header() {
    return (
        < AreaHeader >
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        firebase-auth
                    </Link>
                </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/config">
                            Configurações
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            Sair
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        </ AreaHeader >
    )
}

export default Header;
