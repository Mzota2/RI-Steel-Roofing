'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Button from '../Button/Button'
import HandleElementAnimateScale from '@/utils/HandleElementAnimateScale';
import { useRouter } from 'next/navigation';
function Advert() {
  const route = useRouter();
  return (
    <>
        <section className='w-full bg-secondary-orange px-5 md:px-0 py-12 mt-8'>
        {/* Video & Animated Text */}
        <div className="flex flex-col mx-auto max-w-[1200px] md:flex-row md:justify-center gap-8">
          <div
            className="flex flex-col justify-center  p-4 rounded-md"
          >
            <h2 className="text-3xl md:text-4xl font-bold  mb-4 animate-bounce bg-white rounded-sm p-2">
              RI Steel & Roofing
            </h2>
            <div className="text-lg md:text-xl text-white/90 font-medium space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className=" bg-primary rounded-sm p-2"
              >
                <span className="font-bold text-secondary-orange">Steel Truss Installation</span> for strong, lasting structures.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className=" md:ml-4 ml-0 bg-secondary-gray rounded-sm p-2"
              >
                <span className="font-bold text-secondary-red">Iron Sheet Installation</span> for reliable roofing.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className=" md:ml-8 md bg-black rounded-sm p-2"
              >
                <span className="font-bold text-primary">Steel Window Fabrication</span> for custom solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="md:ml-12 bg-secondary-red rounded-sm p-2"
              >
                <span className="font-bold text-secondary-gray">Electrical & Plumbing Services</span> for complete peace of mind.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="md:ml-16 bg-primary rounded-sm p-2"
              >
                <span className="font-bold text-white">Your Trusted Partner in Construction Excellence!</span>
              </motion.p>
            </div>
            <Button handleClick={()=>{route.push("/about")}} title={'Learn more'} styles={'md:mt-auto mt-5 self-center text-lg border-2 border-white bg-primary md:w-[200px]'} />
          </div>

          <HandleElementAnimateScale
            styles="p-8 bg-white/60 mx-auto rounded-md shadow-md drop-shadow-2xl w-full max-w-[400px] h-[600px] flex items-center"
          >
            <video
              src="/market.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-md shadow-md drop-shadow-2xl"
            ></video>
          </HandleElementAnimateScale>
        </div>
      </section>
    </>
  )
}

export default Advert