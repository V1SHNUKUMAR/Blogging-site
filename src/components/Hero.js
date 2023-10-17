import React from "react";

const Hero = () => {
  const videoUrl = "https://www.meesho.io/img/blog/banner.mp4";

  return (
    <section className="py-10 flex flex-col justify-start items-center gap-6 sm:gap-0 sm:flex-row">
      <div className="contentTxt text-center my-5 text-3xl max-w-xl lg:text-start text-amber-500 sm:text-start sm:text-5xl md:text-7xl md:font-medium">
        Stories from the folks building for a billion Indians
      </div>
      <div className="video max-w-xl">
        <video className="w-full" src={videoUrl} autoPlay muted loop></video>
      </div>
    </section>
  );
};

export default Hero;
