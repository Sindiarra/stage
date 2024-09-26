import { Courrier } from "src/app/modules/courriers/models-courrier/Courrier";
import { Personnel } from "src/app/modules/grh/models-grh/Personnel";
import { Document } from "src/app/modules/documents/models-document/document-models";

export class Utilisateurs {
    
    id:number;

    login:string;

    motdepasse:string;

    datedebut:Date;

    datefin:Date;

    bloque:boolean;

    datebloque:Date;

    user: Personnel;

    //  document autorisant la signature
    
    documentagent: Document;  

    courrier:Courrier[];
} 