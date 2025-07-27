'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import HandleCardAnimate from '@/utils/HandleCardAnimate';
import HandleElementAnimateScale from '@/utils/HandleElementAnimateScale';
import HandleElementAnimateLeft from '@/utils/HandleElementAnimateLeft';
function ServicesCard({index, service}) {
  return (
     <HandleCardAnimate key={index} styles={`border-b flex flex-col rounded-md shadow-md shadow-box-lg border-gray-200 p-4 transition-all duration-300 cursor-pointer ${index === 0 ? 'bg-secondary-red': index === 1? 'bg-primary' : index === 2 ? 'bg-secondary-orange' : index === 3 ?  'bg-secondary-gray ': 'bg-black'}`}>
        <HandleElementAnimateScale styles="flex md:flex-col gap-4">
        <div>
            <Image src={service.image} alt={service.title} width={100} height={100} className="mt-2 object-cover rounded-md shadow-lg" />
        </div>
        <div>
            <h3 className="text-lg md:text-xl text-white font-semibold">{service.title}</h3>
            <p className="text-white/80">{service.description}</p>
        </div>
        </HandleElementAnimateScale>

        <hr className="my-2 border-gray-300" />

        <HandleElementAnimateLeft
        styles="w-full flex flex-col h-full"
        >
        <Link
            href={service.link}
            className="text-primary hover:bg-white/50 transition-colors hover:animate-pulse bg-white p-2 rounded-sm w-full text-center mt-auto inline-block"
        >
            Learn More
        </Link>
        </HandleElementAnimateLeft>
    </HandleCardAnimate>
  )
}

export default ServicesCard