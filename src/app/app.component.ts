import { Component, OnInit } from '@angular/core';

// 3rd Part
import * as firebase from 'firebase';

/**
 * Main entry point for CryptoTicker
 *
 * @export
 * @class AppComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'removed',
      authDomain: 'removed'
    });
  }
}
