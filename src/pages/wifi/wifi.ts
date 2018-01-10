import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { APIServiceProvider } from '../../providers/api-service/api-service';
import { PlayingPage } from '../playing/playing';
import { Constants } from '../../services/constants';

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
  public testInterval : any;
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
  public intervalCount : number = 0;
  public current_status : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public apiService : APIServiceProvider) {
    this.coilText = 'Antena';
  }
  
  ionViewDidLeave(){
    this.stop();
  }

  ionViewDidLoad() {
    this.mymatWifi = true;
    this.intervalCount = 0;
    // check if mymat is connected
    var myMatTest = this.apiService.test();
    myMatTest.then((response) => {
        this.current_status = 'test resolved';
        // if is connected quitar imagen, textos y loading y poner status del mat
        if(this.verifyValues(response)){
          this.showStatus();
        }
    }, (response) => {
        this.failVerification();
        this.current_status = 'fail test';
    });
  }
    
  showNoStatus(){
      this.mymatNoStatus = true;
  }
    
  showStatus(){
      this.mymatWifi = false;
      this.mymatStatus = true;
      clearInterval(this.testInterval);
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
  
  failVerification(){
    this.testInterval = setInterval(() => {
      // timeout of mymat detection 180 segundos
      var failMyMatTest = this.apiService.test();
      failMyMatTest.then((response) => {
        this.current_status = 'test resolved 2';
        if(this.verifyValues(response)){
          this.showStatus();
        }
      }, (response) => {
        if(this.intervalCount >= 60){
          this.showNoStatus();
          this.current_status = 'fail test 2';
        }
      });
      this.intervalCount += 1;
    }, 3000);
  }
  
  startRoutine(){
    this.current_status = 'start1';
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
          });
          break;
      }
    }
    
    var programs = [
        program1Obj,
        program2Obj,
        program3Obj,
        program4Obj
    ];
    
    this.apiService.start(programs);
    
    this.navCtrl.push(PlayingPage);
  }
  
  stop(){
    clearInterval(this.testInterval);
  }

}
