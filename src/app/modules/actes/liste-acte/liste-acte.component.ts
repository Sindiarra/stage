import { Component, OnInit } from '@angular/core';
import { Acte } from 'src/app/modules/actes/models-actes/acte-models';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActesService } from 'src/app/modules/actes/services-actes/actes-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-acte',
  templateUrl: './liste-acte.component.html',
  styleUrls: ['./liste-acte.component.scss']
})
export class ListeActeComponent implements OnInit {
  actes!: any[];
  newActe = new Acte();
  oldActe = new Acte();
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
  rows: any[]=[];
   //= [
    // {
    //   num: "01/acte",
    //   date: this.shortFormatter.format(new Date('2024-02-02')),
    //   type: "Vente",
    //   propriete: "PO982",
    //   montant: "300000",
    //   etat: "encours"
    // },
    // {
    //   num: "02/acte",
    //   date: this.shortFormatter.format(new Date('2024-02-08')) ,
    //   type: "Morcellement",
    //   propriete: "TF01254",
    //   montant: "15000000",
    //   etat: "Liquidation"
    // },
    // {
    //   num: "03/acte",
    //   date: this.shortFormatter.format(new Date('2024-04-02')),
    //   type: "Vente",
    //   propriete: "TF240",
    //   montant: "6000000",
    //   etat: "Encours"
    // },
    // {
    //   num: "05/acte",
    //   date: this.shortFormatter.format(new Date('2024-05-02')),
    //   type: "Morcellement",
    //   propriete: "TF9014",
    //   montant: "10000000",
    //   etat: "Emis"
    // },
  //];
  module!:string;
  user_role!:string;

  constructor(private actesService: ActesService,private router: Router) { 
    
  }
  entriesChange($event) {
    this.entries = $event.target.value;
  }
  // filterTable($event) {
  //   let val = $event.target.value;
  //   this.temp = this.rows.filter(function(d) {
  //     for (var key in d) {
  //       if (d[key].toLowerCase().indexOf(val) !== -1) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   });
  // }
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
  ngOnInit(): void {
    this.module='Courrier';
    this.user_role='Admin';
    this.actes=[];
    this.rows=[];
    this.getActes();
    
  }
  // getActes() {
  //   this.actesService.getAllActes()
  //         .subscribe((data: any) =>  {
  //           this.actes = data;
  //   this.actes.forEach(acte=>{   
  //   //Recupération des données       
  //     this.rows.push({
  //       num: acte.numeroacte,
  //       date: this.shortFormatter.format(new Date(acte.date)),
  //       type: acte.type ? acte.type.libelleTypeActe : '',
  //       propriete: acte.proprieteactes ? this.formatArrayPropriete(acte.proprieteactes, '') : '',
  //       montant: acte.montant,
  //       etat: acte.etat
  //     });
  //     });
  //     // Charger la variable utiliser pour créer le tableau html
  //   this.temp = this.rows.map((prop, key) => {
  //     return {
  //       ...prop,
  //       id: key
  //     };
  //   });
  // });
  // }
  getActes() {   
    //lire les données à partir du fichier json
    //this.actesService.lireJson()
    //  lire les données à partir de l'API
     this.actesService.getAllActes()
            .subscribe((data: any) =>  {
              this.actes = data;
    this.actes.forEach(acte=>{   
    //Recupération des données       
      this.rows.push({
        num: acte.numeroacte,
        date: acte.date ? this.shortFormatter.format(new Date(acte.date)):'',
        type: acte.type ? acte.type.libelleTypeActe : '',
        propriete: acte.proprieteactes ? this.formatArrayPropriete(acte.proprieteactes, '') : '',
        montant: acte.montant,
        etat: acte.etat
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
      this.actesService.getActeById_Acte(num).subscribe(
        (data:any)=>{
          //this.refresh();
          console.log(data);
        },
       error => {
         alert(error);
       });
     }
    
 }
 formatArrayPropriete(propriete: any[], type:String){
  let titre='',localite='',parcelle='';
  for (let i = 0; i < propriete.length; i++) {
    titre +=(propriete[i].propriete.numpropriete !)? propriete[i].propriete.numpropriete+'\n' :'';
    titre +=(propriete[i].propriete.parcelle !)? ' issue de la parcelle n°'+ propriete[i].propriete.parcelle.Ilo + '/'+ propriete[i].propriete.parcelle.Numparcelle+'\n':'';
    titre +=(propriete[i].propriete.parcelle.localite !)? ' situé à ' + propriete[i].propriete.parcelle.localite.libellelocalite+'\n;\n':' ;';
  }
  return titre;
 }
 onUpdate( num: number){
  if (num!) {
    this.router.navigateByUrl(`modifier_acte/${num}`);
  }
}
onViews( num: string){
  if (num !== '') {
    this.router.navigateByUrl(`modifier_acte/${num}`);
  }
}
}
