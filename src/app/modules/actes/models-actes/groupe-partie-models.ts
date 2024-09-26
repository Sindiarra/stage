import { Personne } from "../../personnes/models-personne/personne-models";
import { Acte } from "./acte-models";
import { Partie } from "./partie-models";
import { Role } from "./role-partie-model";

export class GroupeParties{
    id!:number;
    personne!:Personne;
    parties!:Partie[];
    representant!:Partie;
    role!:Role;     
    acte!:Acte;
    date!:Date;
}