import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/piril-logo.png'
import { useSelector } from 'react-redux';
const Navbar = () => {
    const [addClass, updateClass] = useState(false)
    const [stkyClass, setStkyClass] = useState(false)
    const [mega, setMega] = useState(false)
    const [auth, setAuth] = useState(false)
    const user = useSelector(state => state.user)

    useEffect(() => {
        setAuth(localStorage.getItem("isAuthenticated"))
    }, [auth, user])


    const handleClick = () => {
        updateClass(true)
    }
    const handleClickCross = () => {
        updateClass(false)
        window.scrollTo(0, 0);
    }
    const scrollHandleScroll = () => {
        if (window.scrollY > 20) {
            setStkyClass(true)
        }
        else {
            setStkyClass(false)
        }
    }
    const handleMega = () => {
        setMega(!mega)
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandleScroll);
    }, []);

    return (
        <>
            <div className="navbar__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 col-xl-6">
                            <ul className="nav__top__left">
                                <li><FontAwesomeIcon icon={['fas', 'envelope']} /> pirilcampus@gmail.com</li>
                                <li><FontAwesomeIcon icon={['fas', 'home']} /> Melikşah, Beyşehir Cd. No:9, 42080 Meram/Konya</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-2 col-xl-6">
                            <ul className="top__social">
                                <li><a href="https://www.facebook.com/trtcocukpiril/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></li>
                                <li><a href="https://twitter.com/trtcocukpiril"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                                <li><a href="https://www.instagram.com/trtcocukpiril/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"navbar__wrapper" + (stkyClass ? ' mystky' : '')}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navbar__inner_container">
                                <div className="logo">
                                    <h4>
                                        {/* <NavLink to="/">Logo</NavLink> */}
                                        <NavLink to="/"><img width="200" src={logo} alt="logo" /></NavLink>
                                    </h4>
                                </div>
                                <div className="manu" >
                                    <ul className={addClass ? 'vissible' : 'hidden'}>
                                        <li onClick={handleClickCross}><NavLink exact to="/">Home</NavLink></li>
                                        <li onClick={handleClickCross}><NavLink to="/events">Events</NavLink></li>
                                        <li onClick={handleClickCross}><NavLink to="/teachers">Teachers</NavLink></li>
                                        <li onClick={handleClickCross}><NavLink to="/aboutus">About Us</NavLink></li>
                                        <li onClick={handleClickCross}><NavLink to="/contact">Contact</NavLink></li>
                                        <li onClick={handleMega}><NavLink to="/pages" >Pages</NavLink>
                                            <ul className={"mega " + (mega ? 'mega__visible' : '')}>
                                                <li onClick={handleClickCross}><NavLink to="/events">Events</NavLink></li>
                                                <li onClick={handleClickCross}><NavLink to="/event/details">Events Details</NavLink></li>
                                                <li onClick={handleClickCross}><NavLink to="/teachers">Teachers</NavLink></li>
                                                <li onClick={handleClickCross}><NavLink to="/teacher/details">Teachers Details</NavLink></li>
                                                <li onClick={handleClickCross}><NavLink to="/aboutus">About Us</NavLink></li>
                                                <li onClick={handleClickCross}><NavLink to="/contact">Contact</NavLink></li>
                                                <li onClick={handleClickCross}><NavLink to="/error">404</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className={addClass ? 'vissible__cross' : 'hidden__corss'} onClick={handleClickCross}>
                                        <FontAwesomeIcon icon="times" />
                                    </div>
                                    {(!auth) && <div className="contact__btn">
                                        <a href="/login">Sign In/Up</a>
                                    </div>}

                                    {auth && <div className="contact__btn">
                                        <a href="/logout">Sign out</a>
                                    </div>}

                                    {
                                    auth &&
                                        <div>
                                            <a href='/student'>
                                                <FontAwesomeIcon color='orange' size='2x' icon={['fas', 'home']} />
                                            </a>
                                        </div>}
                                </div>
                                <div className="mobile__menu" onClick={handleClick}>
                                    <span></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar