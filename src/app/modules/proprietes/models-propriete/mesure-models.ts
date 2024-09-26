
import { TypeMesure } from './type-mesure-models';
import { MesureUnite } from './mesure-unite';
import { MesureMettrecarre } from './mesure-mettrecarre';
export class Mesures{
    id!:number;
    NumMesure!:string;
    typemesure!: TypeMesure;
   mesureunite!: MesureUnite;
   mesuremettrecarre!: MesureMettrecarre;
}
