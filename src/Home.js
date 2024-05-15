import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import main_bg_background from './assets/images/home_page/main-bg.webp';
import horse from './assets/images/home_page/horse.png';
import cliff from './assets/images/home_page/cliff.webp';
import tree from './assets/images/home_page/trees.webp';
import stars from './assets/images/home_page/stars.png';

const Home = () => {

  return (
    <>
     <main className="w-full h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${main_bg_background})` }}
      >
        <div className="pl-20 md:pl-40 pb-[400px] md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[30px] xl:text-[50px] text-white font-semibold">
            Make anything possible 
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-red-500">
              {" "}
              by Skill Development<br/> With Vedic Technologies
            </div>
          </h1>
          <p className="text-gray-200 hidden md:block">
          Embrace the AI era by continuously learning and adapting—it's your gateway to innovation and success. Cultivate your creativity and problem-solving skills, for they are irreplaceable by machines. Stay ahead by integrating ethical AI practices, ensuring a future where technology serves humanity responsibly.
          </p>
          <div className="flex-col md:flex-row  md:flex gap-5 justify-end">
  
  <Link
    href="/contact-me"
    className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-600 px-10 py-2  text-lg text-white max-w-[200px] transition duration-300 ease-in-out transform hover:scale-105"
  >
    Join Us
  </Link>
</div>


        </div>
      </div>

    

      <div className="absolute bottom-0 right-0 z-[10]">
        <img
          src={horse}
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <img src={cliff} alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <img
          src={tree}
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <img
        src={stars}
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
    </>
  );
};

export default Home;
