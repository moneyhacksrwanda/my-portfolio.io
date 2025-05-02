import styled from "styled-components";
import { theme } from "../../../styles/colours";

interface IProps {
  primary?: boolean;
  big?: boolean;
  dark?: boolean;
  fontBig?: boolean;
}

export const ProjectsContainer = styled.div`
  /* border: 1px solid red; */
  min-height: calc(100vh - 80px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.dark};

  /* @media screen and (max-width: 768px) {
        height: 70rem;
    }

    @media screen and (max-width: 480px) {
        height: 85rem;
    } */
`;
export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsWrapper = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 1rem;
  border-radius: 10px;
  max-width: 25rem;
  max-height: 25rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 480px) {
    max-height: 35rem;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsThumbnail = styled.img`
  height: 10rem;
  width: 10rem;
  margin-bottom: 10px;
`;

export const ProjectsH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  //border: 1px solid red;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ProjectButton = styled.a`
  border-radius: 3rem;
  background: ${theme.dark};
  white-space: nowrap;
  padding: 0.75rem 2rem;
  color: #fff;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  max-width: 10.5rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }: IProps) => (primary ? "#fff" : theme.colour)};
    color: ${({ dark }: IProps) => (dark ? theme.dark : "#fff")};
  }
`;
