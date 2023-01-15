import React, { useEffect, useState } from 'react';
import { client } from '../client';

function Service() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <div className="h-full w-full overflow-y-scroll">
      <div className="px-1 md:px-12 animate-slide-left">
        <h3 className="mt-5 text-neutral-500 bg-neutral-800 p-2 w-[90px] text-center bg-white bg-opacity-5 ">Services</h3>
        <h3 className="mt-5 text-3xl font-bold text-white mb-5">What I Do</h3>
        <div className="flex justify-between flex-wrap items-center">
          {services.map((service, index) => (
            <div
              key={`service${index}`}
              className="w-full md:w-[300px] bg-neutral-700 md:min-h-[340px] p-8 mx-2 mb-6"
            >
              <span
                className="w-14 h-14 bg-neutral-800 flex justify-center items-center rounded-full mb-3 text-neutral-100"
              >{index + 1}
              </span>
              <h2 className="text-lg text-white font-semibold mb-2">{service?.title}</h2>
              <p className="text-neutral-400">{service?.description}</p>
              <hr className="mt-5 border-neutral-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
