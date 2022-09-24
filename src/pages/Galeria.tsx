import '../App.css'
import { useEffect, useState } from 'react';
import {Link, useParams ,useNavigate} from "react-router-dom"
import { Albun } from '../types/album';
import { apiAlbum } from '../api/apiAlbums';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { AlbumItem } from '../components/AlbumItem';
export const Galeria = () =>
{
    //show the photo galleries on the screen
    const [albuns,setAlbuns] = useState<Albun[]>([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        loadAlbums();
    },[])
    
    const loadAlbums = async ()=>
    {
        setLoading(true);
        let json = await apiAlbum.showAlbums();
        setAlbuns(json);
        setLoading(false);
    }

    return(
        <div className='content-center'>
           {loading && "Carregando..."}
           {albuns.length > 0 &&
              <>
              <h2 className='text-lg m-3'>total de albuns : {albuns.length}</h2>
              {
                albuns.map((item,index)=>(
                    <AlbumItem key={index} id={item.id} title={item.title}></AlbumItem>
                ))
              }
              </>
           }
        </div>
        
    )
}