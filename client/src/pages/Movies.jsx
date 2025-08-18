import React from "react";
import { dummyShowsData } from "../assets/assets.js";
import MovieCard from './../components/MovieCard';
import BlurCircle from './../components/BlurCircle';



const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden min-h-[80v]">

        <BlurCircle top="150px" right="0px" />
        <h1 className="text-lg font-medium my-4">Now Showing</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {dummyShowsData.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
        <BlurCircle bottom="70px" left="-90px" />
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">No Movies Available</h1>
    </div>
  );
};

export default Movies;
