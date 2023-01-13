import React from 'react';
import profile from '../asset/profile1.png';

const PersonalInfo = () => {
    return (
        <div className="px-12">
            <h3 className="mt-5 text-neutral-500 bg-neutral-800 p-2 w-[90px] text-center bg-white bg-opacity-5 ">About</h3>
            <h3 className="mt-5 text-3xl font-bold text-white mb-5">About Me</h3>
            <div className="w-full h-[500px] bg-neutral-500 shadow-md mt-14 mb-8">
                <img src={profile} alt="profile picture" className="w-full h-full object-contain"/>
            </div>
            <h2 className="text-xl capitalize text-white font-medium">ishra weerasinghe</h2>
            <h3 className="font-regular text-sm text-neutral-500 capitalize">web developer</h3>
            <hr className="border-neutral-600 my-5"/>
            <div className="font-regular text-sm text-neutral-500">
                <p className="mb-2">Hi, my name is Adriano Smith and I began using WordPress when it first began. I’ve spent most of my
                    waking hours for the last ten years designing, programming and operating WordPress sites.</p>
                <p>
                    One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go
                    beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive
                    knowledge of web mechanics, I’m able to optimize complex integrations to require little-to-no
                    maintenance while running on their own for years.
                </p>
            </div>
            <hr className="border-neutral-600 my-5"/>
            <div className="flex flex-col md:flex-row items-center text-sm">
                <div className="w-full md:w-1/2">
                    <table className="w-[100%]">
                        <tr className="text-left my-2">
                            <th className="w-[40%] text-white font-normal">Birthday:</th>
                            <td className="w-[60%] text-neutral-500">1996.10.14</td>
                        </tr>
                        <tr className="text-left my-2">
                            <th className="w-[40%] text-white font-normal">Age:</th>
                            <td className="w-[60%] text-neutral-500">26</td>
                        </tr>
                        <tr className="text-left my-2">
                            <th className="w-[40%] text-white font-normal">Address:</th>
                            <td className="w-[60%] text-neutral-500">Sri Lanka</td>
                        </tr>
                        <tr className="text-left my-2">
                            <th className="w-[40%] text-white font-normal">Email:</th>
                            <td className="w-[60%] text-neutral-500">surangaishara8@gmail.com</td>
                        </tr>
                        <tr className="text-left my-2">
                            <th className="w-[40%] text-white font-normal">Phone:</th>
                            <td className="w-[60%] text-neutral-500">+94 071 323 58 98</td>
                        </tr>
                    </table>
                </div>
                <div className="w-full md:w-1/2">
                    <table className="w-[100%]">
                        <tr className="text-left my-2">
                            <th className="w-[40%] text-white font-normal">Nationality:</th>
                            <td className="w-[60%] text-neutral-500">Sri Lanka</td>
                        </tr>
                        <tr className="text-left my-2">
                            <th className="w-[40%] text-white font-normal">Study:</th>
                            <td className="w-[60%] text-neutral-500">University of Vocational Technology</td>
                        </tr>
                        <tr className="text-left my-2">
                            <th className="w-[40%] text-white font-normal">Degree:</th>
                            <td className="w-[60%] text-neutral-500">Btec</td>
                        </tr>
                        <tr className="text-left my-2">
                            <th className="w-[40%] text-white font-normal">Interest:</th>
                            <td className="w-[60%] text-neutral-500">watch Movies & Tv Series</td>
                        </tr>
                        <tr className="text-left my-2">
                            <th className="w-[40%] text-white font-normal">Freelance:</th>
                            <td className="w-[60%] text-neutral-500">Available</td>
                        </tr>
                    </table>
                </div>
            </div>
            <hr className="border-neutral-600 my-5"/>
            <button className="bg-white py-3 px-5 shadow-sm mb-8">
                Download CV
            </button>
        </div>
    )
}

export default PersonalInfo