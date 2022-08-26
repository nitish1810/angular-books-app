import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'clean code',
        author: 'robert c martin',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_BO1,204,203,200_.jpg',
        amount: 700,
      },
      {
        name: 'Essential Angular',
        author: 'Victor Savkin',
        image: 'https://images-na.ssl-images-amazon.com/images/I/418i3-bvlXL._SX404_BO1,204,203,200_.jpg',
        amount: 800,
      },
      {
        name: 'Get Coding!',
        author: ' Young Rewired State ',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/516RPfVV5QL._SX441_BO1,204,203,200_.jpg',
        amount: 18300,
      },
     
      {
        name: 'Coding with Javascript ',
        author: 'Chris Minnick ',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51H092AmIlL._SX382_BO1,204,203,200_.jpg',
        amount: 1500,
      },
      {
        name: 'Making Games:  JavaScript ',
        author: 'Christopher Pitt',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/41UOcarDA7L._SX328_BO1,204,203,200_.jpg',
        amount: 1500,
      },
      {
        name: 'PHP: The Complete Reference ',
        author: 'T Cormen',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51vrHzkpt+L._SX382_BO1,204,203,200_.jpg',
        amount: 1500,
      },
      {
        name: 'Java: The Complete Reference',
        author: ' Herbert Schildt ',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/41a1R+vG-GL._SX397_BO1,204,203,200_.jpg',
        amount: 1500,
      },
      {
        name: 'Learning TypeScript',
        author: ' Josh Goldberg',
        image:
          'https://images-eu.ssl-images-amazon.com/images/I/51eOlz4Lm3L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 1500,
      },

      
    ];
  }
}
