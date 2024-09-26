import { Acte } from "./acte-models";
import { Droit } from "./droit-models";
import { Taux } from "./taux-models";

export class LigneEmission{
    id!:number;
    acte!:Acte;
    droit!:Droit;
    taux!:Taux;
    montant!:number;
}
