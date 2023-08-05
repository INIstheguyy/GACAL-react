
import "../index.css"

import React from 'react';

const Welcome = ({ imageUrl, text ,text2}) => {
  const styles = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div
      className=" bg-cover bg-center flex p-2 items-center justify-center w-fit h-fit"
      style={styles}
    >
        <div className=" flex flex-col md:p-10 md:max-w-[60vw] ">
            <h1 className="text-3xl md:text-[60px] font-bold text-white lg:leading-[70px] md:tracking-normalx text-center font-heading1 ">{text}</h1>
            <p className=" font-heading3 text-white text-lg text-center md:text-xl">{text2}</p>
        </div>
        <div></div>
    </div>
  );
};

export default Welcome;
