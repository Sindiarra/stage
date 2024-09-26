import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Subject } from "rxjs/internal/Subject";
import { Acte } from "src/app/modules/actes/models-actes/acte-models";
import { api } from "src/app/services/api";

@Injectable({
    providedIn: 'root'
  })
export class ActesService {
    apiURL=api.url;
  constructor(private http:HttpClient) {

  }
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
  actes: Acte[] = [/*{
    date:new Date(),
    numeroacte:'0135/LC',
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

lireJson ():Observable<any> {
  return this.http.get('../../../assets/acte.json');
  // try {
  //   const reponse = await fetch('/acte.json');
  //   if(!reponse.ok){
  //     throw new Error('Erreur HTTP/ ${reponse.status}');
  //   }
  //   const data= await reponse.json();
  //   console.log('JSON: ',data);
  //   return data;
    
  // } catch (error) {
  //   console.error("Erreur lors de la lecture du fichier json ",error);
  // }
};

getAllActes() : any{
 return this.http.get(this.apiURL + '/actes');
//  let datas = fs.readFileSync('./acte.json','utf-8');
//  return JSON.parse(datas);
  /*/Observable Using Constructor
  const listeacte = new Observable( observer => {
    observer.next([{"id":1,"numeroacte":"SN","date":"2009-01-22T00:00:00.000Z","montant":2000000,
    "type":{"id":1,"libelleTypeActe":"VENTE"},
    "proprieteactes":[{"id":1,
                       "propriete":{"id":1,"type":"","numpropriete":"PO233/98",
                                    "parcelle":{"id":1,"Ilo":"A","bati":"","Numparcelle":"1",
                                    "localite":{"id":1,"libellelocalite":"Bamako"}}}},
                      {"id":2,
                      "propriete":{"id":2,"type":"","numpropriete":"TF344KTI",
                                  "parcelle":{"id":3,"Ilo":"1","bati":"","Numparcelle":"X",
                                  "localite":{"id":1,"libellelocalite":"Bamako"}}}}]},
    {"id":2,"numeroacte":"sn","date":"2022-09-09T22:45:47.000Z","montant":33000,
    "type":null,
    "proprieteactes":[]},
    {"id":3,"numeroacte":"sn","date":"2022-09-09T22:45:55.000Z","montant":33000,
    "type":null,
    "proprieteactes":[]},
    {"id":4,"numeroacte":"sn","date":"2022-09-09T22:46:03.000Z","montant":33000,
    "type":null,
    "proprieteactes":[]},
    {"id":5,"numeroacte":"sn","date":"2022-09-09T22:48:41.000Z","montant":33000,
    "type":null,
    "proprieteactes":[]},
    {"id":6,"numeroacte":"sn","date":"2022-09-10T13:58:38.000Z","montant":33000,
    "type":null,
    "proprieteactes":[]},
    {"id":7,"numeroacte":"sn","date":"2022-09-10T13:59:02.000Z","montant":33000,
    "type":null,
    "proprieteactes":[]},
    {"id":8,"numeroacte":"sn","date":"2022-09-10T18:10:03.000Z","montant":33000,
    "type":null,
    "proprieteactes":[]},
    {"id":9,"numeroacte":"sn","date":"2022-09-13T11:56:50.000Z","montant":33000,
    "type":null,
    "proprieteactes":[]},
    {"id":10,"numeroacte":"acte-01","date":"2022-11-17T00:00:00.000Z","montant":650000,
    "type":null,
    "proprieteactes":[]}]);

    observer.complete()
})
return listeacte;*/

}
getFormData(){
  return this.http.get(this.apiURL + '/newacte');
  /*const listeacte1 = new Observable( observer => {
    observer.next({"id":1,"numeroacte":"SN","date":"2009-01-22T00:00:00.000Z","montant":2000000,
    "type":{"id":1,"libelleTypeActe":"VENTE"},
    "proprieteactes":[{"id":1,
                       "propriete":{"id":1,"type":"","numpropriete":"PO233/98",
                                    "parcelle":{"id":1,"Ilo":"A","bati":"","Numparcelle":"1",
                                    "localite":{"id":1,"libellelocalite":"Bamako"}}}},
                      {"id":2,
                      "propriete":{"id":2,"type":"","numpropriete":"TF344KTI",
                                  "parcelle":{"id":3,"Ilo":"1","bati":"","Numparcelle":"X",
                                  "localite":{"id":1,"libellelocalite":"Bamako"}}}}]},
    );

    observer.complete()
})
return listeacte1;*/
}
ajouterActe(annot:any) {
  return this.http.post(this.apiURL+'/acte', annot);
}
supprimerActe(annot:any){
//supprimer le Courrier prod du tableau Courriers
  return this.http.post(this.apiURL+'/suppression/suppression_courrier.php', annot);
}
modifierActe(annot:any) {
//  console.log(id);
return this.http.put(this.apiURL+'/acte', annot);
}
getActeById_Acte(acteId: number) {
    if (acteId === undefined) {
        throw new Error('Acte not found!');
    } else {
        return this.http.get(this.apiURL + '/acte/'+acteId);
      //   const listeacte1 = new Observable( observer => {
      //     observer.next({"id":1,"numeroacte":"SN","date":"2009-01-22T00:00:00.000Z","montant":2000000,
      //     "type":{"id":1,"libelleTypeActe":"VENTE"},
      //     "proprieteactes":[{"id":1,
      //                        "propriete":{"id":1,"type":"","numpropriete":"PO233/98",
      //                                     "parcelle":{"id":1,"Ilo":"A","bati":"","Numparcelle":"1",
      //                                     "localite":{"id":1,"libellelocalite":"Bamako"}}}},
      //                       {"id":2,
      //                       "propriete":{"id":2,"type":"","numpropriete":"TF344KTI",
      //                                   "parcelle":{"id":3,"Ilo":"1","bati":"","Numparcelle":"X",
      //                                   "localite":{"id":1,"libellelocalite":"Bamako"}}}}]},
      //     );
      
      //     observer.complete()
      // })
      //return listeacte1;
    }
    }
}