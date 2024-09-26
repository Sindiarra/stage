import { PersonneHeritier } from "./personne-heritier-models";
import { Personne } from "./personne-models";
import { PersonneMorale } from "./personne-morale-models";
import { PersonnePhysique } from "./personne-physique-models";

export class TypePersonne {
    id!:number;
    libelleTypePersonne!:string;
    personnes!:PersonnePhysique[]|PersonneHeritier[]|PersonneMorale[];

}