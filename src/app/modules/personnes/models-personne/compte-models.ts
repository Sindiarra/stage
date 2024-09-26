import { PersonneMorale } from 'src/app/modules/personnes/models-personne/personne-morale-models';
import { PersonnePhysique } from 'src/app/modules/personnes/models-personne/personne-physique-models';
import { PersonneHeritier } from 'src/app/modules/personnes/models-personne/personne-heritier-models';
export class Compte {
    id!:number;
    montantAbattement!:number;
    montantRestant!:number;
    MontantBail!:number;
    MontantTotalPaiement!:number;
    personne!:PersonneMorale|PersonneHeritier|PersonnePhysique;
}