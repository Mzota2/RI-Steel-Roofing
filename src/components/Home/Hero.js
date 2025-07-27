
import React from 'react'
import HandleAnimateUp from '@/utils/HandleAnimateUp'
import Carousel from '../HomeAnimation/Carousel';
import Image from 'next/image';
function Hero() {
  return (
    <div>
        {/* Hero Section */}
      <section className="py-4 max-w-[1200px] mx-auto md:px-0 px-5" >
        <div className="container mx-auto text-center">
          <HandleAnimateUp>
            <div className="md:hidden order-2 flex flex-col gap-4 max-w-[600px] mb-5">
            <div className="bg-white text-black p-4 rounded-sm shadow-md box-shadow-lg flex flex-col items-center justify-center">
              <h1 className="text-xl text-primary font-bold mb-4">
                Welcome to R & I Steel Roofing
              </h1>
              <div className="h-12 bg-primary mx-auto w-12 rounded-full flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="R & I Steel Roofing Logo"
                  width={200}
                  height={200}
                  priority
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-lg mt-2">
                Your trusted partner for steel and roofing solutions.
              </p>
            </div>
            </div>
          </HandleAnimateUp>
          
          <HandleAnimateUp>
            <Carousel />
          </HandleAnimateUp>
        </div>
      </section>
    </div>
  )
}

export default Hero