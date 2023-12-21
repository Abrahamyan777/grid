import { useState, useEffect } from 'react';
import Container from '../../components/container/container';
import './header.scss';
import { LuLayout } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const Header = ({ activeSing, setActiveSing, active1, setActive1 }) => {

    const [screenWith, setScreenWith] = useState(window.innerWidth)

    useEffect(() => {
        const changWidth = () => {
            setScreenWith(window.innerWidth)
        }
        window.addEventListener("resize", changWidth);
        return (
            window.addEventListener("resize", changWidth)
        )
    }, [screenWith])


    return (
        <Container>
            <header className='header-wrapper'>
                {
                    (screenWith > 1024) ? (
                        <>
                            <NavLink to="/grid/">
                                <div className='header-logo'>
                                    <div className='logo'>
                                        <LuLayout />
                                    </div>
                                    <div className='title-grid'>
                                        <span>Grid</span>
                                    </div>
                                </div>
                            </NavLink>
                            <nav className='header-menu'>
                                <ul className='menu-list'>
                                    <li className='menu-list-title'>
                                        How it works
                                    </li>
                                    <div className='circle-orang'></div>
                                    <li>
                                        <NavLink to="/grid/whoWeAre">
                                            Who we are
                                        </NavLink>
                                    </li>
                                    <div className='circle-orang'></div>
                                    <li>
                                        <NavLink to="/grid/whatWeDo">
                                            What we do
                                        </NavLink>
                                    </li>
                                    <div className='circle-orang'></div>
                                    <li>
                                        <NavLink to="/grid/contactUs">
                                            Contact us
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <div className='sign-btn'>
                                <button onClick={() => setActiveSing(!activeSing)}> Sign In </button>
                            </div>
                        </>
                    ) :
                        <div className='header-mobile'>
                            <div className='menu-icon-title'>
                                <div className='mobile-icon'>
                                    <button className='mobile-btn' onClick={() => setActive1(!active1)} >
                                        <FiMenu />
                                    </button>
                                </div>
                                <NavLink to="/grid/">
                                    <span>Grid</span>
                                </NavLink>
                            </div>
                            <div className='menu-btn'>
                                <button onClick={() => setActiveSing(!activeSing)}>Sign In</button>
                            </div>

                        </div>
                }
            </header>
        </Container>
    )
}

export default Header;