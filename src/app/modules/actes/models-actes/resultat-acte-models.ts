import { Acte } from "./acte-models";
import { Calcule } from "./calcule-models";

export class Resultat {
    
    id:number;

    Montant:number;

    acte:Acte;

    calculs:Calcule[];
  
}