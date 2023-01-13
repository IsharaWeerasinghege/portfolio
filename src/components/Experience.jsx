import React from 'react';

function Experience({ experiences }) {
  return (
    <div className="w-full">
      {experiences?.map((exp) => (
        <div
          key={exp.year}
          className="w-full flex flex-row items-start mb-4"
        >
          <div className=" text-neutral-100 ml-2 mr-5">
            {exp?.year}
          </div>
          <div>
            {exp?.works?.map((work) => (
              <div
                key={work?.name}
                className="mb-2"
              >
                <h4
                  className="text-neutral-200"
                >
                  {work?.name}
                </h4>
                <p className="text-neutral-400 text-sm">
                  {work?.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      )) }
    </div>
  );
}

export default Experience;
