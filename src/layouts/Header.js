import React from 'react';

const Header = () => {
    return (
        <div className="navbar has-background-info-dark has-text-primary-light">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo"/>
                </a>
            </div>
            <div className="header-end mr-3">
                <div className="navbar-item">
                    <div className="content is-medium has-text-primary-light">
                        <p> 8(123)-321-32-32</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;