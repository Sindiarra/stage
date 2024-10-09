import { Utilisateurs } from "../../administrations/models-admin/Utilisateurs/Utilisateur";
import { Imputations } from "../../courriers/models-courrier/Imputations";
import { Service } from "../../organisations/models-organisation/Service";
import { Signature } from "../../organisations/models-organisation/Signature";
import { Structure } from "../../organisations/models-organisation/Structure";
import { PersonnePhysique } from "../../personnes/models-personne/personne-physique-models";
import { AffectationPersonnel } from "./AffectionPersonnel";

export class Personnel {
    id?: number; // Optionnel si tu ne l'initialises pas
    matricule!: string; // Utilisation de '!' pour indiquer qu'il sera défini
    categorie!: string;
    dateArrivee!: Date;
    situation!: string;
    personnesPhysique: PersonnePhysique = new PersonnePhysique(); // Initialisation de l'objet
    structure!: Structure;
    service!: Service;
    documentagent?: Document; // Optionnel
    utilisateur?: Utilisateurs; // Optionnel
    signatures: Signature[] = []; // Initialisation
    affectationPersonnels: AffectationPersonnel[] = []; // Initialisation
    imputations: Imputations[] = []; // Initialisation
}
