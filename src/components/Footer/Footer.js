import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
    <section className='mt-auto'>
       {/* Footer */}
             <footer className="py-4 px-5 bg-secondary-gray/60">
               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
                 {/* Address  */}
                 <div className="flex flex-col gap-2">
                   <h3 className="text-lg font-semibold text-black/90">Address</h3>
                   <p className="text-black/70">P.O Box 277</p>
                   <p className="text-black/70">Chichiri</p>
                   <p className="text-black/70">Blantyre, Malawi</p>
                   <Link href="https://goo.gl/maps/4x1Z5f8z5yF2" target="_blank" className="text-primary underline">View on Google Maps</Link>
                 </div>
       
                 {/* Contact */}
                 <div className="flex flex-col gap-2">
                   <h3 className="text-lg font-semibold text-black/90">Contact</h3>
                   <Link href={'mailto:info@riseteel.com'} className="text-primary underline">Email: info@riseteel.com</Link>
                   <Link href="https://wa.me/265889397498" target="_blank" className="text-primary underline">WhatsApp</Link>
                   <Link href="tel:+265889397498" className="text-primary underline">Call Us</Link>
                   <Link href="https://www.facebook.com/share/1JJxmE3o3M/" target="_blank" className="text-primary underline">Facebook</Link>
                   <Link href="https://www.instagram.com/r_i_steel_roofing?igsh=cjNtbzQ4am1nYWk1" target="_blank" className="text-primary underline">Instagram</Link>
                   <Link href="https://www.linkedin.com/company/risteelroofing/" target="_blank" className="text-primary underline">LinkedIn</Link>
                 </div>
       
                 {/* Quick Links */}
                 <div className="flex flex-col gap-2">
                   <h3 className="text-lg font-semibold text-black/90">Quick Links</h3>
                   <ul className="list-disc pl-5 text-black/70">
                     <li><Link href="/about" className="text-primary underline">About Us</Link></li>
                     <li><Link href="/services" className="text-primary underline">Services</Link></li>
                     <li><Link href="/blog" className="text-primary underline">Blog</Link></li>
                     <li><Link href="/contact" className="text-primary underline">Contact Us</Link></li>
                   </ul>
                 </div>
       
                 <div className="text-center text-black/70">
                   <Link href="/privacy-policy" className="text-primary underline">Privacy Policy</Link> | 
                   <Link href="/terms-of-service" className="text-primary underline"> Terms of Service</Link>
                 </div>
       
                 <div className="text-center text-black/70">
                   &copy; {new Date().getFullYear()} R & I Steel Roofing. All rights reserved.
                 </div>
       
               </div>
       
               
             </footer>
             <div className="bg-secondary-red h-1 w-full"></div> 
    </section>
  )
}

export default Footer