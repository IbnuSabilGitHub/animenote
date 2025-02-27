import "../../styles/home.css";
import "../../components/ShinyText";
import ShinyText from "../../components/ShinyText";
import SpotlightCarousel from "../../components/SoptLightCarousel";
import SplitText from "../../components/SplitText";
import { useState, useEffect } from "react";

function Home() {
  const [baseWidth, setBaseWidth] = useState(() =>
    Math.min(900, window.innerWidth * 0.8)
  );
  // const [complete, setComplete] = useState(false);

  // const handleAnimationComplete = () => {
  //   setComplete(true);
  // };

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
      <div className="h-[100vh] w-full flex items-center justify-center">
        <SplitText
          text="Hello!"
          className="text-7xl font-semibold text-center"
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
          // onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-8 h-[100vh] w-full">
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
