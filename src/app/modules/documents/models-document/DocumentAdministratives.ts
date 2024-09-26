import { PersonnePhysique } from "../../personnes/models-personne/personne-physique-models";
import { Document } from "./document-models";


export class DocumentAdministratvie {
  
    id:number;

    doucment:Document;

    text:string;

    personnePhysique:PersonnePhysique;

    // personneMorale:PersonneMorale;

    // destinations:Destination[];

    // expediteurs:Expedieur[];

    // origines:Orgine[];   
}