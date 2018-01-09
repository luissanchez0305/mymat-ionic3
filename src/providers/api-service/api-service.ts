import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Constants } from '../../services/constants';
import { Network } from '@ionic-native/network';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class APIServiceProvider {
  constructor(public http: Http, private network: Network) {
  
    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      alert('network connected!');
      // We just got a connection but we need to wait briefly
       // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          alert('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });
    
  }
  test(){
    return new Promise((resolve, reject) => {
      this.http.get(Constants.myMatApiAddress)
      .map(res => res.text())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
    /*return new Promise((resolve, reject) => {
      
    });*/
  }
}
