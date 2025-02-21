import fetch from 'node-fetch';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const apiUrl = 'https://api.jikan.moe/v4/random/anime';
        const startTime = Date.now(); // Mulai pengukuran waktu
        const controller = new AbortController();
        const timeout = setTimeout(() => {
            controller.abort();
        }, 100000); // 10 detik
        try {
            const response = await fetch(apiUrl, { signal: controller.signal });
            console.log('Fetching data from ThingSpeak...'); // Debugging log

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json(); // Mengubah respons ke format JSON
            // console.log('Data fetched successfully:', data); // Debugging log

            clearTimeout(timeout);
            const endTime = Date.now(); // Akhiri pengukuran waktu
            const latency = endTime - startTime; // Hitung latensi

            return res.status(200).json({ latency: `${latency} ms`, data }); 
        } catch (error) {
            console.error('Error fetching data:', error);
            if (error.name === 'AbortError') {
                console.error('Fetch request timed out');
            }
            throw error; // Meneruskan error sehingga bisa ditangani di tempat pemanggil
        }

    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

}
