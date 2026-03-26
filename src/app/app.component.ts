import {Component, OnInit} from '@angular/core';
import {FaceSnapComponent} from "./face-snap/face-snap.component";
import {FaceSnap} from "./models/face-snap";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faceSnap1!: FaceSnap;
  faceSnap2!: FaceSnap;
  faceSnap3!: FaceSnap;
  faceSnap4!: FaceSnap;
  faceSnap5!: FaceSnap;
  faceSnap6!: FaceSnap;
  faceSnap7!: FaceSnap;
  faceSnap8!: FaceSnap;
  faceSnap9!: FaceSnap;
  faceSnap10!: FaceSnap;
  faceSnap11!: FaceSnap;
  faceSnap12!: FaceSnap;
  faceSnap13!: FaceSnap;
  faceSnap14!: FaceSnap;
  faceSnap15!: FaceSnap;
  faceSnap16!: FaceSnap;
  faceSnap17!: FaceSnap;
  faceSnap18!: FaceSnap;
  faceSnap19!: FaceSnap;
  faceSnap20!: FaceSnap;

  ngOnInit(): void {
    this.faceSnap1 = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://picsum.photos/seed/archibald/1280/800',
      new Date(),
      2
    );
    this.faceSnap2 = new FaceSnap(
      'Mimi',
      'Une petite souris très mignonne.',
      'https://picsum.photos/seed/mimi/1280/800',
      new Date(),
      5
    );
    this.faceSnap3 = new FaceSnap(
      'Balthazar',
      'Le roi de la jungle urbaine.',
      'https://picsum.photos/seed/balthazar/1280/800',
      new Date(),
      10
    );
    this.faceSnap4 = new FaceSnap(
      'Gribouille',
      'Toujours en train de dessiner des bêtises.',
      'https://picsum.photos/seed/gribouille/1280/800',
      new Date(),
      0
    );
    this.faceSnap5 = new FaceSnap(
      'Patapon',
      'Un compagnon fidèle.',
      'https://picsum.photos/seed/patapon/1280/800',
      new Date(),
      15
    );
    this.faceSnap6 = new FaceSnap(
      'Zébulon',
      'Plein d\'énergie !',
      'https://picsum.photos/seed/zebulon/1280/800',
      new Date(),
      7
    );
    this.faceSnap7 = new FaceSnap(
      'Titouan',
      'Un petit aventurier.',
      'https://picsum.photos/seed/titouan/1280/800',
      new Date(),
      3
    );
    this.faceSnap8 = new FaceSnap(
      'Barnabé',
      'Il adore les câlins.',
      'https://picsum.photos/seed/barnabe/1280/800',
      new Date(),
      12
    );
    this.faceSnap9 = new FaceSnap(
      'Célestine',
      'Une étoile dans le ciel.',
      'https://picsum.photos/seed/celestine/1280/800',
      new Date(),
      8
    );
    this.faceSnap10 = new FaceSnap(
      'Léontine',
      'La grâce incarnée.',
      'https://picsum.photos/seed/leontine/1280/800',
      new Date(),
      1
    );
    this.faceSnap11 = new FaceSnap(
      'Séraphin',
      'Un ange gardien.',
      'https://picsum.photos/seed/seraphin/1280/800',
      new Date(),
      20
    );
    this.faceSnap12 = new FaceSnap(
      'Théophile',
      'Ami de la nature.',
      'https://picsum.photos/seed/theophile/1280/800',
      new Date(),
      4
    );
    this.faceSnap13 = new FaceSnap(
      'Victorine',
      'Toujours victorieuse.',
      'https://picsum.photos/seed/victorine/1280/800',
      new Date(),
      9
    );
    this.faceSnap14 = new FaceSnap(
      'Apollinaire',
      'Un poète moderne.',
      'https://picsum.photos/seed/apollinaire/1280/800',
      new Date(),
      6
    );
    this.faceSnap15 = new FaceSnap(
      'Euphrosine',
      'La joie de vivre.',
      'https://picsum.photos/seed/euphrosine/1280/800',
      new Date(),
      11
    );
    this.faceSnap16 = new FaceSnap(
      'Philomène',
      'Une amie précieuse.',
      'https://picsum.photos/seed/philomene/1280/800',
      new Date(),
      14
    );
    this.faceSnap17 = new FaceSnap(
      'Gaspard',
      'Un petit farceur.',
      'https://picsum.photos/seed/gaspard/1280/800',
      new Date(),
      18
    );
    this.faceSnap18 = new FaceSnap(
      'Rosalie',
      'Belle comme une fleur.',
      'https://picsum.photos/seed/rosalie/1280/800',
      new Date(),
      25
    );
    this.faceSnap19 = new FaceSnap(
      'Honoré',
      'Un grand sage.',
      'https://picsum.photos/seed/honore/1280/800',
      new Date(),
      30
    );
    this.faceSnap20 = new FaceSnap(
      'Sidonie',
      'Rêveuse incurable.',
      'https://picsum.photos/seed/sidonie/1280/800',
      new Date(),
      22
    );
  }
}
