import { PersonnePhysique } from "../../personnes/models-personne/personne-physique-models";
import { Document } from "./document-models";

export class Photo {
    
    id:number;

    imageUrl: String;

    doucment:Document;

    persPhys: PersonnePhysique;
    
}