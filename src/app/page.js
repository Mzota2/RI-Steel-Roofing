'use client';
import Button from "@/components/Button/Button";
import Carousel from "@/components/HomeAnimation/Carousel";
import { Contact2Icon, MailIcon, Dot, HomeIcon, InfoIcon, MenuIcon, MoveUpRight, Newspaper, ToolCaseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HandleAnimateUp from "@/utils/HandleAnimateUp";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Advert from "@/components/Home/Advert";
import CallToAction from "@/components/Home/CallToAction";

export default function Home() { 
  return (
    <>
      {/* Hero Section */}
      <Hero/>

      {/* Service Section */}
      <Services/>

      {/* Video section */}
      <Advert/>

      {/* Call to action */}
      <CallToAction/>
    </>
      )
}
