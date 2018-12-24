import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { RoutinesProvider } from '../../providers/routines/routines';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { APIServiceProvider } from '../../providers/api-service/api-service';
import { Constants } from '../../services/constants';
import { Storage } from '@ionic/storage';

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
  private responseData : any;
  private response_text : string;
  private saveRoutineForm : FormGroup;
  private showSaveForm : boolean = true;
  private favoritesList : any;

  constructor(public navParams: NavParams, public viewCtrl: ViewController, public routines: RoutinesProvider,
    private formBuilder: FormBuilder, private storage: Storage, public apiService : APIServiceProvider) {
    var programs = this.routines.getPrograms();
    if(programs[0] && programs[1] && programs[2] && programs[3]){
      this.program1 = programs[0];
      this.program2 = programs[1];
      this.program3 = programs[2];
      this.program4 = programs[3];
    }
    this.saveRoutineForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
    if(navParams.get('showSave'))
      this.showSaveForm = true;
    else
      this.showSaveForm = false;
  }

  ionViewDidLoad() {
    this.storage.get(Constants.deviceInfo).then((device)=>{

      var formData = new FormData();

      //formData.append('uuid', uuid);
      formData.append('type', 'get');
      formData.append('email', device.email);

      this.apiService.runPost('favorites.php',formData).then((result) => {
        this.responseData = result;
        this.favoritesList = this.responseData.favorites;

      },(err) => {
        console.log(err);
      });
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  showProgram(id){
    console.log(id);
  }

  attemptSaveFavorite(){
    this.response_text = '';

    this.storage.get(Constants.deviceInfo).then((device)=>{

      var formData = new FormData();

      formData.append('type', 'new');
      formData.append('email', device.email);
      formData.append('name', this.saveRoutineForm.value.name);
      formData.append('program1', this.program1);
      formData.append('program2', this.program2);
      formData.append('program3', this.program3);
      formData.append('program4', this.program4);


      this.apiService.runPost('favorites.php',formData).then((result) => {
        this.responseData = result;
        if(this.responseData.status == 'ok'){
            this.showSaveForm = false;
            this.favoritesList = this.responseData.favorites;
        }
      });

    });
  }
}
