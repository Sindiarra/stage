import { Compte } from "./compte-models";
import { Partie } from "../../actes/models-actes/partie-models";
import { Destinataire } from "../../courriers/models-courrier/Destinataire";
import { Expediteur } from "../../courriers/models-courrier/Expediteur";
import { Origine } from "../../courriers/models-courrier/Origine";
import { PersonneAdresse } from "./personne-adresse-models";
import { PersonneConstitution } from "./personne-constitution-models";
import { Personnels } from "./personnel-models";
import { PieceIdentite } from "./piece-identite-models";
import { TypePersonne } from "./type-personne-models";

export class PersonneMorale {
    id!: number;
    refPersonne!: string; // c'est le concatenation de: année+numDocumentPieceIdentite+annéePièced'identite+initial(PH,HE,MO)
    pieces!: PieceIdentite[];
    dateCreationPersonne!: Date;

    /**
    *Pour mettre la date de deces afin de ne pas autoriser cette personne d'accuerir 
    *Peut etre egalement la date de fermeture d'une entreprise
    */
    dateFinUtilisationPersonne!: Date;

    /**
     * Il arrive que des personnes soient suspendues selon la loi
     *  pour toutes operations foncieres 
     * cet attribut nous permettra de mettre en application cette situation
     */
    bloquePersonne!: Boolean;
    typepersonne!: TypePersonne;
    personneadresse!: PersonneAdresse;
    raisonSocialePersonneMorale!: string;
    nomCommercialPersonneMorale!: string;
    typeEntrepPersonneMorale!: string;
    numCcrmPersonneMorale!: string;
    historiquePersonneMorale!: string;
    comptePaiement!:Compte;
    personneRattaches!: PersonneConstitution[];
    personnePrincipale!: PersonneConstitution;    
    destinataires!: Destinataire[];
    parties!: Partie[];
    expediteurs!: Expediteur[];
    origines!: Origine[];
    personnel!: Personnels;
  // persPhysAssoPersonneMorale: import("c:/Users/benjamin/Documents/Dev-app/DND/Angular/sitfi-v1.5.1/src/app/modules/personnes/models-personne/personne-physique-models").Personnephysique[];
}