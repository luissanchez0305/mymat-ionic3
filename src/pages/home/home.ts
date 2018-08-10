import { Component, NgZone } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProgramsPage } from '../programs/programs';
import { WifiPage } from '../wifi/wifi';
import { RoutinesProvider } from '../../providers/routines/routines';
import { Constants } from '../../services/constants';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public bubblesNames1 : string;
  public bubblesNames2 : string;
  public bubblesNames3 : string;
  public bubblesNames4 : string;
  public EnableRunRoutine : boolean;
  public bubblesCurrentState1 : boolean;
  public bubblesCurrentState2 : boolean;
  public bubblesCurrentState3 : boolean;
  public bubblesCurrentState4 : boolean;
  public isDeviceOnline : boolean;

  constructor(public navCtrl: NavController, private storage: Storage, public routines: RoutinesProvider,
    private translateService: TranslateService, private network: Network, private zone: NgZone, public events: Events,
    private device: Device) {
    this.checkAllBubbles();
    this.events.subscribe('sharesBubbles', (bubbles) => {
      for(var i = 1; i <= bubbles.length; i++){
        this.updateBubbles(i, bubbles[i - 1]);
      }
      this.AllBubblesChecked(this.routines.getPrograms());
    });
    this.events.subscribe('switchLangEvent',(lang) => {
        //call methods to refresh content
        this.storage.set(Constants.storageKeyLang, lang)
        this.checkAllBubbles();
    });
    alert(this.device.uuid);
    this.AllBubblesChecked(this.routines.getPrograms());
    this.isDeviceOnline = true;
    // watch network for a disconnect
    this.network.onDisconnect().subscribe(() => {
      this.zone.run(() => {
        this.isDeviceOnline = false;
      });
    });
    // watch network for a connection
    this.network.onConnect().subscribe(() => {
      this.zone.run(() => {
        this.isDeviceOnline = true;
        alert('Conectado');
        this.storage.get(Constants.deviceInfo).then((info)=>{
          if(typeof info === 'undefined'){
            alert(this.device.uuid);
            this.storage.set(Constants.deviceInfo, this.device.uuid);
          }
        });
      });
    });
  }

  removeProgramFromRoutine(prg){
    console.log('hold: ' + prg);
  }

  selectBubble(prg, add){
    this.navCtrl.push(ProgramsPage, { bubble: prg });
  }

  runRoutine(){
    var programs = this.routines.getPrograms();
    if(this.AllBubblesChecked(programs)){
      this.navCtrl.push(WifiPage);
    }
  }

  private AllBubblesChecked(programs){

    if(typeof programs[0] !== 'undefined' && programs[0] != null && programs[0].length > 0 &&
    typeof programs[1] !== 'undefined' && programs[1] != null && programs[1].length > 0 &&
    typeof programs[2] !== 'undefined' && programs[2] != null && programs[2].length > 0 &&
    typeof programs[3] !== 'undefined' && programs[3] != null && programs[3].length > 0){
        this.EnableRunRoutine = true;
      }
      else{
        this.EnableRunRoutine = false;
      }
      return this.EnableRunRoutine;
  }

  cleanRoutine(){
    this.routines.cleanPrograms();
    this.AllBubblesChecked(this.routines.getPrograms());
    this.storage.set(Constants.storageKeyBubble1,'');
    this.storage.set(Constants.storageKeyBubble2,'');
    this.storage.set(Constants.storageKeyBubble3,'');
    this.storage.set(Constants.storageKeyBubble4,'');
    this.updateBubbles(1,'');
    this.updateBubbles(2,'');
    this.updateBubbles(3,'');
    this.updateBubbles(4,'');
  }

  private updateBubbles(bubble,name){
    switch(bubble){
      case 1:
        if(typeof name !== 'undefined' && name.length > 0){
          this.bubblesCurrentState1 = true;
          this.storage.get(Constants.storageKeyLang).then((lang)=>{
            this.translateService.getTranslation(lang).subscribe((value) =>{
              this.bubblesNames1 = typeof value[name] === 'undefined' ? name : value[name];
            });
          });
        }
        else{
          this.bubblesCurrentState1 = false;
          this.bubblesNames1 = '';
        }
        break;
      case 2:
        if(typeof name !== 'undefined' && name.length > 0){
          this.bubblesCurrentState2 = true;
          this.storage.get(Constants.storageKeyLang).then((lang)=>{
            this.translateService.getTranslation(lang).subscribe((value) =>{
              this.bubblesNames2 = typeof value[name] === 'undefined' ? name : value[name];
            });
          });
        }
        else{
          this.bubblesCurrentState2 = false;
          this.bubblesNames2 = '';
        }
        break;
      case 3:
        if(typeof name !== 'undefined' && name.length > 0){
          this.bubblesCurrentState3 = true;
          this.storage.get(Constants.storageKeyLang).then((lang)=>{
            this.translateService.getTranslation(lang).subscribe((value) =>{
              this.bubblesNames3 = typeof value[name] === 'undefined' ? name : value[name];
            });
          });
        }
        else{
          this.bubblesCurrentState3 = false;
          this.bubblesNames3 = '';
        }
        break;
      case 4:
        if(typeof name !== 'undefined' && name.length > 0){
          this.bubblesCurrentState4 = true;
          this.storage.get(Constants.storageKeyLang).then((lang)=>{
            this.translateService.getTranslation(lang).subscribe((value) =>{
              this.bubblesNames4 = typeof value[name] === 'undefined' ? name : value[name];
            });
          });
        }
        else{
          this.bubblesCurrentState4 = false;
          this.bubblesNames4 = '';
        }
        break;
    }
  }

  private checkAllBubbles(){
    this.storage.get(Constants.storageKeyBubble1).then((val)=>{
      if(val !== null){
        var name = val.split('|')[1];
        this.updateBubbles(1,name);
        this.routines.setProgram(1,name)
      }
    });

    this.storage.get(Constants.storageKeyBubble2).then((val)=>{
      if(val !== null){
        var name = val.split('|')[1];
        this.updateBubbles(2,name);
        this.routines.setProgram(2,name)
      }
    });

    this.storage.get(Constants.storageKeyBubble3).then((val)=>{
      if(val !== null){
        var name = val.split('|')[1];
        this.updateBubbles(3,name);
        this.routines.setProgram(3,name)
      }
    });

    this.storage.get(Constants.storageKeyBubble4).then((val)=>{
      if(val !== null){
        var name = val.split('|')[1];
        this.updateBubbles(4,name);
        this.routines.setProgram(4,name)
      }
      this.AllBubblesChecked(this.routines.getPrograms())
    });
  }
}
