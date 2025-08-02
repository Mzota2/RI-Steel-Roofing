import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HandleAnimateFadeUp from '@/utils/HandleAnimateFadeLeft';
import HandlePageHeader from '@/utils/HandlePageHeader';
import { ToolCase } from 'lucide-react';
import HandleStaggerTransition from '@/utils/HandleStaggerTransition';
import HandleCardAnimate from '@/utils/HandleCardAnimate';
import HandleElementAnimateRight from '@/utils/HandleElementAnimateRight';
import HandleElementAnimateScale from '@/utils/HandleElementAnimateScale';
import HandleLoadingElement from '@/utils/HandleLoadingElement';
function Services() {
    const services = [
    {
      title: "Steel Truss Installation",
      description: "Professional steel truss installation services using high-quality materials.",
      images: ['/image1.jpg', '/image2.jpg', '/image3.jpg'],
      link: "/services/steel-truss-installation"
    },

    {
      title: "Iron Sheet Installation",
      description: "Custom iron sheet installation for various construction needs.",
      images:['/image1.jpg', '/image2.jpg', '/image3.jpg'],
      link: "/services/iron-sheet-installation"
    },

    {
      title: "Steel Window Fabrication",
      description: "Custom steel window fabrication for various construction needs.",
      images:['/image1.jpg', '/image2.jpg', '/image3.jpg'],
      link: "/services/steel-window-fabrication"
    }, 

    {
      title:"Electrical Installation",
      description: "Expert electrical installation services for residential and commercial properties.",
      images:['/image1.jpg', '/image2.jpg', '/image3.jpg'],
      link: "/services/electrical-installation"
    },

    {
      title:"Plumbing Services",
      description: "Reliable plumbing services for all your residential and commercial needs.",
      images:['/image1.jpg', '/image2.jpg', '/image3.jpg'],
      link: "/services/plumbing-services"
    }
    ]
  return (
    <div>
        <HandlePageHeader Icon={<ToolCase size={32} className='text-4xl text-primary' />} title={'OUR SERVICES'} description={'Take a look at what we offer'}/>
         {/* Service Section */}
        <section className="py-4 px-5 max-w-[1200px] mx-auto md:px-0">
            <div className="flex flex-col gap-5 mt-5">
              {services.map((service, index) => (
                <div key={index} className={`border-b flex flex-col gap-4 rounded-md  border-gray-200`}>
                    
                    <HandleElementAnimateRight styles="flex  gap-4">
                      <div>
                          <h3 className="text-lg md:text-2xl font-semibold">{service.title}</h3>
                          <p className="text-black/80 max-w-[800px]">{service.description}</p>
                      </div>
                    </HandleElementAnimateRight>
                    
                    <hr className="my-2 border-primary/70" />

                    <HandleStaggerTransition styles='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {service.images.map((image, index) => (
                          <HandleLoadingElement  key={index}>
                            <HandleCardAnimate styles='bg-white/30 p-2 md:p-4 rounded-md shadow-sm drop-shadow-2xl'>
                              <Image 
                                src={image} 
                                alt={`${service.title} image ${index + 1}`} 
                                width={200} 
                                height={200} 
                                className='w-full h-full object-cover rounded-md cursor-pointer hover:animate-pulse focus:animate-pulse' />
                          </HandleCardAnimate>
                          </HandleLoadingElement>
                          
                            
                        ))}
                    </HandleStaggerTransition>
                    <HandleElementAnimateScale styles={'ml-auto'}>
                          <Link href={service.link} className="text-primary  bg-white p-2 px-4 rounded-sm  text-center mt-2 inline-block hover:bg-primary hover:text-white hover:animate-pulse">Learn More</Link>
                    </HandleElementAnimateScale>
                    
                </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Services