import React from 'react'
import HandleAnimateUp from '@/utils/HandleAnimateUp';
import HandleStaggerTransition from '@/utils/HandleStaggerTransition';
import ServicesCard from './ServicesCard';
function Services() {
const services = [
    {
      title: "Steel Truss Installation",
      description: "Professional steel truss installation services using high-quality materials.",
      image: "/service1.png",
      link: "/services/steel-truss-installation"
    },

    {
      title: "Iron Sheet Installation",
      description: "Custom iron sheet installation for various construction needs.",
      image: "/service2.png",
      link: "/services/iron-sheet-installation"
    },

    {
      title: "Steel Window Fabrication",
      description: "Custom steel window fabrication for various construction needs.",
      image: "/service3.png",
      link: "/services/steel-window-fabrication"
    }, 

    {
      title:"Electrical Installation",
      description: "Expert electrical installation services for residential and commercial properties.",
      image: "/service4.png",
      link: "/services/electrical-installation"
    },

    {
      title:"Plumbing Services",
      description: "Reliable plumbing services for all your residential and commercial needs.",
      image: "/service5.png",
      link: "/services/plumbing-services"
    }
  ]
  return (
    <>
    <section className="py-4 px-5 md:px-0 max-w-[1200px] mx-auto">
        <HandleAnimateUp>
            <div>
                <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
                <p>We provide a wide range of steel and roofing solutions to meet your needs.</p>
            </div>
        </HandleAnimateUp>
        
        
        <HandleStaggerTransition
            styles = {"mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"}
        >
          {services.map((service, index) => (
           <ServicesCard key={index} index={index} service={service} />
          ))}
        </HandleStaggerTransition>
      </section>
    </>
  )
}

export default Services