import React from 'react'
import Image from 'next/image'
import { Hand, ToolCase } from 'lucide-react'
import HandlePageHeader from '@/utils/HandlePageHeader'
import HandleCardAnimate from '@/utils/HandleCardAnimate'
import HandleElementAnimateFadeRight from '@/utils/HandleElementAnimateFadeRight'
import HandleStaggerTransition from '@/utils/HandleStaggerTransition'
import HandleElementAnimateRight from '@/utils/HandleElementAnimateRight'
import Button from '@/components/Button/Button'
function Service() {
  const projects = [
    {
      title:"4 Bed Room House",
      description:`Steel Truss Installation and more about the service how the company started and more about the company`,
      images:['/image1.jpg', '/image2.jpg'],
      slug:"4-bed-room-house"
    },

     {
      title:"4 Bed Room House",
      description:`Steel Truss Installation and more about the service how the company started and more about the company`,
      images:['/image1.jpg', '/image2.jpg'],
      slug:"4-bed-room-house"
    }
  ]
  return (
    <div>
      <HandlePageHeader Icon={<ToolCase size={32} className='text-4xl text-primary' />} title='Steel Truss Installation' description='Take a look at some of our steel truss installation projects'/>
      <div className='max-w-[1200px] mx-auto px-5 py-4 flex-col gap-4'>

        <div>

          {projects?.map((project, index) => (
            <HandleElementAnimateRight key={index} styles='flex border-t-2 border-primary  py-4 borde flex-col gap-4 mb-8'>
              <h2 className='font-semibold text-lg'>{project.title}</h2>
              <p className='text-black/80 max-w-[800px]'>{project.description}</p>
              <HandleStaggerTransition styles='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {project.images.map((image, idx) => (
                  <HandleCardAnimate styles='bg-white/30 p-2 md:p-4 rounded-md shadow-sm drop-shadow-2xl' key={idx}>
                      <Image  src={image} alt={`Project Image ${idx + 1}`} width={500} height={500} className='w-full h-full rounded-sm object-cover' />
                  </HandleCardAnimate>
                ))}
              </HandleStaggerTransition>
              <Button styles='px-4 cursor-pointer hover:bg-primary/80 focus:bg-primary/80 rounded-md max-w-[300px] py-2 bg-primary text-white border-none' title={'Get similar service'}/>
            </HandleElementAnimateRight>
          ))}

        </div>
      </div>

    </div>
  )
}

export default Service