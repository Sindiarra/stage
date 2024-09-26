

import { Component, OnInit } from '@angular/core';
import { Acte } from 'src/app/modules/actes/models-actes/acte-models';
import { Courrier } from '../../courriers/models-courrier/Courrier'; 
import { CourriersService } from 'src/app/modules/courriers/services-courrier/liste-courrier-services';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Personne } from '../../personnes/models-personne/personne-models'; 
import { PersonnesService } from 'src/app/modules/personnes/services-personne/personne-services';
import { ActesService } from 'src/app/modules/actes/services-actes/actes-services';
import { Processus } from 'src/app/modules/actes/models-actes/processus-models';
import { ProcessusActe } from 'src/app/modules/actes/models-actes/processus-acte-models';
import { ProprieteActe } from 'src/app/modules/actes/models-actes/propriete-acte-models';
import { Partie } from 'src/app/modules/actes/models-actes/partie-models';
import { LigneEmission } from 'src/app/modules/actes/models-actes/ligne-emission';
import { TypeActe } from 'src/app/modules/actes/models-actes/types-actes-models';
import { NatureActe } from 'src/app/modules/actes/models-actes/nature-acte-models';
import { Localite } from '../../localisations/models-localisation/Localite';
import { Emission } from 'src/app/modules/actes/models-actes/emission-models';
import { Resultat } from 'src/app/modules/actes/models-actes/resultat-acte-models';
import { Role } from 'src/app/modules/actes/models-actes/role-partie-model';
import { Item } from 'src/app/components/dropdown/dropdown.model';
import { GroupeParties } from 'src/app/modules/actes/models-actes/groupe-partie-models';

@Component({
  selector: 'app-ajouter-acte',
  templateUrl: './ajouter-acte.component.html',
  styleUrls: ['./ajouter-acte.component.scss']
})
export class AjouterActeComponent implements OnInit {
  idOngletActive='liquidation';
  actes!: Acte[];
  newActe = new Acte();
  processus!: Processus[];
  newProcessus = new ProcessusActe();
  proprieteActe!: ProprieteActe[];
  newProprieteActe = new ProprieteActe();
  partie!: Partie[];
  newPartie = new Partie();
  ligneEmission!: LigneEmission[];
  newLigneEmission = new LigneEmission();
  typeActe!: TypeActe[];
  newTypeActe = new TypeActe();
  natureActe!: NatureActe[];
  newNatureActe = new NatureActe();
  localite!: Localite[];
  newLocalite = new Localite();
  emission!: Emission[];
  newEmission = new Emission();
  resultat!: Resultat[];
  newResultat = new Resultat();
  tabProp!: any[];
  tabListProp!:any[];
  tabSelectProp:any[]=[];
  propActe!: any[];
  itemsPropActe: any[]=[];
  //varaiable pour gerer les processus
  tabProcessus!: any[];
  tabListProcessus!:any[];
  tabSelectProcessus:any[]=[];
  itemsProcessus: any[]=[];
  prevProcessusSelect: string = "";
//varaiable pour gerer les personnes
personne!: Personne[];
tabPartie!: any[];
tabListPerso:any[]=[];
itemsPerso:any[]=[];
prevPersoSelect: string = "";
//varaiable pour gerer les roles
role!: Role[];
tabRole!: any[];
tabListRole:any[]=[];
tabSelectRole:any[]=[];
prevRoleSelect: string = "";
//varaiable pour gerer les groupes
groupe!: any[];
tabGroup!: any[];
tabListGroup:any[]=[];
tabSelectGroup:any[]=[];
prevGroupSelect: string = "";
  msg !: string;
  msg_p !: string;
  msg_c !: string;
  form!:FormGroup;

  //varaiable pour gerer les droits
droit!: any[];
tabDroit!: any[];
tabListDroit:any[]=[];
tabSelectDroit:any[]=[];
prevDroitSelect: string = "";
//varaiable pour gerer les taux
taux!: any[];
tabTaux!: any[];
tabListTaux:any[]=[];
tabSelectTaux:any[]=[];
prevTauxSelect: string = "";

  shortLink: string = "";
  previousSelect: string = "";
  isShow: boolean = false; // Flag variable
  file!: File; // Var
  users = "mariam";
  users_types = "secretaire";
  users_structure = "DND";

    items: Item[] = [];
    currentSelectedItem!: Item;
    showSearch = true;
    showError = false;
    showStatus = true;
  constructor( private actesService: ActesService, private courrierService: CourriersService, private personneService: PersonnesService) {

  }

