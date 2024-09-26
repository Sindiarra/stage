import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Personnel } from "../models-grh/Personnel";
@Injectable({
    providedIn: 'root'
  })
export class PersonnelsService {
  apiURL='http://localhost/backend_courrier';
  constructor(private http:HttpClient) {}
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
Personnel: Personnel[] = [];
getAllPersonnels(){
  return this.http.get(this.apiURL + '/liste/liste_personnel.php');
}
getPersonnelById_Personnel(PersonnelId: string): string {
    const Personnels = this.Personnel.find(Personnels => Personnels.matricule === PersonnelId);
    if (!Personnels) {
        throw new Error('Personnel not found!');
    } else {
        return Personnels.matricule;
    }
    }
      ajouterPersonnel(annot:any) {
        //  console.log(id);
          return this.http.post(this.apiURL+'/insertion/insertion_personnel.php', annot);
        }

      supprimerPersonnel(annot:any){
       //supprimer le Personnel prod du tableau Personnels
          return this.http.post(this.apiURL+'/suppression/suppression_personnel.php', annot);
    }
    modifierPersonnel(annot:any) {
      //  console.log(id);
        return this.http.post(this.apiURL+'/modification/modification_personnel.php', annot);
      }
}
