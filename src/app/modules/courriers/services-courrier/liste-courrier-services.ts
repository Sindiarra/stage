import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Courrier } from "../models-courrier/Courrier";
import {Observable} from "rxjs";
import {api} from "../../../services/api";
import { Personne } from "../../personnes/models-personne/personne-models";
@Injectable({
    providedIn: 'root'
  })
export class CourriersService {
    // apiURL='http://localhost/backend_courrier';
  apiURL=api.url;
  result:any[]=[];
  constructor(private http:HttpClient) {}
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
courrier: Courrier[] = [/*{
    Num_Arrivee:'01b',
    Date_arrivee:new Date(),
    Expediteur:2,
    References:'0135/LC',
    Objet:'Lettre',
    Date_Courrier:new Date('03/03/2021'),
    Destinataire:3,
    Origine:2,
    Imputation:new Array(1, 4, 2),
    Annotation:new Array(3, 1, 2),
    Piece_Jointe:new Array(1, 2),
    Annotation_Directeur:'',
    Annotation_Directeur_Adjoint:'Pour attribution',
    Annotation_Chef_Division:'Pour avis'
} */];
getAllCourriers():Observable<any>{
  // return this.http.get(this.apiURL + '/liste/liste_courrier.php');
  return this.http.get(this.apiURL+'/courriers');
}
  getCallLists():Observable<any>{
    return this.http.get(this.apiURL+'/newcourrier');
  }
  lireJsonCallLists ():Observable<any> {
    return this.http.get('../../../assets/newCourrier.json');
  }
  lireJsonById ():Observable<any> {
    return this.http.get('../../../assets/courrierById1.json');
  }
  lireJson ():Observable<any> {
    return this.http.get('../../../assets/courriers.json');
  }
  getCourrierById(id:number):Observable<any>{
  if(id){
    return this.http.get(this.apiURL+'/courrier/'+id);
  }
  }

  listePersonneCallList():any[]{
    // getCallLists
  this.lireJsonCallLists().subscribe((data: any) => {
    this.result = data.colllist.personnes;
  });
    return this.result;
  }
ajouterCourrier(courrier:Courrier):Observable<any> {
  return this.http.post(this.apiURL+'/courrier', courrier);
}
/*ajouterPj(files: FormData) {
  return this.http.post(this.apiURL+'/modification/upload_pieces_jointes.php', files);
}
supprimerPj(pj: any) {
  return this.http.post(this.apiURL+'/suppression/suppression_pieces_jointes.php', pj);
}
supprimerCourrier(annot:any){
// supprimer le Courrier prod du tableau Courriers
  return this.http.post(this.apiURL+'/suppression/suppression_courrier.php', annot);
}
modifierCourrier(annot:any) {
//  console.log(id);
return this.http.post(this.apiURL+'/modification/modification_courrier.php', annot);
}
getCourrierByNum_Courrier(courrierId: string) {
    if (courrierId === '') {
        throw new Error('courrier not found!');
    } else {
        return this.http.get(this.apiURL + '/liste/liste_courrier.php?num_courrier='+courrierId);
    }
    }
   /* getPJByID_Courrier(courrierId: string){
      const courriers = this.courrier.find(courriers => courriers.Num_Courrier === courrierId);
      if (!courriers) {
          throw new Error('courrier not found!');
      } else {
          return courriers.Piece_Jointe;
      }
      }*/

}