  ngOnInit(): void {
  //   this.items = [
  //     {
  //         id: 4,
  //         name: 'Apple',
  //         visible: true
  //     }, {
  //         id: 5,
  //         name: 'Mango',
  //         visible: true
  //     }, {
  //         id: 6,
  //         name: 'Banana',
  //         visible: true
  //     }
  // ];
    this.actesService.getFormData()
        .subscribe((data: any) =>  {
          this.processus = data.processus;
          this.typeActe = data.type;
          this.propActe = data.propriete;
          this.personne = data.personne;
          this.groupe = data.groupe;
          this.role = data.role;
          this.tabListProp=this.propActe;
          this.propActe.forEach(prod=>{            
            this.itemsPropActe.push({
              id:prod.id,
              name:prod.numpropriete,
              visible:true
            });
           });
          this.tabProp=[{
            listpropriete:this.itemsPropActe,
            id_prop:null,
            propriete:null,
            typePropriete:'',
            parcellePropriete:'',
            superficiePropriete:'',
            localitePropriete:'',
            index:0,
          }];
          this.personne.forEach(perso=>{
            this.tabListPerso.push({
              id:perso.id,
              name:this.reconstituePersonne(perso),
              visible:true
            });
           });
           
          //  const pers1 = this.tabListPerso.find(per => per.numPersonne == '0125-345-Y');
          //  pers1.selected=false;
          this.role.forEach(rol=>{
            this.tabListRole.push({
              id:rol.id,
              name:rol.libellerole,
              visible:true
            });
           });
           this.groupe.forEach(group=>{
            this.tabListGroup.push({
              id:group.id,
              name:( 'Groupe ' +group.id),
              visible:true
            });
           });
          this.tabListProcessus=this.processus;
          this.processus.forEach(proc=>{            
            this.itemsProcessus.push({
              id:proc.id,
              name:proc.nomProcessus,
              visible:true
            });
           });
          this.tabProcessus=[{
            listprocessus:this.itemsProcessus,
            id_processus:null,
            nom_processus:'',
            index:0,
          }];
          //partie
          this.tabPartie=[{
            listpersonne:this.tabListPerso,
            numpersonne:null,
            listrole:this.tabListRole,
            selectedRole:null,
            listgroup:this.tabListGroup,
            selectedGroupe:null,
            date:new Date(),
            index:0,
          }];

          this.processus.forEach(group=>{            
            this.items.push({
              id:group.id,
              name:group.nomProcessus,
              visible:true
            });
           });
           this.tabDroit=[{
            droit:this.items,
            selectDroit:null,
            taux:'',
            montant:'',
            index:0,
          }];
        });
        
  }
  /*Fonction pour envoyer la formulaire*/
  onFormSubmit() {
    //this.newActe.date=new Date();
    //this.newActe.numeroacte='sn-255';
    //this.newActe.montant=50000;
    this.reconstituerPartie();
    this.actesService.ajouterActe(this.newActe).subscribe(
      (data:any)=>{
        // let n: ReturnType<typeof setTimeout>;
        // n = setTimeout(() => {this.refresh()}, 1000);
        console.log('reponse:');
      },
     error => {
       console.log(error);
     });
  }
  //Fonction pour afficher les details de la propriété selectionnée
  onItemChangePropriete(item: Item,index:number): void {
    this.currentSelectedItem = item;
    let prevD=this.tabProp[index].propriete;
    //verifier s'il n'ya pas ancien element
  if (prevD! && prevD !== item) {
    //on active l'element retrouver
    this.itemsPropActe.find(x => x === prevD)!.visible=true;
  }
  const acteProp = this.tabListProp.find(propriete => propriete.numpropriete === this.currentSelectedItem.name);
  if (acteProp!) {
      //remplissage du tableau global par les informations de l'objet
    this.tabProp[index].propriete=this.currentSelectedItem;
    this.tabProp[index].id_prop=acteProp.id;
    this.tabProp[index].typePropriete=acteProp.type;
    this.tabProp[index].parcellePropriete=acteProp.parcelle.Ilo + '/' + acteProp.parcelle.Numparcelle;
    this.tabProp[index].superficiePropriete=acteProp.parcelle.superficie;
    this.tabProp[index].localitePropriete=acteProp.parcelle.localite.libellelocalite;
    }
    this.itemsPropActe.find(x => x === this.currentSelectedItem)!.visible=false;
    let nb=this.tabProp.length - 1;
    if(nb === index){
    this.tabProp.push({
      listpropriete:this.itemsPropActe,
      id_prop:null,
      propriete:null,
      typePropriete:'',
      parcellePropriete:'',
      superficiePropriete:'',
      localitePropriete:'',
      index:(nb+1)
      });
    }
     // preparation de l'objet des propriété selectionnées devant être envoyés au backend
     let newPropActe:ProprieteActe[]=[];
     let newActeVide:Acte;
     //on parcourt le tableau des selectionnées pour remplir le nouveau tableau
     this.itemsPropActe.forEach(prop=>{
      if(!prop.visible){
        const props = this.tabListProp.find(propriete => propriete.numpropriete === prop.name);
        if (props!) {
          newPropActe.push({id:null,acte:newActeVide, propriete:props});
          //this.tabSelectProp.push(props);
        }
      }
     });
     //on affecte le nouveau tableau rempli à la proprieteactes de l'objet newacte qui doit être envoyé
      this.newActe.proprieteactes= newPropActe;
      //this.newActe.propriete= this.tabSelectProp;
}
  /*Fonction pour supprimer un element de tableau*/
  delProprieteElt(ind:number, tableau:any[]){
    if (tableau! && ind < tableau.length-1) {
      tableau.splice(ind,1);
    }
  }
  /*Fonction pour supprimer un element de notre tableau principal des propriètèes */
  supprActeListe(old_num:Item,ind:number,tableau:any[]){
    let prevD=tableau[ind].propriete;
    if (prevD!) {
      //on active l'element retrouver
      this.itemsPropActe.find(x => x === prevD)!.visible=true;
    }
    this.delSimpleElt(ind, tableau);
  }
   
