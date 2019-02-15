import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.showHeader = false;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SliderPage');
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
