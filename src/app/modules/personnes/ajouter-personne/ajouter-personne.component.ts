import { Component, OnInit } from '@angular/core';
import { CourriersService } from '../../courriers/services-courrier/liste-courrier-services';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonnesService } from '../../personnes/services-personne/personne-services';
import { ActesService } from '../../actes/services-actes/actes-services';
import { Item } from 'src/app/components/dropdown/dropdown.model';
import { Personne } from '../models-personne/personne-models';
import { PersonneMorale } from '../models-personne/personne-morale-models';
import { PersonnePhysique } from '../models-personne/personne-physique-models';
import { PersonneAdresse } from '../models-personne/personne-adresse-models';
import { PieceIdentite } from '../models-personne/piece-identite-models';
import { PersonneHeritier } from '../models-personne/personne-heritier-models';
import { Utilisateurs } from '../../administrations/models-admin/Utilisateurs/Utilisateur';
import Selectr from "mobius1-selectr";
import { Compte } from '../models-personne/compte-models';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PersonneConstitution } from '../models-personne/personne-constitution-models';
import { TypePersonne } from '../models-personne/type-personne-models';

@Component({
  selector: 'app-ajouter-personne',
  templateUrl: './ajouter-personne.component.html',
  styleUrls: ['./ajouter-personne.component.scss']
})
export class AjouterPersonneComponent implements OnInit {
  newPersonne = new Personne();
  newPersonneMorale = new PersonneMorale();
  newPersonneHeritier = new PersonneHeritier();
  newPersonnePhysique = new PersonnePhysique();
  newPiece = new PieceIdentite();
  newCompte = new Compte();
  newAdresse = new PersonneAdresse();
  newTypePersonne = new TypePersonne();


  closeResult: string;
  cols :any[] =[
    { prop: 'ref', name: 'Ref' },
    { prop: 'prenom', name: 'Prenom' },
    { prop: 'nom', name: 'Nom' },
    { prop: 'lien', name: 'Lien' },
  ]
rows:any[] = [];
titre='Selectionner les personnes physiques associes';
infos='';

