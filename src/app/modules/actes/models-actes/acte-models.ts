
import { Emission } from "./emission-models";
import { LigneEmission } from "./ligne-emission";
import { Localite } from "../../localisations/models-localisation/Localite";
import { NatureActe } from "./nature-acte-models";
import { Partie } from "./partie-models";
import { ProcessusActe } from "./processus-acte-models";
import { ProprieteActe } from "./propriete-acte-models";
import { Resultat } from "./resultat-acte-models";
import { TypeActe } from "./types-actes-models";
import { GroupeParties } from "./groupe-partie-models";
import { Role } from "./role-partie-model";
import { Personne } from "../../personnes/models-personne/personne-models";
import { Courrier } from "../../courriers/models-courrier/Courrier";
import { Enregistrement } from "./enregistrement-models";

export class Acte {
    id!:number;
    dateActe:Date;
    dateCreation:Date;
    nbreCopie:number;
    numeroacte!:string;
    montant!:number;
    courrier!:Courrier;
    processusactes!:ProcessusActe[];
    proprieteactes!:ProprieteActe[];
    parties!:Partie[];
    personnes!:Personne[];
    roles!:Role[];
    groupes!:GroupeParties[];
    ligneemmsions!:LigneEmission[];
    type!:TypeActe;
    nature!:NatureActe;
    localite!:Localite;// à voir 
    doucment!: Document;
    emission!: Emission;
    resultat!: Resultat;
    etat!:string;
    enregistrement!:Enregistrement;
    //depot:Depot;
    //inscriptions:Inscription[];

}