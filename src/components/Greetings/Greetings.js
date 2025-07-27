
'use client';
import { useEffect, useState } from "react";
import { Contact2Icon, MailIcon, Dot, HomeIcon, InfoIcon, MenuIcon, MoveUpRight, Newspaper, ToolCaseIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
const greetings = [
  { lang: "Chichewa", text: "Moni" },
  { lang: "Tumbuka", text: "Monile" },
  { lang: "English", text: "Hello" },
];

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function getRandomGreeting() {
  return greetings[Math.floor(Math.random() * greetings.length)];
}

function GreetingScreen({ onFinish }) {
  const [greeting, setGreeting] = useState(getRandomGreeting());
  const [show, setShow] = useState(true);
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(getCurrentTime()), 1000);
    const timeout = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish]);

  return show ? (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 bg-background dark:bg-neutral-950 z-[1000] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="mb-6"
      >
        <div className="relative flex items-center justify-center p-2">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #db5b18, #b07f76, #df8f11, #c3af9d)",
              padding: "20px", // Increased from 8px to 20px for a thicker border
              zIndex: 10,
              animation: "spin 2s linear infinite"
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
          <div className="relative z-10 bg-white rounded-full shadow-lg border-8 border-white">
            <Image
              src="/logo.png"
              alt="Website Logo"
              width={200}
              height={200}
              className="mx-auto rounded-full"
              priority
            />
          </div>
        </div>
        <style jsx global>{`
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </motion.div>
      <motion.h1
        key={greeting.text}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-4xl md:text-5xl font-bold text-primary-700 dark:text-primary-400 mb-2 tracking-tight"
      >
        {greeting.text}!
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-lg text-primary dark:text-neutral-300"
      >
        {time}
      </motion.div>
    </motion.div>
  ) : null;
}

function Greetings() {
  
    const [showHome, setShowHome] = useState(false);
    return (
      <>
        {!showHome && <GreetingScreen onFinish={() => setShowHome(true)} />}
       
      </>
    );
}

export default Greetings;