  /*Fonction pour ajouter un element de tableau*/
  updateSimpleElt(old_num_pro:string,num_pro:string, tableauSelection:any[], tableauListe:any[]){
    if (num_pro! && tableauSelection! && tableauListe!) {
        if (old_num_pro! && old_num_pro!=='' && old_num_pro!==num_pro) {
        //pour old
        //recherche de l'objet par old_num_pro
        const actePropOld = tableauSelection.find(propriete => propriete.numpropriete === old_num_pro);
        let indexOld = tableauSelection.findIndex(x => x.numpropriete === old_num_pro);
        if (actePropOld!==undefined) {
          tableauListe.push(actePropOld);
          this.delSimpleElt(indexOld, tableauSelection);
        }
      }
      //recherche de l'objet par old_num_prop
      const acteProp = tableauListe.find(propriete => propriete.numpropriete === num_pro);
      let index1 = tableauListe.findIndex(propriete => propriete.numpropriete === num_pro);
      if (acteProp!==undefined) {
        //on ajoute la valeur selectionnée dans le tableau des selectionnée
        tableauSelection.push(acteProp);
        //on supprime la valeur selectionnée dans le tableau afficher dans les listes déroulantes
        this.delSimpleElt(index1, tableauListe);
      }
   
    }
  }
   /*Fonction pour supprimer un element de tableau*/
  delSimpleElt(ind:number, tableau:any[]){
    if (tableau! && tableau.length > 0) {
      tableau.splice(ind,1);
    }
  }
   /*Fonction pour annuler la saisie du formulaire*/
  resetForm(form_acte: NgForm) {
    form_acte.resetForm();
  }
  /*Fonction pour rafraichir la page*/
  refresh(): void {
    window.location.reload();
  }
  /*Fonction pour verifier une valeur*/
  verifyValue(tab: any){
    if (tab!) {
      return tab.id;
    }else{
      return null;
    }
  }
  /*Mise à jour le tableau global */
  updateGlobalTab(num_pro:string, ind:number, acteProp:any,tableau: any[]){
    if (num_pro! && num_pro!=='' && ind! && acteProp!) {
      //remplissage du tableau global par les informations de l'objet
      this.tabProp[ind].propriete=num_pro;
      this.tabProp[ind].id_prop=acteProp.id;
      this.tabProp[ind].typePropriete=acteProp.type;
      this.tabProp[ind].parcellePropriete=acteProp.parcelle.Ilo + '/' + acteProp.parcelle.Numparcelle;
      this.tabProp[ind].superficiePropriete=acteProp.parcelle.superficie;
      this.tabProp[ind].localitePropriete=acteProp.parcelle.localite.libellelocalite;
      //le nombre de ligne du tableau principal -1 
      let nb=this.tabProp.length - 1;
      //on verifie si c'est le dernier element du tableau? on ajoute ligne vide
      if(nb===ind){
        this.tabProp.push({
        listpropriete:this.tabListProp,
        id_prod:'',
        typePropriete:'',
        parcellePropriete:'',
        superficiePropriete:'',
        localitePropriete:'',
        index:(nb+1)
        })
      }
    }
  }
 