  //Mes selects
  typePersonnes: TypePersonne[] = [];
  civilites: string[] = ["Mr", "Mme", "Mlle"];
  sexes: string[] = ["H", "F"];
  countries: { name: string, code: string }[] = [
    { name: "Afghanistan", code: "Afghanistan" }, { name: "Albanie", code: "Albanie" }, { name: "Algérie", code: "Algerie" }, { name: "Andorre", code: "Andorre" },
    { name: "Angola", code: "Angola" }, { name: "Antigua-et-Barbuda", code: "Antigua_et_Barbuda" }, { name: "Argentine", code: "Argentine" },
    { name: "Arménie", code: "Armenie" }, { name: "Australie", code: "Australie" }, { name: "Autriche", code: "Autriche" }, { name: "Azerbaïdjan", code: "Azerbaidjan" },
    { name: "Bahamas", code: "Bahamas" }, { name: "Bahreïn", code: "Bahrein" }, { name: "Bangladesh", code: "Bangladesh" }, { name: "Barbade", code: "Barbade" },
    { name: "Belgique", code: "Belgique" }, { name: "Belize", code: "Belize" }, { name: "Bénin", code: "Benin" }, { name: "Bhoutan", code: "Bhoutan" },
    { name: "Biélorussie", code: "Bielorussie" }, { name: "Birmanie", code: "Birmanie" }, { name: "Bolivie", code: "Bolivie" }, { name: "Bosnie-Herzégovine", code: "Bosnie_Herzegovine" },
    { name: "Botswana", code: "Botswana" }, { name: "Brésil", code: "Bresil" }, { name: "Brunei", code: "Brunei" }, { name: "Bulgarie", code: "Bulgarie" },
    { name: "Burkina Faso", code: "Burkina_Faso" }, { name: "Burundi", code: "Burundi" }, { name: "Cambodge", code: "Cambodge" }, { name: "Cameroun", code: "Cameroun" },
    { name: "Canada", code: "Canada" }, { name: "Cap-Vert", code: "Cap_Vert" }, { name: "République centrafricaine", code: "Republique_centrafricaine" },
    { name: "Chili", code: "Chili" }, { name: "Chine", code: "Chine" }, { name: "Chypre", code: "Chypre" }, { name: "Colombie", code: "Colombie" },
    { name: "Comores", code: "Comores" }, { name: "République du Congo", code: "Republique_du_Congo" }, { name: "République démocratique du Congo", code: "Republique_democratique_du_Congo" },
    { name: "Corée du Nord", code: "Coree_du_Nord" }, { name: "Corée du Sud", code: "Coree_du_Sud" }, { name: "Costa Rica", code: "Costa_Rica" },
    { name: "Côte d'Ivoire", code: "Cote_d_Ivoire" }, { name: "Croatie", code: "Croatie" }, { name: "Cuba", code: "Cuba" }, { name: "Danemark", code: "Danemark" }, { name: "Djibouti", code: "Djibouti" },
    { name: "Dominique", code: "Dominique" }, { name: "République dominicaine", code: "Republique_dominicaine" }, { name: "Égypte", code: "Egypte" },
    { name: "Émirats arabes unis", code: "Emirats_arabes_unis" }, { name: "Équateur", code: "Equateur" }, { name: "Érythrée", code: "Erythree" },
    { name: "Espagne", code: "Espagne" }, { name: "Estonie", code: "Estonie" }, { name: "États-Unis", code: "Etats_Unis" }, { name: "Éthiopie", code: "Ethiopie" }, { name: "Fidji", code: "Fidji" }, { name: "Finlande", code: "Finlande" }, { name: "France", code: "France" },
    { name: "Gabon", code: "Gabon" }, { name: "Gambie", code: "Gambie" }, { name: "Géorgie", code: "Georgie" }, { name: "Ghana", code: "Ghana" },
    { name: "Grèce", code: "Grece" }, { name: "Grenade", code: "Grenade" }, { name: "Guatemala", code: "Guatemala" }, { name: "Guinée", code: "Guinee" },
    { name: "Guinée-Bissau", code: "Guinee_Bissau" }, { name: "Guinée équatoriale", code: "Guinee_equatoriale" }, { name: "Guyana", code: "Guyana" },
    { name: "Haïti", code: "Haiti" }, { name: "Honduras", code: "Honduras" }, { name: "Hongrie", code: "Hongrie" }, { name: "Inde", code: "Inde" },
    { name: "Indonésie", code: "Indonesie" }, { name: "Irak", code: "Irak" }, { name: "Iran", code: "Iran" }, { name: "Irlande", code: "Irlande" },
    { name: "Islande", code: "Islande" }, { name: "Israël", code: "Israel" }, { name: "Italie", code: "Italie" }, { name: "Jamaïque", code: "Jamaique" },
    { name: "Japon", code: "Japon" }, { name: "Jordanie", code: "Jordanie" }, { name: "Kazakhstan", code: "Kazakhstan" }, { name: "Kenya", code: "Kenya" },
    { name: "Kirghizistan", code: "Kirghizistan" }, { name: "Kiribati", code: "Kiribati" }, { name: "Koweït", code: "Koweit" }, { name: "Laos", code: "Laos" },
    { name: "Lesotho", code: "Lesotho" }, { name: "Lettonie", code: "Lettonie" }, { name: "Liban", code: "Liban" }, { name: "Libéria", code: "Liberia" },
    { name: "Libye", code: "Libye" }, { name: "Liechtenstein", code: "Liechtenstein" }, { name: "Lituanie", code: "Lituanie" }, { name: "Luxembourg", code: "Luxembourg" }, { name: "Macédoine", code: "Macedoine" }, { name: "Madagascar", code: "Madagascar" },
    { name: "Malaisie", code: "Malaisie" }, { name: "Malawi", code: "Malawi" }, { name: "Maldives", code: "Maldives" }, { name: "Mali", code: "Mali" },
    { name: "Malte", code: "Malte" }, { name: "Maroc", code: "Maroc" }, { name: "Marshall", code: "Marshall" }, { name: "Maurice", code: "Maurice" },
    { name: "Mauritanie", code: "Mauritanie" }, { name: "Mexique", code: "Mexique" }, { name: "Micronésie", code: "Micronesie" }, { name: "Moldavie", code: "Moldavie" },
    { name: "Monaco", code: "Monaco" }, { name: "Mongolie", code: "Mongolie" }, { name: "Monténégro", code: "Montenegro" }, { name: "Mozambique", code: "Mozambique" },
    { name: "Namibie", code: "Namibie" }, { name: "Nauru", code: "Nauru" }, { name: "Népal", code: "Nepal" }, { name: "Nicaragua", code: "Nicaragua" },
    { name: "Niger", code: "Niger" }, { name: "Nigéria", code: "Nigeria" }, { name: "Norvège", code: "Norvege" }, { name: "Nouvelle-Zélande", code: "Nouvelle_Zelande" },
    { name: "Oman", code: "Oman" }, { name: "Ouganda", code: "Ouganda" }, { name: "Ouzbékistan", code: "Ouzbekistan" }, { name: "Pakistan", code: "Pakistan" },
    { name: "Palaos", code: "Palaos" }, { name: "Panama", code: "Panama" }, { name: "Papouasie-Nouvelle-Guinée", code: "Papouasie_Nouvelle_Guinee" },
    { name: "Paraguay", code: "Paraguay" }, { name: "Pays-Bas", code: "Pays_Bas" }, { name: "Pérou", code: "Perou" }, { name: "Philippines", code: "Philippines" },
    { name: "Pologne", code: "Pologne" }, { name: "Portugal", code: "Portugal" }, { name: "Qatar", code: "Qatar" }, { name: "Roumanie", code: "Roumanie" },
    { name: "Royaume-Uni", code: "Royaume_Uni" }, { name: "Russie", code: "Russie" }, { name: "Rwanda", code: "Rwanda" }, { name: "Saint-Christophe-et-Niévès", code: "Saint_Christophe_et_Nieves" }, { name: "Sainte-Lucie", code: "Sainte_Lucie" },
    { name: "Saint-Marin", code: "Saint_Marin" }, { name: "Saint-Vincent-et-les-Grenadines", code: "Saint_Vincent_et_les_Grenadines" },
    { name: "Salomon", code: "Salomon" }, { name: "Salvador", code: "Salvador" }, { name: "Samoa", code: "Samoa" }, { name: "Sao Tomé-et-Principe", code: "Sao_Tome_et_Principe" }, { name: "Sénégal", code: "Senegal" }, { name: "Serbie", code: "Serbie" },
    { name: "Seychelles", code: "Seychelles" }, { name: "Sierra Leone", code: "Sierra_Leone" }, { name: "Singapour", code: "Singapour" },
    { name: "Slovaquie", code: "Slovaquie" }, { name: "Slovénie", code: "Slovenie" }, { name: "Somalie", code: "Somalie" }, { name: "Soudan", code: "Soudan" },
    { name: "Soudan du Sud", code: "Soudan_du_Sud" }, { name: "Sri Lanka", code: "Sri_Lanka" }, { name: "Suède", code: "Suede" }, { name: "Suisse", code: "Suisse" },
    { name: "Suriname", code: "Suriname" }, { name: "Swaziland", code: "Swaziland" }, { name: "Syrie", code: "Syrie" }, { name: "Tadjikistan", code: "Tadjikistan" },
    { name: "Tanzanie", code: "Tanzanie" }, { name: "Tchad", code: "Tchad" }, { name: "République Tchèque", code: "Republique_Tcheque" },
    { name: "Thaïlande", code: "Thailande" }, { name: "Timor oriental", code: "Timor_oriental" }, { name: "Togo", code: "Togo" }, { name: "Tonga", code: "Tonga" }, { name: "Trinité-et-Tobago", code: "Trinite_et_Tobago" }, { name: "Tunisie", code: "Tunisie" },
    { name: "Turkménistan", code: "Turkmenistan" }, { name: "Turquie", code: "Turquie" }, { name: "Tuvalu", code: "Tuvalu" }, { name: "Ukraine", code: "Ukraine" },
    { name: "Uruguay", code: "Uruguay" }, { name: "Vanuatu", code: "Vanuatu" }, { name: "Vatican", code: "Vatican" }, { name: "Venezuela", code: "Venezuela" },
    { name: "Viêt Nam", code: "Viet_Nam" }, { name: "Yémen", code: "Yemen" }, { name: "Zambie", code: "Zambie" }, { name: "Zimbabwe", code: "Zimbabwe" }
  ];
  professions: { value: string, label: string }[] = [
    { value: '', label: '--Sélectionnez--' },
    { value: 'agriculteur', label: 'Agriculteur' }, { value: 'architecte', label: 'Architecte' }, { value: 'artiste', label: 'Artiste' },
    { value: 'avocat', label: 'Avocat' }, { value: 'boulanger', label: 'Boulanger' }, { value: 'chauffeur', label: 'Chauffeur' }, { value: 'coiffeur', label: 'Coiffeur' },
    { value: 'commercant', label: 'Commerçant' }, { value: 'conducteur', label: 'Conducteur' }, { value: 'cuisinier', label: 'Cuisinier' },
    { value: 'electricien', label: 'Électricien' }, { value: 'eleve', label: 'Élève' }, { value: 'enseignant', label: 'Enseignant' },
    { value: 'etudiant', label: 'Étudiant' }, { value: 'gestionnaire', label: 'Gestionnaire' }, { value: 'ingenieur-aeronautique', label: 'Ingénieur Aéronautique' },
    { value: 'ingenieur-agronome', label: 'Ingénieur Agronome' }, { value: 'ingenieur-civil', label: 'Ingénieur Civil' }, { value: 'ingenieur-electrique', label: 'Ingénieur Électrique' },
    { value: 'ingenieur-environnement', label: 'Ingénieur Environnement' }, { value: 'ingenieur-genie-chimique', label: 'Ingénieur en Génie Chimique' },
    { value: 'ingenieur-genie-mecanique', label: 'Ingénieur en Génie Mécanique' }, { value: 'ingenieur-informatique', label: 'Ingénieur Informatique' },
    { value: 'ingenieur-materiaux', label: 'Ingénieur en Matériaux' }, { value: 'ingenieur-mecanique', label: 'Ingénieur Mécanique' },
    { value: 'ingenieur-petrolier', label: 'Ingénieur Pétrolier' }, { value: 'ingenieur-telecom', label: 'Ingénieur Télécom' }, { value: 'infirmier', label: 'Infirmier' },
    { value: 'journaliste', label: 'Journaliste' }, { value: 'juriste', label: 'Juriste' }, { value: 'magistrat', label: 'Magistrat' }, { value: 'medecin', label: 'Médecin' },
    { value: 'mecanicien', label: 'Mécanicien' }, { value: 'musicien', label: 'Musicien' }, { value: 'ouvrier', label: 'Ouvrier' }, { value: 'pharmacien', label: 'Pharmacien' },
    { value: 'plombier', label: 'Plombier' }, { value: 'policier', label: 'Policier' }, { value: 'professeur', label: 'Professeur' }, { value: 'secretaire', label: 'Secrétaire' },
    { value: 'soldat', label: 'Soldat' }, { value: 'sportif', label: 'Sportif' }, { value: 'stagiaire', label: 'Stagiaire' }, { value: 'tailleur', label: 'Tailleur' },
    { value: 'technicien', label: 'Technicien' }, { value: 'vendeur', label: 'Vendeur' }
  ];

