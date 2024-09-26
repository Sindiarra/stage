
import { Droit } from "./droit-models";
import { TypeRecette } from "./typeRecette-models";

export class Recette {
    
    id:number;

    libelle:string;

    droits:Droit[];

    type:TypeRecette;

}