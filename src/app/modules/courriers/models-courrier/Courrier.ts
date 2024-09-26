import { Destinataire } from "./Destinataire";
import { Expediteur } from "./Expediteur";
import { Origine } from "./Origine";
import { PieceJointe } from "./PieceJointe";
import { AnnotationCourrier } from "./AnnotationCourrier";
import { Imputations } from "./Imputations";
import { Dossier } from "./Dossier";
import { TypeCourrier } from "./TypeCourrier";
import { Traitement } from "./Traitement";


export class Courrier {
    id:number;
    numCourrier:string;
    dateCourrier:Date;
    referenceCourrier:string;
    datereference:Date;
    objetCourrier:string;
    confidentiel:boolean;
    depart:boolean;
    delaiTraitement:string;
    delaiProvenance:string;
    annotationNiveau1:string
    annotationNiveau2:string;
    annotationNiveau3:string;
    annotationNiveau4:string;
    priorite:string; //Ordinaire | Urgent | Très urgent
    statut:string; // Nouveau | En cours de traitement | En attente d'information | Traité
    observation:string;

    destinataires:Destinataire[];

    typeCourrier:TypeCourrier; //Lettre;bordereau ...

    dossier:Dossier;

    traitement:Traitement[];

    expediteur:Expediteur;

    origine:Origine;

    // personne:Personne;

    piecejointes:PieceJointe[];

    annotationCourrier:AnnotationCourrier[];

    imputations:Imputations[];
    // utilisateur:Utilisateurs;
    courrierPrincipals:Courrier[];

    courrierRattache:Courrier;
}
