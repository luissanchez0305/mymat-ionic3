import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    console.log(this.navParams.get('userId'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
