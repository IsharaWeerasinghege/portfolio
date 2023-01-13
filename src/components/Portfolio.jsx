import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../client';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilteredWorks(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);

    if (item === 'All') {
      setFilteredWorks(works);
    } else {
      setFilteredWorks(works.filter((work) => work.tags.includes(item)));
    }
  };

  return (
    <div className="h-full w-full overflow-y-scroll">
      <div className="px-2 md:px-12">
        <h3 className="mt-5 text-neutral-500 bg-neutral-800 p-2 w-[90px] text-center bg-white bg-opacity-5 ">Portfolio</h3>

        <div className="flex justify-between items-center flex-wrap">
          <h3 className="mt-5 text-3xl font-bold text-white mb-5">Creative Portfolio</h3>
          <div className="text-right text-neutral-400 flex flex-wrap">
            {['All', 'Next App', 'React App', 'Other'].map((item) => (
              <div
                key={item}
                onClick={() => handleWorkFilter(item)}
                className={`mx-2 hover:text-white transition-all last:mr-0 duration-300 ease-in-out cursor-pointer ${activeFilter === item ? 'text-neutral-300' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap">
          {filteredWorks?.map((work) => (
            <div key={work.title} className="w-full sm:w-1/2 md:w-1/3 min-w-[300px] ">
              <div className="bg-neutral-600 m-1 rounded-sm p-2 min-h-[370px] animate-slide-up">
                <figure className="bg-neutral-800 relative rounded-sm overflow-hidden">
                  <div className="absolute w-full h-full bg-neutral-400 mix-blend-multiply" />
                  <img
                    src={urlFor(work.imgUrl)}
                    className="w-full h-[200px] object-cover rounded-sm"
                    alt={work?.title}
                  />
                </figure>
                <h3 className="my-2 text-neutral-50 font-normal">{work?.title}</h3>
                <p className="text-sm text-neutral-200 mb-3">{work?.description}</p>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={work?.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-neutral-500 rounded mr-1"
                  >Demo
                  </a>
                  <a href={work?.codeLink} target="_blank" rel="noreferrer" className="p-2 bg-neutral-500 rounded">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
