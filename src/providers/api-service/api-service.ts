import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Constants } from '../../services/constants';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class APIServiceProvider {
  constructor(public http: Http) {
    
  }
  test(){
    /*return new Promise((resolve, reject) => {
      this.http.get(Constants.myMatApiAddress).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });*/
    return new Promise((resolve, reject) => {
      this.http.get(Constants.myMatApiAddress)
      .map(res => res.text())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
        alert('failed');
      });
    });
  }
}
