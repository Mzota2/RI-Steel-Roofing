'use client';
import { useEffect } from "react"
import AOS from 'aos';
const HandleAnimateFadeLeft = ({children})=>{

    useEffect(()=>{
        AOS.init();
    }, [])
    return(
        <div data-aos-duration='500' data-aos='fade-left'>{children}</div>
    )
}

export default HandleAnimateFadeLeft;