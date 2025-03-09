import { useEffect, useState } from "react";
import SelectQuiz from "../../components/SelectQuiz";

type QuizData = { id: number; words: string[] };

export default function Quiz() {
    const [data, setData] = useState<QuizData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/quizOne.json") // Ambil dari public/
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Gagal mengambil data kuis");
                }
                return response.json();
            })
            .then((jsonData: QuizData[]) => {
                setData(jsonData);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching quiz data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="flex flex-col items-center justify-center space-y-8 h-[100vh] w-full">
            <h1 className="text-3xl font-bold">Quiz</h1>
            <SelectQuiz quizData={data} />
        </div>
    );
}
