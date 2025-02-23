import "../../styles/home.css";
import "../../components/ShinyText";
import ShinyText from "../../components/ShinyText";
import SpotlightCarousel from "../../components/SoptLightCarousel";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="flex flex-col items-center justify-center space-y-8">
        <SpotlightCarousel
          baseWidth={300}
          autoplay={true}
          autoplayDelay={3000}
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
