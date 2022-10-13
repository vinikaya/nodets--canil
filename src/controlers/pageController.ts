import { Request, Response } from "express";
import {creatMenuObjct} from '../helpers/creatMenu'
import {pet} from '../models/pet'


export const home = (req: Request, res: Response) =>{
    let list = pet.getAll();
    res.render('pages/page',{
        menu: creatMenuObjct('all'),
        banner: {
            title: 'todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) =>{
    let list = pet.getFromType('dog');
    res.render('pages/page',{
        menu: creatMenuObjct('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
    //res.render('pages/page);
};
export const cats = (req: Request, res: Response) =>{
    let list = pet.getFromType('cat');
    res.render('pages/page',{
        menu: creatMenuObjct('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    }); 
    //res.render('pages/page);
};
export const fish = (req: Request, res: Response) =>{
    let list = pet.getFromType('fish');
    res.render('pages/page',{
        menu: creatMenuObjct('fish'),
        banner: {
            title: 'peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
    //res.render('pages/page);
};