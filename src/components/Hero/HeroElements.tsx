import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
    z-index: 3;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background: #272d35;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 75rem;
  position: absolute;
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 1.5rem;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  max-width: 37.5rem;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
