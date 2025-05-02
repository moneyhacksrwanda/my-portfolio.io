import styled from "styled-components";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { theme } from "../../../styles/colours";

interface IRowNav {
  scrollNav: boolean;
}

export const Nav = styled.nav`
  background: ${({scrollNav}: IRowNav) => (scrollNav ? '#000' : 'transparent')};
  height: 5rem;
  margin-top: -5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  z-index: 1;
  padding: 0 1.5rem;
  max-width: 70rem;
`;

export const NavLogo = styled(LinkScroll)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: 0.2s color ease-in-out;
    &:hover {
      color: ${theme.colour};
      transition: 0.2s ease-in-out;
    }
`;

export const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 1;
    transition: 0.2s color ease-in-out;
    &:hover {
      color: ${theme.colour};
      transition: 0.2s ease-in-out;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 5rem;
`;

export const NavLink = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s color ease-in-out;

  &.active {
    border-bottom: 3px solid ${theme.colour};
  }

  &:hover {
    color: ${theme.colour};
    transition: 0.2s color ease-in-out;
  }
`;

export const NavA = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s color ease-in-out;

  &.active {
    border-bottom: 3px solid ${theme.colour};
  }

  &:hover {
    color: ${theme.colour};
    transition: 0.2s color ease-in-out;
  }
`;

export const NavSpace = styled.div`
  background: inherit;
  width: 8rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

// Allows for Next.js Link element styling
// export const LinkN = (href: any) => (
//   <Link prefetch href={href} passHref>
//     <NavLogo></NavLogo>
//   </Link>
// );
