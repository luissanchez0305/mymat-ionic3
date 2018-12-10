import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { RoutinesProvider } from '../../providers/routines/routines';

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
  private program1 : any;
  private program2 : any;
  private program3 : any;
  private program4 : any;

  constructor(public navParams: NavParams, public viewCtrl: ViewController, public routines: RoutinesProvider) {
    var programs = this.routines.getPrograms();
    this.program1 = programs[0];
    this.program2 = programs[1];
    this.program3 = programs[2];
    this.program4 = programs[3];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
