import { Component, OnInit } from '@angular/core';
import { Document } from '../models-document/document-models';
import { DocumentsService } from '../services-document/documents-services';
import { FormBuilder } from '@angular/forms';
import { TypeDocument } from '../models-document/type-doc-model';

@Component({
  selector: 'app-ajouter-document',
  templateUrl: './ajouter-document.component.html',
  styleUrls: ['./ajouter-document.component.scss']
})
export class AjouterDocumentComponent implements OnInit {
  closeResult: string;
  documents!: Document[];
  newDocument = new Document();
  //typeDoc : TypeDocument[];
  listTypeDocument: TypeDocument[]=[];
  typeDocSelected : TypeDocument;
  file!: File ; // Var
 
constructor(private documentsService: DocumentsService,
            private formBuilder: FormBuilder, ) {}

ngOnInit(): void {
  //this.typeDoc=[];
  this.listTypeDocument=[];
        this.documentsService.getFormData()
        .subscribe((data: any) =>  {
            this.listTypeDocument = data.colllist.typeDocument;              
        });       
        // if (this.typeDoc.length===0) {
        //   this.typeDoc=[{"id":1,"libelle":"Administratif"},{"id":2,"libelle":"Graphique "}];
        // }
        console.log("type---------:",this.listTypeDocument)
         // lire le call list pour avoir la liste des type de document
   // this.documentsService.lireJsonCallLists().subscribe((data:any)=>{
     // this.listTypeDocument=data.colllist.typeDocument;
   // })
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
  const typeD = this.listTypeDocument.find(td => td.id == currentValue);
  if (typeD!) {
    this.newDocument.typedoc=typeD;
    console.log('ty  ',typeD)
  }
}
  //Uploader le repertoire d'un fichier photo
  onFileChange(event: any) { 
    const img = document.getElementById('img_source') as HTMLImageElement;
    const element: HTMLElement = document.getElementById('div_img') as HTMLElement;
    const pdfPreview = document.getElementById('pdfPreview') as HTMLIFrameElement;
//     const fileInput = document.getElementById('fileInput') as HTMLInputElement;

// fileInput.addEventListener('change', (event: Event) => {
//     const target = event.target as HTMLInputElement;
    
//     // Vérifier si des fichiers ont été sélectionnés
//     if (target.files && target.files.length > 0) {
//         const file = target.files[0]; // Sélectionner le premier fichier

//         // Créer une URL temporaire pour accéder au fichier
//         const fileURL = URL.createObjectURL(file);
        
//         console.log(fileURL); // Afficher l'URL du fichier
//     }
// });

     const file = event.target.files[0];
    var txt_file = '';
        if (file) {
          const fileURL = URL.createObjectURL(file);
          // var reader = new FileReader();
          // reader.onload = function (e) {
          //   if (e.target!) {
          //     img?.setAttribute("src", "" + e.target.result);
          //     inputUrl.value="" + e.target.result;             
          //     txt_file = ""+e.target.result;
          //     imageURL=""+e.target.result;
          //     element?.removeAttribute("hidden");
          //     console.log( 'url---: ',txt_file);
          //   }
          // }
          // reader.readAsDataURL(file); // convert to base64 string 
          // Vérifier si c'est bien un fichier PDF
        if (file.type === 'application/pdf') {
            // Affecter l'URL à la source de l'iframe pour prévisualiser le PDF
            pdfPreview.src = fileURL;
        } else {
            alert('Veuillez sélectionner un fichier PDF.');
        }
          //img.src = fileURL;
          console.log( 'url---: ',fileURL);
          element?.removeAttribute("hidden");
          this.newDocument.imageURL = fileURL; 
        }

      }

}
