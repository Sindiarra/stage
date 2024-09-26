import { PersonneHeritier } from './personne-heritier-models';
import { PersonneMorale } from './personne-morale-models';
import { PersonnePhysique } from './personne-physique-models';
export class PieceIdentite{
    id!:number;
    numDocumentPieceIdentite!:string;
    typePieceIdentite!:string;
    dateCreaPieceIdentite!:Date; 
    dateExpPieceIdentite!:Date; 
    lieuCreationPieceIdentite!:string; 
    autoriteEmetPieceIdentite!:string;
    personne!:PersonnePhysique|PersonneMorale|PersonneHeritier;

}
