import { Utilisateurs } from "../../administrations/models-admin/Utilisateurs/Utilisateur";
import { Imputations } from "../../courriers/models-courrier/Imputations";
import { Signature } from "../../organisations/models-organisation/Signature";
import { PersonnePhysique } from "../../personnes/models-personne/personne-physique-models";
import { AffectationPersonnel } from "./AffectionPersonnel";



export class Personnel {
    
    id:number;

    matricule:string;
    
    categorie:string;

    dateArrivee:Date;

    situation:string;

    personnesPhysique: PersonnePhysique;

    //  document autorisant la signature
    documentagent: Document;
   
    utilisateur: Utilisateurs;

    signatures:Signature[];

    affectationPersonnels:AffectationPersonnel[];

    imputations:Imputations[];
} 