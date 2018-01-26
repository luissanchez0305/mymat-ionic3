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
  test_language(){
    return new Promise((resolve, reject) => {
      this.http.get(Constants.myMatApiIndexUrl)
      .map(res => res.text())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  
  test(){
    return new Promise((resolve, reject) => {
      this.http.get(Constants.myMatApiIndexUrl)
      .map(res => res.text())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  
  sendEmail(data){
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(Constants.myMatApiUrl + 'contact_us1.php', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    })
  }
  
  start(programs){
    var program1 = programs[0].split("|")[3];
    var program2 = programs[1].split("|")[3];
    var program3 = programs[2].split("|")[3];
    var program4 = programs[3].split("|")[3];
    
    var url = Constants.myMatApiStartUrl+"?P1="+program1+"&P2="+program2+"&P3="+program3+"&P4="+program4;
    
    return new Promise((resolve, reject) => {
      this.http.get(url)
      .map(res => res.text())
      .subscribe(res => {
        resolve('success: ' + url);
      }, (err) => {
        reject('error: ' + url);
      });
    });
  }
}
