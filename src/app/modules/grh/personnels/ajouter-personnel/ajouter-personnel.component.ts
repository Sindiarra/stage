import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajouter-personnel',
  templateUrl: './ajouter-personnel.component.html',
  styleUrls: ['./ajouter-personnel.component.scss']
})
export class AjouterPersonnelComponent implements OnInit {
  // Déclaration des propriétés
  personnel: any = {};  // Pour lier le modèle de personnel avec le formulaire
  file!: File; // Pour stocker le fichier sélectionné
  categories = ['A', 'B1', 'B2', 'C2', 'D', 'E']; // Liste des catégories disponibles

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Initialisation des données si nécessaire
  }

  // Fonction pour gérer la soumission du formulaire
  onFormSubmit() {
    console.log('Objet personnel:', this.personnel);

    // Logique pour envoyer les données au backend
    // Exemple d'envoi via un service (à implémenter)
    // this.personnelService.ajouterPersonnel(this.personnel).subscribe(
    //   (data:any) => {
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
      const fileURL = URL.createObjectURL(file);
      console.log('Fichier sélectionné:', fileURL);
      this.personnel.document = fileURL; // Lier l'URL du fichier au modèle de personnel
    }
  }
}
