import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';

export class Coin {
    ticker: string;
    symbol: string;
    logo: string;
    price: number;
}

export class InfoArray {}
/**
 * Service for making http calls Binance API
 *
 * @export
 * @class BinanceService
 */
@Injectable()
export class BinanceService {
    coins = new Subject<Coin[]>();
    constructor(private httpClient: HttpClient) { }

    getInfo() {
        return this.httpClient.get<any>(`${environment.URL}/get-info`).pipe(
            map(data => {
                if (data) {
                    this.coins.next(data);
                    console.log('getInfo data... ', data);
                } else {
                    console.log('data not returned ');
                }
            }),
        );
    }
}
