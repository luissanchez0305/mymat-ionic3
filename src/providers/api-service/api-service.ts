import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../../services/constants';
//import { Network } from '@ionic-native/network';
import 'rxjs/add/operator/map';
//import * as $ from "jquery";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class APIServiceProvider {
  constructor(public http: HttpClient/*, private network: Network*/) {

  }
  test_language(){
    return new Promise((resolve, reject) => {
      this.http.get(Constants.myMatApiIndexUrl)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  test(){
    let headers = new HttpHeaders({'Content-Type': 'text/html; charset=utf-8'});
    return new Promise((resolve, reject) => {
      this.http.get(Constants.myMatApiIndexUrl, {headers: headers})
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  runPost(scriptFile, data){
    return new Promise((resolve, reject) => {
        this.http.post(Constants.myMatApiUrl + scriptFile, data)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      /*});*/
    });
  }

  start(programs){
    var program1 = programs[0].split("|")[3];
    var program2 = programs[1].split("|")[3];
    var program3 = programs[2].split("|")[3];
    var program4 = programs[3].split("|")[3];

    var url = Constants.myMatApiStartUrl+"?P1="+program1+"&P2="+program2+"&P3="+program3+"&P4="+program4;

    return new Promise((resolve, reject) => {
      this.http.get(url)
      .subscribe(res => {
        resolve('success: ' + url);
      }, (err) => {
        reject('error: ' + url);
      });
    });
  }
}
