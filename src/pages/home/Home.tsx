import { useState } from "react";
import reactLogo from "../../assets/svg/react.svg";
import viteLogo from "../../assets/svg/vite.svg";
import vercelLogo from "../../assets/svg/vercel.svg"
import tailwindLogo from "../../assets/svg/tailwind.svg";
import muiLogo from "../../assets/svg/mui.svg";
import "../../styles/home.css";
function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="flex gap-4">
      <a href="https://vercel.com/docs" target="_blank">
          <img src={vercelLogo} className="w-20 h-20 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-20 h-20 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20 h-20 hover:scale-110 transition-transform logo" alt="React logo" />
        </a>
        <a href="https://mui.com/material-ui/getting-started/" target="_blank">
          <img src={muiLogo} className="w-20 h-20 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://tailwindcss.com/docs/installation/using-vite" target="_blank">
          <img src={tailwindLogo} className="w-20 h-20 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold mt-6">ANIME NOTE</h1>
      <div className="mt-4 p-6 bg-zinc-800 rounded-lg shadow-lg text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 transition-colors rounded-lg text-white font-semibold"
        >
          count is {count}
        </button>
        <p className="mt-3 text-gray-300">
          Hello, <code className="text-pink-400">user</code> welcome to Anime Note
        </p>
      </div>
      <p className="mt-6 text-gray-400 text-sm">
        Click on logos to learn more
      </p>
    </div>
  );
}

export default Home;
