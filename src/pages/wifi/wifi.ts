import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { APIServiceProvider } from '../../providers/api-service/api-service';
import { PlayingPage } from '../playing/playing';
import { Constants } from '../../services/constants';
import { NetworkInterface } from '@ionic-native/network-interface';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the WifiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wifi',
  templateUrl: 'wifi.html',
})
export class WifiPage {
  public testIPInterval : any;
  //public testStatusInterval : any;
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
  
  public iframeUrl: any;
  public showIframeStatus : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public apiService : APIServiceProvider,
    private translateService: TranslateService, public networkInterface : NetworkInterface, private sanitize: DomSanitizer, public platform: Platform) {
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
    this.mymatStatus = true;
    this.showStatusTable = true;
    
    this.batteryImg = 'img/b100.png';
    this.coilText1 = 'N/A';
    this.coilText2 = 'N/A';
    this.coilText3 = 'N/A';
    this.coilText4 = 'N/A';
    
    this.mymatWifi = false;
    this.showLoading = false;
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
      //clearInterval(this.testStatusInterval);
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
    /*this.testStatusInterval = setInterval(() => {
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
    }, 3000);*/
    
    var programs = '';
    
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
            //this.iframeUrl = this.sanitize.bypassSecurityTrustResourceUrl(Constants.myMatApiIndexUrl + programs);
          });
          break;
      }
    }
  }
  
  startRoutine(){
    //clearInterval(this.testStatusInterval);
    clearInterval(this.testIPInterval);
    var program1Obj;
    var program2Obj;
    var program3Obj;
    var program4Obj;
    
    for(var i = 1; i <= 4; i++){
      switch(i){
        case 1:
          this.storage.get(Constants.storageKeyBubble1).then((val) => {
            program1Obj = val;
          });
          break;
        case 2:
          this.storage.get(Constants.storageKeyBubble2).then((val) => {
            program2Obj = val;
          });
          break;
        case 3:
          this.storage.get(Constants.storageKeyBubble3).then((val) => {
            program3Obj = val;
          });
          break;
        case 4:
          this.storage.get(Constants.storageKeyBubble4).then((val) => {
            program4Obj = val;
    
            var programs = [
                program1Obj,
                program2Obj,
                program3Obj,
                program4Obj
            ];
            
            this.apiService.start(programs).then((response) => {
              console.log(response + '');
            }, (response) =>{
              console.log(response + '');
            });
            
            this.navCtrl.setRoot(PlayingPage);
          });
          break;
      }
    }
  }
  
  stop(){
    //clearInterval(this.testStatusInterval);
    clearInterval(this.testIPInterval);
  }

}
