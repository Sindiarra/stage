import { Quittance } from "./quittance-models";

export class Quittancier {
    
    id:number;

    date:Date;

    Numdbut:number;

    Numdfin:number;

    status:string;

    derniernumutiliser:number;

    quittances:Quittance[];

}