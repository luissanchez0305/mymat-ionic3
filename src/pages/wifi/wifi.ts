import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { APIServiceProvider } from '../../providers/api-service/api-service';
import { PlayingPage } from '../playing/playing';
import { Constants } from '../../services/constants';
import { NetworkInterface } from '@ionic-native/network-interface';

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
  public showStartButton : boolean;
  public showLoading : boolean;
  public current_status : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public apiService : APIServiceProvider,
    public networkInterface : NetworkInterface) {
    this.coilText = 'Antena';
  }
  
  ionViewDidLeave(){
    this.stop();
  }

  ionViewDidLoad() {
    this.showStartButton = false;
    this.showLoading = true;
    this.networkInterface.getWiFiIPAddress().then((response)=>{
      if(response == Constants.localIPAddress){
        this.showIPButton();
      }
      else
        this.failIPVerification();
    },(response)=>{
      this.failIPVerification();
    });
    this.mymatWifi = true;
    this.intervalCount = 0;
  }
  
  showIPButton(){
    this.showStartButton = true;
    this.showLoading = false;
    
    // check if mymat is connected
    var myMatTest = this.apiService.test();
    myMatTest.then((response) => {
      // if is connected quitar imagen, textos y loading y poner status del mat
      if(this.verifyValues(response)){
        this.showStatus();
      }
      else{
        this.failStatusVerification();
        this.current_status = 'fail ' + this.intervalCount;
      }
      this.current_status = 'fail 0';
    }, (response) => {
      this.failStatusVerification();
      this.current_status = 'fail ' + this.intervalCount;
    });
  }
    
  showNoStatus(){
      this.mymatNoStatus = true;
  }
    
  showStatus(){
      this.mymatWifi = false;
      this.mymatStatus = true;
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
            if(response == Constants.localIPAddress)
              this.showIPButton();
          });
      }, 3000);
  }
  
  failStatusVerification(){
    this.testStatusInterval = setInterval(() => {
      // timeout of mymat detection 180 segundos
      var failMyMatTest = this.apiService.test();
      failMyMatTest.then((response) => {
        console.log(response);
        if(this.verifyValues(response)){
          this.showStatus();
        }
        else
          this.current_status = 'fail ' + this.intervalCount;
      }, (response) => {
        if(this.intervalCount >= 5){
          this.showNoStatus();
        }
        else
          this.current_status = 'fail ' + this.intervalCount;
      });
      this.intervalCount += 1;
    }, 3000);
  }
  
  startRoutine(){
    clearInterval(this.testStatusInterval);
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
    clearInterval(this.testStatusInterval);
    clearInterval(this.testIPInterval);
  }

}
