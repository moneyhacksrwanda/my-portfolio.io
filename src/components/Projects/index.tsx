import React from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsH2,
  ProjectsThumbnail,
  ProjectsP,
  ButtonsWrapper,
  ProjectButton
} from "./ProjectsElements";

const Projects = () => {
  return (
    <ProjectsContainer id="work">
      <ProjectsH1>These are some of my projects</ProjectsH1>
      <ProjectsWrapper>
      <ProjectsCard>
          <ProjectsH2>Portfolio Website</ProjectsH2>
          <ProjectsThumbnail src="\svg-9.svg"></ProjectsThumbnail>
          <ProjectsP>
            The site you're currently on! Made using Next.js and React styled-components
          </ProjectsP>
          <ButtonsWrapper>
            <ProjectButton href="https://github.com/VinuJ/my-portfolio" target="_blank">View Source Code</ProjectButton>
            <ProjectButton href="https://vinu-jey.vercel.app/" target="_blank">View Live Demo</ProjectButton>
          </ButtonsWrapper>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsH2>Movies and Shows</ProjectsH2>
          <ProjectsThumbnail src="\svg-2.svg"></ProjectsThumbnail>
          <ProjectsP>
            Fetches top search results from a REST API using Axios, stores them
            using Redux Toolkit and renders through React and SASS. Routes are managed with React Router.
          </ProjectsP>
          <ButtonsWrapper>
            <ProjectButton href="https://github.com/VinuJ/redux-movie-app/" target="_blank">View Source Code</ProjectButton>
            <ProjectButton href="https://vinuj.github.io/redux-movie-app/" target="_blank">View Live Demo</ProjectButton>
          </ButtonsWrapper>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsH2>Drum Machine</ProjectsH2>
          <ProjectsThumbnail src="\svg-3.svg"></ProjectsThumbnail>
          <ProjectsP>
            Built using React, TypeScript and SASS, plays two different drum kits' sounds
            when clicked on / corresponding keys are pressed
          </ProjectsP>
          <ButtonsWrapper>
            <ProjectButton href="https://github.com/VinuJ/drum-machine" target="_blank">View Source Code</ProjectButton>
            <ProjectButton href="https://vinuj.github.io/drum-machine/" target="_blank">View Live Demo</ProjectButton>
          </ButtonsWrapper>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsH2>Random Quote Machine</ProjectsH2>
          <ProjectsThumbnail src="\svg-4.svg"></ProjectsThumbnail>
          <ProjectsP>
            Displays a random quote pulled from a
            stored JSON file and offers the ability to instantly tweet it, made using React and SASS
          </ProjectsP>
          <ButtonsWrapper>
            <ProjectButton href="https://github.com/VinuJ/random-quote-machine" target="_blank">View Source Code</ProjectButton>
            <ProjectButton href="https://vinuj.github.io/random-quote-machine/" target="_blank">View Live Demo</ProjectButton>
          </ButtonsWrapper>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsH2>TypeScript Calculator</ProjectsH2>
          <ProjectsThumbnail src="\svg-5.svg"></ProjectsThumbnail>
          <ProjectsP>
            A simple but clean calculator made using TypeScript, React and SASS
          </ProjectsP>
          <ButtonsWrapper>
            <ProjectButton href="https://github.com/VinuJ/typescript-calculator" target="_blank">View Source Code</ProjectButton>
            <ProjectButton href="https://vinuj.github.io/typescript-calculator/" target="_blank">View Live Demo</ProjectButton>
          </ButtonsWrapper>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsH2>Pomodoro Timer</ProjectsH2>
          <ProjectsThumbnail src="\svg-6.svg"></ProjectsThumbnail>
          <ProjectsP>
            Well-known productivity tool with adjustable study session and break lengths, made using TypeScript, React, Sass and Materialize CSS
          </ProjectsP>
          <ButtonsWrapper>
            <ProjectButton href="https://github.com/VinuJ/pomodoro-timer" target="_blank">View Source Code</ProjectButton>
            <ProjectButton href="https://vinuj.github.io/pomodoro-timer/" target="_blank">View Live Demo</ProjectButton>
          </ButtonsWrapper>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsH2>Markdown Previewer</ProjectsH2>
          <ProjectsThumbnail src="\svg-7.svg"></ProjectsThumbnail>
          <ProjectsP>
            Enter GitHub flavored markdown into the editor to see a live rendering, made using React and SASS
          </ProjectsP>
          <ButtonsWrapper>
            <ProjectButton href="https://github.com/VinuJ/markdown-previewer" target="_blank">View Source Code</ProjectButton>
            <ProjectButton href="https://vinuj.github.io/markdown-previewer/" target="_blank">View Live Demo</ProjectButton>
          </ButtonsWrapper>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
