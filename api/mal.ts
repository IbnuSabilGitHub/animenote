import { kv } from '@vercel/kv';
import axios, { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const cacheKey: string = "top-anime";
    
    try {
        const cachedData: string | null = await kv.get(cacheKey);

        if (cachedData) {
            console.log("Mengambil data dari cache Vercel KV Storage");
            return res.status(200).json(JSON.parse(cachedData));
        }

        console.log("Mengambil data dari API Jikan...");
        const response: AxiosResponse = await axios.get("https://api.jikan.moe/v4/top/anime?type=ova");

        await kv.set(cacheKey, JSON.stringify(response.data), { ex: 300 });

        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching data", error: (error as Error).message });
    }
}