import { Calcule } from "./calcule-models";
import { LigneEmission } from "./ligne-emission";
import { Recette } from "./recette-models";

export class Droit{
    id!:number;

    libelledroit!:string;

    ligneemmsions!:LigneEmission[];

    recette!:Recette;

    calculs!:Calcule[];
}