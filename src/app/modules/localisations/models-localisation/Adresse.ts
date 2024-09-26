//import { PersonneAdresse } from '../Personne/PersonneAdresse';
import { Localite } from './Localite';
// import { LocaliteStructure } from '../Admin/Organisation/StructureLocalisation';

export class Adresse {
    
    id: number;

    rue: string;

    porte: string;

    codePostal: string;

    typeAdresse: string;

    adresseNatPersonneAdresse: string;

    adresseIntPersonneAdresse: string;

    telephonePersonneAdresse: string;

    telephone2PersonneAdresse: string;

    telephone3PersonneAdresse: string;

    adresseCourrielPersonneAdresse: string;

    adresseExterne: string;

    autreDetail: string;

    //adressepersonnes: PersonneAdresse[];

    localite: Localite;

    // structureadresse: LocaliteStructure;

    // parcelle: LocaliteStructure;

}
