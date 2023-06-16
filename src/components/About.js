import React from 'react';


import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

const About = () => {
  const [ref] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat
          h-[640px] mix-blend-lighten bg-top'>
           
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
            <h2 className='h2 text-accent'>Sobre mim</h2>         
            <p className='mb-6'>
            Sou apaixonada com a área de desenvolvimento e estou sempre em busca de novos 
            conhecimentos. Estudo diariamente tecnologias como HTML, CSS, JavaScript, Typescript, ReactJS e 
            NodeJS. 
            Seguindo em constante atualização, buscando novos desafios e me aperfeiçoando 
            com as novas ferramentas do mercado. Meu objetivo é crescer e me desenvolver 
            cada dia mais para alcançar o sonho de me tornar uma programadora de excelência. 
            </p>
                    
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default About;
