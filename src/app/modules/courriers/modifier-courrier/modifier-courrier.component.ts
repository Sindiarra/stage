import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray, NgForm} from '@angular/forms';
import {Courrier} from '../models-courrier/Courrier';
import {TypeCourrier} from '../models-courrier/TypeCourrier';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {CourriersService} from '../services-courrier/liste-courrier-services';
import {Origine} from '../models-courrier/Origine';
import {Expediteur} from '../models-courrier/Expediteur';
import {PieceJointe} from '../models-courrier/PieceJointe';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PersonnesService} from '../../personnes/services-personne/personne-services';
import {DocumentsService} from '../../documents/services-document/documents-services';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';



@Component({
  selector: 'app-modifier-courrier',
  templateUrl: './modifier-courrier.component.html',
  styleUrls: ['./modifier-courrier.component.scss']
})
export class ModifierCourrierComponent implements OnInit{

  modifierCourrier=new Courrier();
  modifierOrigine = new Origine();
  modifierProvenance = new Expediteur();
  listPieceJointe:PieceJointe[];
  listPersonne: any[];
  listServiceAgent:any[];
  listTypeCourrier: TypeCourrier[];
  personneCallList: any[] = [];
  tabDocument: any[];
  tabImputation: any[];
  tabAnnotation: any[];
  selectedOrigine: any;
  selectedProvenance: any;
  listTypeDocument: any[];

  constructor(private routes:ActivatedRoute, private courrierService:CourriersService,
              private modalService: NgbModal, private personneService: PersonnesService,
              private documentService:DocumentsService) {
  }
  ngOnInit(): void {
    this.listPersonne = [];
    this.tabDocument=[];
    this.listTypeDocument=[];
    this.listPieceJointe=[];
    this.tabImputation=[];
    this.tabAnnotation=[];
    this.listServiceAgent=[];
    this.getCourrierByid();
    
    // lire le call list et reconnsttitue la liste des personnes pour origine et provenance
    this.courrierService.lireJsonCallLists().subscribe((data: any) => {
      this.personneCallList = data.colllist.personnes;
      this.listPersonne = this.personneService.reconstituePersonne(this.personneCallList);
      console.log('liste personne:',this.listPersonne);
    });
    // lire le call list pour avoir la liste des type de courrier
    this.courrierService.lireJsonCallLists().subscribe((data: any) => {
      this.listTypeCourrier = data.colllist.typecourriers;
      console.log('liste type courrier:',this.listTypeCourrier);
    })
    // lire le call list pour avoir la liste des type de document
    this.documentService.getFormData().subscribe((data:any)=>{
      this.listTypeDocument=data.colllist.typeDocument;
      console.log('liste type document:',this.listTypeDocument);
    })
  }
getCourrierByid(){
  const idcourrrierModifier=+this.routes.snapshot.paramMap.get('num');
  // this.courriersService.getCourrierById(idcourrrierModifier)
  this.courrierService.lireJsonById().subscribe((data)=>{
    this.modifierCourrier=data;
    this.modifierCourrier.piecejointes.forEach(pj=>{
      this.tabDocument.push(pj.document);
    })
  })
}
// selectionner la personne qui est le courrier à modifier
 isPersonSelected(person:any, types:string):boolean{
  if (types==='Origine') {
    const pers =this.personneService.reconstitueUnePersonne(this.modifierCourrier.origine.personne);
    console.log('onsel:----',person)
    //const pers={id: 1, name: 'ALi Diop', type: 'Physique'}
      if(pers.id===person.id && pers.type===person.type)
      {
        return true;
      }else{
        return false;
    }
  }else if(types==='Provenance'){
    const pers =this.personneService.reconstitueUnePersonne(this.modifierCourrier.expediteur.personne);
    console.log('onsel:----',person)
    //const pers={id: 1, name: 'ALi Diop', type: 'Physique'}
      if(pers.id===person.id && pers.type===person.type)
      {
        return true;
      }else{
        return false;
    }
  }
 }
// selectionner typecourrier qui est le courrier à modifier

  isTypeCourrierSelected(type:any):boolean{
    // const typ=this.modifierCourrier.typeCourrier
    const typ={id:1,libelle: 'Autres'}
    let p=false;
    if(typ.id===type.id) {
      p=true;
    }
    return p;
  }
// cochet le radio de la priorite du courrier à modifier
  isPrioriteSelected():boolean {
    let p = false;
    switch (this.modifierCourrier.priorite){
      case 'normal':
        p=true;
        break;
      case 'urgent':
        p=true;
        break;
      case 'tresUrgent':
        p=true;
        break;
      case 'tresTresUrgent':
        p=true;
        break;
    }
    return p;
  }
  //ajouter une ligne au tableau de document
  addDocument() {
    this.tabDocument.push({
      typedoc: '',
      numeroDocument: '',
      dateEtablissement: '',
      imageURL: ''
    })

  }
//supprimer une ligne au tableau de document
  removeDocument(i: number) {
    this.tabDocument.splice(i,1);
  }

//ajouter une ligne au tableau des imputations
  addImputation() {
   this.tabImputation.push({
    imputationServiceAgent:'',
    dateImputation:'',
    responsable:false
   })
    }
  //supprimer une ligne au tableau des imputations
  removeImputation(i: number) {
   this.tabImputation.splice(i,1);
    }
  //ajouter une ligne au tableau des annotations
  addAnnotation() {
   this.tabAnnotation.push({

   })
  }
//supprimer une ligne au tableau des annotations
removeAnnotation(i: number) {
 this.tabAnnotation.splice(i,1)
  }  

  
  onSubmitModifierCourrier() {
  }
}
