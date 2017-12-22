import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../services/offline_data';

/**
 * Generated class for the ProgramsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programs',
  templateUrl: 'programs.html',
})
export class ProgramsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('bubble'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramsPage');
  }

  selectPreSetProgram(category){
    console.log('selected: ' + category);
  }
}
