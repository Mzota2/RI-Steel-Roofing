
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Advert from "@/components/Home/Advert";
import CallToAction from "@/components/Home/CallToAction";
import HandleLoadingElement from "@/utils/HandleLoadingElement";

function Home() { 
  return (
    <>
      {/* Hero Section */}
      <HandleLoadingElement>
          <Hero/>
      </HandleLoadingElement>
      

      {/* Service Section */}
      <Services/>

      {/* Video section */}
      <Advert/>

      {/* Call to action */}
      <CallToAction/>
    </>
      )
}

export default Home;