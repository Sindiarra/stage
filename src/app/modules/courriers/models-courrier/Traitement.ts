// import { Document } from '../../documents/models-document/Documents';
import { Courrier } from './Courrier';


export class Traitement {
    id:number;

    observation:string;

    statut:string;

    dateTraitement:Date;

    courrier:Courrier;
    document:Document;
}
