import { useState, useEffect } from "react";
export default function useMediaQuery(query:string) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const useMediaQuery = window.matchMedia(query);
    const handler = (e:any) => setMatches(e.matches);

    useMediaQuery.addEventListener("change", handler);
    return () => useMediaQuery.removeEventListener("change", handler);

  }, [query]);

  return matches;
}