  typesCartes: { value: string, label: string }[] = [
    { value: '', label: '--Sélectionnez--' },
    { value: 'Type_Carte_Bio', label: 'Carte Biométrique' },
    { value: 'Type_Carte_Nationale', label: 'Carte d\'identité' },
    { value: 'Type_Passport', label: 'Passport' },
    { value: 'Type_Nina', label: 'Nina' },
    { value: 'Type_Autres', label: 'Autres' }
  ];
  typesPieceHeritier: { value: string, label: string }[] = [
    { value: '', label: '--Sélectionnez--' },
    { value: 'Type_Jugement', label: 'Jugement Heridite' },
    { value: 'Type_Procuration', label: 'Procuration' },
    { value: 'Type_Autres', label: 'Autres' }
  ];
  //Les selects pour les personnes morales
  typesEntreprises = [
    { value: 'assoc', label: 'Association' },
    { value: 'auto_entrepreneur', label: 'Auto-entrepreneur' },
    { value: 'coop', label: 'Coopérative' },
    { value: 'ei', label: 'Entreprise Individuelle (EI)' },
    { value: 'entreprise_publique', label: 'Entreprise Publique' },
    { value: 'eurl', label: 'Entreprise Unipersonnelle à Responsabilité Limitée (EURL)' },
    { value: 'gie', label: 'Groupement d\'Intérêt Économique (GIE)' },
    { value: 'micro_entreprise', label: 'Micro-entreprise' },
    { value: 'prof_lib', label: 'Profession libérale' },
    { value: 'sa', label: 'Société Anonyme (SA)' },
    { value: 'sca', label: 'Société en Commandite par Actions (SCA)' },
    { value: 'scs', label: 'Société en Commandite Simple (SCS)' },
    { value: 'sem', label: 'Société d\'Économie Mixte' },
    { value: 'sad', label: 'Société d\'Aménagement et de Développement' },
    { value: 'sarl', label: 'Société à Responsabilité Limitée (SARL)' },
    { value: 'sas', label: 'Société par Actions Simplifiée (SAS)' },
    { value: 'sasu', label: 'Société par Actions Simplifiée Unipersonnelle (SASU)' },
    { value: 'snc', label: 'Société en Nom Collectif (SNC)' },
    { value: 'societe_nationale', label: 'Société Nationale' },
    { value: 'spl', label: 'Société Publique Locale (SPL)' },
    { value: 'epa', label: 'Établissement Public à Caractère Administratif (EPA)' },
    { value: 'epic', label: 'Établissement Public à Caractère Industriel et Commercial (EPIC)' },
    { value: 'autres', label: 'Autres' },
  ];

