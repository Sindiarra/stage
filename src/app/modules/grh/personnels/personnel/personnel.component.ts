import { Component, OnInit } from '@angular/core';
import { Personnel } from '../../models-grh/Personnel';
import { Router } from '@angular/router';
import { GrhService } from '../../services-grh/personnels-services';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  personnel!: any[];
  newPersonnel = new Personnel();
  msg!: string;
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
  module!: string;
  user_role!: string;

  constructor(private router: Router, private grhService: GrhService) {}

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

  newSave() {
    this.router.navigateByUrl(`#/personnel/nouveau`);
  }

  ngOnInit(): void {
    this.module = 'Courrier';
    this.user_role = 'Admin';
    this.personnel = [];
    this.rows = [];
    this.getPersonnel();
  }

  getPersonnel() {
    this.grhService.lireJson().subscribe(
      (data: any) => {
        this.personnel = data; // Assigner les données à la variable personnel
        this.rows = []; // Réinitialiser les rows
console.log('donne', data)
        // Transformation des données pour remplir rows
        this.personnel.forEach(person => {
          this.rows.push({
            matricule: person.matricule,
            categorie: person.categorie,
            dateArrivee: this.shortFormatter.format(new Date(person.dateArrivee)), // Formater la date
            situation: person.situation,
            personnesPhysique: person.personnesPhysique,
            documentagent: person.documentagent,
            utilisateur: person.utilisateur,
            signatures: person.signatures,
            affectationPersonnels: person.affectationPersonnels,
            imputations: person.imputations
          });
        });

        // Charger la variable utilisée pour créer le tableau HTML
        this.temp = this.rows.map((prop, key) => ({
          ...prop,
          id: key // Ajouter un identifiant unique pour chaque entrée
        }));
      },
      error => {
        console.error("Erreur lors de la récupération des données : ", error);
        alert("Erreur lors de la récupération des données. Vérifiez la console pour plus d'informations.");
      }
    );
  }

  refresh(): void {
    window.location.reload();
  }

  onView(num: number) {
    if (num!) {
      this.grhService.getPersonnelById(num).subscribe(
        (data: any) => {
          // this.refresh();
          console.log(data);
        },
        error => {
          alert(error);
        }
      );
    }
  }

  onDelete(prod: Personnel) {
    let conf = confirm("Etes-vous sûr ?");

    if (conf) {
      this.grhService.supprimerPersonnel(prod).subscribe(
        (data: any) => {
          // this.router.navigateByUrl(`liste_courrier`);
          this.refresh();
        },
        error => {
          alert(error);
        }
      );
    }
  }

  onUpdate(num: number) {
    if (num!) {
      this.router.navigateByUrl(`modifier_personnel/${num}`);
    }
  }

  onViews(num: string) {
    if (num !== '') {
      this.router.navigateByUrl(`modifier_personne/${num}`);
    }
  }
}
