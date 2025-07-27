import React from 'react'
import Image from 'next/image'
import { ContactIcon, LocateIcon, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa6'
import HandlePageHeader from '@/utils/HandlePageHeader'
import HandleElementAnimateFadeRight from '@/utils/HandleElementAnimateFadeRight'
import HandleElementAnimateScale from '@/utils/HandleElementAnimateScale'
import HandleElementAnimateRight from '@/utils/HandleElementAnimateRight'
import HandleElementAnimateFade from '@/utils/HandleElementAnimateFade'
function Contact() {
  return (
    <div className=''>
      <HandlePageHeader Icon={<ContactIcon size={32} className='text-4xl text-primary' />} title='CONTACT US' description='Get in touch with us for any inquiries or support.'/>
      <section className=' flex flex-col gap-4 mt-5 '>
          
          <HandleElementAnimateRight styles='bg-white md:rounded-md w-full  max-w-[1200px] flex mx-auto px-5 py-4 flex-col gap-4'>
              <HandleElementAnimateFadeRight styles='font-semibold text-lg md:text-2xl'>How to find us ?</HandleElementAnimateFadeRight>
              <HandleElementAnimateFadeRight styles='text-black/80'>You can send us a message on WhatsApp, Email us or Visit our offices for more info</HandleElementAnimateFadeRight>

              <div className='w-full rounded-t-md p-4 bg-secondary-orange flex flex-col gap-4'>
                  {/* <div class>
                    <Phone size={24} className='text-white' />
                    <span className='text-white'>+265 999 999 999</span>
                  </div> */}
                  <HandleElementAnimateFade styles='flex flex-col gap-2'>
                    <Link href='tel:+265999999999' className='text-white flex items-center gap-2'><Phone size={16}/> +265 999 999 999</Link>
                    <Link href='mailto:info@ristee.com' className='text-white underline flex items-center gap-2'> <Mail size={16}/> info@ristee.com</Link>
                    <Link href='https://wa.me/+265999999999' className='text-white underline flex items-center gap-2'> <FaWhatsapp size={16}/> WhatsApp Us</Link>
                    <div className='flex items-center gap-2 text-white'>
                      <LocateIcon size={16}/>
                      <div className='flex flex-col'>
                        <span>Chichiri</span>
                        <span>Blantyre, Malawi</span>
                      </div>
                    </div>
                  </HandleElementAnimateFade>

              </div>
          </HandleElementAnimateRight>
          
          <HandleElementAnimateFade styles='w-full h-[300px] md:h-[500px]'>
                <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d122853.4813367403!2d35.0278015!3d-15.794919499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sR%26I%20Steel%20roofing%20map!5e0!3m2!1sen!2smw!4v1752416719777!5m2!1sen!2smw"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </HandleElementAnimateFade>

          <HandleElementAnimateRight styles='bg-white md:rounded-md w-full max-w-[1200px] flex mx-auto px-5 py-4 flex-col gap-4 '>
             <form className='bg p-4' action="">
              <div className='flex flex-col gap-2'>
                <label htmlFor="name" className='text-black/80'>Name</label>
                <input type="text" id='name' className='p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary-orange' placeholder='Enter your name' required/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-black/80'>Email</label>
                <input type="email" id='email' className='p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary-orange' placeholder='Enter your email' required/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="message" className='text-black/80'>Message</label>
                <textarea id='message' rows={4} className='p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary-orange' placeholder='Type your message here' required></textarea>
              </div>
              <button type='submit' className='px-4 mt-4 py-2 bg-primary border-none text-white rounded-md hover:bg-secondary-orange/80 transition-colors'>Send Message</button>
            </form>
          </HandleElementAnimateRight>
      </section>
    </div>
  )
}

export default Contact