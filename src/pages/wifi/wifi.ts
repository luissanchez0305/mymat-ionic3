import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { APIServiceProvider } from '../../providers/api-service/api-service';
import { PlayingPage } from '../playing/playing';
import { Constants } from '../../services/constants';
import { NetworkInterface } from '@ionic-native/network-interface';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the WifiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-wifi',
  templateUrl: 'wifi.html',
})
export class WifiPage {
  public testBeginRoutineInterval : any;
  public testIPInterval : any;
  public testStatusInterval : any;
  public intervalCount : number = 0;
  public mymatStatus : boolean;
  public mymatWifi : boolean;
  public mymatNoStatus : boolean;
  public batteryCharge : string;
  public batteryImg : string;
  public coilText : string;
  public coilText1 : string;
  public coilText2 : string;
  public coilText3 : string;
  public coilText4 : string;
  public showStatusTable : boolean;
  public showLoading : boolean;
  public isRunRoutineEnabled : boolean;

  public iframeUrl: any;
  public showIframeStatus : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public apiService : APIServiceProvider,
    private translateService: TranslateService, public networkInterface : NetworkInterface, public platform: Platform) {
      this.storage.get(Constants.storageKeyLang).then((lang)=>{
        this.translateService.getTranslation(lang).subscribe((value) =>{
          this.coilText = typeof value['coil'] === 'undefined' ? 'Antena' : value['coil'];
        });
      });
  }

  ionViewDidLeave(){
    this.stop();
  }

  ionViewDidLoad() {
    this.mymatStatus = false;
    this.showIframeStatus = false;
    this.showLoading = true;
    this.isRunRoutineEnabled = true;
    if(this.platform.is('cordova')){
      this.networkInterface.getWiFiIPAddress().then((response)=>{
        if(response === Constants.localIPAddress){
          this.showIPButton();
        }
        else
          this.failIPVerification();
      },(response)=>{
        this.failIPVerification();
      });
    }
    else{
      this.showIPButton();
    }
    this.mymatWifi = true;
    this.intervalCount = 0;
  }

  showIPButton(){
    //this.mymatStatus = true;
    //this.showStatusTable = true;

    this.batteryImg = 'img/b100.png';
    this.coilText1 = 'N/A';
    this.coilText2 = 'N/A';
    this.coilText3 = 'N/A';
    this.coilText4 = 'N/A';

    //this.mymatWifi = false;
    //this.showLoading = false;
    clearInterval(this.testIPInterval);

    // check if mymat is connected
    var myMatTest = this.apiService.test();
    myMatTest.then((response) => {
      // if is connected quitar imagen, textos y loading y poner status del mat
      if(this.verifyValues(response)){
        this.showStatus();
      }
      else{
        this.failStatusVerification();
      }
    }, (response) => {
      this.failStatusVerification();
    });
  }

  showNoStatus(){
      this.mymatNoStatus = true;
  }

  showStatus(){
      this.mymatWifi = false;
      this.mymatStatus = true;
      this.showStatusTable = true;
      this.showLoading = false;
      this.isRunRoutineEnabled = true;
      clearInterval(this.testStatusInterval);
      clearInterval(this.testIPInterval);
  }

  verifyValues(response){
    if(response.indexOf("<p><h4>Power: ") > -1){
      var power = response.split("<p><h4>Power: ");
      power = power[1].split("</h4></p>");
      var coil1 = response.split("<tr><td>1.</td><td>");
      coil1 = coil1[2].split("</td></tr>");
      var coil2 = response.split("<tr><td>2.</td><td>");
      coil2 = coil2[2].split("</td></tr>");
      var coil3 = response.split("<tr><td>3.</td><td>");
      coil3 = coil3[2].split("</td></tr>");
      var coil4 = response.split("<tr><td>4.</td><td>");
      coil4 = coil4[2].split("</td></tr>");
      this.batteryCharge = power[0];

      var powerVal = power[0].substr(0,power[0].length-1);
      if(powerVal > 75)
          this.batteryImg = 'img/b100.png';
      else if(powerVal > 50)
          this.batteryImg = 'img/b75.png';
      else if(powerVal > 25)
          this.batteryImg = 'img/b50.png';
      else if(powerVal > 10)
          this.batteryImg = 'img/b25.png';
      else
          this.batteryImg = 'img/b10.png';

      this.coilText1 = coil1[0];
      this.coilText2 = coil2[0];
      this.coilText3 = coil3[0];
      this.coilText4 = coil4[0];
      return true;
    }
    else{
        return false;
    }
  }

  failIPVerification(){
      this.testIPInterval = setInterval(() => {
        this.networkInterface.getWiFiIPAddress().then((response)=>{
            if(response === Constants.localIPAddress)
              this.showIPButton();
          });
      }, 3000);
  }

  failStatusVerification(){
    this.testStatusInterval = setInterval(() => {
      // timeout of mymat detection 180 segundos
      var failMyMatTest = this.apiService.test();
      failMyMatTest.then((response) => {
        if(this.verifyValues(response)){
          this.showStatus();
        }
      }, (response) => {
        if(this.intervalCount >= 5){
          this.showNoStatus();
        }
      });

      this.intervalCount += 1;
    }, 3000);

    /*var programs = '';

    for(var i = 1; i <= 4; i++){
      switch(i){
        case 1:
          this.storage.get(Constants.storageKeyBubble1).then((val) => {
            programs += "?P1=" + val.split("|")[3] + '&';
          });
          break;
        case 2:
          this.storage.get(Constants.storageKeyBubble2).then((val) => {
            programs += "P2=" + val.split("|")[3] + '&';
          });
          break;
        case 3:
          this.storage.get(Constants.storageKeyBubble3).then((val) => {
            programs += "P3=" + val.split("|")[3] + '&';
          });
          break;
        case 4:
          this.storage.get(Constants.storageKeyBubble4).then((val) => {
            programs += "P4=" + val.split("|")[3];

            this.showIframeStatus = true;
            this.mymatWifi = false;
            this.mymatStatus = true;
            this.showStatusTable = false;
            this.iframeUrl = this.sanitize.bypassSecurityTrustResourceUrl(Constants.myMatApiIndexUrl + programs);
          });
          break;
      }
    }*/
  }

  startRoutine(){
    /* ANTES DE COCRRER RUTINA VERIFICAR SI SE ESTA CONECTADO AL WIFI DEL MYMAT */
    this.showLoading = true;
    this.isRunRoutineEnabled = false;
    this.apiService.test().then((response)=>{
        this.showLoading = false;
        this.isRunRoutineEnabled = true;
        if(this.verifyValues(response)){
          /* CORRER RUTINA */
          clearInterval(this.testStatusInterval);
          clearInterval(this.testIPInterval);
          var program1Obj;
          var program2Obj;
          var program3Obj;
          var program4Obj;
          var error1Obj;
          var error2Obj;
          var error3Obj;
          var error4Obj;

          var isValidateSuccessProgram = 0;
          var isValidateErrorProgram = 0;

          for(var i = 1; i <= 4; i++){
            switch(i){
              case 1:
                this.storage.get(Constants.storageKeyBubble1).then((val) => {
                  program1Obj = val;
                  isValidateSuccessProgram += 1;
                }).catch((err) => {
                  isValidateErrorProgram += 1;
                  error1Obj = err;
                });
                break;
              case 2:
                this.storage.get(Constants.storageKeyBubble2).then((val) => {
                  program2Obj = val;
                  isValidateSuccessProgram += 1;
                }).catch((err) => {
                  isValidateErrorProgram += 1;
                  error2Obj = err;
                });
                break;
              case 3:
                this.storage.get(Constants.storageKeyBubble3).then((val) => {
                  program3Obj = val;
                  isValidateSuccessProgram += 1;
                }).catch((err) => {
                  isValidateErrorProgram += 1;
                  error3Obj = err;
                });
                break;
              case 4:
                this.storage.get(Constants.storageKeyBubble4).then((val) => {
                  program4Obj = val;
                  isValidateSuccessProgram += 1;
                }).catch((err) => {
                  isValidateErrorProgram += 1;
                  error4Obj = err;
                });
                break;
            }
          }

          this.testBeginRoutineInterval = setInterval(() => {
            if(isValidateSuccessProgram == 4){
              var programs = [
                  program1Obj,
                  program2Obj,
                  program3Obj,
                  program4Obj
              ];

              this.apiService.start(programs).then((response) => {
                console.log(response + '');
              }, (response) =>{
                alert('Error al cargar rutina, intente nuevamente - ' + response);
              });

              clearInterval(this.testBeginRoutineInterval);

              /* CORRER RUTINA */
              this.navCtrl.setRoot(PlayingPage);
            }
            else if(isValidateSuccessProgram + isValidateErrorProgram == 4){
              alert('Error al cargar rutina, intente nuevamente - ' + error1Obj + ' - ' + error2Obj+ ' - ' + error3Obj + ' - ' + error4Obj);
              clearInterval(this.testBeginRoutineInterval);
            }
          }, 1000);
        }
        else{
          this.showLoading = false;
          this.isRunRoutineEnabled = true;
          this.mymatWifi = true;
          this.mymatStatus = false;
          this.showStatusTable = false;
          this.showLoading = true;
          this.failIPVerification();
        }
      },(response)=>{
        this.showLoading = false;
        this.isRunRoutineEnabled = true;
        this.mymatWifi = true;
        this.mymatStatus = false;
        this.showStatusTable = false;
        this.showLoading = true;
        this.failIPVerification();
      });
  }

  stop(){
    clearInterval(this.testStatusInterval);
    clearInterval(this.testIPInterval);
  }

}
