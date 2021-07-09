import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-light">
            <div className="container-fluid">
                <a className="navbar-brand"
                   href="#">Todo App</a>
                <div className="collapse navbar-collapse"
                     id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active"
                               aria-current="page"
                               href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;