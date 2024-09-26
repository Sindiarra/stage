import { Acte } from "./acte-models";
import { Processus } from "./processus-models";

export class ProcessusActe{
    id!:number;
    acte!:Acte;
    processus!:Processus;
}