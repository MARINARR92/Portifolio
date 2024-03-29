import React, { useState } from 'react';

import { motion } from 'framer-motion'

import { fadeIn } from '../variants';

import emailjs from '@emailjs/browser'



const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || message === ''){
      alert("Preencha todos os campos");
      return;


    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    emailjs.send("service_n3cwekb", "template_9ix9xol", templateParams, "-4VAUYlmy0nbeIgXJ")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log('ERRO: ', err)
    })
  }
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}   
          className='flex-1 flex justify-start items-center'>
            <div>
            
              <h4 className='text-[45px] lg:text-[40px] leading-none mb-12 text-accent uppercase'>
                Entre em contato!
              </h4>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}   
            className='flex-1 border rounded-2x1 flex flex-col gap-y-6
            pb-24 p-6 items-start'
            onSubmit={sendEmail}
          >
            <input 
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all'
              type="text" 
              placeholder='Nome'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all'
              type="text" 
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full
              placeholder:text-white focus:border-accent transition-all
              resize-none mb-12'
              placeholder='Mensagem'
              onChange={(e) => setMessage(e.target.value)}
              value={message} 
            />             
            <button className='btn btn-lg' type="submit">Enviar mensagem</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
