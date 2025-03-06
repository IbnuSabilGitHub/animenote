import { useState } from "react";

const quizData = [
  { id: 1, word1: "White", word2: "Putih" },
  { id: 2, word1: "Black", word2: "Hitam" },
  { id: 3, word1: "Red", word2: "Merah" },
  { id: 4, word1: "Blue", word2: "Biru" },
];

export default function Quiz() {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ [key: string]: string }>({});

  const handleSelect = (word: string) => {
    if (!selectedWord) {
      setSelectedWord(word);
    } else {
      const isCorrect = quizData.some(
        (pair) =>
          (pair.word1 === selectedWord && pair.word2 === word) ||
          (pair.word2 === selectedWord && pair.word1 === word)
      );

      const pairKey = `${selectedWord}-${word}`;
      setFeedback((prev) => ({ ...prev, [pairKey]: isCorrect ? "correct" : "wrong" }));

      if (isCorrect) {
        setMatchedPairs((prev) => [...prev, selectedWord, word]);
      } else {
        setTimeout(() => {
          setFeedback((prev) => {
            const newFeedback = { ...prev };
            delete newFeedback[pairKey];
            return newFeedback;
          });
        }, 4000);
      }
      setSelectedWord(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Cocokkan Kata!</h1>
      <div className="grid grid-cols-2 gap-4">
        {[...quizData.map((q) => q.word1), ...quizData.map((q) => q.word2)].map((word) => (
          <button
            key={word}
            className={`px-4 py-2 border rounded ${
              matchedPairs.includes(word)
                ? "bg-green-500 text-white"
                : feedback[`${selectedWord}-${word}`] === "wrong" || feedback[`${word}-${selectedWord}`] === "wrong"
                ? "bg-red-500 text-white"
                : selectedWord === word
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
          setFeedback({});
          setSelectedWord(null);
        }}
      >
        Reset
      </button>
    </div>
  );
}