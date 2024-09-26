import { Personnel } from "../../grh/models-grh/Personnel";
import { Service } from "../../organisations/models-organisation/Service";
import { Courrier } from "./Courrier";


export class Imputations {

    id: number;
    
    dateImputation:Date;

    responsable: boolean;

    typeImputation: string;//enum: ["Agent", "Service"]

    personnel: Personnel;//si l'imputation est un service mettre null

    service: Service;//si l'imputation est un agent mettre null

    courrier: Courrier;

}