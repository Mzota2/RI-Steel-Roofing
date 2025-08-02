'use client';
import React from 'react'
import Image from 'next/image'
import { Search, Timer } from 'lucide-react'
import Link from 'next/link';
import HandlePageHeader from '@/utils/HandlePageHeader';
import { FaBlog } from 'react-icons/fa6';
import HandleElementAnimateFade from '@/utils/HandleElementAnimateFade';
import HandleStaggerTransition from '@/utils/HandleStaggerTransition';
import HandleCardAnimate from '@/utils/HandleCardAnimate';

const extractTextFromHTML = (passedInHTML) => {
  if (typeof window === 'undefined') {
    // Server-side: use a regex to strip HTML tags
    return passedInHTML.replace(/<[^>]+>/g, '');
  }
  // Client-side: use DOM
  const div = document.createElement('div');
  div.innerHTML = passedInHTML;
  return div.textContent || div.innerText || '';
}
function Blog() {

  const blogList = [

    {
      
      title:"Steel Truss Installation",
      image:'/background.jpg',
      description:`<p>Steel Truss Installation and more about the service how the company started and about the company</p>`
    },

     {
      
      title:"Steel Truss Installation",
      image:'/background.jpg',
      description:`<p>Steel Truss Installation and more about the service how the company started and about the company</p>`
    },

     {
      
      title:"Steel Truss Installation",
      image:'/background.jpg',
      description:`<p>Steel Truss Installation and more about the service how the company started and about the company</p>`
    },

    {
      
      title:"Steel Truss Installation",
      image:'/background.jpg',
      description:`<p>Steel Truss Installation and more about the service how the company started and about the company</p>`
    }
  ]
  return (
    <div>
      <HandlePageHeader Icon={<FaBlog className='text-4xl text-primary'/>} title="BLOG" description="Read our stories, updates and promotions" />
      {/* Blogs */}

      <div className='px-0 md:px-0 py-5 bg-white/60'>
        <div className='px-5 py-4 flex flex-col gap-4 max-w-[1200px] mx-auto'>
          <HandleElementAnimateFade>
             <h2 className='font-medium text-lg'>Browse Our Stories, Updates and Promotions</h2>
          </HandleElementAnimateFade>
         
          <HandleElementAnimateFade styles='flex items-center gap-4 overflow-x-auto'>
            <button className='px-4 text-sm md:text-base rounded-sm hover:bg-secondary-red border-none py-2 bg-primary text-white'>Stories</button>
            <button className='px-4 text-sm md:text-base  rounded-sm hover:bg-primary border-none py-2 bg-background text-black'>Promotions</button>
            <button className='px-4 text-sm md:text-base rounded-sm hover:bg-primary border-none py-2 bg-background text-black'>Update</button>
          </HandleElementAnimateFade>

          <HandleElementAnimateFade styles='h-[50px] p-4 w-full rounded-full flex items-center gap-4 bg-background'>
            <Search className='text-primary'/>
            <input type="text" className='w-full border-none outline-none' placeholder='Search Blogs...' />
          </HandleElementAnimateFade>

          {/* Blogs List */}

          <HandleStaggerTransition styles ='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {blogList.map((blog, index) => (
              <HandleCardAnimate key={index} styles='flex cursor-pointer flex-col gap-2 bg-white rounded-sm shadow-md drop-shadow-2xl'>
                <Image src={blog.image} alt={blog.title} width={500} height={300} className='w-full h-[200px] object-cover rounded-t-sm hover:animate-pulse focus:animate-pulse' />
                
                <div className='p-4 flex flex-col gap-2'>
                  <div className='flex items-center justify-between'>
                    <h3 className='font-semibold md:text-lg'>{blog.title}</h3>
                    <div className='flex items-center gap-2'>
                      <Timer className='text-secondary-red'/>
                      <p>24min</p>
                    </div>
                  </div>
          
                  <p className='text-sm text-black/70'>{extractTextFromHTML(blog.description)?.substring(0, 100)}...</p> <Link className='text-primary hover:underline' href={`/blog/${blog?.title}`}>Read more</Link>
              
                </div>
                
              </HandleCardAnimate>
            ))}
          </HandleStaggerTransition>
        </div>
      </div>
    </div>
  )
}

export default Blog