
import { Personne } from "../../personnes/models-personne/personne-models";
import { Acte } from "./acte-models";
import { GroupeParties } from "./groupe-partie-models";
import { Role } from "./role-partie-model";

export class Partie{
    id!:number;
    personne!:Personne;
    role!:Role;
    acte!:Acte;
    groupe!:GroupeParties;
    representantgroupe!:GroupeParties;
    date!:Date;
}