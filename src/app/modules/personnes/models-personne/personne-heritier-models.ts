
import { Partie } from "../../actes/models-actes/partie-models";
import { Destinataire } from "../../courriers/models-courrier/Destinataire";
import { Expediteur } from "../../courriers/models-courrier/Expediteur";
import { Origine } from "../../courriers/models-courrier/Origine";
import { Compte } from "./compte-models";
import { PersonneAdresse } from "./personne-adresse-models";
import { PersonneConstitution } from "./personne-constitution-models";
import { PersonnePhysique } from "./personne-physique-models";
import { Personnels } from "./personnel-models";
import { PieceIdentite } from "./piece-identite-models";
import { TypePersonne } from "./type-personne-models";

export class PersonneHeritier {
  id!: number;
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
  refPersonne!: string; // c'est le concatenation de: année+numDocumentPieceIdentite+annéePièced'identite+initial(PH,HE,MO)
  pieces!: PieceIdentite[];
  typepersonne!: TypePersonne;
  personneadresse!: PersonneAdresse;
  personneRattaches!: PersonneConstitution[];
  personnePrincipale!: PersonneConstitution;
  destinataires!: Destinataire[];
  parties!: Partie[];
  expediteurs!: Expediteur[];
  origines!: Origine[];
  personnel!: Personnels;
  nomPersonneHeritier!: string;
  historiquePersonneHeritier!: string;
  comptePaiement!:Compte;
  persoPhysAssoPersonneHeritier!: PersonnePhysique[];
  
  //   persoPhysAssoPersonneHeritier: import("c:/Users/benjamin/Documents/Dev-app/DND/Angular/sitfi-v1.5.1/src/app/modules/personnes/models-personne/personne-physique-models").PersonnePhysique[];
}