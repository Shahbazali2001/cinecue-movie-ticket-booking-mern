import { useState } from 'react'
import { dummyTrailers } from '../assets/assets.js';
import ReactPlayer from "react-player";
import BlurCircle from './BlurCircle';
import { LucidePlayCircle } from 'lucide-react';

const TrailersSection = () => {

  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[1]);
  console.log(currentTrailer);




  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

      <div className='relative mt-6'>
        <BlurCircle top="-100" right="-100px" />
        <ReactPlayer
          url={currentTrailer.videoUrl}
          controls={false}
          width="100%"
          height="540px"
        />
      </div>
       {/* Multiple Images */}
      <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
        {dummyTrailers.map((trailer) => (
           <div onClick={() => setCurrentTrailer(trailer)} key={trailer.image} className='relative flex items-center justify-center cursor-pointer'>
              <img src={trailer.image} alt="trailer" className="rounded-lg w-full h-full object-cover brightness-75" />
              <LucidePlayCircle strokeWidth={2} className='absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition duration-300'/>
           </div>
        ))}
      </div>
    </div>
  )
}
export default TrailersSection