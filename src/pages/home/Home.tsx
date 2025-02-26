import "../../styles/home.css";
import "../../components/ShinyText";
import ShinyText from "../../components/ShinyText";
import SpotlightCarousel from "../../components/SoptLightCarousel";
import { useState, useEffect } from "react";
import RotatingText from "../../components/RotatingText";

function Home() {
  const [baseWidth, setBaseWidth] = useState(() =>
    Math.min(900, window.innerWidth * 0.8)
  );

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
        <div className="inline-flex text-center gap-4 items-center">
        <ShinyText text="Technology" className="text-3xl font-bold mb-4" />
        <RotatingText
          texts={["React", "Vite", "Tailwind", "Material Ui", "Vercel"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-sky-500 text-neutral-950 overflow-hidden py-0.5 sm:py-1 md:py-0 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
          elementLevelClassName="text-3xl sm:text-3xl md:text-4xl font-bold"
        />
        </div>
      </div>
    </div>
  );
}

export default Home;
