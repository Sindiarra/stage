import { EmissionQuittance } from "./emissionQuittance-models";
import { Quittancier } from "./quittancier-models";


export class Quittance {

    id:number;

    Numquittance:string;

    date:Date;

    emissionquittances:EmissionQuittance[];

    quittancier:Quittancier;

}