import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MediaItemService{
    mediaItems = [
      {
        id: 1,
        name: 'Supernatural',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: false,
        description: "Brothers Dean and Sam follow in their father's footsteps and set out to eliminate monsters, demons and other supernatural entities that exist on Earth."
      },
      {
        id: 2,
        name: 'Aquaman',
        medium: 'Movie',
        category: 'Comedy',
        year: 2015,
        watchedOn: 1296541665384,
        isFavorite: false,
        description: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures. He goes on a quest to retrieve the legendary Trident of Atlan and protect the water world."
      }, {
        id: 3,
        name: 'The Redemption',
        medium: 'Movie',
        category: 'Action',
        year: 2016,
        watchedOn: 1294166565384,
        isFavorite: false,
        description: "An ex-special forces soldier, with a bad repute, gets mixed up in London's underworld and in the process assumes someone else's identity and becomes the angel of death."
      }, {
        id: 4,
        name: 'Young Sheldon',
        medium: 'Series',
        category: 'Comedy',
        year: 2004,
        watchedOn: 1456538571664,
        isFavorite: false,
        description: "Sheldon Cooper, a bona fide genius, has been promoted four grades. Meanwhile, he struggles to fit in with his unintellectual family in Texas."
      }, {
        id: 5,
        name: 'Venom',
        medium: 'Movie',
        category: 'Action',
        year: 2015,
        watchedOn: 1457166565384,
        isFavorite: false,
        description: "While trying to take down Carlton, the CEO of Life Foundation, Eddie, a journalist, investigates experiments of human trials. Unwittingly, he gets merged with a symbiotic alien with lethal abilities."
      }
    ];

    constructor(){}

    get(){
        return this.mediaItems;
    }

    add(mediaItem){
        this.mediaItems.push(mediaItem);
    }

    delete(mediaItem){
        const index = this.mediaItems.indexOf(mediaItem);
        if(index >= 0){
            this.mediaItems.splice(index, 1);
        }
    }

}

interface MediaItem{
  id: number,
  name: string,
  medium: string,
  category: string,
  year: number,
  watchedOn: number,
  isFavorite: boolean
}

interface MediaItemsResponse{
  mediaItems: MediaItem[];
}