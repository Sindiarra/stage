import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Utilisateurs } from "../Utilisateurs/Utilisateur";
@Injectable({
    providedIn: 'root'
  })
export class UtilisateursService {
  apiURL='http://localhost/backend_courrier';
  constructor(private http:HttpClient) {}
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
Utilisateur: Utilisateurs[] = [];
getAllUtilisateurs(){
  return this.http.get(this.apiURL + '/liste/liste_utilisateur.php');
}
getUtilisateurById_Utilisateur(UtilisateurId: string): string {
    const Utilisateurs = this.Utilisateur.find(Utilisateurs => Utilisateurs.login === UtilisateurId);
    if (!Utilisateurs) {
        throw new Error('Utilisateur not found!');
    } else {
        return Utilisateurs.login;
    }
    }
      ajouterUtilisateur(annot:any) {
        //  console.log(id);
          return this.http.post(this.apiURL+'/insertion/insertion_utilisateur.php', annot);
        }

      supprimerUtilisateur(annot:any){
       //supprimer le Utilisateur prod du tableau Utilisateurs
          return this.http.post(this.apiURL+'/suppression/suppression_utilisateur.php', annot);
    }
    modifierUtilisateur(annot:any) {
      //  console.log(id);
        return this.http.post(this.apiURL+'/modification/modification_utilisateur.php', annot);
      }
}
