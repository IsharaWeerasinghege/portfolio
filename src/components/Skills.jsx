import React from 'react';
import { urlFor } from '../client';

function Skills({ skills }) {
  return (
    <div className="flex flex-row flex-wrap justify-around overflow-hidden w-full mb-8 ">
      {skills?.map((skill) => (
        <div
          key={skill?.name}
          className="w-[6.5rem] h-28 overflow-hidden p-2 mb-5 bg-neutral-600"
        >
          <div className="w-16 h-16 m-auto p-2">
            <img className="w-full" src={urlFor(skill?.icon)} alt={skill?.name} />
          </div>
          <p className="text-center text-neutral-200 text-sm my-1">{skill?.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
