import { Fonction } from "../../administrations/models-admin/Fonction";
import { Service } from "../../organisations/models-organisation/Service";
import { Personnel } from "./Personnel";


export class AffectationPersonnel {

    id:number;
    
    dateDebut:Date;
    
    dateFin:Date;

    personnel:Personnel;

    service:Service;

    fonction:Fonction;
}