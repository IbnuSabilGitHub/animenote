import "../../styles/home.css";
import "../../components/ShinyText";
import ShinyText from "../../components/ShinyText";
import SpotlightCarousel from "../../components/SoptLightCarousel";
import { useState, useEffect } from "react";

function Home() {
  const [baseWidth, setBaseWidth] = useState(() => Math.min(900, window.innerWidth * 0.8));

  useEffect(() => {
    
    const updateWidth = () => {
      setBaseWidth(Math.min(900, window.innerWidth * 0.8)); 
    };

    updateWidth();
    window.addEventListener("resize", updateWidth); 

    return () => window.removeEventListener("resize", updateWidth);
  }, []);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="flex flex-col items-center justify-center space-y-8">
        <SpotlightCarousel
          baseWidth={baseWidth}
          autoplay={true}
          autoplayDelay={5000}
          pauseOnHover={true}
          loop={true}
          round={false}
          spotlightColor="rgba(0, 132, 209, 0.25)"
        />
        <ShinyText text="Technology" className="text-3xl font-bold mb-4" />
      </div>
    </div>
  );
}

export default Home;
