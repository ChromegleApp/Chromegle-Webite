import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Hero from "./Hero";
import styled from "styled-components";
import Ratings from "./Ratings";

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;


const Home = () => {
    return (
        <Background>
            <Hero />
            <Ratings />
        </Background>
    );
}

export default Home;
