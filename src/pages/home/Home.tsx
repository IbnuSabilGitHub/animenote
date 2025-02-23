import "../../styles/home.css";
import "../../components/ShinyText";
import Carousel from "../../components/Carousel";
import ShinyText from "../../components/ShinyText";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="flex flex-col items-center justify-center space-y-8">
        <Carousel
          baseWidth={300}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      <ShinyText text="Technology" className="text-3xl font-bold mb-4" />
      </div>
    </div>
  );
}

export default Home;
