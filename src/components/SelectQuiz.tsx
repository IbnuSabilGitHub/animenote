import { useEffect, useState } from "react";
import "../styles/font.css";
type WordItem = { word: string; uniqueId: string };

type DataItem = {
    id: number;
    words: WordItem[];
};

type Props = {
    quizData: DataItem[];
    allCorrect: (value: boolean) => void;
};

function shuffleWordsInGroups(data: DataItem[]) {
    // Deep copy agar tidak mengubah data asli
    const shuffledData = JSON.parse(JSON.stringify(data));

    // Dapatkan jumlah kolom berdasarkan panjang words[0]
    const columnCount = shuffledData[0].words.length;

    // Loop setiap kolom untuk mengacaknya secara independen
    for (let colIndex = 0; colIndex < columnCount; colIndex++) {
        // Ambil semua kata dari kolom yang sama
        const columnWords = shuffledData.map((group: any) => group.words[colIndex]);

        // Acak kata-kata dalam kolom ini
        const shuffledColumn = columnWords.sort(() => Math.random() - 0.5);

        // Simpan kembali hasil acakan ke dalam data baru
        shuffledData.forEach((group: any, rowIndex: number) => {
            group.words[colIndex] = shuffledColumn[rowIndex];
        });
    }

    return shuffledData;
}

const SelectQuiz: React.FC<Props> = ({ quizData, allCorrect }) => {
    const [selectedWords, setSelectedWords] = useState<
        { word: string; uniqueId: string }[]
    >([]);

    const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
    const [shuffledQuizData] = useState(() => shuffleWordsInGroups(quizData));
    const [wrong, setWrong] = useState<string[]>([]);
    const handleSelect = (
        wordObj: { word: string; uniqueId: string },
        index: number
    ) => {
        setSelectedWords((prev) => {
            const newSelectedWords = [...prev];
            newSelectedWords[index] = wordObj;
            return newSelectedWords;
        });
    };

    useEffect(() => {
        if (Object.keys(selectedWords).length === quizData[0].words.length) {
            const isCorrect = quizData.some((group) => {
                return group.words.every((wordObj, index) => {
                    return wordObj.word === selectedWords[index].word;
                });
            });

            if (isCorrect) {
                setMatchedPairs((prev) => [
                    ...prev,
                    ...Object.values(selectedWords).map((item) => item.uniqueId),
                ]);
            } else {
                setWrong((prev) => [
                    ...prev,
                    ...Object.values(selectedWords).map((item) => item.uniqueId),
                ]);
                setTimeout(() => {
                    setWrong([]);
                }, 1000);
            }

            
            // const allCorrect = matchedPairs.length == quizData.flatMap(group => group.words.map(word => word.uniqueId)).length;


            setSelectedWords([]);
        }
    }, [selectedWords, quizData]);

    useEffect(() => {
        const isAllCorrect = matchedPairs.length == quizData.flatMap(group => group.words.map(word => word.uniqueId)).length;
        if (isAllCorrect) {
            allCorrect(true);
        }
    }, [matchedPairs,quizData,allCorrect]);

    return (
        <div className="flex gap-4">
            {shuffledQuizData[0].words.map((_: any, colIndex: number) => (
                <div key={colIndex} className="flex flex-col gap-4 w-full">
                    {shuffledQuizData.map((group: any) => (
                        <button
                            key={group.words[colIndex].uniqueId}
                            className={`w-full px-3 md:px-6 py-4 border text-xs sm:text-md md:text-xl lg:text-2xl rounded-xl
                        ${matchedPairs.includes(group.words[colIndex].uniqueId)
                                    ? "bg-green-900 text-green-300 hover:bg-green-800"
                                    : wrong.includes(group.words[colIndex].uniqueId)
                                        ? "bg-red-900 text-red-300"
                                        : selectedWords[colIndex] === group.words[colIndex]
                                            ? "bg-sky-900 text-sky-300 border-sky-600"
                                            : "bg-neutral-900 text-white border-neutral-800 hover:bg-neutral-800"
                                }`}
                            onClick={() => handleSelect(group.words[colIndex], colIndex)}
                            disabled={matchedPairs.includes(group.words[colIndex].uniqueId)}
                        >
                            {group.words[colIndex].word}
                        </button>
                    ))}
                </div>
            ))}
        </div>

    );
};

export default SelectQuiz;
