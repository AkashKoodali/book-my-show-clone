import React, { useState } from "react";
//components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
//layout Hoc
import DefaultLayoutHoc from "../layouts/Default.layout";

const HomePage = () => {
  const [recommentedMovies, setRecommentedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-grey-800 sm:ml-3 ml-0 my-3">
          The best of entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommented Movies"
          subject="List of recommented Movies"
          posters={recommentedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupey"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
          title="Premiers"
          subject="Brand new releases every Friday"
          posters={premierMovies}
          isDark={true}
        />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8" >
          <PosterSlider
          title="Online Streaming Event"
          subject=""
          posters={onlineStreamEvents}
          isDark={false}
        />
        </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
