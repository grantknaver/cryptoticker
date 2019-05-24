import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Crypto } from '../models/crypto.model';

/**
 * Service for getting cryptocurrency data
 *
 * @export
 * @class CryptoService
 */
@Injectable()
export class CryptoService {
  private cryptoList: Crypto[] = [
      {
        name: 'BitCoin',
        price: 56.34,
        imageUrl: './assets/bitcoin.PNG',
        marketCap: 25,
        change: 0.34,
        _id: '1'
      },
      {
        name: 'Ethereum',
        price: 23.12,
        imageUrl: './assets/bitcoin.PNG',
        marketCap: 15,
        change: 0.56,
        _id: '2'
      },
      {
      name: 'Tether',
      price: .98,
      imageUrl: './assets/bitcoin.PNG',
      marketCap: 15,
      change: 0.56,
      _id: '3'
      },
      {
        name: 'Chico',
        price: 56.34,
        imageUrl: './assets/bitcoin.PNG',
        marketCap: 25,
        change: 0.34,
        _id: '1'
      },
      {
        name: 'Angel',
        price: 23.12,
        imageUrl: './assets/bitcoin.PNG',
        marketCap: 15,
        change: 0.56,
        _id: '2'
      },
      {
      name: 'Maggy',
      price: .98,
      imageUrl: './assets/bitcoin.PNG',
      marketCap: 15,
      change: 0.56,
      _id: '3'
      },
      {
      name: 'Eli',
      price: 23.12,
      imageUrl: './assets/bitcoin.PNG',
      marketCap: 15,
      change: 0.56,
      _id: '2'
    },
    {
    name: 'Orange Kitty',
    price: .98,
    imageUrl: './assets/bitcoin.PNG',
    marketCap: 15,
    change: 0.56,
    _id: '3'
    },
    {
      name: 'Fuzzy',
      price: 56.34,
      imageUrl: './assets/bitcoin.PNG',
      marketCap: 25,
      change: 0.34,
      _id: '1'
    },
    {
      name: 'Laura',
      price: 23.12,
      imageUrl: './assets/bitcoin.PNG',
      marketCap: 15,
      change: 0.56,
      _id: '2'
    },
    {
    name: 'Stuart',
    price: .98,
    imageUrl: './assets/bitcoin.PNG',
    marketCap: 15,
    change: 0.56,
    _id: '3'
    }
  ];

  constructor(private http: HttpClient) { }

  getCryptoList() {
    return this.cryptoList.slice();
  }

}
