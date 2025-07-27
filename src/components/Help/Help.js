'use client';
import React, {useState, useEffect} from 'react'

function Help() {
    const [greeting, setGreeting] = useState('');
    const [helpPrompt, setHelpPrompt] = useState('');
    const [tipIndex, setTipIndex] = useState(0);
    const tips = [
        "Tip: Use the navigation bar to explore our services.",
        "Tip: Check out our blog for the latest updates.",
        "Tip: Contact us for personalized assistance.",
        "Tip: Visit the About Us page to learn more about our team."
    ];
    
    useEffect(() => {
        // Animated greeting and help prompt
        setGreeting('Welcome!');
        const helpTimeout = setTimeout(() => {
            setHelpPrompt('How can we assist you today?');
        }, 1200);
    
        // Animated tips cycling
        const tipInterval = setInterval(() => {
            setTipIndex((prev) => (prev + 1) % tips.length);
        }, 3500);
    
        return () => {
            clearTimeout(helpTimeout);
            clearInterval(tipInterval);
        };
    }, []);
const [isOpen, setIsOpen] = useState(true);

if (!isOpen) return null;

return (
    <div className="flex transition-all duration-700 h-fit z-20 max-w-[300px] flex-col fixed right-0 top-[50%] bottom-[50%] bg-primary p-8 rounded-sm shadow-md drop-shadow-2xl">
        <button
            className="absolute cursor-pointer top-2 right-2 text-white text-lg font-bold focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
        >
            ×
        </button>
        
        <span className="text-sm text-white animate-fade-in-slow">{helpPrompt}</span>
        <span className="flex items-center text-xs text-white/90 mt-1 animate-pulse transition-all duration-700">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-1 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01"/>
            </svg>
            {tips[tipIndex]}
        </span>
    </div>
)
}

export default Help