  //Fonction pour afficher les details de la propriété selectionnée
  getProcessusInfo(item: Item,index:number): void {
    this.currentSelectedItem = item;
    let prevD=this.tabProcessus[index].id_processus;
    //verifier s'il n'ya pas ancien element
  if (prevD! && prevD !== item) {
    //on active l'element retrouver
    this.itemsProcessus.find(x => x === prevD)!.visible=true;
  }
  const acteProp = this.tabListProcessus.find(process => process.id === this.currentSelectedItem.id);
  if (acteProp!) {
      //remplissage du tableau global par les informations de l'objet
    this.tabProcessus[index].id_processus=this.currentSelectedItem;
    this.tabProcessus[index].nom_processus=this.currentSelectedItem.name;
    }
    this.itemsProcessus.find(x => x === this.currentSelectedItem)!.visible=false;
    let nb=this.tabProcessus.length - 1;
    if(nb === index){
    this.tabProcessus.push({
      listprocessus:this.itemsProcessus,
      id_processus:null,
      nom_processus:'',
      index:(nb+1),
    });
    }
    //preparation de l'objet des propriété selectionnées devant être envoyés au backend
    let processusActe: ProcessusActe[]=[];
    let newActeVide:Acte;
    //on parcourt le tableau des selectionnées pour remplir le nouveau tableau
    this.itemsProcessus.forEach(prop=>{
      if(!prop.visible){
        const procs = this.tabListProcessus.find(process => process.nomProcessus === prop.name);
        if (procs!) {
          processusActe.push({id:null,acte:newActeVide,processus:procs});
        }
      }
     });
    //on affecte le nouveau tableau rempli à la proprieteactes de l'objet newacte qui doit être envoyé
     this.newActe.processusactes= processusActe;
}
   /*Fonction pour ajouter un element de tableau*/
   updateProceSimpleElt(old_num_pro:string,num_pro:string, tableauSelection:any[], tableauListe:any[]){
    if (num_pro! && tableauSelection! && tableauListe!) {
        if (old_num_pro! && old_num_pro!=='' && old_num_pro!==num_pro) {
        //pour old
        //recherche de l'objet par old_num_pro
        const acteProcOld = tableauSelection.find(processus => processus.id == old_num_pro);
        let indexOld = tableauSelection.findIndex(x => x.id == old_num_pro);
        if (acteProcOld!==undefined) {
          tableauListe.push(acteProcOld);
          this.delSimpleElt(indexOld, tableauSelection);
        }
      }
      //recherche de l'objet par old_num_prop
      const acteProc = tableauListe.find(processus => processus.id == num_pro);
      let index1 = tableauListe.findIndex(processus => processus.id == num_pro);
      if (acteProc!==undefined) {
        //on ajoute la valeur selectionnée dans le tableau des selectionnée
        tableauSelection.push(acteProc);
        //on supprime la valeur selectionnée dans le tableau afficher dans les listes déroulantes
        this.delSimpleElt(index1, tableauListe);
      }
   
    }
  }
  /*Fonction pour supprimer un element de notre tableau principal des propriètèes */
  supprProcessusListe(ind:number,tableau:any[]){
    let prevD=tableau[ind].id_processus;
    if (prevD!) {
      //on active l'element retrouver
      this.itemsProcessus.find(x => x === prevD)!.visible=true;
    }
    this.delSimpleElt(ind, tableau);
  }
 
  //Reconstitution d'une seule liste pour afficher les personnes physique et morale
  reconstituePersonne(perso:any)  {
    
    if (perso! && !perso.selected) {
      let result=perso.numPersonne;
      if (perso.personnePhysique!==null) {
        result+=' '+perso.personnePhysique.NomPersonnePhysique+ ' '+perso.personnePhysique.PrenomPersonnePhysique;
      }
      if (perso.personneMorale!==null) {
        result+=' '+perso.personneMorale.raisonsocialPersonneMorale;
      }
      return result;
    }
  }
  
