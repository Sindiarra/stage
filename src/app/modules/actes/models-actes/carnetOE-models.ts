import { RecuOE } from "./recuOE-models";

export class CarnetOE {
    id!:number;

    numcarnet!:number;

    date!:Date;

    numdbut!:number;

    numdfin!:number;

    status!:string;

    derniernumutiliser!:number;

    recuOEs!:RecuOE[];

}