  piecesIdentification = [
    { value: 'accreditation_licence', label: 'Accréditation ou licence spécifique' },
    { value: 'certificat_constitution', label: 'Certificat de constitution' },
    { value: 'certificat_immatriculation', label: 'Certificat d\'immatriculation' },
    { value: 'extrait_kbis', label: 'Extrait Kbis' },
    { value: 'nif', label: 'Numéro d\'Identification Fiscale (NIF)' },
    { value: 'num_tva', label: 'Numéro de TVA intracommunautaire' },
    { value: 'permis_exploitation', label: 'Permis d’exploitation' },
    { value: 'rcs', label: 'Registre du Commerce et des Sociétés (RCS)' },
    { value: 'autres', label: 'Autres' },
  ];
  //Creation d'objet pour les personnes Physique
  

  //varaiable pour gerer les personnes
  personne!: Personne[];
  file!: File; // Var
  tabPersPhysAssocie: any[]=[];

  items: Item[] = [
    {
      id:1,
      name:"Oumou",
      visible:true
    },
    {
      id:2,
      name:"Karim",
      visible:true
    }
  ];
  currentSelectedItem!: Item;
  showSearch = true;
  showError = false;
  showStatus = true;
  //DECLARATION DU FORMULAIRE POUR LE POPUP DE GESTION DE PERSONNE 
  physi_form = false;
  moral_form = false;
  heri_form = false;
  //Declaration de variable pour televerser l'image de la personne
  itemsPiecePers: any[] = [];
  ObjetpersonnesPhysiques:any[];
  constructor(
    private actesService: ActesService,
    private courrierService: CourriersService,
    private personneService: PersonnesService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    
    //Recherche de l'element dans l'objet personne physique pour remplir les autres champs du tableau
    this.personneService.lireJson()
          .subscribe((data: any) =>  {
            this.ObjetpersonnesPhysiques = data;       
            console.log('okkk ', data)     
          this.ObjetpersonnesPhysiques.forEach(phys => {
            if (phys.typepersonne.libelleTypePersonne=='Physique') {
            this.rows.push({
              ref: phys.refPersonne,
              prenom: phys.prenomPersonnePhysique,
              nom: phys.nomPersonnePhysique,
              lien: ''
            });
          }
          });
        this.personneService.lireJsonFormData()
          .subscribe((data: any) =>  {
            this.typePersonnes = data.colllist.typePersonne;
          });
  });
    
  }
 
