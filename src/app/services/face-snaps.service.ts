import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://picsum.photos/seed/archibald/1280/800',
      new Date(),
      255
    ),
    new FaceSnap(
      'Mimi',
      'Une petite souris très mignonne.',
      'https://picsum.photos/seed/mimi/1280/800',
      new Date(),
      5
    ),
    new FaceSnap(
      'Balthazar',
      'Le roi de la jungle urbaine.',
      'https://picsum.photos/seed/balthazar/1280/800',
      new Date(),
      10
    ),
    new FaceSnap(
      'Gribouille',
      'Toujours en train de dessiner des bêtises.',
      'https://picsum.photos/seed/gribouille/1280/800',
      new Date(),
      0
    ),
    new FaceSnap(
      'Patapon',
      'Un compagnon fidèle.',
      'https://picsum.photos/seed/patapon/1280/800',
      new Date(),
      15
    ),
    new FaceSnap(
      'Zébulon',
      'Plein d\'énergie !',
      'https://picsum.photos/seed/zebulon/1280/800',
      new Date(),
      7
    ),
    new FaceSnap(
      'Titouan',
      'Un petit aventurier.',
      'https://picsum.photos/seed/titouan/1280/800',
      new Date(),
      3
    ),
    new FaceSnap(
      'Barnabé',
      'Il adore les câlins.',
      'https://picsum.photos/seed/barnabe/1280/800',
      new Date(),
      12
    ),
    new FaceSnap(
      'Célestine',
      'Une étoile dans le ciel.',
      'https://picsum.photos/seed/celestine/1280/800',
      new Date(),
      8
    ),
    new FaceSnap(
      'Léontine',
      'La grâce incarnée.',
      'https://picsum.photos/seed/leontine/1280/800',
      new Date(),
      1
    ),
    new FaceSnap(
      'Séraphin',
      'Un ange gardien.',
      'https://picsum.photos/seed/seraphin/1280/800',
      new Date(),
      20
    ),
    new FaceSnap(
      'Théophile',
      'Ami de la nature.',
      'https://picsum.photos/seed/theophile/1280/800',
      new Date(),
      4
    ),
    new FaceSnap(
      'Victorine',
      'Toujours victorieuse.',
      'https://picsum.photos/seed/victorine/1280/800',
      new Date(),
      9
    ),
    new FaceSnap(
      'Apollinaire',
      'Un poète moderne.',
      'https://picsum.photos/seed/apollinaire/1280/800',
      new Date(),
      6
    ),
    new FaceSnap(
      'Euphrosine',
      'La joie de vivre.',
      'https://picsum.photos/seed/euphrosine/1280/800',
      new Date(),
      11
    ),
    new FaceSnap(
      'Philomène',
      'Une amie précieuse.',
      'https://picsum.photos/seed/philomene/1280/800',
      new Date(),
      14
    ),
    new FaceSnap(
      'Gaspard',
      'Un petit farceur.',
      'https://picsum.photos/seed/gaspard/1280/800',
      new Date(),
      18
    ),
    new FaceSnap(
      'Rosalie',
      'Belle comme une fleur.',
      'https://picsum.photos/seed/rosalie/1280/800',
      new Date(),
      25
    ),
    new FaceSnap(
      'Honoré',
      'Un grand sage.',
      'https://picsum.photos/seed/honore/1280/800',
      new Date(),
      30
    ),
    new FaceSnap(
      'Sidonie',
      'Rêveuse incurable.',
      'https://picsum.photos/seed/sidonie/1280/800',
      new Date(),
      22
    )
  ];
}
