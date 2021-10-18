import React from 'react'
import Hero from '../components/Hero/Hero';
import { SliderData } from '../data/SliderData';

const projects = () => {
    return <Hero slides={SliderData} />;
};

export default projects;
