import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

import { api } from "src/app/services/api";

import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
export class PersonnesService {
  //  apiURL='http://localhost/backend_courrier';
   apiURL=api.url;
constructor(private http:HttpClient) {}
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };


// Reconstitution d'une seule liste pour afficher les personnes physique et morale
reconstituePersonne(perso:any[]):any[]  {
  const result=[];
  perso.forEach(pers=>{
    // Recupération des données
  if (pers!=null) {
    result.push({
      id:pers.id,
      name:this.reconstituePersonneNom(pers),
      type:pers.typepersonne.libelleTypePersonne
    })
  }
  });
    return result;
  }
reconstitueUnePersonne(pers:any):any {
  const result=[];
    if (pers!=null) {
      result.push({
        id:pers.id,
        name:this.reconstituePersonneNom(pers),
        type:pers.typepersonne.libelleTypePersonne
      })
    }
  return result;
}
reconstituePersonneNom(perso:any)  {
  let result='';
  if (perso) {
    if (perso.nomPersonnePhysique && perso.prenomPersonnePhysique) {
      result+=''+perso.nomPersonnePhysique+ ' '+perso.prenomPersonnePhysique;
    }
    if (perso.raisonSocialePersonneMorale) {
      result+=''+perso.raisonSocialePersonneMorale;
    }
    if (perso.nomPersonneHeritier) {
      result+=''+perso.nomPersonneHeritier;
    }
  }
  return result;
}




lireJson ():Observable<any> {
  return this.http.get('../../../assets/personne.json');
};
  getAllPersonnes(){
    return this.http.get(this.apiURL + '/perss');
  }
  lireJsonFormData ():Observable<any> {
    return this.http.get('../../../assets/callListPersonne.json');
  };
    getFormData (){
      return this.http.get(this.apiURL + '/newpersonne');
    }
    
    getPersonneByIdType(personne:any,listpersonne:any[]):any{
      const p= listpersonne.find(person=>person.id===personne.id && person.typepersonne.libelleTypePersonne===personne.type)
     return p;
   
   }

    
 //concatener et conditionner laffichage du nom
 reconstituePersonneDate_Nais_Etab(perso:any)  {
  let result='';
  if (perso) {
    if (perso.dateNaissPersonnePhysique) {
      result+=''+perso.dateNaissPersonnePhysique;
    }
    if (perso.dateEtablissementPersonneMorale) {
      result+=''+perso.dateEtablissementPersonneMorale;
    }
    if (perso.dateEtablissementPersonneHeritier) {
      result+=''+perso.dateEtablissementPersonneHeritier;
    }
  }
  return result;
  }
    /* getType_PersonneById_Personne(PersonneId: number): string {
    const Personnes = this.Personne.find(Personnes => Personnes.Id_Personne === PersonneId);
    if (!Personnes) {
        throw new Error('Personne not found!');
    } else {
        return Personnes.Type_Personne;
    }
    } */
      ajouterPersonne(personne:any) {
        //  console.log(id);
          return this.http.post(this.apiURL+'/newpers', personne);
        }

      supprimerPersonne(annot:any){
       //supprimer le Personne prod du tableau Personnes
          return this.http.post(this.apiURL+'/suppression/suppression_personne.php', annot);
    }
    modifierPersonne(annot:any) {
      //  console.log(id);
        return this.http.post(this.apiURL+'/modification/modification_personne.php', annot);
      }
}