  /*Ajouter une personne physique au cas ou elle n'existe pas */
  lienAjouter() {
    this.router.navigateByUrl('ajouter_personne');
  }

  /*Fonction pour supprimer un element de tableau*/
  delSimpleElt(ind: number, tableau: any[]) {
    if (tableau! && tableau.length > 0) {
      tableau.splice(ind, 1);
    }
  }
  /*Fonction pour supprimer un element de notre tableau principal des personne Physique Associe */
  supprPersoPhysAssoListe(ind: number, tableau: any[]) {
    this.delSimpleElt(ind, tableau);
  }


  /*Fonction pour rafraichir la page*/
  refresh(): void {
    window.location.reload();
  }
  /*Fonction pour verifier une valeur*/
  verifyValue(tab: any) {
    if (tab!) {
      return tab.id;
    } else {
      return null;
    }
  }
  /*Fonction pour envoyer la formulaire*/
  onFormSubmit() {
    //Pour le submit de Personne Physique 
    if (this.physi_form == true) {
      this.newPersonnePhysique.numPieceIdentPersonnePhysique = this.newPiece;
      // this.newPersonne.adressePersonne = this.newAdresse;
      console.log('Physique: ', this.newPersonne);
      this.personneService.ajouterPersonne(this.newPersonnePhysique);
    }
    //Pour le submit de Personne Morale 
    if (this.moral_form == true) {
      // this.newPersonne.adressePersonne = this.newAdresse;
      let listPersonneReconst : PersonneConstitution[]=[];
      this.tabPersPhysAssocie.forEach(phys => {
        const persoPhysReel = this.ObjetpersonnesPhysiques.find(
          persoAsso => persoAsso.refPersonne === phys.ref);
          if (persoPhysReel!) {
           let newPersReconst= new PersonneConstitution();
           newPersReconst.personneRattaches=persoPhysReel;
           newPersReconst.lien=phys.lien;
           newPersReconst.personnePrincipale=new PersonneMorale();
           listPersonneReconst.push(newPersReconst);
          }
      });
      this.newPersonneMorale.personneRattaches=listPersonneReconst;
      this.newPersonneMorale.personneadresse=this.newAdresse;
      this.newPersonneMorale.pieces=[this.newPiece];
      console.log('Morale---: ', this.newPersonneMorale);
      this.personneService.ajouterPersonne(this.newPersonneMorale);
    }
    //Pour le submit de Personne heritier 
    if (this.heri_form == true) {
      // this.newPersonneHeritier.refIdentPersonneHeritier = this.newPiece;
      // this.newPersonne.adressePersonne = this.newAdresse;
      console.log('Heritier: ', this.newPersonne);
      this.personneService.ajouterPersonne(this.newPersonneHeritier);
    }

  }
  onFormSubmitPiece() {
    console.log(this.newPiece);
  }

