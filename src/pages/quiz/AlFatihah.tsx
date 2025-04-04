import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectQuiz from "../../components/SelectQuiz";
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import "../../styles/font.css"
import "../../styles/alertStyle.css"

type Word = {
    word: string;
    uniqueId: string;
};

type StepItem = {
    id: number;
    words: Word[];
};

type Step = {
    stepIndex: number;  // Index step ini (misalnya: 0 untuk step 1)
    items: StepItem[];  // Data pada step ini
};

type MultiStepData = Step[];  // Semua langkah dalam bentuk array

// export default function AlFatihah() {
//     const [data, setData] = useState<DataItem[]>([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("/al-fatihah.json") // Ambil dari public/
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
import Stepper, { Step } from "../../components/Stepper"
export default function AlFatihah() {
    const [data, setData] = useState<MultiStepData>([]);
    const [allCorrect, setAllCorrect] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);


    const showAlert = (title: string) => {
        Swal.fire({
            title: title,
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            padding: '.2rem',
            width: '15rem',
            background: 'transparent',
            customClass: {
                title: 'custom-title',
                popup: 'custom-popup',
            },
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
            },
            hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
            },

        });
    }


    const navigate = useNavigate();

    useEffect(() => {
        if (allCorrect) {
            setAllCorrect(false);
        }
    }, [allCorrect]);


    useEffect(() => {
        fetch("/al-fatihah.json") // Ambil dari public/
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Gagal mengambil data kuis");
                }
                return response.json();
            })
            .then((jsonData: MultiStepData) => {
                setData(jsonData);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching quiz data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className="text-center">
            <div role="status">
                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
    return (
        <div className="flex justify-center items-center h-[100vh] text-white noto-naskh-arabic-medium">
            <Stepper
                initialStep={1}
                onStepChange={(step) => {
                    showAlert(`✅ Step ${step-1} completed!`);
                }}
                onFinalStepCompleted={() => {
                    showAlert(`✅ All completed!`);
                    const timer = setTimeout(() => {
                        navigate("/Quiz");
                        clearTimeout(timer);
                    }, 3000);
                }}
                stepCircleContainerClassName="rounded-4xl"
                triggersNext={allCorrect}
            >
                {data.map((step, index) => (
                    <Step key={index}>
                        <SelectQuiz quizData={step.items} allCorrect={setAllCorrect} />
                    </Step>
                ))}
            </Stepper>

        </div>
    )
}