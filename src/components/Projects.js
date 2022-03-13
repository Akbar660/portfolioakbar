import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>
        <span className="title">Projects</span>
      </h1>
      <Grid>
        <Card
          img={require('../images/medplusmart.png')}
          title="Medplusmart Clone "
          description="It's a clone of MedPlusmart,In which user can buy prescription medicines, OTC products & household needs.This project was done by team of 5."
          technologies="Javascript - HTML - CSS "
          link_two="https://medplusmartclone.000webhostapp.com/"
          link_three="https://github.com/Akbar660/medplusmart.com"
          link_two_text="Visit"
          link_three_text="Github"
        />
        <Card
          img={require('../images/Zarahome.png')}
          title="Zarahome Clone"
          description="It's a clone of Zara Home,In which user can buy styles in bedding, fragrances, tableware, rugs, lamps, duvet covers, towels and home accessories.This project was done by team of 4."
          technologies="HTML - CSS - Javascript"
      
          link_two="https://zarahome-ww-clone.netlify.app/"
          link_three="https://github.com/Akbar660/Clone-ZaraHome"
         
          link_two_text="Visit"
          link_three_text="Github"
        />
        <Card
          img={require('../images/reciepeapp.png')}
          title="Reciepe Finder App"
          description="It is a Reciepe Finder App where we find different varieties of Reciepies information and also cooking vedios when we search on searchbar."
          technologies="Reactjs - Styled Components - Material UI "
          technologies2=""
          link_two="https://basha-receipe-finder-app.vercel.app/"
          link_three="https://github.com/Akbar660/Akbar-Reciepe-App"
          link_two_text="Visit"
          link_three_text="Github"
        />
        <Card
          img={require('../images/weatherapp.png')}
          title="Weather App"
          description="It is a Weather App where we find weather of different cities in world."
          technologies="Reactjs - Styled Components - Material UI "
          technologies2=""
          link_two="https://weather-app-am7jj5bj9-akbar660.vercel.app/"
          link_three="https://github.com/Akbar660/React-weather-app"
          link_two_text="Visit"
          link_three_text="Github"
        />
      </Grid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  .title {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
  }
  width:78%;

  margin:auto;
  margin-bottom:7rem;
 
  h1 {
    font-size: 3rem;
    padding: 2rem;
    padding-top: 4rem;

    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 3rem;
    }
    
  }
`;

const Grid = styled.div`
  color: ${(props) => props.theme.cardText};
  box-sizing: border-box;
  padding: 2rem;

  width:90%;
  margin:auto;

  @media (max-width: 40rem) {
    padding: 1.5rem;
  }

  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap:1%;

  @media (max-width: 1120px) {
    
    width:100%;
    margin:auto;
  }
  @media (max-width: 850px) {
     
    grid-template-columns: 100%;

  }
  @media (max-width: 385px) {
    
      margin-left:-2rem;
  }
  @media (max-width: 340px) {
    margin-left:-3rem;


  }

  justify-content: center;
`;

export default Projects;
