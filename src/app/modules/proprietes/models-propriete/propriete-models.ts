import { Parcelle } from "./parcelle-models";

export class Propriete{
    id!:number;
    type!:string;
    numpropriete!:string;
    localite!:string;
    superficie!: string;
    datecreation!: Date;
    datedelivrance!: Date;
    nombrecopiesdelivres!:number;
    lieusignature!:string;
    datesignature!:Date;
    parcelle!:Parcelle;
}