  getPartieInfo(item: Item,index:number): void {
    this.currentSelectedItem = item;
    let prevD=this.tabPartie[index].numPersonne;
    //verifier s'il n'ya pas ancien element
  if (prevD! && prevD !== item) {
    //on active l'element retrouver
    this.tabListPerso.find(x => x === prevD)!.visible=true;
  }
  const perso = this.personne.find(pers => pers.id === this.currentSelectedItem.id);
  if (perso!) {
      //remplissage du tableau global par les informations de l'objet
    this.tabPartie[index].numPersonne=this.currentSelectedItem;
    }
    this.tabListPerso.find(x => x === this.currentSelectedItem)!.visible=false;
    let nb=this.tabPartie.length - 1;
    if(nb === index){
    this.tabPartie.push({
      listpersonne:this.tabListPerso,
      numpersonne:null,
      listrole:this.tabListRole,
      selectedRole:null,
      listgroup:this.tabListGroup,
      selectedGroupe:null,
      date:new Date(),
      index:(nb+1),
    });
    }
    
}
  
  getGroupInfo(item: Item, index:number){
    this.currentSelectedItem = item;
    let prevD=this.tabPartie[index].selectedGroupe;
    //verifier s'il n'ya pas ancien element
  if (prevD! && prevD !== item) {
    //on active l'element retrouver
    this.tabListGroup.find(x => x === prevD)!.visible=true;
  }
      //remplissage du tableau global par les informations de l'objet
    this.tabPartie[index].selectedGroupe=this.currentSelectedItem;
    this.tabListGroup.find(x => x === this.currentSelectedItem)!.visible=false;
  }
  getRoleInfo(item: Item, index:number){
    this.currentSelectedItem = item;
    let prevD=this.tabPartie[index].selectedRole; 
      //remplissage du tableau global par les informations de l'objet
    this.tabPartie[index].selectedRole=this.currentSelectedItem;
    //this.reconstituerPartie();
  }
  supprPartieListe(ind:number,tableau:any[]){
    if (tableau!) {
      let prevP=tableau[ind].numPersonne;
      let prevG=tableau[ind].selectedGroupe;
      if (prevP!) {
        //on active l'element retrouver
        this.tabListPerso.find(x => x === prevP)!.visible=true;
      }
      if (prevG!) {
        //on active l'element retrouver
        this.tabListGroup.find(x => x === prevG)!.visible=true;
      }
      this.delSimpleElt(ind, tableau);
    }
  }
  
  onItemChangeDroit(item: Item,index:number): void {
    this.currentSelectedItem = item;
    let prevD=this.tabDroit[index].selectDroit;
    //verifier s'il n'ya pas ancien element
  if (prevD! && prevD !== item) {
    //on active l'element retrouver
    this.items.find(x => x === prevD)!.visible=true;
  }

    this.items.find(x => x === this.currentSelectedItem)!.visible=false;
    this.tabDroit[index].selectDroit=this.currentSelectedItem;
    let nb=this.tabDroit.length - 1;
    if(nb === index){
    this.tabDroit.push({
      droit:this.items,
      selectDroit:null,
      taux:'',
      montant:'',
      index:0,
      });
    }
}
supprDroitListe(ind:number,tableau:any[]){
  if (tableau!) {
    let prevP=tableau[ind].selectDroit;
    if (prevP!) {
      //on active l'element retrouver
      this.items.find(x => x === prevP)!.visible=true;
    }
    this.delSimpleElt(ind, tableau);
  }
}
onToggleSearch(): void {
    this.showSearch = !this.showSearch;
}

onToggleError(): void {
    this.showError = !this.showError;
}

onToggleStatus(): void {
    this.showStatus = !this.showStatus;
}
onUpdateDatePartie(event:any,index:number): void {
  let currentValue=event.target.value;
  this.tabDroit[index].date=new Date(currentValue);
}
reconstituerPartie(): void{
  //preparation de l'objet des propriété selectionnées devant être envoyés au backend
  let prevPartie: Partie[]=[];
  let newActeVide:Acte;
  //on parcourt le tableau des selectionnées pour remplir le nouveau tableau
  this.tabPartie.forEach(partie=>{
    if(partie.numpersonne! || partie.selectedGroupe! || partie.selectedRole!){
      const perso = (partie.numPersonne!)?this.personne.find(pe => pe.id === partie.numPersonne.id):new Personne();
      const group = (partie.selectedGroupe!)? this.groupe.find(pe => pe.id === partie.selectedGroupe.id):new GroupeParties();
      const rol = (partie.selectedRole!)?this.role.find(ro => ro.id === partie.selectedRole.id):new Role();
    prevPartie.push({
      id:0,
      personne:perso!,
      role:rol!,
      acte:newActeVide,
      groupe:group,
      representantgroupe:new GroupeParties(),
      date:partie.date
    });
  }
   });
  //on affecte le nouveau tableau rempli à la proprieteactes de l'objet newacte qui doit être envoyé
  this.newActe.parties= prevPartie;
}
}
