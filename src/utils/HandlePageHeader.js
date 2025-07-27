import React from 'react'
import HandleAnimateFadeUp from '@/utils/HandleAnimateFadeLeft';
import Image from 'next/image'

function HandlePageHeader({title, description, image, Icon}) {
  return (
    <HandleAnimateFadeUp>
        <div className='w-full flex flex-col relative h-fit md:h-[200px] bg-red-400'>
            <div className='px-5 order-1 py-4 z-10  w-full h-full flex flex-col justify-center items-start gap-2 bg-black/50'>
                <div className='w-full flex-col md:flex-row flex items-center gap-4 md:gap-12 lg:gap-24 max-w-[1200px] mx-auto'>
                  <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-white text-2xl md:text-3xl'>{title}</h1>
                      <p className='text-white/80 text-lg'>{description}</p>
                  </div>
                  
                  <div className=''>
                    <div className='flex items-center gap-4 relative bg-secondary-red h-fit px-4'>
                                <div className='w-full'>
                                    <Image className='object-cover' src='/logo.png' width={200} height={150} alt='Company Logo' />
                                </div>
                    
                                <div className='rounded-full p-4 bg-white border-1 border-primary z-20'>
                                    {Icon}
                                </div>
                            </div>
                  </div>
                
                </div>
            </div>
            <Image className='w-full order-2 absolute top-0 left-0 h-full max-h-[500px] object-cover' loading='lazy' src={image || '/theme-background.jpg'} height={500} width={500} alt="Theme background"/>
        </div>
    </HandleAnimateFadeUp>
  )
}

export default HandlePageHeader