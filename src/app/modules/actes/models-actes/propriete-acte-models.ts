import { Acte } from "./acte-models";
import { Propriete } from "../../proprietes/models-propriete/propriete-models";

export class ProprieteActe{
    id!:number;
    acte!:Acte;
    propriete!:Propriete;
}