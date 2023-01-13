import React from 'react';

const Knowledge = () => {
  return (
    <div className="px-12 py-14 bg-neutral-700 flex flex-col md:flex-row items-center">
      <div className="w-full md:1/2">
        <h2 className="text-white font-bold text-xl mb-2">Knowledge</h2>
        <ul className="text-neutral-400 list-disc list-inside">
          <li>Html</li>
          <li>Css</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Next Js</li>
          <li>Tailwind css</li>
        </ul>
      </div>
      <div className="w-full md:1/2">
        <h2 className="text-white font-bold text-xl mb-2">Interests</h2>
        <ul className="text-neutral-400 list-disc list-inside">
          <li>Mongo Db</li>
          <li>Typescript</li>
          <li>Material Ui</li>
          <li>Redux</li>
          <li>Chakra Ui</li>
          <li>Angular</li>
        </ul>
      </div>
    </div>
  )
}

export default Knowledge