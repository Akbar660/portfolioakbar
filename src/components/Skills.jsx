import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import "./skills.css";
import {ImHtmlFive} from "react-icons/im";
import {SiCss3} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {SiRedux} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress} from "react-icons/si";
import {DiMongodb} from "react-icons/di";
import {DiJavascript1} from "react-icons/di";

export const Skills = ()=>{
    return (
      <div className='Skillmain'>
       <div className='title'><h1>Skills</h1></div> 
        <div className='SkillClass'>
          
       
        

        <div >< ImHtmlFive size="7rem"/><h3>HTML</h3></div>
        <div ><SiCss3 size="7rem"/><h3>CSS</h3></div>
        <div ><FaReact size="7rem"/><h3>ReactJs</h3></div>
        <div ><SiRedux size="7rem"/><h3>Redux</h3></div>
        <div ><FaNodeJs size="7rem"/><h3>NodeJs</h3></div>
        <div ><SiExpress size="7rem"/><h3>Express</h3></div>
        <div ><DiMongodb size="7rem"/><h3>MongoDb</h3></div>
        <div ><DiJavascript1 size="7rem"/><h3>Javascript</h3></div>







        </div>
        </div>
      );
    };
