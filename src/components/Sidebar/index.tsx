import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

interface IProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = (props: IProps) => {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggleSidebar}>
      <Icon onClick={props.toggleSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={props.toggleSidebar}>
            About
          </SidebarLink>
          <SidebarLink to="work" onClick={props.toggleSidebar}>
            Work
          </SidebarLink>
          <SidebarLink to="contact" onClick={props.toggleSidebar}>
            Contact
          </SidebarLink>
          <SidebarLink to="resume" onClick={props.toggleSidebar}>
            Resume
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
