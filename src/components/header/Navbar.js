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
                        <NavLink to="/virtualfitting" activeClassName="current-menu-item">VirtualFittingRoom</NavLink>
                    </li>
                    <li><NavLink to="/about" activeClassName="current-menu-item">About</NavLink></li>
                    <li className="menu-item-has-children has-mega-menu">
                        <a href="#">Shop</a>
                        <ul className="mega-menu">
                            <li>
                                <div className="mega-menu-content">
                                    <div className="col col-5">
                                        <span className="mega-menu-box-title">Shop style</span>
                                        <ul className="mega-menu-list-holder">
                                            <li><NavLink to="/shop-right-sidebar" activeClassName="current-menu-item">Shop
                                                right sidebar</NavLink></li>
                                            <li><NavLink to="/shop-left-sidebar" activeClassName="current-menu-item">Shop
                                                left sidebar</NavLink></li>
                                            <li><NavLink to="/shop-full-width" activeClassName="current-menu-item">Shop
                                                full width</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="col col-5">
                                        <span className="mega-menu-box-title">Shop single</span>
                                        <ul className="mega-menu-list-holder">
                                            <li><NavLink to="/single-slider-images" activeClassName="current-menu-item">Slider
                                                images</NavLink></li>
                                            <li><NavLink to="/single-vertical-thumbnail"
                                                         activeClassName="current-menu-item">Vertical
                                                thumbnail</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="col col-5">
                                        <span className="mega-menu-box-title">Product style</span>
                                        <ul className="mega-menu-list-holder">
                                            <li><NavLink to="/shop-right-sidebar" activeClassName="current-menu-item">Product
                                                style 1</NavLink></li>
                                            <li><NavLink to="/shop-left-sidebar" activeClassName="current-menu-item">Product
                                                style 2</NavLink></li>
                                            <li><NavLink to="/shop-full-width" activeClassName="current-menu-item">Product
                                                style 3</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <Logo/>

                    <li><NavLink to="/blog" activeClassName="current-menu-item">Blog</NavLink></li>
                    <li><NavLink to="/cart" activeClassName="current-menu-item">Cart</NavLink></li>
                    <li><NavLink to="/checkout" activeClassName="current-menu-item">Checkout</NavLink></li>
                    <li><NavLink to="/my-account" activeClassName="current-menu-item">Myaccount</NavLink></li>
                    <li>
                        <NavLink to="/contact" activeClassName="current-menu-item">Contact</NavLink>
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