import React from 'react';
import { motion } from "motion/react"
import { easeIn } from 'motion';
const Fuck = () => {
  return (
    <div>
      <motion.img  
      initial={{x:0 , y :0}} 
      animate={{x:[0,400,400,0],y:[0,0,400,400]}}
      transition={{duration:4,repeat:Infinity,ease:easeIn}}

      src='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png'></motion.img>
    </div>
  );
};

export default Fuck;
