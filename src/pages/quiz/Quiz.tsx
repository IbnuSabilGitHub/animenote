import { useEffect, useState } from "react";

const quizData = [
  { id: 1, words: ["a", "A", "1", "!"] },
  { id: 2, words: ["b", "B", "2", "@"] },
  { id: 3, words: ["c", "C", "3", "#"] },
  { id: 4, words: ["d", "D", "4", "$"] },
];

function shuffleWordsInGroups(data: typeof quizData) {
  // Deep copy untuk menghindari perubahan pada array asli
  const shuffledData = JSON.parse(JSON.stringify(data));

  // Dapatkan jumlah kolom berdasarkan jumlah elemen dalam words[0]
  const columnCount = shuffledData[0].words.length;

  // Loop setiap kolom untuk mengacaknya secara independen
  for (let colIndex = 0; colIndex < columnCount; colIndex++) {
    // Ambil semua kata dari kolom yang sama
    const columnWords = shuffledData.map((group:any) => group.words[colIndex]);

    // Acak kata-kata dalam kolom ini
    const shuffledColumn = columnWords.sort(() => Math.random() - 0.5);

    // Simpan kembali hasil acakan ke dalam data baru
    shuffledData.forEach((group:any, rowIndex:number) => {
      group.words[colIndex] = shuffledColumn[rowIndex];
    });
  }

  return shuffledData;
}


export default function Quiz() {
  const [selectedWords, setSelectedWords] = useState<{ [key: number]: string }>(
    {}
  );

  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [shuffledQuizData] = useState(() => shuffleWordsInGroups(quizData));
  const [wrong, setWrong] = useState<string[]>([]);
  const handleSelect = (word: string, index: number) => {
    setSelectedWords((prev) => {
      const updatedWords = { ...prev };
      if (prev[index] === word) {
        delete updatedWords[index];
      } else {
        updatedWords[index] = word;
      }
      return updatedWords;
    });
  };

  useEffect(() => {
    if (Object.keys(selectedWords).length === quizData[0].words.length) {
      const isCorrect = quizData.some(({words}) =>
        words.every((word) => Object.values(selectedWords).includes(word))
      );


      if (isCorrect) {
        setMatchedPairs((prev) => [...prev, ...Object.values(selectedWords)]);
      } else {
        setWrong((prev) => [...prev, ...Object.values(selectedWords)]);
        setTimeout(() => {
          setWrong([]);
        }, 1000);
      }

      console.log(
        `${isCorrect ? "Benar!" : "Salah!"}`,
        Object.values(selectedWords).join(", ")
      );

      setSelectedWords({});
    }
  }, [selectedWords]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">
        {Object.values(selectedWords).join(", ")}
      </h1>

      <div className="flex gap-4">
        {shuffledQuizData.map((_:any, colIndex:number) => (
          <div key={colIndex} className="flex flex-col gap-4">
            {shuffledQuizData.map((group:any) => (
              <button
                key={group.words[colIndex]}
                className={`px-4 py-2 border rounded ${
                  matchedPairs.includes(group.words[colIndex])
                    ? "bg-green-500 text-white"
                    : wrong.includes(group.words[colIndex])
                    ? "bg-red-500 text-white"
                    : selectedWords[colIndex] === group.words[colIndex]
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => handleSelect(group.words[colIndex], colIndex)}
                disabled={matchedPairs.includes(group.words[colIndex])}
              >
                {group.words[colIndex]}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
