import React from 'react'
import Image from 'next/image'
import { TargetIcon } from 'lucide-react'
import HandlePageHeader from '@/utils/HandlePageHeader'
import { FaSteam } from 'react-icons/fa6'
import HandleElementAnimateFade from '@/utils/HandleElementAnimateFade'
import HandleElementAnimateFadeRight from '@/utils/HandleElementAnimateFadeRight'
import HandleElementAnimateLeft from '@/utils/HandleElementAnimateLeft'
import HandleElementAnimateRight from '@/utils/HandleElementAnimateRight'
import HandleStaggerTransition from '@/utils/HandleStaggerTransition'
import HandleCardAnimate from '@/utils/HandleCardAnimate'


function About() {

    const coreValues = [
        {
            title:"Quality",
            image:'/quality.jpg'
        },

        {
            title:"Efficiecy",
            image:'/efficiency.jpg'
        },

        {
            title:"Integrity",
            image:'/integrity.jpg'
        },

        {
            title:"Innovation",
            image:'/innovation.jpg'
        },

        {
            title:"Customer Satisfaction",
            image:'/customer-satisfaction.jpg'
        }

    ]

    const visionMission = [
        {
            id:1,
            title:"Mission",
            icon:<TargetIcon size={48} className='text-white'/>,
            description:`Our mission is to provide top-tier steel and roofing solutions that combine durability, quality, and efficiency, ensuring that our clients' projects are completed with the highest standards of workmanship and professionalism`
        },
        {
            id:2,
            title:"Vision",
            icon: <TargetIcon size={48} className='text-white'/>,
            description:`To become the leading provider of innovative steel roofing and fabrication solutions in Malawi, recognised for our superior quality, reliability, and exceptional customer service.`
        }
    ]
  return (
    <div>
        <HandlePageHeader Icon={<FaSteam className='text-4xl text-primary' />} title={'ABOUT US'} description={'Learn more about us'} />

        {/* Overview */}
        <div className='px-5 py-4 md:px-0 max-w-[1200px] mx-auto'>
            <HandleElementAnimateRight styles='flex flex-col gap-4 max-w-[800px]'>
                <h2 className="font-semibold text-lg">Company Overview</h2>
                <p className="">{`R & I Steel is a Malawian-owned company based in Blantyre. Established in 2023, we specialise in Steel Truss Installation, Iron Sheet Installation, Steel Window Fabrication, Plumbing and Electrical Installation. Our commitment to quality and efficiency makes us a trusted partner for construction projects, offering reliable roofing and structural solutions under one roof.`}</p>
            </HandleElementAnimateRight>
        </div>

        {/* Mission, Vision and Core Values */}

        <div className='max-w-[1200px] mx-auto px-5 md:px-0'>
            {/* Mission */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                <div className='flex flex-col md:flex-row md:col-span-2 gap-4'>
                     {
                    visionMission.map((item, index)=>{
                        return(
                            <HandleElementAnimateRight key={item.id} styles={`flex flex-col items-center gap-4 p-5 ${index === 0 ? 'bg-secondary-orange':'bg-primary'} rounded-md`}>
                                {item.icon}
                                <h2 className='font-medium text-center text-white'>{item.title}</h2>
                                <p className='text-white/80'>{item.description}</p>
                            </HandleElementAnimateRight>
                        )
                    })
                }
                </div>
               

                {/* Core Values */}

                <div className='flex flex-col gap-4 p-5 bg-white col-span-2 rounded-md'>
                    <HandleElementAnimateRight styles='font-semibold text-lg'>Our Core Values</HandleElementAnimateRight>
                    <HandleStaggerTransition styles='grid grid-cols-2 md:grid-cols-5 gap-4'>
                        {coreValues.map((value, index) => (
                            <HandleCardAnimate key={index} styles='flex cursor-pointer relative h-[200px] group flex-col items-center gap-2  bg-white rounded-md shadow-md'>
                            
                                <Image 
                                    src={value.image} 
                                    alt={value.title} 
                                    width={200} 
                                    height={200} 
                                    className='w-full z-0 h-full object-cover rounded-md' />
                                    
                                <div className='absolute flex flex-col justify-center items-center w-full h-full z-[10] bg-black/50  group-hover:bg-black/10 focus:bg-black/30 transition-opacity duration-300 rounded-md'  >
                                    <h3 className='font-semibold text-center text-white'>{value.title}</h3>
                                </div>
                                

                            </HandleCardAnimate>
                        ))}
                    </HandleStaggerTransition>
                    <hr className='my-2 border-[2px] border-primary' />
                </div>

                {/* Why Choose Us */}
                <div className='w-full col-span-2 bg-white p-5 rounded-md'>
                    <HandleElementAnimateRight styles='font-semibold text-lg'>Why Choose Us</HandleElementAnimateRight>
                    <HandleStaggerTransition styles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 rounded-md w-full'>
                        {
                            [
                                "✔ Assurance of high quality products",
                                "✔ Professional Workmanship",
                                "✔ Efficiency",
                                "✔ Portability"]    
                                .map((item, index) => (
                                    <HandleElementAnimateFadeRight key={index} styles='p-2 rounded-md shadow-md drop-shadow-2xl bg-secondary-orange/60'>
                                        <p>{item}</p>
                                    </HandleElementAnimateFadeRight>
                                ))
                        }
                    </HandleStaggerTransition>
                </div>
            
            </div>

        </div>

    </div>
  )
}

export default About