import { Request, Response } from "express";

import {pet} from '../models/pet';
import { creatMenuObjct } from "../helpers/creatMenu";

export const search = (req: Request, res: Response) =>{
    let query: string = req.query.q as string;
    
    if(!query){
        res.redirect('/');
        return;
    }

    let list = pet.getFromName(query);

    res.render('pages/page',{
        menu: creatMenuObjct(''),
        list,
        query
    });
}