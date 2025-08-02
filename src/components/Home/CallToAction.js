import React from 'react'
import Button from '../Button/Button'
import HandleAnimateUp from '@/utils/HandleAnimateUp';
import HandleElementAnimateRight from '@/utils/HandleElementAnimateRight';
import HandleElementAnimateLeft from '@/utils/HandleElementAnimateLeft';
import HandleStaggerTransition from '@/utils/HandleStaggerTransition';
import HandleElementAnimateScale from '@/utils/HandleElementAnimateScale';
import HandleElementAnimateFadeRight from '@/utils/HandleElementAnimateFadeRight';
import HandleElementAnimateFade from '@/utils/HandleElementAnimateFade';
import Link from 'next/link';
function CallToAction() {
  return (
    <>
        <section className="py-12 px-5 md:px-0">
        <HandleAnimateUp 
          styles="bg-white/90 max-w-[800px] mx-auto p-10 flex flex-col gap-6 text-primary rounded-xl shadow-2xl border border-primary/20"
        >
          <HandleElementAnimateRight
            styles="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight"
          >
            Ready to Transform Your Project?
          </HandleElementAnimateRight>
          <HandleElementAnimateLeft
            styles="mb-2 text-lg md:text-xl text-black/80"
          >
            At <span className="font-bold text-secondary-red">R & I Steel Roofing</span>, we combine expertise, quality materials, and a passion for excellence to deliver outstanding results for every client.
          </HandleElementAnimateLeft>

          <HandleStaggerTransition
            styles="space-y-2 text-base md:text-lg"
          >
            {[
              "✔ Free, no-obligation consultations",
              "✔ Fast, reliable, and professional service",
              "✔ Custom solutions for every need",
              "✔ Transparent pricing and honest advice",
              "✔ 100% satisfaction guarantee"
            ].map((item, idx) => (
              <HandleElementAnimateFadeRight
                key={idx}
                styles="flex items-center gap-2"
              >
                <span className="text-secondary-orange text-xl">•</span>
                <span>{item}</span>
              </HandleElementAnimateFadeRight>
            ))}
          </HandleStaggerTransition>

          <HandleElementAnimateScale
            styles="flex flex-col md:flex-row items-center justify-between gap-4 mt-4"
          >
            <Link href='/contact'>
              <Button
              title="Get Your Free Quote"
              styles="bg-secondary-red text-white md:px-8 py-3 rounded-lg shadow-lg  text-lg font-semibold"
            />
            </Link>
            
            <span className="text-black/70 text-base md:text-lg">
              Or call us directly at{" "}
              <Link href="tel:+265999999999" className="text-primary font-bold underline hover:text-secondary-orange transition-colors">
                +265 999 999 999
              </Link>
            </span>
          </HandleElementAnimateScale>
          <HandleElementAnimateFade
            
            styles="text-center text-secondary-gray mt-4 italic"
          >
            Let’s build something amazing together. Your vision, our expertise!
          </HandleElementAnimateFade>
        </HandleAnimateUp>
      </section>
    </>
  )
}

export default CallToAction