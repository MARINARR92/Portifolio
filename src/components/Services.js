import React from 'react';


import { motion } from 'framer-motion'

import { fadeIn } from '../variants'


const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }} 
          className='flex-1 lg:bg-bottom
          bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <div className='text-center mt-16'>
      <h2 className='h2 text-accent'>Formação</h2>
    </div>

    <div className='border-b border-white/20 h-[146px] mb-[38px]
                  flex'>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[14px] font-semibold my-2.5 text-gradient'>2013 - 2022</h4>
                      <h5 className='text-2xl font-bold mt-6'>Graduação em Ciência da Computação</h5>
                      <h6 className='text-[18px] font-medium text-accent'>Centro Universitário de Formiga</h6>
                    </div>

  
      </div>

      <div className='border-b border-white/20 h-[178px] mb-[38px]
                  flex'>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[14px] font-semibold my-2.5 text-gradient'>2010 - 2013</h4>
                      <h5 className='text-2xl font-bold mt-6'>Técnico em Informática</h5>
                      <h6 className='text-[18px] font-medium text-accent'>Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais</h6>
                    </div>

  
      </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }} 
          className='flex-1'>
           <div className='text-center mt-16'>
     <h2 className='h2 text-accent'>Experiências</h2>
   </div>

 

      <div className='border-b border-white/20 h-[274px] mb-[38px]
                  flex'>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[14px] font-semibold my-2.5 text-gradient'>2012 - 2013</h4>
                      <h5 className='text-2xl font-bold mt-6'>Técnico em Informática</h5>
                      <p className='font-light my-5 text-xl'>Manutenção de computadores: formatação, instalação de software,
            diagnóstico de problemas na rede e suporte aos usuários.</p>
                     
                      <h6 className='text-[18px] font-medium text-accent'>Centro Universitário de Formiga</h6>
                      
                    </div>

  
      </div>
      <div className='border-b border-white/20 h-[300px] mb-[38px]
                  flex'>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[14px] font-semibold my-2.5 text-gradient'>2010 - atual</h4>
                      <h5 className='text-2xl font-bold mt-6'>Auxiliar Administrativo</h5>
                      <p className='font-light my-5 text-xl'>Faturamento de nfe, entrada de notas, sped fiscal, gestão de logística e
estoque, auxílio no marketing, atendimento ao cliente, produção de planilhas
e relatórios, controle financeiro.</p>
                      <h6 className='text-[18px] font-medium text-accent'>Distribuidora de Produtos Alimentícios RS Ltda</h6>
                    </div>

  
      </div>
          </motion.div>
        </div>
      </div>
    </section>
    
  );
};

export default Services;
