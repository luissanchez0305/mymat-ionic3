import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from '../../services/constants';
import { Platform } from 'ionic-angular';
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
  public showHeader : boolean;
  @ViewChild('slides') slides: Slides;
  public images : Array<string>;
  public culture: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform, public storage: Storage, public translateService: TranslateService) {
    this.showHeader = false;
  }

  ionViewDidLoad() {
    this.storage.get(Constants.storageKeyLang).then((lang)=>{
      this.translateService.getTranslation(lang).subscribe((value) => {
        this.culture = value['culture'];
        this.images = new Array<string>();
        for(var i = 1; i <= 5; i++){
          this.images.push('./assets/imgs/instructions/' + this.culture + '/'+ i +'.png');
        }
      });
    });
  }

  skipInstructions(){
    this.navCtrl.popToRoot();
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }
}
