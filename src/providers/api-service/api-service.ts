import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { Constants } from '../../services/constants';
//import { Network } from '@ionic-native/network';
import 'rxjs/add/operator/map';
import { timeout } from 'rxjs/operators';
//import * as $ from "jquery";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class APIServiceProvider {
  constructor(public http: Http, private httpNative: HTTP/*, private network: Network*/) {

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
    let headers = new Headers();
    //headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8');
    /*headers.append('Accept-Encoding', 'gzip, deflate');
    headers.append('Accept-Language', 'en-US,en;q=0.9,es-PA;q=0.8,es;q=0.7');
    headers.append('Upgrade-Insecure-Requests', '1');*/
    return new Promise((resolve, reject) => {
      this.http.get(Constants.myMatApiIndexUrl, { headers: headers })
      .pipe(
            timeout(5000) //5 seconds
       )
      .map(res => res.text())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  sendError(data){
    return new Promise((resolve, reject) => {
      // watch network for a connection
      /*let connectSubscription = this.network.onConnect().subscribe(() => {*/
        let headers = new Headers();

        this.http.post(Constants.myMatApiUrl + 'report_error.php', JSON.stringify(data), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
      /*});*/
    });
  }

  sendEmail(data){
    return new Promise((resolve, reject) => {
      // watch network for a connection
      /*let connectSubscription = this.network.onConnect().subscribe(() => {*/
        let headers = new Headers();

        this.http.post(Constants.myMatApiUrl + 'contact_us.php', JSON.stringify(data), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
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
    
    var formData = new FormData();
    formData.append('P1', program1);
    formData.append('P2', program2);
    formData.append('P3', program3);
    formData.append('P4', program4);

    //var url = Constants.myMatApiStartUrl+"?P1="+program1+"&P2="+program2+"&P3="+program3+"&P4="+program4;

    return this.httpNative.get(Constants.myMatApiStartUrl, formData, {});
  }
}
