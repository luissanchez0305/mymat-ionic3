import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { Constants } from '../../services/constants';
//import { Network } from '@ionic-native/network';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class APIServiceProvider {
  constructor(public http: HTTP/*, private network: Network*/) {
    
  }
  test_language(){
    return new Promise((resolve, reject) => {
      this.http.get(Constants.myMatApiIndexUrl, {}, {})
      /*.map(res => res.text())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });*/
      .then(data=>{
        resolve(data.data);
      })
      .catch(error=>{
        reject(error.error);
      });
    });
  }
  
  test(){
    let headers = new Headers();
    headers.append('Content-Type', 'text/html; charset=UTF-8');
    return new Promise((resolve, reject) => {
      this.http.get(Constants.myMatApiIndexUrl, {}, {headers: headers})
      /*.map(res => res.text())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });*/
      .then(data => {
        /*console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);*/
        resolve(data.data);
      })
      .catch(error => {
        /*console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);*/
        reject(error.error);
      });
    });
  }
  
  sendEmail(data){
    return new Promise((resolve, reject) => {
      // watch network for a connection
      /*let connectSubscription = this.network.onConnect().subscribe(() => {*/
        let headers = new Headers();

        this.http.post(Constants.myMatApiUrl + 'contact_us.php', JSON.stringify(data), {headers: headers})
          /*.subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });*/
          .then(data=>{
            resolve(data.data);
          })
          .catch(error=>{
            reject(error.error);
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
      this.http.get(url, {}, {})
      /*.map(res => res.text())
      .subscribe(res => {
        resolve('success: ' + url);
      }, (err) => {
        reject('error: ' + url);
      });*/
      .then(data=>{
        resolve(data.data);
      })
      .catch(error=>{
        reject(error.error);
      });
    });
  }
}
