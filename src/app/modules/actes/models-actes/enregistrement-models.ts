import { Acte } from "./acte-models";

export class Enregistrement{
    

    // une acte est dépôsé d'une seule fois. toutefois, lorsque l'acte renferme plus TF de livre different,
    // il doit faire un objet d'un dépot dans le nouveau livre foncier car il serai trai
 
    id!:number;

    date!: Date;

    Numdepot!:number;

    acte!:Acte;

    //volume!:VolumeEnregistrement;
}