export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Economy Class',
      price: 19999,
      description: 'Comfortable Accomodations to Carry you to the Moon',
      image: 'https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/economy-class.png?alt=media&token=f9d1dfcd-0ce8-49bc-b610-75ed6bc47167'
    },
    {
      id: 2,
      name: 'First Class',
      price: 199999,
      description: 'Exclusive Accomodations to Carry you to the Moon',
      image: 'https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/first-class.png?alt=media&token=89b9c0ec-e204-4644-afd8-89bb9dadc10c'
    },
    {
      id: 3,
      name: 'Basic Suit',
      price: 299,
      description: 'Comfortable Suit to Protect you on the Moon',
      image: 'https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/basic-suit.png?alt=media&token=bc90a2b9-b215-47ce-ad98-553223c36777'
    },
    {
      id: 4,
      name: 'Suit Upgrade',
      price: 1299,
      description: 'High Tech Advanced Suit to Protect you on the Moon with Style',
      image: 'https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/upgrade-suit.png?alt=media&token=6834369a-0e57-487f-b3e6-9979e145c668'
    },
    {
      id: 5,
      name: 'AI Photographer',
      price: 199,
      description: 'Your own Personal AI Photographer to document your entire journey',
      image: 'https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/photographer.png?alt=media&token=74b5e190-dde6-4ed1-9591-ff622e3f638e'
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */