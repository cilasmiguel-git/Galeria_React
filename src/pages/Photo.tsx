import '../App'
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Photo as PhotoType } from '../types/Photo';
import { Albun as AlbumType } from '../types/album';

import { apiAlbum } from '../api/apiAlbums';

export const Photo = () =>{
    
const [loading, setLoading] = useState(false);

//show the photo and bring it from an api
const [photoInfo, setPhotoInfo] = useState<PhotoType>();

const loadPhoto = async (id: string) => {
    setLoading(true);
    const photo = await apiAlbum.showPhoto(id);
    setPhotoInfo( photo );
    setLoading(false);
}

//
const params = useParams();
useEffect(() => {
    if(params.id) {
        loadPhoto(params.id);
    }
}, []);

//go back a page
const navigate = useNavigate();
const handleBackButton = () => {
    navigate(-1);
}
    
    return(
        <div className='m-5'>
            <Link to='/' ><button className="bg-zinc-300 p-2 m-3 w-1/6 text-center">Voltar para Galeria</button></Link>
            <button className="bg-zinc-300 p-2 m-3 w-1/6 text-center" onClick={handleBackButton}>Voltar</button>
            {loading && "Carregando..."}
            {photoInfo &&
                <>
                    <img src={photoInfo.url} alt={photoInfo.title} />
                    <p className='p-5'>titulo : {photoInfo.title}</p>
                </>
            }
        </div>
    )
}