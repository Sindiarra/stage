import { Component, OnInit } from '@angular/core';
import { Document } from '../models-document/document-models';
import { DocumentsService } from '../services-document/documents-services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  documents!: any[];
  newDocument = new Document();
  msg !: string;
  shortFormatter = new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [];
    /*{
     // num: "01/DND/2024",
      //type: "Document Administratif",
      //desig: "022/MUHPD",
      //objet: "Lettre de felicitation",
      //datesoumiss: "10/03/2024",
      //source: "Cabinet",
      //etat:"Valabe"
    },*/
  /*{
    num: "02/DND/2024",
      type: "Document Graphique",
      desig: "023/MESRS",
      objet: "Décision",
      datesoumiss: "10/05/2024",
      source: "DNE",
      etat:"Mauvais"
 },/*
 /* {
    num: "03/DND/2024",
      type: "Document Administratif",
      desig: "024/MESRS",
      objet: "Note",
      datesoumiss: "20/06/2024",
      source: "DRESRS",
      etat:"Mauvais"
  }, */
 /* {
    num: "04/DND/2024",
      type: "Document Administratif",
      desig: "026/MESRS",
      objet: "Décision",
      datesoumiss: "09/07/2024",
      source: "DNEN",
      etat:"Bon"
  }*/
      module!:string;
      user_role!:string;

  constructor( private router : Router,
               private documentsService: DocumentsService
  ) {}
 
  entriesChange($event) {
    this.entries = $event.target.value;
  }
 // filterTable($event) {
    //let val = $event.target.value;
    //this.temp = this.rows.filter(function(d) {
      //for (var key in d) {
        //if (d[key].toLowerCase().indexOf(val) !== -1) {
          //return true;
        //}
      //}
      //return false;
    //});
  //}
  filterTable($event) {
    const val = $event.target.value.toLowerCase();
  
    this.temp = this.rows.filter((d: any) => {
      for (const key in d) {
        // Vérification si la valeur est une chaîne de caractères
        if (typeof d[key] === 'string' && d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }
  onAction(row: any) {
    alert(`Action clicked for ${row.name}`);
  }
  newSave(){
  
      this.router.navigateByUrl(`#/documents/nouveau`);
    
 }
  ngOnInit(): void {
    this.module='Courrier';
    this.user_role='Admin';
    this.documents=[];
    this.rows=[];
    this.getDocuments();
  }
  getDocuments(){
  //  lire les données à partir de l'API
  //  this.actesService.getAllActes()
  //  lire les données à partir du fichier json
   
    this.documentsService.lireJson()
          .subscribe((data: any) =>  {
            this.documents = data;
            this.documents.forEach(document=>{   
              //Recupération des données       
                this.rows.push({ 
                 imgurl: document.imageURL,
                 qual:document.qualite, 
                 num: document.numeroDocument,
                 typedoc: document.typeDocument? document.typeDocument.libelle:'',
                 des: document.designationDocument,
                 dateet: this.shortFormatter.format(new Date(document.date)),
                 obj: document.objetDocument,
                 autdoc: document.auteurDocument,
                 dateaccept: this.shortFormatter.format(new Date(document.date)),
                 datesoumiss: this.shortFormatter.format(new Date(document.date)),
                 sourcext: document.sourceExterne,
                 datedebut: this.shortFormatter.format(new Date(document.date)),
                 datefin: this.shortFormatter.format(new Date(document.date)),
                 datenum: this.shortFormatter.format(new Date(document.date)),
                 etatdoc: document.etatDocument
                });
          });
           // Charger la variable utiliser pour créer le tableau html
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
    });
  }
  refresh(): void {
    window.location.reload();
  }
  onView( num: number){
    if (num!) {
      this.documentsService.getDocumentById_Document(num).subscribe(
        (data:any)=>{
          //this.refresh();
          console.log(data);
        },
       error => {
         alert(error);
       });
     }
}

onDelete( prod: Document){
  let conf = confirm("Etes-vous sûr ?");

if (conf) {
 this.documentsService.Supprimer(prod).subscribe(
   (data:any)=>{
    // this.router.navigateByUrl(`liste_courrier`);
     this.refresh();
   },
  error => {
    alert(error);
  });
}
}

onUpdate( num: number){
  if (num!) {
    this.router.navigateByUrl(`modifier_document/${num}`);
  }
}
onViews( num: string){
  if (num !== '') {
    this.router.navigateByUrl(`modifier_document/${num}`);
  }
}

}

