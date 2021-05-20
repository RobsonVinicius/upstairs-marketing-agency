import React from 'react';
import { Pricing, InfoSection } from '../../components';
import { ServicesObjOne, ServicesObjTwo, ServicesObjThree } from './Services.data.js'


const Services = () => {
  return (
    <>
      <InfoSection {...ServicesObjOne } />
      <Pricing />
      <InfoSection {...ServicesObjTwo } />
      <InfoSection {...ServicesObjThree } />
    </>
  )
}

export default Services
