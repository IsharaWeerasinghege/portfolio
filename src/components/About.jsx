import React from 'react';
// eslint-disable-next-line import/no-cycle
import { Knowledge, PersonalInfo } from './index.js';

function About() {
  return (
    <div className="h-full w-full overflow-y-scroll animate-slide-left">
      <PersonalInfo />
      <Knowledge />
    </div>
  );
}

export default About;
