import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Subject } from "rxjs/internal/Subject";
import { Parcelle } from "../../proprietes/models-propriete/parcelle-models";
import { Localite } from "../../localisations/models-localisation/Localite";
import { Propriete } from "../../proprietes/models-propriete/propriete-models";
import { Acte } from "../models-actes/acte-models";
@Injectable({
    providedIn: 'root'
  })
export class ParcellesService {
    apiURL='';
  constructor(private http:HttpClient) {

  }
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
  parcelles: Parcelle[] = [];
  getAllParcelles(){
    return this.http.get(this.apiURL + '/parcelle');
}
getFormData(){
    return this.http.get(this.apiURL + '/newparcelle');
  }
  ajouterParcelle(annot:any) {
    return this.http.post(this.apiURL+'/parcelle', annot);
  }
  supprimerParcelle(annot:any){
  //supprimer le Courrier prod du tableau Courriers
    return this.http.post(this.apiURL+'/parcelle/', annot);
  }
  modifierParcelle(annot:any) {
  //  console.log(id);
  return this.http.put(this.apiURL+'/propriete', annot);
  }
  getParcelleById_Parcelle(parcelleId: number) {
    if (Parcelle === undefined) {
        throw new Error('parcelle not found!');
    } else {
        return this.http.get(this.apiURL + '/parcelle/'+parcelleId);
        
}
}
}
