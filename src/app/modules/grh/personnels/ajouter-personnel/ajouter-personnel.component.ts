import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Personnel } from '../../models-grh/Personnel';

@Component({
  selector: 'app-ajouter-personnel',
  templateUrl: './ajouter-personnel.component.html',
  styleUrls: ['./ajouter-personnel.component.scss']
})
export class AjouterPersonnelComponent implements OnInit {
  newPersonnel: Personnel = new Personnel(); // Instance du modèle Personnel
  categories = ['A', 'B1', 'B2', 'C2', 'D', 'E']; // Catégories disponibles
  structures = ['structure1', 'structure2', 'structure3']; // Structures disponibles

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Initialisation si nécessaire
  }

  // Fonction pour gérer la soumission du formulaire
  onFormSubmit() {
    console.log('Objet personnel:', this.newPersonnel);
    // Logique pour envoyer les données au backend
    // Exemple d'envoi via un service (à implémenter)
    // this.personnelService.ajouterPersonnel(this.newPersonnel).subscribe(
    //   (data: any) => {
    //     console.log('Réponse:', data);
    //   },
    //   error => {
    //     console.log('Erreur:', error);
    //   }
    // );
  }

  // Fonction pour gérer la sélection du fichier
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Fichier sélectionné:', file);
      this.newPersonnel.documentagent = file; // Lier le fichier au modèle
    }
  }
}
