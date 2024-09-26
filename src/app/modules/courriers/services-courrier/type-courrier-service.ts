import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { TypeCourrier } from "../models-courrier/TypeCourrier";
@Injectable({
    providedIn: 'root'
  })
export class Type_CourriersService {
  apiURL='http://localhost/backend_courrier';
  constructor(private http:HttpClient) {}
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
Type_Courrier: TypeCourrier[] = [];
getAllType_Courriers() {
  return this.http.get(this.apiURL + '/liste/liste_type_Courrier.php');
}
getType_CourrierById_Type_Courrier(Type_CourrierId: number): string  {
    const Type_Courriers = this.Type_Courrier.find(Type_Courriers => Type_Courriers.id === Type_CourrierId);
    if (!Type_Courriers) {
        throw new Error('Type_Courrier not found!');
    } else {
        return Type_Courriers.libelle;
    }
    }
    ajouterType_Courrier(annot:any){
      return this.http.post(this.apiURL+'/insertion/insertion_type_Courrier.php', annot);
    }

      supprimerType_Courrier(annot:any){
        //supprimer le Annotation prod du tableau Annotations
           return this.http.post(this.apiURL+'/suppression/suppression_type_Courrier.php', annot);
     }
    modifierType_Courrier(annot:any) {
      //  console.log(id);
        return this.http.post(this.apiURL+'/modification/modification_type_Courrier.php', annot);
      }

}