  //Reconstitution d'une seule liste pour afficher les personnes physique et morale
  reconstituePersonne(perso: any) {

    if (perso! && !perso.selected) {
      let result = perso.numPersonne;
      if (perso.personnePhysique !== null) {
        result += ' ' + perso.personnePhysique.NomPersonnePhysique + ' ' + perso.personnePhysique.PrenomPersonnePhysique;
      }
      if (perso.personneMorale !== null) {
        result += ' ' + perso.personneMorale.raisonsocialPersonneMorale;
      }
      return result;
    }
  }

  //Gestion de Type de Personne 
  onChangeType_Personne(event: any) {
    var id_pers = event.target.value;
    const typeperso = this.typePersonnes.find(
      type => type.id === parseInt(id_pers));
    if (typeperso!) {
        if (typeperso.libelleTypePersonne === "Morale") {
          this.physi_form = false;
          this.moral_form = true;
          this.heri_form = false;
          this.newPersonneMorale.typepersonne=typeperso;
        } else if (typeperso.libelleTypePersonne === "Physique") {
          this.physi_form = true;
          this.moral_form = false;
          this.heri_form = false;
          this.newPersonnePhysique.typepersonne=typeperso;
        } else if (typeperso.libelleTypePersonne === "Héritier") {
          this.physi_form = false;
          this.moral_form = false;
          this.heri_form = true;
          this.newPersonneHeritier.typepersonne=typeperso;
        } else {
          this.physi_form = false;
          this.moral_form = false;
          this.heri_form = false;
        }
    }
  }

  //Uploader le repertoire d'un fichier photo
  onFileChange(event: any) {
    const img: HTMLElement = document.getElementById('img_source') as HTMLElement;
    const element: HTMLElement = document.getElementById('div_img') as HTMLElement;
    var txt_file = '';
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.file = event.target.files[i];
        if (event.target.files[i]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            if (e.target!) {
              img?.setAttribute("src", "" + e.target.result);
              element?.removeAttribute("hidden");
            }
          }
          reader.readAsDataURL(event.target.files[0]); // convert to base64 string  
        }

      }

    }
  }
  getSelectedTabList(items: any[]): void {
    console.log('Selectionnées:---', items);
    items.map((prop) => {
      const persos = this.tabPersPhysAssocie.find(
          persoAsso => persoAsso.ref === prop.ref);
        if (!persos) {
          this.tabPersPhysAssocie.push(prop);
        }else{
          alert("la personne ("+prop.ref+"-"+prop.prenom+" "+prop.nom+") est deja associe ")
        }
      
    })
    
    this.modalService.dismissAll();
  }
 //Fonction pour lancer un popup
 open(content, type, modalDimension) {
  if (modalDimension === 'lg' && type === 'modal_large') {
      this.modalService.open(content, { windowClass: 'lg_dialog', size: 'lg', centered: true }).result.then((result) => {
          this.closeResult = 'Closed with: $result';
      }, (reason) => {
          this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
  } else if (modalDimension === 'sm' && type === 'modal_mini') {
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
  }
}

private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  'with: $reason';
    }
}
}
