
import "../index.css"

import React from 'react';

const Welcome = ({ imageUrl, text ,text2}) => {
  const styles = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div
      className="welcome-component bg-cover bg-center flex p-4 items-center justify-center w-[98.7vw] h-screen"
      style={styles}
    >
        <div className=" flex flex-col md:p-10 md:max-w-[60vw] ">
            <h1 className="text-4xl md:text-[60px] font-bold text-white lg:leading-[70px] md:tracking-normalx text-center font-heading1 ">{text}</h1>
            <p className=" font-heading3 text-white text-center md:text-xl">{text2}</p>
        </div>
    </div>
  );
};

export default Welcome;
