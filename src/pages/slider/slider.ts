import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from '../../services/constants';
import { HomePage } from '../home/home';
/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  public isDeviceOnline : boolean;
  public offline_device : string;
  public showHeader : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private zone: NgZone, private storage: Storage,
    private translateService: TranslateService, private network: Network) {
    this.isDeviceOnline = true;
    this.showHeader = false;

    // watch network for a disconnect
    this.network.onDisconnect().subscribe(() => {
      this.zone.run(() => {
        this.isDeviceOnline = false;
        this.storage.get(Constants.storageKeyLang).then((lang)=>{
          this.translateService.getTranslation(lang).subscribe((value) => {
            this.offline_device = value['offline-device-text'];
          });
        });
      });
    });

    // watch network for a connection
    this.network.onConnect().subscribe(() => {
      this.zone.run(() => {
        this.isDeviceOnline = true;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

  skipInstructions(){
    this.navCtrl.popToRoot();
  }

}
