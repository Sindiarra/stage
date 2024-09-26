
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Subject } from "rxjs/internal/Subject";
import { Parcelle } from "../../proprietes/models-propriete/parcelle-models";
import { Propriete } from "../../proprietes/models-propriete/propriete-models";
import { Localite } from "../../localisations/models-localisation/Localite";
import { Acte } from "src/app/modules/actes/models-actes/acte-models";
@Injectable({
    providedIn: 'root'
  })
export class ProprietesService {
  
    apiURL='';
  constructor(private http:HttpClient) {

  }
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };

  proprietes: Propriete[] = [];
  getAllProprietes(){
    return this.http.get(this.apiURL + '/proprietes');
}
getFormData(){
  return this.http.get(this.apiURL + '/newpropriete');
}
ajouterPropriete(annot:any) {
  return this.http.post(this.apiURL+'/propriete', annot);
}
supprimerPropriete(annot:any){
//supprimer le Courrier prod du tableau Courriers
  return this.http.post(this.apiURL+'/propriete/', annot);
}
modifierPropriete(annot:any) {
//  console.log(id);
return this.http.put(this.apiURL+'/propriete', annot);
}
getProprieteById_Propriete(proprieteId: number) {
    if (Propriete === undefined) {
        throw new Error('propriete not found!');
    } else {
        return this.http.get(this.apiURL + '/propriete/'+proprieteId);
        
}
}
}
