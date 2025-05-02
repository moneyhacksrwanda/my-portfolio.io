import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Hamburger,
  NavMenu,
  NavItem,
  NavLink,
  NavSpace,
  NavA,
} from "./NavbarElements";

interface IProps {
  toggleSidebar: () => void;
}

const Navbar = (props: IProps) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  
  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="home" smooth={true} offset={-80} duration={500} spy={true}>Vinu Jey</NavLogo>
        <Hamburger onClick={props.toggleSidebar}>
          <FaBars />
        </Hamburger>
        <NavMenu>
          <NavItem>
            <NavLink to="about" smooth={true} offset={-80} duration={500} spy={true}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="work" smooth={true} offset={-80} duration={500} spy={true}>Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact" smooth={true} offset={-80} duration={500} spy={true}>Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavA href="\vinuCV.pdf" target="_blank">Resume</NavA>
          </NavItem>
        </NavMenu>
        <NavSpace></NavSpace>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
