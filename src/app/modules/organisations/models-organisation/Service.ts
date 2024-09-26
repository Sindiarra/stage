import { Imputations } from "../../courriers/models-courrier/Imputations";
import { AffectationPersonnel } from "../../grh/models-grh/AffectionPersonnel";
import { Organisation } from "./Organisation";
import { Structure } from "./Structure";


export class Service {
    
    id:number;

    sigleService:string;
    
    libelleService:string;

    structure: Structure;

    organisation: Organisation;

    souService: Service[];

    servicePrinicpals: Service;

    affectationPersonnel:AffectationPersonnel[];

    imputations:Imputations[];
} 