import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UserProfile() {
  const [selectedGif, setSelectedGif] = useState<{ url: string; name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const cachedGifs = localStorage.getItem("gifs");

    if (cachedGifs) {
      const parsedGifs = JSON.parse(cachedGifs);
      setSelectedGif(parsedGifs[Math.floor(Math.random() * parsedGifs.length)]);
      setIsLoading(false);
    } else {
      fetch("/urlGif.json")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("gifs", JSON.stringify(data)); // Simpan di localStorage
          setSelectedGif(data[Math.floor(Math.random() * data.length)]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching GIF:", error);
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <figure className="max-w-lg mx-auto flex flex-col items-center justify-center space-y-2">
        {isLoading ? (
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-90 h-90 bg-gray-300 rounded-lg sm:w-130 sm:h-130 dark:bg-zinc-800">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        ) : (
          <img
            className="w-[50rem] rounded-lg"
            src={selectedGif?.url}
            alt={selectedGif?.name}
            loading="lazy"
          />
        )}
        {isLoading ? (
          <div className="h-5 bg-gray-200 rounded-sm dark:bg-zinc-800 w-[80%]"></div>
        ) : (
          <figcaption className="text-xl font-bold text-center text-gray-500 dark:text-gray-400">
            {selectedGif?.name + " From " + id}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

export default UserProfile;
