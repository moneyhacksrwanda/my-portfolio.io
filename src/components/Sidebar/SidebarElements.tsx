import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { theme } from "../../../styles/colours";

interface IProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(props: IProps) => (props.isOpen ? "100%" : "0%")};
  top: ${(props: IProps) => (props.isOpen ? "0" : "-100%")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  transition: 0.2s color ease-in-out;
  &:hover {
    color: ${theme.colour};
    transition: 0.2s color ease-in-out;
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 5rem);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 4rem);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #000;
    background: ${theme.colour};
    transition: 0.2s ease-in-out;
  }
`;
