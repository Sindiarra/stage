import { Emission } from "./emission-models";
import { Quittance } from "./quittance-models";

export class EmissionQuittance {
    
    id!:number;

    emission!:Emission;

    quittance!:Quittance;

    date!:Date;

}