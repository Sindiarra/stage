import { TypeDocument } from "./type-doc-model";
import { DocumentAdministratvie } from "./DocumentAdministratives";
import { DocumentGraphique } from "./DocumentGraphique";
import { Traitement } from "../../courriers/models-courrier/Traitement";
import { PieceJointe } from "../../courriers/models-courrier/PieceJointe";
import { Personnel } from "../../grh/models-grh/Personnel";
import { Acte } from "../../actes/models-actes/acte-models";
import { Photo } from "./Photo";
import { Signature } from "../../organisations/models-organisation/Signature";

export class Document{
    id!:number;
    imageURL!: string;
    qualite!:string;
    numeroDocument!:string;
    typedoc!:TypeDocument;
    designationDocument!:string;
    dateEtablissement!:Date;
    objetDocument!:string;
    auteurDocument!:string;
    dateAcceptation!:Date;
    dateSoumission!:Date;
    sourceExterne!:string;
    dateDebutUtilisation!:Date;
    dateFinUtilisation!:Date;
    dateNumerisation!:Date;
    etatDocument!:string;
    graphique:DocumentGraphique;
    administratif:DocumentAdministratvie;
    photo:Photo;
    acte:Acte;
    traitement:Traitement;
    pieceJointe:PieceJointe;
    documentagent:Personnel;
    documentsignature:Signature;
}