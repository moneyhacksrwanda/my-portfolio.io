import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { theme } from "../../styles/colours";
import internal from "stream";

interface IProps {
  primary?: boolean;
  big?: boolean;
  dark?: boolean;
  fontBig?: boolean;
}

export const Button = styled(LinkScroll)`
  border-radius: 3rem;
  background: ${({ primary }: IProps) => (primary ? theme.colour : theme.dark)};
  white-space: nowrap;
  padding: ${({ big }: IProps) => (big ? "1rem 3rem" : "0.75rem 2rem")};
  color: ${({ dark }: IProps) => (dark ? theme.dark : "#fff")};
  font-size: ${({ fontBig }: IProps) => (fontBig ? "1.25rem" : "1rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }: IProps) =>
      primary ? "#fff" : theme.colour};
    color: ${({ dark }: IProps) => (dark ? theme.dark : "#fff")};
  }
`;
