import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from '../../services/constants';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program',
  templateUrl: 'program.html',
})
export class ProgramPage {
  public programName : string;
  public programRunningTime : string;
  public programDescription : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, 
    public translateService: TranslateService) {
  }
  ionViewDidLoad(){
      this.storage.get(Constants.storageKeyLang).then((lang)=>{
        this.translateService.getTranslation(lang).subscribe((prog) =>{
          this.programName = typeof prog[this.navParams.get('name')] === 'undefined' ? this.navParams.get('name') : prog[this.navParams.get('name')];
          this.programRunningTime = typeof prog[this.navParams.get('runTime')] === 'undefined' ? this.navParams.get('runTime') : prog[this.navParams.get('runTime')];
          this.programDescription = typeof prog[this.navParams.get('description')] === 'undefined' ? this.navParams.get('description') : prog[this.navParams.get('description')];
        });     
      });
  }
}
