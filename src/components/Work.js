import React from 'react';

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portifolio-img3.png';
import Img4 from '../assets/portfolio-img4.png'

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
      <div className='text-center mt-16'>
      <h2 className='h2 text-accent my-10' >PROJETOS</h2>
    </div>
        <div className='flex flex-col lg:flex-row gap-x-10'>
 
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}  
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            
            <div className='group relative overflow-hidden border-2
            border-white/50 rounded-x1'>
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              <div className='absolute -bottom-full left-12
              group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Evento Ignite Lab</span>
              </div>
              <a href="https://ignite-lab02-react-bice.vercel.app/" target="_blank" rel="noreferrer">
              <div className='absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Vizualizar</span>
              </div> 

              
            </a>
                      
              
            </div>
            
            <div className='group relative overflow-hidden border-2
            border-white/50 rounded-x1'>
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
              <div className='absolute -bottom-full left-12
              group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Mario Bros</span>
              </div>
              <a href="https://supermariobros.vercel.app/" target="_blank" rel="noreferrer">
              <div className='absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Vizualizar</span>
              </div> 

              
            </a>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }} 
          className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2
            border-white/50 rounded-x1'>
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
              <div className='absolute -bottom-full left-12
              group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Prime Flix</span>
              </div>
              <a href="https://prime-flix-r95fk6xzk-marinarr92.vercel.app/" target="_blank" rel="noreferrer">
              <div className='absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Vizualizar</span>
              </div> 

              
            </a>
            </div>

            <div className='group relative overflow-hidden border-2
            border-white/50 rounded-x1'>
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img4} alt="" />
              <div className='absolute -bottom-full left-12
              group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Super Pizza</span>
              </div>
              <a href="https://github.com/MARINARR92/PizzariaFrontEnd" target="_blank" rel="noreferrer">
              <div className='absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Vizualizar</span>
              </div> 

              
            </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
