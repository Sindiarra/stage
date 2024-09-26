import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Document } from "../models-document/document-models";
import { api } from "src/app/services/api";
@Injectable({
    providedIn: 'root'
  })
export class DocumentsService {
    apiURL=api.url;
  constructor(private http:HttpClient) {

  }
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
  documents: Document[] = [];
  // lire le callList
  
 // lireJsonCallLists ():Observable<any> {
 //   return this.http.get('../../../assets/newdocument.json');
 // }

  lireJson ():Observable<any> {
    return this.http.get('../../../assets/document.json');
  };
getAllDocuments() : any{
  return this.http.get(this.apiURL + '/documents');
}
getFormData(){
  //return this.http.get(this.apiURL + '/newdoc');
  return this.http.get('../../../assets/newdocument.json');
}
ajouterDocument(docu:any) {
  return this.http.post(this.apiURL+'/doc', docu);
}
Supprimer(docu:any){
//supprimer le Document du tableau Documents
  return this.http.post(this.apiURL+'document', docu);
}
modifierDocument(docu:any) {
//  console.log(id);
return this.http.put(this.apiURL+'/document', docu);
}
getDocumentById_Document(documentId: number) {
    if (documentId === undefined) {
        throw new Error('Document not found!');
    } else {
        return this.http.get(this.apiURL + '/document/'+documentId);

    }
    }
}
