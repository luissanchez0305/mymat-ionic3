import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Constants } from '../../services/constants';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the PlayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playing',
  templateUrl: 'playing.html',
})
export class PlayingPage {
  public program1CurrentTimeDecreasingAsTime : string;
  public program2CurrentTimeDecreasingAsTime : string;
  public program3CurrentTimeDecreasingAsTime : string;
  public program4CurrentTimeDecreasingAsTime : string;
  public programTitle1 : string;
  public programTitle2 : string;
  public programTitle3 : string;
  public programTitle4 : string;
  public displayRunningTime : string;
  public finishTime : any;
  public timerInterval : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, 
    public translateService: TranslateService, private localNotifications : LocalNotifications, public plt: Platform) {
      
      document.addEventListener('resume', () => {
        var t = new Date();
        this.resume(t.getTime());
      });
  }
  
  simulateResume(){
    var t = new Date();
    this.resume(t.getTime() + 10);
  }
  
  resume(now){
    if(Math.round(now / 1000) > this.finishTime){
      this.displayRunningTime = '00:00';
      clearInterval(this.timerInterval);
    }
    else{
      var secondsLeft = this.finishTime - Math.round(now / 1000);
      this.displayRunningTime = this.convertSecondsToTime(secondsLeft);
    }
  }

  ionViewDidLoad() {
    var program1CurrentTimeDecreasing;
    var program2CurrentTimeDecreasing;
    var program3CurrentTimeDecreasing;
    var program4CurrentTimeDecreasing;
    for(var i = 1; i <= 4; i++){
      switch(i){
        case 1:
          this.storage.get(Constants.storageKeyBubble1).then((val) => {
            var value = val.split('|');
            this.program1CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
            program1CurrentTimeDecreasing = value[2];
            
            this.storage.get(Constants.storageKeyLang).then((lang)=>{
              this.translateService.getTranslation(lang).subscribe((prog) =>{
                this.programTitle1 = typeof prog[value[1]] === 'undefined' ? value[1] : prog[value[1]];
              });     
            });
          });
          break;
        case 2:
          this.storage.get(Constants.storageKeyBubble2).then((val) => {
            var value = val.split('|');
            this.program2CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
            program2CurrentTimeDecreasing = value[2];
            
            this.storage.get(Constants.storageKeyLang).then((lang)=>{
              this.translateService.getTranslation(lang).subscribe((prog) =>{
                this.programTitle2 = typeof prog[value[1]] === 'undefined' ? value[1] : prog[value[1]];
              });     
            });
          });
          break;
        case 3:
          this.storage.get(Constants.storageKeyBubble3).then((val) => {
            var value = val.split('|');
            this.program3CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
            program3CurrentTimeDecreasing = value[2];
            
            this.storage.get(Constants.storageKeyLang).then((lang)=>{
              this.translateService.getTranslation(lang).subscribe((prog) =>{
                this.programTitle3 = typeof prog[value[1]] === 'undefined' ? value[1] : prog[value[1]];
              });     
            });
          });
          break;
        case 4:
          this.storage.get(Constants.storageKeyBubble4).then((val) => {
            var value = val.split('|');
            this.program4CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
            program4CurrentTimeDecreasing = value[2];
            
            this.storage.get(Constants.storageKeyLang).then((lang)=>{
              this.translateService.getTranslation(lang).subscribe((prog) =>{
                this.programTitle4 = typeof prog[value[1]] === 'undefined' ? value[1] : prog[value[1]];
              });     
            });
            
            if(program1CurrentTimeDecreasing > program2CurrentTimeDecreasing && program1CurrentTimeDecreasing > program3CurrentTimeDecreasing && program1CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                this.displayRunningTime = program1CurrentTimeDecreasing; //this.convertSecondsToTime(program1CurrentTimeDecreasing);
            else if(program2CurrentTimeDecreasing > program3CurrentTimeDecreasing && program2CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                this.displayRunningTime = program2CurrentTimeDecreasing; //this.convertSecondsToTime(program2CurrentTimeDecreasing);
            else if(program3CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                this.displayRunningTime = program3CurrentTimeDecreasing; //this.convertSecondsToTime(program3CurrentTimeDecreasing);
            else
                this.displayRunningTime = program4CurrentTimeDecreasing; //this.convertSecondsToTime(program4CurrentTimeDecreasing);
            
            this.displayRunningTime = this.displayRunningTime; 
            var t = new Date();
            this.finishTime = Math.round(t.getTime() / 1000) + this.getSeconds(this.displayRunningTime);
            
            this.timerInterval = setInterval(() => {
              this.displayRunningTime = this.decreaseSecond(this.displayRunningTime);
              if(this.displayRunningTime == '00:00'){
                clearInterval(this.timerInterval);
              }
            }, 1000);
            this.storage.get(Constants.storageKeyLang).then((lang)=>{
              this.translateService.getTranslation(lang).subscribe((prog) =>{
                this.localNotifications.schedule({
                  id: 1,
                  title: 'MyMat Light',
                  text: prog['time-expire-text'],
                  sound: 'file://assets/sounds/' + (this.plt.is('ios') ? 'good-morning.m4r' : 'good-morning.mp3'),
                  at: new Date(t.getTime() + this.getSeconds(this.displayRunningTime) * 1000)
                });
              });     
            });
          });
          break;
      }
    }
  }
  
  decreaseSecond(time){
    var minutesStr = time.substr(0,time.indexOf(':'));
    var minutes = minutesStr[0] == '0' ? parseInt(minutesStr[1]) : parseInt(minutesStr);
    var secondsStr = time.substr(time.indexOf(':') + 1);
    var seconds = secondsStr[0] == '0' ? parseInt(secondsStr[1]) : parseInt(secondsStr);
    if(seconds - 1 == -1){
      minutesStr = minutes - 1 < 10 && minutes - 1 >= 0 ? '0' + (minutes - 1) : minutes - 1 == -1 ? '00' : '' + (minutes - 1);
      secondsStr = '59';
    }
    else{
      secondsStr = seconds - 1 < 10 ? '0' + (seconds - 1) : '' + (seconds - 1);
    }
    return minutesStr + ':' + secondsStr;
  }
  
  getSeconds(time){
    var minutesStr = time.substr(0,time.indexOf(':'));
    var minutes = minutesStr[0] == '0' ? parseInt(minutesStr[1]) : parseInt(minutesStr);
    var secondsStr = time.substr(time.indexOf(':') + 1);
    var seconds = secondsStr[0] == '0' ? parseInt(secondsStr[1]) : parseInt(secondsStr);
    return (minutes * 60) + seconds;
  }
  
  convertSecondsToTime(timeInSeconds) {
    var minutes = Math.floor(timeInSeconds / 60);
    var minutesStr = "0" + minutes;
    var seconds = "0" + (timeInSeconds - minutes * 60);
    return minutesStr.substr(-2) + ":" + seconds.substr(-2);
  }
}
