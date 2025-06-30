import Image1 from '../assets/see.jpg';
import * as motion from 'motion/react-client';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-8"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8 mb-8"
      >
        <p className="text-xl sm:text-2xl font-medium tracking-wide text-stone-900 text-start max-w-2xl">
          WE BELIEVE THAT PHOTOGRAPHY IS AN ART <br />
          FORM THAT REQUIRES BOTH <br />
          TECHNICAL SKILL AND CREATIVITY
        </p>

        <span className="relative w-full md:w-1/2 mt-6 md:mt-0">
          <p className="absolute border-b-2 top-3 border-stone-900 w-[70%] right-30 mb-4" />
          <p className="absolute right-0 text-sm sm:text-base text-stone-700 font-semibold">
            About Pixlens
          </p>
        </span>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full flex flex-col md:flex-row items-start justify-between gap-6"
      >
        <p className="text-sm sm:text-base font-medium tracking-wide text-stone-900 text-start max-w-2xl">
          At Pixlens, we are passionate about capturing the beauty of the world through our lens.
          Our team of skilled photographers is dedicated to providing you with stunning images that
          tell a story and evoke emotions. Whether it's a wedding, a family portrait, or a
          breathtaking landscape, we strive to create photographs that you will cherish for a
          lifetime.
        </p>

        <img
          src={Image1}
          alt="Photography Example"
          className="w-full md:w-96 h-64 md:h-96 object-cover rounded-sm shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
}
