import { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets.js';
import Loading from '../components/Loading';
import { Clock } from 'lucide-react';
import isoTimeFormat from './../lib/isoTimeFormat';
import BlurCircle from '../components/BlurCircle.jsx';
import { toast } from 'react-hot-toast';
import { ArrowRight } from 'lucide-react';

const SeatLayout = () => {

  const groupRows = [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"]];
  const {id, date} = useParams();
  const [selectSeats, setSelectSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();


  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id === id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData,
      });
    }
  };


  useEffect(() => {
    getShow();
  }, []);


    const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast.error("Please select a time first");
    }

    if (!selectSeats.includes(seatId) && selectSeats.length > 4) {
      return toast.error("You can select maximum 5 seats");
    } 
      setSelectSeats(prev => prev.includes(seatId) ? prev.filter(item => item !== seatId) : [...prev, seatId]);
  };


  const renderSeats =(row, count = 9)=>(
    <div key={row} className='flex gap-2 mt-2'>
        <div className='flex flex-wrap items-center justify-center gap-2'>
            {Array.from({length: count}, (_, index) => {
              const seatId = `${row}${index + 1}`;
              return (
                <button onClick={() => handleSeatClick(seatId)} key={seatId} className={`h-8 w-8 rounded border border-primary/60 cursor-pointer ${selectSeats.includes(seatId) && "bg-primary/50 text-white"}`}>
                  {/* Render seat here */}
                  {seatId}
                </button>
              );
            })}
        </div>
    </div>
  )





  return show ? (
    <div className='flex flex-col  md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>

      {/* Available Times */}
      <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky top-30'>
          <p className='text-lg font-semibold px-6'>Available Times</p>
          <div className='mt-5 space-y-1'>
            {show.dateTime[date].map((item) => (
              <div key={item.time} className={`flex items-center gap-2 px-6 p-2  w-max rounded-r-md cursor-pointer transistion ${selectedTime?.time === item.time ? "bg-primary/50 text-white" : "hover:bg-primary/40" }`} onClick={() => setSelectedTime(item)}>
                <Clock className='w-4 h-4 text-primary' />
                <p className='text-sm'>{isoTimeFormat(item.time)}</p>
              </div>
            ))} 
          </div>
      </div>


      {/* Seat Layout */}
      <div className='relative flex flex-1 items-center flex-col  max-md:mt-16'>
          <BlurCircle top="-100px" left="-100px" />
          <BlurCircle bottom="0px" right="0px" />

          <h1 className='text-2xl font-semibold mb-4'>Select Your Seat</h1>
          <img src={assets.screenImage} alt="seat layout" className='' />
          <p className='text-gray-400 text-sm mb-6'>SCREEN SIDE</p>

          <div className='flex flex-col items-center mt-5 text-xs text-gray-300'>
            <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
              {groupRows[0].map((row, index) => (
                renderSeats(row)
              ))}
            </div>
          </div>

          <div className='flex flex-row items-center mt-5 text-xs text-gray-300 gap-10'>
            
            <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
              {groupRows[1].map((row, index) => (
                renderSeats(row)
              ))}
            </div>

            <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
              {groupRows[2].map((row, index) => (
                renderSeats(row)
              ))}
            </div>

          </div>


          <div className='flex flex-row items-center mt-2 text-xs text-gray-300 gap-10'>
            
            <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
              {groupRows[3].map((row, index) => (
                renderSeats(row)
              ))}
            </div>

            <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
              {groupRows[4].map((row, index) => (
                renderSeats(row)
              ))}
            </div>

          </div>

            <button onClick={() => navigate("/my-bookings")} className='flex items-center gap-2 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'>
              Proceed to Payment
              <ArrowRight className='w-5 h-5' />
            </button>

      </div>

    </div>
  ) : (
    <Loading />
  );
}

export default SeatLayout