import React from 'react';
import {Knowledge, PersonalInfo} from "./index.js";

const About = () => {
  return (
    <div className="h-full w-full overflow-y-scroll animate-slide-left">
      <PersonalInfo />
        <Knowledge/>
    </div>
  )
}

export default About