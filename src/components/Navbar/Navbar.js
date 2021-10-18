import React, { useState, useEffect} from 'react';
import styled, { css } from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../../data/MenuData';
import { Button } from '../Button/Button';
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        cursor: pointer;
        posiiton: absolute;
        top: 0;
        right: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavButton = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Navbar = ({ toggle }) => {
    const [nbar, setNavbar] = useState(false)
    const location = useLocation()

    const changeBackground = () => {
        if(window.pageYOffset >= 600) {
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    }

    let style = {
        backgroundColor: nbar || location.pathname !== "/" ? '#8083c9' :
        'transparent',
        transition: '0.4s'
    }

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', changeBackground)
        }

        watchScroll()

        return () => {
            window.removeEventListener('scroll', changeBackground)
        };
    }, []);

    return (
        <Nav style={style}>
            <Logo to ="/">BEN BARRIS</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavButton>
                <Button to='/contact' round ='true' primary='true'>
                    Contact Me!
                </Button>
            </NavButton>
        </Nav>  
    );
};

export default Navbar;