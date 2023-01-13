import React from 'react';
import profile from "../asset/profile1.png"
import {SocialIcons} from "./index.js";

const Home = () => {
    return (
        <div className="flex flex-wrap justify-center items-center flex-col md:flex-row h-full  animate-slide-up">
            <div className="overflow-hidden md:mr-12 fancy-border bg-neutral-600 w-[250px] h-[250px]">
                <img src={profile} className="w-[100%] mt-[-30px]" alt="Ishara"/>
            </div>
            <div className="w-full md:max-w-[600px] text-white">
                <h1 className="text-center mt-5 uppercase text-xl sm:text-2xl font-bold mb-4 sm:text-3xl md:text-5xl md:text-left">Ishara
                    Weersinghege</h1>
                <p className="text-center md:text-left px-2 md:px-0">I am a Web Developer working with modern and latest
                    technology. i develop web applications, front end with Html, Css, Js, React, Tailwind css,
                    Material Ui and Backend with Node js, Express. also i using Mern Stack and Next js for fullstack
                    Development.</p>
                <div className=" mt-5">
                    <SocialIcons/>
                </div>
            </div>
        </div>
    )
}

export default Home