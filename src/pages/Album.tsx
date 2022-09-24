import '../App.css';

import {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

import { apiAlbum } from "../api/apiAlbums";
import { Albun as AlbumType } from "../types/album";
import { Photo as PhotoType } from "../types/Photo"

import { PhotoItem } from '../components/PhotoItem';

export const Album = () =>
{
    const [loading, setLoading] = useState(false);

    //add album title on screen
    const [albumInfo, setAlbumInfo] = useState<AlbumType>({id: 0, title: '', userId: 0});
    const loadAlbumInfo = async (id: string) => {
        setLoading(true);
        const albumInfo = await apiAlbum.showAlbum(id);
        setAlbumInfo(albumInfo);
        setLoading(false);
    }
    //shows and get the photos from the album specified in the skin
    const [Photos,setphotos] = useState<PhotoType[]>([]);
    const showPhotos = async (id:string) =>
    {
        setLoading(true);
        let getPhotos = await apiAlbum.showPhotosFromAlbum(id)
        setphotos(getPhotos);
        setLoading(false);
    }
    //
    let params = useParams();
    useEffect(()=>{
        if(params.id){
            showPhotos(params.id);
            loadAlbumInfo(params.id);
        }   
    },[]) 

    

    return(
        <div>
            <Link to='/'><div className="bg-zinc-300 p-2 m-3 w-1/6 text-center">Voltar para Galeria</div></Link>
            {loading && "Carregando..."}
            <h1 className='m-3 text-xl'>titulo do album : {albumInfo.title}</h1>
            {Photos.map((item, index) => (
                <PhotoItem
                    key={index}
                    data={item}
                />
            ))}
        </div>
    )
}