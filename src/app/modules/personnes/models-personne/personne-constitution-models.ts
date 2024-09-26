import { PersonneHeritier } from './personne-heritier-models';
import { PersonneMorale } from './personne-morale-models';
import { PersonnePhysique } from './personne-physique-models';
export class PersonneConstitution{
    id!:number;
    personneRattaches!:PersonneMorale|PersonnePhysique|PersonneHeritier;
    personnePrincipale!:PersonneMorale|PersonneHeritier;
    lien!:string;
}