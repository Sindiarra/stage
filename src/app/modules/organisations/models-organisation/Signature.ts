import { Personnel } from "../../grh/models-grh/Personnel";
import { Structure } from "./Structure";



export class Signature {
   
    id:number;

    datedebut:Date;

    datefin:Date;

    desactiver:boolean;

    dateDesactivation:Date;

    structure: Structure;

    personnel: Personnel;

//  document autorisant la signature
    documentsignature: Document;

} 