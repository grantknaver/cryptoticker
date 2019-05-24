import { Component, OnInit, OnDestroy } from '@angular/core';

import { BinanceService, Coin } from '../services/binance.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit, OnDestroy {
  display = false;
  cryptoList: Coin[] = [];
  updateInterval: any;
  constructor(private binanceService: BinanceService ) { }

  /**
   * Updates coin price
   *
   * @memberof CryptoListComponent
   */
  update() {
    this.binanceService.getInfo().subscribe();
    this.binanceService.coins.subscribe((info) => {
      this.cryptoList = info;
      if (this.display === false) {
        this.display = true;
      }
    });
  }

  ngOnInit() {
    this.update();
    this.updateInterval = setInterval(() => {
      this.update();
    }, 1000);
  }

  ngOnDestroy() {
    window.clearInterval(this.updateInterval);
    console.log('clear updateInterval');
  }

}
