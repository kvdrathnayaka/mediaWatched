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
        isFavorite: false
      },
      {
        id: 2,
        name: 'The Small Tall',
        medium: 'Movie',
        category: 'Comedy',
        year: 2015,
        watchedOn: 1296541665384,
        isFavorite: false
      }, {
        id: 3,
        name: 'The Redemption',
        medium: 'Movie',
        category: 'Action',
        year: 2016,
        watchedOn: 1294166565384,
        isFavorite: false
      }, {
        id: 4,
        name: 'Supernatural',
        medium: 'Series',
        category: 'Horror',
        year: 2004,
        watchedOn: 1456538571664,
        isFavorite: false
      }, {
        id: 5,
        name: 'Happy Joe: Cheery Road',
        medium: 'Movie',
        category: 'Action',
        year: 2015,
        watchedOn: 1457166565384,
        isFavorite: false
      }
    ];

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