import { Service } from "./Service";


export class Organisation {
    
    id:number;

    sigleOrganisation:string;

    libelleOrganisation:string;

    services: Service[];

    organisationPrincipals:Organisation[];

    organisationRattache:Organisation;
}