import { Localite } from "../../localisations/models-localisation/Localite";
import { Mesures } from "./mesure-models";
import { TypeMesure } from "./type-mesure-models";

export class Parcelle{
    id!:number;
    Numparcelle!:string;
    Ilo!:string;
    bati!:string;
    superfice!:string;
    localite!:Localite;
    mesure!:Mesures;
    typemesure!: TypeMesure;
    contenance!: string;
    natureParcelle!: string;
    consistance!: string;
    adresseParcelle!: string;
    limite!: string;
    pointscardinaux!: string;
    voisinage!: string;
}