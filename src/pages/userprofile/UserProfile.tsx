import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UserProfile() {
  const [gif, setGif] = useState<{ url: string; name: string }>({
    url: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(true); // New state for loading status
  const { id } = useParams(); // Destructure the id from useParams

  useEffect(() => {
    fetch("/urlGif.json")
      .then((response) => response.json())
      .then((data) => {
        const randomGif = data[Math.floor(Math.random() * data.length)];
        setGif(randomGif);
        setIsLoading(false); // Set loading to false once the image is fetched
      })
      .catch((error) => {
        console.error("Error fetching GIF:", error);
        setIsLoading(false); // Ensure loading is set to false even if there's an error
      });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        {isLoading ? (
          // Loading animation
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          // Display the GIF once loaded
          <figure className="max-w-lg mx-auto">
            <img
              className="w-[50rem] rounded-lg"
              src={gif.url}
              alt={gif.name}
              loading="lazy"
              
            />
            <figcaption className="mt-2 text-xl font-bold text-center text-gray-500 dark:text-gray-400">
              {gif.name + " From " + id}
            </figcaption>
          </figure>
        )}
      </div>
    </div>
  );
}

export default UserProfile;