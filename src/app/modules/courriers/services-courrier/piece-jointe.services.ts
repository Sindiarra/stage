import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { PieceJointe } from "../models-courrier/PieceJointe";
@Injectable({
    providedIn: 'root'
  })
export class PieceJointesService {
PieceJointe: PieceJointe[] = [
    
];
getAllPieceJointes(): PieceJointe[] {
  return this.PieceJointe;
}
getPieceJointeByid(PieceJointeId: number): PieceJointe {
    const PieceJointes = this.PieceJointe.find(PieceJointes => PieceJointes.id === PieceJointeId);
    if (!PieceJointes) {
        throw new Error('PieceJointe not found!');
    } else {
        return PieceJointes;
    }
    }
  getPJDetailById(Detail: string,PieceJointeId: number) {
      const PieceJointes = this.PieceJointe.find(PieceJointes => PieceJointes.id === PieceJointeId);
      if (!PieceJointes) {
          throw new Error('PieceJointe not found!');
      } else {
        // if (Detail=="Nom") {
        //   return PieceJointes.Nom_PieceJointe;
        // }else{
        //   return PieceJointes.Id_Courrier;
        // }
      }
    }
    ajouterPieceJointe( prod: PieceJointe){
        this.PieceJointe.push(prod);
      }

      supprimerPieceJointe( prod: PieceJointe){
       //supprimer le PieceJointe prod du tableau PieceJointes
        const index = this.PieceJointe.indexOf(prod, 0);
        if (index > -1) {
          this.PieceJointe.splice(index, 1);
        }
    }
    modifierPieceJointe(prod: PieceJointe)
    {
      this.supprimerPieceJointe(prod);
      this.ajouterPieceJointe(prod);
    }

}
