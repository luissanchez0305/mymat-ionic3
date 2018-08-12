import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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
  constructor(public http: Http/*, private network: Network*/) {

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

  check_device(_uuid){
    return new Promise((resolve, reject) => {
      // watch network for a connection
      /*let connectSubscription = this.network.onConnect().subscribe(() => {*/
        let headers = new Headers();

        this.http.post(Constants.myMatApiUrl + 'check_device.php', JSON.stringify({ uuid : _uuid }), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
      /*});*/
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
      .map(res => res.text())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  runPost(scriptFile, data){
    return new Promise((resolve, reject) => {
      // watch network for a connection
      /*let connectSubscription = this.network.onConnect().subscribe(() => {*/
        let headers = new Headers();

        this.http.post(Constants.myMatApiUrl + scriptFile, JSON.stringify(data), {headers: headers})
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
