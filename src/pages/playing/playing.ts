import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Constants } from '../../services/constants';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public translateService: TranslateService) {
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
            this.program1CurrentTimeDecreasingAsTime = this.convertSecondsToTime(value[2]);
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
            this.program2CurrentTimeDecreasingAsTime = this.convertSecondsToTime(value[2]);
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
            this.program3CurrentTimeDecreasingAsTime = this.convertSecondsToTime(value[2]);
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
            this.program4CurrentTimeDecreasingAsTime = this.convertSecondsToTime(value[2]);
            program4CurrentTimeDecreasing = value[2];
            
            this.storage.get(Constants.storageKeyLang).then((lang)=>{
              this.translateService.getTranslation(lang).subscribe((prog) =>{
                this.programTitle4 = typeof prog[value[1]] === 'undefined' ? value[1] : prog[value[1]];
              });     
            });
            
            if(program1CurrentTimeDecreasing > program2CurrentTimeDecreasing && program1CurrentTimeDecreasing > program3CurrentTimeDecreasing && program1CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                this.displayRunningTime = this.convertSecondsToTime(program1CurrentTimeDecreasing);
            else if(program2CurrentTimeDecreasing > program3CurrentTimeDecreasing && program2CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                this.displayRunningTime = this.convertSecondsToTime(program2CurrentTimeDecreasing);
            else if(program3CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                this.displayRunningTime = this.convertSecondsToTime(program3CurrentTimeDecreasing);
            else
                this.displayRunningTime = this.convertSecondsToTime(program4CurrentTimeDecreasing);
          });
          break;
      }
    }
  }

  convertSecondsToTime(timeInSeconds) {
    var minutes = Math.floor(timeInSeconds / 60);
    var minutesStr = "0" + minutes;
    var seconds = "0" + (timeInSeconds - minutes * 60);
    return minutesStr.substr(-2) + ":" + seconds.substr(-2);
  }
}
