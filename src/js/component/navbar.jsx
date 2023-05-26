import React from "react";


// funcional componnent
const NAvbar = ({navItems, navLogo}) => {

    const renderNavItems = () => {

        return navItems.map((item) => {
            return (
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{item.label}</a>
                </li>
            )
        })
    }

    return (
        <nav className="bg-light navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={navLogo} width="30" height="24"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {renderNavItems()}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NAvbar;