import axios from "axios";

//const Base = 'https://jsonplaceholder.typicode.com';
const axiosInstance = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com'
})

export const apiAlbum = 
{
    showAlbums: async()=>
    {
        let response = await axiosInstance.get(`/albums`)
        return response.data;
    },
    showPhotosFromAlbum: async (id: string) => {
        const req = await axiosInstance.get(`/albums/${id}/photos`);
        return req.data;
    },
    showPhoto: async (id: string) => {
        const req = await axiosInstance.get(`/photos/${id}`);
        return req.data;
    },
    showAlbum: async (id: string) => {
        const req = await axiosInstance.get(`/albums/${id}`);
        return req.data;
    },
}