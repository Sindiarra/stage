import { Acte } from "./acte-models";

export class Emission{
    Id_Emission!:number;
    Libelle_Emission!:string;
    montant!:number;
    acte!: Acte;
}