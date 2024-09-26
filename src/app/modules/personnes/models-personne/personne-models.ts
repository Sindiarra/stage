
import { Partie } from '../../actes/models-actes/partie-models';
import { Destinataire } from '../../courriers/models-courrier/Destinataire';
import { Expediteur } from '../../courriers/models-courrier/Expediteur';
import { Origine } from '../../courriers/models-courrier/Origine';
import { PersonneMorale } from './personne-morale-models';
import { PersonnePhysique } from './personne-physique-models';
import { PersonneHeritier } from './personne-heritier-models';
import { TypePersonne } from './type-personne-models';
import { Utilisateurs } from './utilisateur-models';
import { Personnels } from './personnel-models';
import { PersonneAdresse } from './personne-adresse-models';
import { PieceIdentite } from './piece-identite-models';
import {PersonneConstitution} from './personne-constitution-models';
export class Personne{
    id!:number;
    refPersonne!:string; /*
    *Concatenation de la date + le numero de la piece suivi de l'acronym PH:(PersonnePhysique), H:(Heritier), M:(Morale)
    *Eg : 24-NumeroPiece-PH
    */
    dateCreationPersonne!:Date;
    dateFinUtilisationPersonne: Date;
        /**
         * Il arrive que des personnes soient suspendues selon la loi
         *  pour toutes operations foncieres 
         * cet attribut nous permettra de mettre en application cette situation
         */
    bloquePersonne: Boolean;
    personneRattaches:PersonneConstitution[];
    personnePrincipale:PersonneConstitution;
    pieces!:PieceIdentite[]; 
    adressePersonne!:PersonneAdresse;
    typepersonne!: TypePersonne;
    personneMorale!: PersonneMorale;
    personnePhysique!:PersonnePhysique;
    personneHeritier!:PersonneHeritier;
    destinations!:Destinataire[];
    expediteurs!:Expediteur[];
    origines!:Origine[];   
    partie!:Partie[]; 
    groupepartie!:Partie; 
    idPersonnel!: Personnels;
    idUtilisateur!:Utilisateurs;
}
