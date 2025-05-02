import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  ButtonWrapper,
  ContactButton
} from "./ContactElements";

interface IProps {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  darkText: boolean;
  topLine: string;
  headline: string;
  description: string;
  imgFirst: boolean;
  img: any;
  alt: string;
  primary: boolean;
  dark: boolean;
}

const Info = ({
  id,
  lightBg,
  lightText,
  darkText,
  topLine,
  headline,
  description,
  imgFirst,
  img,
  alt
}: IProps) => {
  return (
    <InfoContainer id={id} lightBg={lightBg}>
      <InfoWrapper>
        <InfoRow imgFirst={imgFirst}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <ButtonWrapper>
                <ContactButton href="https://www.linkedin.com/in/vinu-jey/" target="_blank"><FaLinkedinIn /></ContactButton>
                <ContactButton href="mailto:vinusan.jey@gmail.com" target="_blank"><SiMaildotru /></ContactButton>
                <ContactButton href="https://github.com/VinuJ" target="_blank"><FaGithub /></ContactButton>
              </ButtonWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={img} alt={alt}></Img>
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;
