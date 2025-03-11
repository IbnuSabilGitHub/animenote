// import { useEffect, useState } from "react";
// import SelectQuiz from "../../components/SelectQuiz";

// type WordItem = { word: string; uniqueId: string };
// type DataItem = {
//     id: number;
//     words: WordItem[];
// };

// export default function Quiz() {
//     const [data, setData] = useState<DataItem[]>([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("/quizOne.json") // Ambil dari public/
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Gagal mengambil data kuis");
//                 }
//                 return response.json();
//             })
//             .then((jsonData: DataItem[]) => {
//                 setData(jsonData);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching quiz data:", error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <p>Loading...</p>;

//     return (
//         <div className="flex flex-col items-center justify-center space-y-8 h-[100vh] w-full">
//             <h1 className="text-3xl font-bold">Quiz</h1>
//             <SelectQuiz quizData={data} />
//         </div>
//     );
// }

import SpotlightCard from "../../components/SpotLightCard";
export default function Quiz() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 py-6 px-16">
            <a href="#">
                <SpotlightCard
                    className="h-auto max-w-full p-6  rounded-lg shadow-sm "
                    spotlightColor="rgba(0, 132, 209, 0.25)"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Al-Fatihah
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mb-12">
                        Quiz menerjemahkan surah Al-Fatihah perkata
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-sky-900 dark:text-sky-300">
                            Surah Al-Fatihah
                        </span>
                        <span className="relative bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                            ayat
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-sky-300 bg-sky-900 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">
                                8
                            </div>
                        </span>
                        <span className="relative bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                            kata
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-sky-300 bg-sky-900 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">
                                38
                            </div>
                        </span>
                    </div>
                </SpotlightCard>
            </a>
            <a href="#">
                <SpotlightCard
                    className="h-auto max-w-full p-6  rounded-lg shadow-sm "
                    spotlightColor="rgba(0, 132, 209, 0.25)"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Al-Fatihah
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mb-12">
                        Quiz menerjemahkan surah Al-Fatihah perkata
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-sky-900 dark:text-sky-300">
                            Surah Al-Fatihah
                        </span>
                        <span className="relative bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                            ayat
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-sky-300 bg-sky-900 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">
                                8
                            </div>
                        </span>
                        <span className="relative bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                            kata
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-sky-300 bg-sky-900 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">
                                38
                            </div>
                        </span>
                    </div>
                </SpotlightCard>
            </a>
            <a href="#">
                <SpotlightCard
                    className="h-auto max-w-full p-6  rounded-lg shadow-sm "
                    spotlightColor="rgba(0, 132, 209, 0.25)"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Al-Fatihah
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mb-12">
                        Quiz menerjemahkan surah Al-Fatihah perkata
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-sky-900 dark:text-sky-300">
                            Surah Al-Fatihah
                        </span>
                        <span className="relative bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                            ayat
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-sky-300 bg-sky-900 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">
                                8
                            </div>
                        </span>
                        <span className="relative bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                            kata
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-sky-300 bg-sky-900 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">
                                38
                            </div>
                        </span>
                    </div>
                </SpotlightCard>
            </a>
            <a href="#">
                <SpotlightCard
                    className="h-auto max-w-full p-6  rounded-lg shadow-sm "
                    spotlightColor="rgba(0, 132, 209, 0.25)"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Al-Fatihah
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mb-12">
                        Quiz menerjemahkan surah Al-Fatihah perkata
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-sky-900 dark:text-sky-300">
                            Surah Al-Fatihah
                        </span>
                        <span className="relative bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                            ayat
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-sky-300 bg-sky-900 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">
                                8
                            </div>
                        </span>
                        <span className="relative bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                            kata
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-sky-300 bg-sky-900 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">
                                38
                            </div>
                        </span>
                    </div>
                </SpotlightCard>
            </a>
        </div>
    );
}
