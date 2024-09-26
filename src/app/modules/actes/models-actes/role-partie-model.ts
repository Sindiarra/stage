import { Partie } from "./partie-models";

export class Role{
    id!:number;
    libellerole!:string;
    parties!:Partie[];
}