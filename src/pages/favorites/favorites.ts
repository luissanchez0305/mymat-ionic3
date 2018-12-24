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
  private device_uuid : string;

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
  }

  ionViewDidLoad() {
    this.storage.get(Constants.deviceInfo).then((uuid)=>{
      this.device_uuid = uuid;
      var data = {
        uid: uuid
      };

      this.apiService.runPost('favorites.php',data).then((result) => {

      });
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  attemptSaveFavorite(){
    this.response_text = '';

    this.storage.get(Constants.deviceInfo).then((uuid)=>{
      var data = {
        uid: uuid,
        name : this.saveRoutineForm.value.name,
        program1 : this.program1,
        program2 : this.program2,
        program3 : this.program3,
        program4 : this.program4
      };


      this.apiService.runPost('subscribe.php',data).then((result) => {
        this.responseData = result;
        if(this.responseData.status == 'ok'){
            this.showSaveForm = false;
        }
      });

    });
  }
}
