import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;


  snapButtonText!: string;
  userHasSnaped!:boolean



  ngOnInit(): void {
    this.snapButtonText = 'Oh snap!'
    this.userHasSnaped = false;
  }

  onSnap(): void {
    // Vérifie si l'utilisateur a déjà snappé
    if (this.userHasSnaped) {
      this.unsnap(); // Appelle la méthode pour annuler le snap
    } else {
      this.snap(); // Appelle la méthode pour ajouter un snap
    }
  }

// Méthode pour ajouter un Snap
 snap(): void {
    this.faceSnap.addSnap(); // Incrémente le compteur
    this.snapButtonText = 'Oops, unSap!'; // Change le texte du bouton
    this.userHasSnaped = true; // Indique que l'utilisateur a maintenant snappé
  }

// Méthode pour annuler un Snap
  unsnap(): void {
    this.faceSnap.removeSnap(); // Décrémente le compteur
    this.snapButtonText = 'Oh snap!'; // Revert le texte du bouton
    this.userHasSnaped = false; // Indique que l'utilisateur n'a plus snappé
  }

}
