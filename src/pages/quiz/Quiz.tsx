import { useEffect, useState } from "react";

const quizData = [
  { id: 1, words: ["a", "A", "1", "!"] },
  { id: 2, words: ["b", "B", "2", "@"] },
  { id: 3, words: ["c", "C", "3", "#"] },
  { id: 4, words: ["d", "D", "4", "$"] },
];

interface QuizItem {
  id: number;
  words: string[];
}

// Fungsi untuk mengacak array tanpa mengubah aslinya
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

// Mengacak kata dalam setiap grup
function shuffleQuizData(data: QuizItem[]): string[] {
  return shuffleArray(data.flatMap((item) => shuffleArray(item.words)));
}

export default function Quiz() {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [shuffledWords] = useState<string[]>(shuffleQuizData(quizData));

  const handleSelect = (word: string) => {
    setSelectedWords((prev) => (prev.includes(word) ? prev : [...prev, word]));
  };

  useEffect(() => {
    if (selectedWords.length >= quizData[0].words.length) {
      const isCorrect = quizData.some(
        ({ words }) =>
          words.every((w) => selectedWords.includes(w)) &&
          words.length === selectedWords.length
      );

      if (isCorrect) {
        setMatchedPairs((prev) => [...prev, ...selectedWords]);
      }

      console.log(
        `${isCorrect ? "Benar!" : "Salah!"} ${selectedWords.join(", ")}`
      );
      setSelectedWords([]);
    }
  }, [selectedWords]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">{selectedWords.join(", ")}</h1>
      <div className="grid grid-flow-col grid-rows-4 gap-4">
        {shuffledWords.map((word) => (
          <button
            key={word}
            className={`px-4 py-2 border rounded ${
              matchedPairs.includes(word)
                ? "bg-green-500 text-white"
                : selectedWords.includes(word)
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
            onClick={() => handleSelect(word)}
            disabled={matchedPairs.includes(word)}
          >
            {word}
          </button>
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => {
          setMatchedPairs([]);
          setSelectedWords([]);
        }}
      >
        Reset
      </button>
    </div>
  );
}
