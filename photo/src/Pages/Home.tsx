import Image1 from '../assets/pexels.jpg';
import CallMadeSharpIcon from '@mui/icons-material/CallMadeSharp';
import * as motion from 'motion/react-client';
import { useNavigate } from 'react-router';

export default function Home() {
      const navigate = useNavigate()
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <img
        src={Image1}
        alt="Photography Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
      />

      <motion.span
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="absolute flex flex-row items-end left-5 top-1/4 sm:top-1/3 md:left-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-widest leading-tight">
          Capture Life's <br />
          Moments with <br />
          FlitsPixels
          <span className="pl-2 cursor-pointer transition duration-300 inline-block">
            <CallMadeSharpIcon className="text-white" fontSize="large" />
          </span>
        </h1>
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="absolute right-5 bottom-16 sm:right-10 sm:bottom-10 flex flex-col items-start"
      >
        <p className="text-sm sm:text-base text-white font-medium leading-6">
          Explore the world through our lens. <br />
          Discover stunning photography that tells a story.
        </p>

        <button onClick={()=> navigate("/contact/#form")} className="mt-4 cursor-pointer px-4 py-2 bg-yellow-800 text-white rounded-md font-semibold tracking-wide shadow-md hover:bg-yellow-700 transition">
          BOOK A SESSION NOW <CallMadeSharpIcon fontSize="small" className="inline-block ml-2" />
        </button>
      </motion.span>
    </div>
  );
}
