import { Utilisateurs } from './utilisateur-models';
import { PersonneMorale} from './personne-morale-models'
import { PersonnePhysique } from './personne-physique-models';
import { PersonneHeritier } from './personne-heritier-models';

export class PersonneAdresse{
    id!:number; //creer une table Adresse qui sera lie a Personne, creation des modules gestion d'adresse
    adresseNatPersonneAdresse!:string;
    adresseIntPersonneAdresse!:string;
    telephonePersonneAdresse!:string;
    telephone2PersonneAdresse!:string;
    telephone3PersonneAdresse!:string;
    adresseCourrielPersonneAdresse!:string;
    personne!:PersonnePhysique|PersonneMorale|PersonneHeritier;
    utilisateur!:Utilisateurs;
}
