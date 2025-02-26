import "../../styles/home.css";
import "../../components/ShinyText";
import ShinyText from "../../components/ShinyText";
import SpotlightCarousel from "../../components/SoptLightCarousel";
import SplitText from "../../components/SplitText";
import { useState, useEffect } from "react";
import RotatingText from "../../components/RotatingText";
import AnimatedContent from "../../components/AnimatedContent";

function Home() {
  const [baseWidth, setBaseWidth] = useState(() =>
    Math.min(900, window.innerWidth * 0.8)
  );
  const [animationComplete, setAnimationComplete] = useState(false);

  function handleAnimationComplete() {
    setAnimationComplete(true);
  }

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
        <div className="inline-flex text-center gap-4 items-center">
          <SplitText
            text="Hello!"
            className="text-7xl font-semibold text-center"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          {animationComplete && (
            <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            >
              <RotatingText
                texts={["React", "Vite", "Tailwind", "Material Ui", "Vercel"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-sky-500/30 text-sky-500 overflow-hidden py-0.5 sm:py-1 md:py-0 justify-center rounded-lg border border-sky-500"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                elementLevelClassName="text-3xl sm:text-3xl md:text-7xl font-bold"
              />
            </AnimatedContent>
          )}
        </div>
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
