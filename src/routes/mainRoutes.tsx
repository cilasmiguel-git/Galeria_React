import {Routes,Route,useRoutes} from 'react-router-dom';
//pages
import { Galeria } from "../pages/Galeria";
import { Album } from "../pages/Album";
import { Photo } from "../pages/Photo";
import { NotFound } from "../pages/NotFound";

export const MainRoutes = () =>{
    return useRoutes([
        {path:'/',element:<Galeria/>},
        {path:'/album/:id',element:<Album/>},
        {path:'/photo/:id',element:<Photo/>},
        {path:'*',element:<NotFound/>}
    ]);
}