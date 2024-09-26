import { DocumentGraphique } from "./DocumentGraphique";
import { DocumentAdministratvie } from "./DocumentAdministratives";

export class TypeDocument{

    id!:number;

    libelle!:string;
    
    documentgraphiques!:DocumentGraphique[];

    documentadministratives!:DocumentAdministratvie;

}