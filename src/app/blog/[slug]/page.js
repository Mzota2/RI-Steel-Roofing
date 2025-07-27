import React from 'react'
import Image from 'next/image';
import { EyeIcon, Heart, Share, Timer } from 'lucide-react';
import HandlePageHeader from '@/utils/HandlePageHeader';
import { FaBlog } from 'react-icons/fa6';
import HandleAnimateFadeLeft from '@/utils/HandleAnimateFadeLeft';
import HandleElementAnimateFade from '@/utils/HandleElementAnimateFade';
import HandleAnimateUp from '@/utils/HandleAnimateUp';
function BlogPage() {
  return (
    <div>
        <HandlePageHeader Icon={<FaBlog className='text-4xl text-primary' />} image='/background.jpg' title='Steel Truss Installation' description='Take a look at some of our steel truss installation projects'/>
        <div className='max-w-[1200px] mx-auto px-5 md:px-0 md:flex py-8'>
            <div className='py-4 flex flex-col gap-4'>
                <HandleElementAnimateFade styles='text-black/70 max-w-[800px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, cumque. Eos laudantium nisi accusantium sequi omnis porro asperiores est nobis.

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae consectetur laborum officia neque explicabo, facilis veritatis laudantium eius itaque veniam obcaecati, a distinctio molestias, culpa nam odit debitis earum ipsum.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laudantium ab dolorum eligendi. Perspiciatis velit iure, porro officiis explicabo voluptatibus animi ratione minus sequi! Ex esse, officia amet perspiciatis laboriosam velit ullam reiciendis minus facere sint nemo excepturi quibusdam libero.
                </HandleElementAnimateFade>
            </div>

            <HandleAnimateUp styles='md:ml-auto md:flex md:flex-col bg-secondary-red flex md:items-baseline items-center justify-between p-4 text-sm'>
                <div className='flex items-center gap-1 text-white/80'>
                    <Timer size={15} className='text-primary md:hidden'/>
                    <Timer size={24} className='text-primary md:block hidden'/>
                    <p>14min</p>
                </div>

                <div className='flex items-center gap-1 text-white/80'>
                    <Heart size={15} className='text-primary md:hidden'/>
                    <Heart size={24} className='text-primary md:block hidden'/>
                    <p>10 likes</p>
                </div>

                <div className='flex items-center gap-1 text-white/80'>
                    <EyeIcon size={15} className='text-primary md:hidden'/>
                    <EyeIcon size={24} className='text-primary md:block hidden'/>
                    <p>14 views</p>
                </div>

                <div className='flex items-center gap-1 text-white/80'>
                    <Share size={15} className='text-primary md:hidden'/>
                    <Share size={24} className='text-primary md:block hidden'/>
                    <p>Share</p>
                </div>
            </HandleAnimateUp>
        </div>
        
    </div>
  )
}

export default BlogPage