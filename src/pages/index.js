import React from 'react';
import Bulk from '../components/Bulk/Bulk';
import Hero from '../components/Hero/Hero';
import ActualAPI from '../components/ActualAPI/ActualAPI';
import { InfoData, InfoDataTwo } from '../data/InfoData';
import { SliderData } from '../data/SliderData';

const Home = () => {
    return (
        <>
        <Hero slides={SliderData}/>
        <Bulk {...InfoData}/> 
        <Bulk {...InfoDataTwo}/>   
        <ActualAPI/>
        </>
    )
}

export default Home;
  