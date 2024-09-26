import { CarnetOE } from "./carnetOE-models";
import { Emission } from "./emission-models";


export class RecuOE {
    
    id:number;

    numOE:string;

    date:Date;

    emission:Emission;

    carnetOE:CarnetOE;

}