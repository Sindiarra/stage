import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Annotation } from "../models-courrier/Annotation";
@Injectable({
    providedIn: 'root'
  })
export class AnnotationsService {
  apiURL='http://localhost/backend_courrier';
  constructor(private http:HttpClient) {}
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
Annotation: Annotation[] = [];
getAllAnnotations(){
  return this.http.get(this.apiURL + '/liste/liste_annotation.php');
}
getAnnotationById_Annotation(AnnotationId: number): string {
    const Annotations = this.Annotation.find(Annotations => Annotations.id === AnnotationId);
    if (!Annotations) {
        throw new Error('Annotation not found!');
    } else {
        return Annotations.libelleAnnotation;
    }
    }
      ajouterAnnotation(annot:any) {
        //  console.log(id);
          return this.http.post(this.apiURL+'/insertion/insertion_annotation.php', annot);
        }

      supprimerAnnotation(annot:any){
       //supprimer le Annotation prod du tableau Annotations
          return this.http.post(this.apiURL+'/suppression/suppression_annotation.php', annot);
    }
    modifierAnnotation(annot:any) {
      //  console.log(id);
        return this.http.post(this.apiURL+'/modification/modification_annotation.php', annot);
      }
}
