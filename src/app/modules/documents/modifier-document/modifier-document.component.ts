import { Component } from '@angular/core';
import { Document } from '../models-document/document-models';
import { DocumentsService } from '../services-document/documents-services';
import { FormBuilder } from '@angular/forms';
import { TypeDocument } from '../models-document/type-doc-model';
@Component({
  selector: 'app-modifier-document',
  templateUrl: './modifier-document.component.html',
  styleUrls: ['./modifier-document.component.scss']
})
export class ModifierDocumentComponent {
  closeResult: string;
  documents!: Document[];
  newDocument = new Document();
  typeDoc : TypeDocument[];
  typeDocSelected : TypeDocument;
  file!: File; // Var
 
constructor(
  private documentsService: DocumentsService,
  private formBuilder: FormBuilder, ) {}

  ngOnInit(): void {
    this.typeDoc=[];
          this.documentsService.getFormData()
          .subscribe((data: any) =>  {
              this.typeDoc = data.colllist.typeDocument;              
          });       
          // if (this.typeDoc.length===0) {
          //   this.typeDoc=[{"id":1,"libelle":"Administratif"},{"id":2,"libelle":"Graphique "}];
          // }
          console.log("type---------:",this.typeDoc)
  }

  onFormSubmit() {
    console.log( 'Objet: ',this.newDocument);
    
    this.documentsService.ajouterDocument(this.newDocument).subscribe(
      (data:any)=>{
        console.log('reponse:', data);
      },
     error => {
       console.log(error);
     });
    }
    onSelectTypeDocument(event:any){
      let currentValue=event.target.value;
      const typeD = this.typeDoc.find(td => td.id == currentValue);
      if (typeD!) {
        this.newDocument.typedoc=typeD;
        console.log('ty  ',typeD)
      }
    }
     // preparation de l'objet des propriété selectionnées devant être envoyés au backend
}
