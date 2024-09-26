import { LocaliteStructure } from "./StructureLocalisation";
import { Service } from "./Service";
import { Signature } from "./Signature";


export class Structure {
    
    id:number;
    
    sigleStructure:string;

    libelleStructure:string;

    structurelocalite: LocaliteStructure;

    services: Service[];

    signatures: Signature[];

    soustructure: Structure[];

    strutureprinicpals: Structure

}
