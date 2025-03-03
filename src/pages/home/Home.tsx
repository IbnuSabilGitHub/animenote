import "../../styles/home.css";
import "../../components/ShinyText";
import ShinyText from "../../components/ShinyText";
import SpotlightCarousel from "../../components/SoptLightCarousel";
import SplitText from "../../components/SplitText";
import { useState, useEffect } from "react";
import RotatingText from "../../components/RotatingText";
import AnimatedContent from "../../components/AnimatedContent";
import Counter from "../../components/CounterAnimation";

function Home() {
  const [baseWidth, setBaseWidth] = useState(() =>
    Math.min(900, window.innerWidth * 0.8)
  );
  const [width, setWidth] = useState(window.innerWidth);

  const [counterValue, setCounterValue] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  function handleAnimationComplete() {
    setAnimationComplete(true);
  }
  
  function handleCounterPlus() {
    setCounterValue((prev) => (prev >= 100 ? 0 : prev + 1));
  }

  function handleCounterMinus() {
    setCounterValue((prev) => (prev <= 0 ? 100 : prev - 1));
  }

  useEffect(() => {
    const updateWidth = () => {
      setBaseWidth(Math.min(900, window.innerWidth * 0.8));
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="h-[100vh] w-full flex items-center justify-center">
        <div className="inline-flex text-center gap-4 items-center">
          <SplitText
            text="Hello,"
            className="text-3xl sm:text-3xl md:text-7xl font-semibold text-center"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          {animationComplete && (
            <AnimatedContent
              distance={300}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              animateOpacity
            >
              <RotatingText
                texts={[
                  "User!",
                  "Everyone!",
                  "Sir!",
                  "Miss!",
                  "Friend!",
                  "Bro!",
                  "Wibu!",
                  "Otaku!",
                  "Coder!",
                ]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-sky-500/30 text-sky-500 overflow-hidden py-0.5 sm:py-1 md:py-1 justify-center rounded-lg border border-sky-500"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                elementLevelClassName="text-3xl sm:text-3xl md:text-7xl font-semibold"
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
      <div className="flex flex-col items-center justify-center space-y-8 h-[100vh] w-full">
        <div className="inline-flex text-center gap-1 items-center">
          <button className="flex items-center justify-center text-sky-500 md:text-4xl bg-sky-500/30 hover:bg-sky-500/20 active:bg-sky-500/10 rounded-lg p-7 border border-sky-500" onClick={() => handleCounterMinus()}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <Counter
            value={counterValue} // karena jika nilai nol di kurang lagi maka nilai akan 999. saya tidak ingin itu saya ingin 100
            places={[100, 10, 1]}
            fontSize={width > 768 ? 80 : 60}
            padding={10}
            gap={10}
            textColor="rgb(14, 165, 233)"
            fontWeight={500}
            containerStyle={{ backgroundColor: "rgba(14, 165, 233, 0.3)", borderRadius: 8, border: "1px solid rgb(14, 165, 233)" }}
            gradientHeight={16}
            gradientFrom="transparent"
          />

          <button className="flex items-center justify-center md:text-4xl text-sky-500 bg-sky-500/30 hover:bg-sky-500/20 active:bg-sky-500/10 rounded-lg p-7 border border-sky-500" onClick={() => handleCounterPlus()}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
