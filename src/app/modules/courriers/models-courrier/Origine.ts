
import { Personne } from "../../personnes/models-personne/personne-models";
import { Courrier } from "./Courrier";

export class Origine {
    id:number;
    courrier:Courrier;
    personne:Personne;
}
