import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm,FormGroupDirective } from '@angular/forms';
import Selectr from 'mobius1-selectr';
import {Courrier} from '../models-courrier/Courrier';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Personne } from '../../personnes/models-personne/personne-models';
import {TypeCourrier} from '../models-courrier/TypeCourrier';
import {PersonnesService} from '../../personnes/services-personne/personne-services';
import {CourriersService} from '../services-courrier/liste-courrier-services';
import {Origine} from '../models-courrier/Origine';
import {Expediteur} from '../models-courrier/Expediteur';
import {DocumentsService} from "../../documents/services-document/documents-services";
import {Document} from "../../documents/models-document/document-models";
import {PieceJointe} from "../models-courrier/PieceJointe";
import { Destinataire } from '../models-courrier/Destinataire';

@Component({
  selector: 'app-ajouter-courrier',
  templateUrl: './ajouter-courrier.component.html',
  styleUrls: ['./ajouter-courrier.component.scss']
})
export class AjouterCourrierComponent implements OnInit {
  closeResult: string;
  newCourrier = new Courrier();
  newOrigine = new Origine();
  newProvenance = new Expediteur();
  newDestinateur=new Destinataire();
  listPieceJointe:PieceJointe[];
  listPersonne: any[];
  listTypeCourrier: TypeCourrier[];
  personneCallList: any[] = [];
  tabDocument: any[];
  selectedOrigine: any;
  selectedProvenance: any;
  listTypeDocument: any[];

  constructor(private modalService: NgbModal,
              private personneService: PersonnesService,
              private courrierService: CourriersService,
              private documentService:DocumentsService) {
  }

  // Fonction pour lancer un popup

  open(content, type, modalDimension) {
    /* if (modalDimension === 'sm' && type === 'modal_mini')
         this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
             this.closeResult = 'Closed with: $result';
         }, (reason) => {
             this.closeResult = 'Dismissed $this.getDismissReason(reason)';
         });
     } else if (modalDimension === '' && type === 'Notification') {
       this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
           this.closeResult = 'Closed with: $result';
       }, (reason) => {
           this.closeResult = 'Dismissed $this.getDismissReason(reason)';
       });
     } else {
         this.modalService.open(content,{ centered: true }).result.then((result) => {
             this.closeResult = 'Closed with: $result';
         }, (reason) => {
             this.closeResult = 'Dismissed $this.getDismissReason(reason)';
         });
     }*/
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: $reason';
    }
  }

  ngOnInit(): void {
    this.listPersonne = [];
    this.tabDocument=[];
    this.listTypeDocument=[];
    this.listPieceJointe=[];
    /*const origine: any = document.getElementById('origine');
    const provenance: any = document.getElementById('provenance');
    const options = {};
    const optionsMultiple = { multiple: true };
    const selectorDefault1 = new Selectr(origine, options);
    const selectorDefault2 = new Selectr(provenance, options);*/
    // var selectrmultiple: any = document.getElementById("selectr-multiple");

    // var selectorMultiple = new Selectr(selectrmultiple, optionsMultiple);
    // lire le call list et reconnsttitue la liste des personnes pour origine et provenance
    this.courrierService.lireJsonCallLists().subscribe((data: any) => {
      this.personneCallList = data.colllist.personnes;
      this.listPersonne = this.personneService.reconstituePersonne(this.personneCallList);
    });
    // lire le call list pour avoir la liste des type de courrier
    this.courrierService.lireJsonCallLists().subscribe((data: any) => {
      this.listTypeCourrier = data.colllist.typecourriers;
    })
    // creer le tableau des documents
    /*this.tabDocument.push({
      typeDocument: '',
      numDocument: '',
      dateDocument: '',
      urlDocument: ''
    })*/
    // lire le call list pour avoir la liste des type de document
    this.documentService.getFormData().subscribe((data:any)=>{
      this.listTypeDocument=data.colllist.typeDocument;
    })
  }


  onSubmitNewCourrier() {
    // avoir la personner selectionner dans la liste des personnel
    const originePersonne = this.personneService.getPersonneByIdType(this.selectedOrigine, this.personneCallList)
    const provenancePersonne = this.personneService.getPersonneByIdType(this.selectedProvenance, this.personneCallList)
    // creer objet origine et provenance ou expediteur
    this.newOrigine.courrier = new Courrier();
    this.newOrigine.personne = originePersonne;
    this.newCourrier.origine = this.newOrigine;
    this.newProvenance.courrier = new Courrier();
    this.newProvenance.personne = provenancePersonne;
    this.newCourrier.expediteur = this.newProvenance;
    // definir la valeur du depart courrier à false pour un courrier arrivee
    this.newCourrier.depart = false;
    // creer le tableau des pieces jointe à partir des tableau de documents
    this.tabDocument.forEach(doc=>{
     const newDocument=new Document();
     const newPieceJointe=new PieceJointe();
     newDocument.typedoc=doc.typedoc;
     newDocument.numeroDocument=doc.numeroDocument;
     newDocument.dateEtablissement=doc.dateEtablissement;
     newDocument.imageURL=doc.imageURL;
     // affection les objets courrier et document à la piece jointe
     newPieceJointe.courrier=new Courrier();
     newPieceJointe.document=newDocument;
     // ajouter la piece jointe dans la liste des pieces jointes
      this.listPieceJointe.push(newPieceJointe);
    })
    this.newCourrier.piecejointes=this.listPieceJointe;
    this.newDestinateur.courrier=new Courrier();
    this.newDestinateur.personne=new Personne();
    this.newCourrier.destinataires=[];
    this.newCourrier.destinataires.push(this.newDestinateur);
    this.newCourrier.numCourrier="nd";
    this.newCourrier.annotationNiveau1="nd";
    this.newCourrier.annotationNiveau2="nd";
    this.newCourrier.annotationNiveau3="nd";
    this.newCourrier.annotationNiveau4="nd";
    this.newCourrier.statut="nouveau";
    this.newCourrier.observation="nd";
    console.log('liste des document:',this.tabDocument);
    console.log('new courrier', this.newCourrier);
    this.courrierService.ajouterCourrier(this.newCourrier).subscribe((data)=>{
      console.log('le courrier enregistre est:',data)
    })

  }

  addDocument() {
    this.tabDocument.push({
      typedoc: '',
      numeroDocument: '',
      dateEtablissement: '',
      imageURL: ''
    })

  }

  removeDocument(i: number,) {
    this.tabDocument.splice(i,1);
  }
}
