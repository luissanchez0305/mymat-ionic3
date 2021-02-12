import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
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
  constructor(public http: HttpClient, private httpNative: HTTP, public httpModule: Http, /*, private network: Network*/) {

  }
  test_language() {
    return new Promise((resolve, reject) => {
      this.http.get(Constants.myMatApiIndexUrl)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  test() {
    let headers = new Headers();
    return new Promise((resolve, reject) => {
      this.httpModule.get(Constants.myMatApiIndexUrl, { headers: headers })
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

  sendError(data) {
    return new Promise((resolve, reject) => {
      // watch network for a connection
      /*let connectSubscription = this.network.onConnect().subscribe(() => {*/
      let headers = new Headers();

      this.httpModule.post(Constants.myMatApiUrl + 'report_error.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
      /*});*/
    });
  }

  notificacionOneSignal() {
    return new Promise((resolve, reject) => {
      let headers = new Headers(
        {
          'Content-Type' : 'application/json',
          'Authorization' : 'Basic NmY3NTk0NTgtNzVmMC00ODQyLTg1YTctMzkzM2M5ZWRmOGI1'
        }
      );


      let data = {
        app_id: "d3aad1d0-7a05-4639-8467-40c8d41f84b6",
        included_segments: ["Active Users"],
        filters: [
          { field: "email", value: "jacob9614rod@gmail.com" }
        ],
        data: { foo: "bar" },
        contents: { en: "Test Mensaje" }
      }

      this.httpModule.post('https://onesignal.com/api/v1/notifications', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  registrarNotificacion(datos){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      let formData = new FormData();

      formData.append('email', datos.correo);
      formData.append('msg', datos.msg);
      formData.append('date', datos.fecha);


      this.httpModule.post(Constants.myMatApiUrl + 'create_notification.php', formData, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  sendEmail(data) {
    return new Promise((resolve, reject) => {
      // watch network for a connection
      /*let connectSubscription = this.network.onConnect().subscribe(() => {*/
      let headers = new Headers();

      this.httpModule.post(Constants.myMatApiUrl + 'contact_us.php', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
      /*});*/
    });
  }

  runPost(scriptFile, data) {
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

  start(programs) {
    var program1 = programs[0].split("|")[3];
    var program2 = programs[1].split("|")[3];
    var program3 = programs[2].split("|")[3];
    var program4 = programs[3].split("|")[3];

    /*var formData = new FormData();
    formData.append('P1', program1);
    formData.append('P2', program2);
    formData.append('P3', program3);
    formData.append('P4', program4);*/
    var params = "P1=" + program1 + "&P2=" + program2 + "&P3=" + program3 + "&P4=" + program4;

    return this.httpNative.get(Constants.myMatApiStartUrl + '?' + params, "", {});
  }
}
