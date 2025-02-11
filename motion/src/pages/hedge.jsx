import React from 'react'
import { motion } from "motion/react"
// import { easeIn } from 'motion';
const Hedge = () => {
  return (
    <div>
        <div className="pokemon"></div>
        <motion.img 
        // whileDrag={{scale:0.3}}
        initial={{scale:1,opacity:0}}
        drag
        // whileHover={{scale:2 , opacity:1}}
        whileTap={{scale:0.5}}
        whileInView={{opacity:1 ,scale:2}}
        transition={{duration:2}}
        src='https://imgv3.fotor.com/images/homepage-feature-card/Car-PNG.jpg'></motion.img>
    </div>
  );
};

export default Hedge;