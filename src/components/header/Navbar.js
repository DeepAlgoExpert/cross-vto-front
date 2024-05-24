import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from "./Logo";
import './navBar.css';

/**
 * nav bar component
 * @param options
 * @returns {*}
 * @constructor
 */
function Navbar({options}) {

    return (
        <Fragment>
            <div id="navbar" className={"navbar-collapse collapse navigation-holder " + (options.mobileNav ? 'slideInn' : '')}>
                <button onClick={options.onMobileNavClick} className="close-navbar"><i className="ti-close"/></button>
                <ul className="nav navbar-nav">
                    <li className="current-menu-item">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/body-measurement" activeClassName="current-menu-item">Mobile Tailer</NavLink>
                    </li>
                    <li>
                        <NavLink to="/virtualfitting-new" activeClassName="current-menu-item">Eugenie</NavLink>
                    </li>
                </ul>
            </div>
            {/* end of nav-collapse */}
        </Fragment>
    );
}

export default Navbar;