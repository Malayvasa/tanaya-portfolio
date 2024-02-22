import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 3,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center bg-zinc-100">
      <NameSVG />

      <div className="font-rounded text-zinc-400">
        Illustrator & Graphic Designer
      </div>
      <motion.div
        className="flex gap-4 mt-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {['Work', 'Play', 'About'].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white h-max font-rounded select-none cursor-pointer px-2 py-1 rounded-lg text-zinc-600"
            variants={itemVariants}
            whileTap={{
              boxShadow: '0px 0px 0px #E5E5E5',
            }}
            transition={{
              duration: 0.2,
            }}
            style={{
              boxShadow: '0px 4px 0px #E5E5E5',
            }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>

      {/* <motion.div
        whileTap={{
          scale: 0.9,
        }}
        whileHover={{
          opacity: 1,
          rotate: 8,
          scale: 1.05,
          translateX: '85%',
          translateY: '-45%',
        }}
        initial={{
          opacity: 0,
          scale: 0.9,
          translateX: '85%',
          translateY: '-45%',
          rotate: 0,
          transition: {
            delay: 4,
          },
        }}
        animate={{
          opacity: 1,
          scale: 1,
          translateX: '85%',
          translateY: '-45%',
          rotate: 12,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        className="w-[200px] h-[200px] bg-white border-gray-100 shadow-lg z-40 rounded-lg"
      ></motion.div>
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        whileHover={{
          opacity: 1,
          rotate: -54,
          scale: 1.05,
          translateX: '-65%',
          translateY: '-45%',
        }}
        initial={{
          opacity: 0,
          scale: 0.9,
          translateX: '-65%',
          translateY: '-45%',
          rotate: 0,
          transition: {
            delay: 4,
          },
        }}
        animate={{
          opacity: 1,
          scale: 1,
          translateX: '-65%',
          translateY: '-45%',
          rotate: -62,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        className="absolute w-[400px] h-[200px] bg-white border-gray-100 shadow-lg z-40 rounded-lg"
      ></motion.div> */}
    </div>
  );
}

function NameSVG() {
  const draw = {
    hidden: { strokeDashoffset: 1, opacity: 0, pathLength: 0 },
    visible: (i) => ({
      strokeDashoffset: 0,
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: {
          delay: i * 0.2,
          type: 'spring',
          stiffness: 50,
          damping: 20,
        },
        opacity: { delay: i * 0.2, duration: 0.25 },
        strokeDashoffset: {
          delay: i * 0.2,
          type: 'spring',
          stiffness: 50,
          damping: 20,
        },
      },
    }),
  };
  return (
    <motion.div
      className=" origin-center -translate-x-[5%]"
      transition={{ delay: 4, type: 'spring', stiffness: 200, damping: 30 }}
    >
      <div className="">
        <motion.svg
          width="300"
          viewBox="0 0 260 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-zinc-700 z-20 filter"
        >
          <defs>
            <filter id="turb">
              <feTurbulence baseFrequency="15" numOctaves="2" />
              <feDisplacementMap in="SourceGraphic" scale="1" />
            </filter>
          </defs>
          <motion.path
            d="M2 10.9978L55.1421 7.81987M33.9559 9.08682V35.5385"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            variants={draw}
            initial="hidden"
            custom={1} // delay multiplier for animation
            animate="visible"
          />
          <motion.path
            d="M56.9075 23.533C52.376 22.1206 41.5477 25.2985 43.8428 37.1275C46.6677 39.7757 52.7291 34.7146 56.9075 23.533ZM56.9075 23.533C58.1434 24.2058 55.7776 39.3873 58.3199 37.1275C60.8623 34.8676 68.0303 18.9426 68.0303 22.6502V35.715C68.0303 38.1868 76.5401 20.0019 78.0937 23.533C80.0358 27.9468 77.5641 34.7989 82.5076 35.3286"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            variants={draw}
            initial="hidden"
            custom={2} // delay multiplier for animation
            animate="visible"
          />
          <motion.path
            d="M99.2801 24.0626C99.2801 24.0626 95.9109 33.4542 100.869 34.4458C103.517 34.9755 109.66 21.7675 109.66 24.4157C109.66 27.064 110.191 36.8097 114.287 32.7137C119.407 27.5937 122.055 19.1192 122.055 24.0626C122.055 27.064 124.047 44.9113 121.172 48.0737C117.641 51.9578 111.815 48.3679 108.814 47.1909M99.2801 24.0626C99.8097 20.3217 87.0981 21.7376 87.098 32.7137C87.098 36.9509 96.6318 30.595 99.2801 24.0626Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            variants={draw}
            initial="hidden"
            custom={3} // delay multiplier for animation
            animate="visible"
          />
          <motion.path
            d="M147.635 34.6963C137.042 39.2867 140.441 24.8094 140.441 24.8094M140.441 24.8094C141.819 19.5129 129.627 23.5736 128.258 33.4605C127.678 37.6577 137.792 31.3419 140.441 24.8094Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            variants={draw}
            initial="hidden"
            custom={4} // delay multiplier for animation
            animate="visible"
          />
          <motion.path
            d="M149.95 10.4681C161.662 4.99504 194.618 -2.94979 197.619 6.584C200.621 16.1178 181.906 17.236 165.487 15.7647M178.905 9.05573V34.6557"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            variants={draw}
            initial="hidden"
            custom={5} // delay multiplier for animation
            animate="visible"
          />
          <motion.path
            d="M200.468 27.2812C200.468 27.2812 198.326 43.1302 204.681 33.9495C206.27 31.5367 209.13 26.5697 207.859 26.0047C206.588 25.4397 210.508 26.3578 212.626 26.8875C214.215 27.4171 209.205 35.1316 212.626 36.5978C215.098 37.6571 217.217 34.4792 217.57 33.9495M200.468 27.2812C201.847 21.9846 189.654 26.0453 188.286 35.9322C187.705 40.1294 197.796 33.5964 200.468 27.2812Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            variants={draw}
            initial="hidden"
            custom={6} // delay multiplier for animation
            animate="visible"
          />
          <motion.path
            d="M222.69 12.2337V38.3633C222.69 38.5399 223.134 33.5765 224.261 30.9482M233.106 24.0626C228.453 24.3835 225.744 27.492 224.261 30.9482M224.261 30.9482C224.561 32.1252 226.856 34.0202 233.636 32.184"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            variants={draw}
            initial="hidden"
            custom={7} // delay multiplier for animation
            animate="visible"
          />
          <motion.path
            d="M239.639 15.9413V36.5978C239.639 38.0102 246.807 23.4977 247.23 26.1813C247.76 29.5357 247.76 37.4806 250.408 36.0682C252.527 34.9382 256.588 23.3564 256.588 25.6516V36.0682"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            variants={draw}
            initial="hidden"
            custom={8} // delay multiplier for animation
            animate="visible"
          />
          <motion.path
            d="M258 14.5288L256.588 17.8833"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            variants={draw}
            initial="hidden"
            custom={9} // delay multiplier for animation
            animate="visible"
          />
        </motion.svg>
      </div>
    </motion.div>
  );
}
