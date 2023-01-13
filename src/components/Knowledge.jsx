import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { Experience, Skills } from './index';
import { client } from '../client';

function Knowledge() {
  const [experience, setExperience] = useState();
  const [skills, setSkills] = useState();

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experienceQuery = '*[_type == "experiences"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
    });
  }, []);
  return (
    <div className="px-4 md:px-12 py-14 bg-neutral-700 flex flex-col md:flex-row items-start">
      <div className="w-full md:1/2 pr-1">
        <h2 className="text-white font-bold text-xl mb-3">Skills</h2>
        <Skills skills={skills} />
      </div>
      <div className="w-full md:1/2 pl-1">
        <h2 className="text-white font-bold text-xl mb-3">Experience</h2>
        <Experience experiences={experience} />
      </div>
    </div>
  );
}

export default Knowledge;
