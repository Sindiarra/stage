import { Personne } from '../models-personne/personne-models';
import { Component, OnInit } from '@angular/core';
import { PersonnesService } from '../services-personne/personne-services';
import { LoginService } from '../../../services/login-services';
import { NgForm, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonneMorale } from '../models-personne/personne-morale-models';
import { PersonnePhysique } from '../models-personne/personne-physique-models';
//Boutton Ajout personne 
import { Role } from '../../actes/models-actes/role-partie-model';
import { Item } from 'src/app/components/dropdown/dropdown.model';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.scss']
})
export class PersonneComponent implements OnInit {
  personne!:Personne[];
  personnes!: any[];
   newPersonne = new Personne();
   oldPersonne = new Personne();
   physique = new PersonnePhysique();
   morale = new PersonneMorale();
   msg !: string;
   msg_p !: string;
   types = "personne_physique, personne_morale";
   addForm:any;
   physi_form=false;
   moral_form=false;
  //  dtOptions: DataTables.Settings = {};
   //ajout boutton personne modal
   tabDroit!: any[];
   tabPartie!: any[];
   tabListPerso:any[]=[];
   tabListGroup:any[]=[];
   currentSelectedItem!: Item;
   items: Item[] = [];
   showSearch = true;
   showError = false;
   showStatus = true;
   //varaiable pour gerer les roles
   role!: Role[];
   tabRole!: any[];
   tabListRole:any[]=[];
   tabSelectRole:any[]=[];
   prevRoleSelect: string = "";
   //Fin Ajout Boutton personne modal

   shortFormatter = new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
   
   entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;

  //Creation de personne
  rows: any[] = [];
  
  // ];

  module!:string;
  user_role!:string;
 
   constructor(
      private personneService : PersonnesService,
     private formBuilder: FormBuilder,
     private router: Router,
      private login:LoginService
   ) { 
    
   }
 
   ngOnInit(): void {
    this.module='Personne';
    this.user_role='Admin';
      this.login.logout();

    // this.getAllPersonnes()
    
   }

  //  getAllPersonnes(){
  
   entriesChange($event) {
    this.entries = $event.target.value;
  }

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
  
    this.router.navigateByUrl(`#/personnes/nouveau`);
  
}
   resetForm(form_personne:NgForm){
     form_personne.resetForm();
   }
   onDelete( prod: any){
     //supprimer le Personne prod du tableau Personnes
     let conf = confirm("Etes-vous sûr de supprimer ref : "+prod+" de la liste ?");
 
      if (conf) {
       this.personneService.supprimerPersonne(prod).subscribe(
         (data:any)=>{
           //this.router.navigateByUrl(`liste_courrier`);
           this.refresh();
         },
        error => {
          alert(error);
        });
      }
  }
  onUpdate( num: any){
    this.router.navigateByUrl(`../modifier/${num}`);
  }

  onSubmitModifiForm(){
   this.personneService.modifierPersonne(this.oldPersonne).subscribe(
     (data:any)=>{
       this.msg_p = data.message;
       this.refresh();
     },
    error => {
      alert(error);
    });
 }
 getPersonneById_Personne(PersonneId: number): Personne {
   const personnes = this.personne.find(Personnes => Personnes.id === PersonneId);
   if (!personnes) {
       throw new Error('Personne not found!');
   } else {
       return personnes;
   }
 
 }
 
  // onChangeType_Personne(event: any) {
 
   getPersonneNameById(id_pers: any) {
     throw new Error('Method not implemented.');
   }
 
 refresh(): void {
   window.location.reload();
 }
 
 delSimpleElt(ind:number, tableau:any[]){
   if (tableau! && tableau.length > 0) {
     tableau.splice(ind,1);
   }
 }

 //Fin Ajout personne 
 }

