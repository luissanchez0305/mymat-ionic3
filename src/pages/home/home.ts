import { Component, NgZone, ViewChild } from '@angular/core';
import { NavController, Events, ModalController, Content } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SubscribePage } from '../subscribe/subscribe';
import { RoutinesProvider } from '../../providers/routines/routines';
import { Constants } from '../../services/constants';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network';
import { Device } from '@ionic-native/device';
import { APIServiceProvider } from '../../providers/api-service/api-service';
import { ProgramsPage } from '../programs/programs';
import { WifiPage } from '../wifi/wifi';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Content) content: Content;
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
  public offline_device : string;
  public showAddFavoriteButton : boolean = false;
  public showLatestSection: boolean;
  public latestRoutines : any;

  constructor(public navCtrl: NavController, private storage: Storage, public routines: RoutinesProvider,
    private translateService: TranslateService, private network: Network, private zone: NgZone,
    public events: Events, private device: Device, public apiService : APIServiceProvider, public modalCtrl: ModalController) {
    //this.checkAllBubbles();
    this.events.subscribe('sharesBubbles', (bubbles) => {
      for(var i = 1; i <= bubbles.length; i++){
        this.updateBubbles(i, bubbles[i - 1]);
      }
      this.AllBubblesChecked(this.routines.getPrograms());
    });

    this.events.subscribe('addProgramsEvent', (program1, program2, program3, program4) => {
      this.navCtrl.pop();
      console.log(program1);
      let bubbles = this.routines.addPrograms('', program1, program2, program3, program4);
      this.events.publish("sharesBubbles", bubbles);
    });

    this.events.subscribe('switchLangEvent',(lang) => {
        //call methods to refresh content
        this.storage.set(Constants.storageKeyLang, lang)
        this.checkAllBubbles();
    });
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
      });
    });

    //this.navCtrl.push(SubscribePage, { callBackPage : 'none' });
    this.storage.get(Constants.deviceInfoKey).then((info)=>{
      if(typeof info === 'undefined' || info == null){
        /*if(window.hasOwnProperty('cordova')){*/
          var formData = new FormData();
          var _uuid = Constants.test_uuid;
          if(window.hasOwnProperty('cordova')){
            _uuid = this.device.uuid;
          }
          formData.append('uuid', _uuid);

          //var data = { 'uuid' : Constants.test_uuid };

          this.apiService.runPost('check_device.php',formData).then((result) => {
            //console.log('check_device success');
            this.isDeviceOnline = true;
            var obj : any = result;
            if (obj.found == "0") {
              // despliega la vista de insercion de datos
              this.navCtrl.push(SubscribePage, { callBackPage : 'none' });
            }
            else{
              this.storage.set(Constants.deviceInfoKey, { "email" : obj.email, "uuid" : _uuid });
            }
          }, (result) => {
            //console.log('check_device error ' + result);
            //this.isDeviceOnline = false;
            /*this.storage.get(Constants.storageKeyLang).then((lang)=>{
              this.translateService.getTranslation(lang).subscribe((value) => {
                this.offline_device = value['offline-device-text-2'];
              });
            });*/
          });
        /*}*/
      }
    });
  }

  addPrograms(routineName, program0, program1, program2, program3){
    this.events.publish('addProgramsEvent', program0, program1, program2, program3);
    this.content.scrollTo(0, 0, 100);
  }

  ionViewDidLoad() {
    this.storage.get(Constants.latestRoutinesKey).then((latests)=>{
      if(latests){
        this.showLatestSection = true;
        this.latestRoutines = latests;
      }
      else{
        this.showLatestSection = false;
      }
    });
  }

  openAddFavorite(){
    this.storage.get(Constants.deviceInfoKey).then((info)=>{
      if(typeof info === 'undefined' || info == null){
        // despliega la vista de insercion de datos
        this.navCtrl.push(SubscribePage, { callBackPage : 'favorites' });
      } else {
        let profileModal = this.modalCtrl.create(FavoritesPage, { 'showSave': true });
        profileModal.present();
      }
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
      this.navCtrl.push(
        WifiPage,
        { prog1: this.routines.getProgram(programs[0]), prog2: this.routines.getProgram(programs[1]), prog3: this.routines.getProgram(programs[2]), prog4: this.routines.getProgram(programs[3])
      });
    }
  }

  private AllBubblesChecked(programs){

    if(typeof programs[0] !== 'undefined' && programs[0] != null && programs[0].length > 0 &&
    typeof programs[1] !== 'undefined' && programs[1] != null && programs[1].length > 0 &&
    typeof programs[2] !== 'undefined' && programs[2] != null && programs[2].length > 0 &&
    typeof programs[3] !== 'undefined' && programs[3] != null && programs[3].length > 0){
        this.EnableRunRoutine = true;
        this.showAddFavoriteButton = true;
      }
      else{
        this.EnableRunRoutine = false;
        this.showAddFavoriteButton = false;
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
    this.showAddFavoriteButton = false;
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
    }).catch((err) => {
      var emailData = { area : 'checkAllBubbles 1', message : err };
      this.apiService.sendError(emailData).then((result) => {
        console.log(err);
      });
    });

    this.storage.get(Constants.storageKeyBubble2).then((val)=>{
      if(val !== null){
        var name = val.split('|')[1];
        this.updateBubbles(2,name);
        this.routines.setProgram(2,name)
      }
    }).catch((err) => {
      var emailData = { area : 'checkAllBubbles 2', message : err };
      this.apiService.sendError(emailData).then((result) => {
        console.log(err);
      });
    });

    this.storage.get(Constants.storageKeyBubble3).then((val)=>{
      if(val !== null){
        var name = val.split('|')[1];
        this.updateBubbles(3,name);
        this.routines.setProgram(3,name)
      }
    }).catch((err) => {
      var emailData = { area : 'checkAllBubbles 3', message : err };
      this.apiService.sendError(emailData).then((result) => {
        console.log(err);
      });
    });

    this.storage.get(Constants.storageKeyBubble4).then((val)=>{
      if(val !== null){
        var name = val.split('|')[1];
        this.updateBubbles(4,name);
        this.routines.setProgram(4,name)
      }
      this.AllBubblesChecked(this.routines.getPrograms())
    }).catch((err) => {
      var emailData = { area : 'checkAllBubbles 4', message : err };
      this.apiService.sendError(emailData).then((result) => {
        console.log(err);
      });
    });
  }
}
