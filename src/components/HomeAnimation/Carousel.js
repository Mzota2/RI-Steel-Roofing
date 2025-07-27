'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoveUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';

function Carousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const [paused, setPaused] = useState(false);
  const route = useRouter();
  const images = [
    {
      src: '/background.jpg',
      type: 'Steel Fabrication',
      description: 'High-quality steel fabrication services for industrial and commercial projects.',
      button: {
        label: 'Explore Fabrication',
        href: '/services/fabrication'
      }
    },
    {
      src: '/poster.jpg',
      type: 'Custom Design',
      description: 'Tailored steel design solutions to meet your unique requirements.',
      button: {
        label: 'See Designs',
        href: '/services/design'
      }
    },
    {
      src: '/image3.jpg',
      type: 'Installation',
      description: 'Professional installation services ensuring safety and precision.',
      button: {
        label: 'Book Installation',
        href: '/services/installation'
      }
    },
    {
      src: '/image4.jpg',
      type: 'Maintenance',
      description: 'Comprehensive maintenance packages for long-lasting steel structures.',
      button: {
        label: 'Get Maintenance',
        href: '/services/maintenance'
      }
    },
    {
      src: '/image5.jpg',
      type: 'Consulting',
      description: 'Expert consulting for your steel projects from start to finish.',
      button: {
        label: 'Consult Now',
        href: '/services/consulting'
      }
    },
    {
      src: '/image6.jpg',
      type: 'Logistics',
      description: 'Efficient logistics and delivery services for all steel products.',
      button: {
        label: 'View Logistics',
        href: '/services/logistics'
      }
    },
  ];
  

  const current = images[index];

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleIndicatorClick = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };
   const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [index, paused]);

  return (
    <div
      className="flex flex-col gap-4 w-full h-[80vh] md:min-h-[500px] relative"
    >
      <div 
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative w-full h-full overflow-hidden rounded-md">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={current.src}
            alt={current.type}
            className="w-full h-full object-cover absolute left-0 top-0"
            initial={{
              opacity: 0,
              x: direction > 0 ? 100 : -100,
              position: 'absolute',
            }}
            animate={{ opacity: 1, x: 0, position: 'relative' }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -100 : 100,
              position: 'absolute',
            }}
            transition={{ type: "tween", duration: 0.5 }}
            loading='lazy'
            fetchPriority={index === 0 ?'high':"auto"}
          />
        </AnimatePresence>
        {/* Overlay for text and button */}
        <AnimatePresence>
          <motion.div
            key={index + '-overlay'}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.5 }}
            className="absolute inset-0 bg-black/15 flex flex-col justify-center items-start bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 md:p-12 z-10"
          >
            <motion.h2
              className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {current.type}
            </motion.h2>
            <motion.p
              className="text-white text-base md:text-lg mb-4 max-w-xl drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {current.description}
            </motion.p>
            <motion.a
              href={current.button.href}
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-md shadow-lg font-semibold hover:bg-secondary-red transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {current.button.label}
              <MoveUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </AnimatePresence>
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-20"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-20"
          onClick={handleNext}
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex items-center gap-2 justify-center">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => handleIndicatorClick(i)}
            className={`transition-all duration-200 ${
              i === index ? 'w-[14px] h-[14px] bg-primary' : 'w-[10px] h-[10px] bg-primary/60'
            } rounded-full`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="flex items-center justify-between gap-4 md:justify-end">
        <Button handleClick={() => route.push('/about')} title={'Learn more'} styles="bg-primary text-white px-4 py-3 rounded-md shadow-md hover:bg-secondary-red transition-colors"/>
        <Button handleClick= {() => route.push('/blog')} title={'Visit Blog'} styles="!text-black px-4 py-2 rounded-md shadow-md hover:bg-secondary-red transition-colors bg-white flex items-center gap-2" IconRight={<span className="text-white p-2 bg-black rounded-full">
            <MoveUpRight className="h-4 w-4 text-white" />
          </span>}/>
      </div>
    </div>
  );
}

export default Carousel;