import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Structure } from "../../organisations/models-organisation/Structure";
@Injectable({
    providedIn: 'root'
  })
export class StructuresService {
  apiURL='http://localhost/backend_courrier';
  constructor(private http:HttpClient) {}
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
Structure: Structure[] = [];
getAllStructures() {
  return this.http.get(this.apiURL + '/liste/liste_structure.php');
}
getStructureById_Structure(StructureId: number): Structure {
    const Structures = this.Structure.find(Structures => Structures.id === StructureId);
    if (!Structures) {
        throw new Error('Structure not found!');
    } else {
        return Structures;
    }
    }
    getNom_StructureById_Structure(StructureId: number): string {
    const Structures = this.Structure.find(Structures => Structures.id === StructureId);
    if (!Structures) {
        throw new Error('Structure not found!');
    } else {
        return Structures.libelleStructure;
    }
    }
    ajouterStructure(annot:any){
      return this.http.post(this.apiURL+'/insertion/insertion_structure.php', annot);
    }

      supprimerStructure(annot:any){
        //supprimer le Structure prod du tableau Structures
           return this.http.post(this.apiURL+'/suppression/suppression_structure.php', annot);
     }
    modifierStructure(annot:any) {
      //  console.log(id);
        return this.http.post(this.apiURL+'/modification/modification_structure.php', annot);
      }

}
