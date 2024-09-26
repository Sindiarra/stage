import { Droit } from "./droit-models";
import { Resultat } from "./resultat-acte-models";
import { Taux } from "./taux-models";

export class Calcule {
    
    id!:number;

    resultat!:Resultat;

    droit!:Droit;

    taux!:Taux;

    montant!:number;

}