import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CourriersService} from "../services-courrier/liste-courrier-services";

@Component({
  selector: 'app-courrier',
  templateUrl: './courrier.component.html',
  styleUrls: ['./courrier.component.scss']
})

export class CourrierComponent implements OnInit {
   shortFormatter = new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  courriers:any[]
  rows: any[]; /*= [
    {
      num: "01/DND/2024",
      dateArrivee: this.shortFormatter.format(new Date('2024-02-02')),
      ref: "022/MUHPD",
      objet: "Lettre de felicitation",
      prov: "Cabinet",
      origine: "Cabinet",
      type:"Lettre"
    },
    {
      num: "02/DND/2024",
      dateArrivee: this.shortFormatter.format(new Date('2024-02-08')) ,
      ref: "Tokyo",
      objet: "Note d'information",
      prov: "Ministre",
      origine: "Ministre",
      type: "Note"
    },
    {
      num: "03/DND/2024",
      dateArrivee: this.shortFormatter.format(new Date('2024-04-02')),
      ref: "022/MUHPD",
      objet: "Situation des dossiers",
      prov: "Cabinet",
      origine: "Cabinet",
      type: "Note"
    },
    {
      num: "05/DND/2024",
      dateArrivee: this.shortFormatter.format(new Date('2024-05-02')),
      ref: "325-DRDC-KKRO",
      objet: "Note d'information",
      prov: "DRDC-KKRO",
      origine: "DRDC-KKRO",
      type: "Bordereau"
    },
  ];*/
  module!:string;
  user_role!:string;
  constructor(private courriersService:CourriersService,private router:Router) {
  }
  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
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
    this.user_role='Admin'
    this.courriers=[];
    this.rows=[];
    this.getcourriers();
  }

getcourriers(){
  /*lire la liste des courriers a partir de API
  this.courriersService.getAllCourriers().subscribe({
    next:(data)=>{
      this.courriers=data;
    },
    error:(err)=>{
      console.log(err);
    }

  });*/
   // lire la liste des courriers a partir de API
  // this.courriersService.getAllCourriers()
  this.courriersService.lireJson()
    .subscribe((data: any) =>  {
      this.courriers = data;
      this.courriers.forEach(courrier=>{
        // Recupération des données
        this.rows.push({
          idCourrier:courrier.id,
          numCourrier:courrier.numCourrier,
          dateCourrier:courrier.dateCourrier,
          referenceCourrier:courrier.referenceCourrier,
          datereference:courrier.datereference,
          objetCourrier:courrier.objetCourrier,
          origine:courrier.origine
        });
      });
      // Charger la variable rows pour créer le tableau html
      this.temp = this.rows.map((prop, key) => {
        return {
          ...prop,
          id: key
        };
      });
    });

}

  /*onUpdate(id:number) {
    if(id){
      //console.log('mariam votre id:'+id);
      this.router.navigate(['../modifier',id]);
      // this.router.navigateByUrl(`../modifier/${id}`
    }
  }*/
}
