'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import HandleCardAnimate from '@/utils/HandleCardAnimate';
import HandleElementAnimateScale from '@/utils/HandleElementAnimateScale';
import HandleElementAnimateLeft from '@/utils/HandleElementAnimateLeft';
import HandleElementAnimateFade from '@/utils/HandleElementAnimateFade';
function ServicesCard({index, service}) {
return (
    <HandleElementAnimateFade key={index} styles="relative flex flex-col items-center h-full">
        {/* Roof */}
        <div className="w-32 h-16 flex justify-center items-end relative z-10">
            <div
                className="w-0 h-0 border-l-32 border-l-transparent border-r-32 border-r-transparent border-b-16 border-b-primary absolute top-0 left-0"
                style={{
                    borderLeftWidth: '64px',
                    borderRightWidth: '64px',
                    borderBottomWidth: '32px',
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderBottomColor: '#1e293b', // Tailwind's primary color fallback
                }}
            ></div>
        </div>
        {/* House Body */}
        <div className="flex flex-col bg-black p-4 pt-8 border-b h-full rounded-b-3xl shadow-md shadow-box-lg border-gray-200 transition-all duration-300 cursor-pointer relative z-20">
            {/* Door (circle image) */}
            <div className="rounded-full p-2 h-[70px] w-[70px] bg-primary self-center -mt-14 shadow-lg border-4 border-white">
                <Image
                    src={service.image}
                    alt={service.title}
                    width={70}
                    height={70}
                    className="object-cover h-full w-full rounded-full"
                />
            </div>
            <HandleElementAnimateScale styles="flex md:flex-col gap-4 mt-4">
                <div>
                    <h3 className="text-lg md:text-xl text-white font-semibold">{service.title}</h3>
                    <p className="text-white/80">{service.description}</p>
                </div>
            </HandleElementAnimateScale>
            <hr className="my-2 border-gray-300" />
            <HandleElementAnimateLeft styles="mt-auto">
                <Link
                    href={service.link}
                    className="text-primary hover:bg-white/50 transition-colors hover:animate-pulse bg-white p-2 rounded-sm w-full text-center mt-auto inline-block"
                >
                    Learn More
                </Link>
            </HandleElementAnimateLeft>
        </div>
    </HandleElementAnimateFade>
)
}

export default ServicesCard