import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker';
import { Device } from '@ionic-native/device';
import { Storage } from '@ionic/storage';
import { APIServiceProvider } from '../../providers/api-service/api-service';
import { Constants } from '../../services/constants';

/**
 * Generated class for the SubscribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-subscribe',
  templateUrl: 'subscribe.html',
})
export class SubscribePage {
  private maxDateOfPicker : string;
  private subscribeForm : FormGroup;
  public subscribeDisabled : boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker,
    private formBuilder: FormBuilder, private storage: Storage, public apiService : APIServiceProvider, 
    private device: Device) {
      let aDate = new Date();
      this.maxDateOfPicker = aDate.toISOString();
      this.subscribeForm = this.formBuilder.group({
        email: ['', Validators.required],
        name: ['', Validators.required],
        gender: ['', Validators.required],
        birthDate: ['', Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribePage');
  }
  
  attemptSubscribe(){
    var emailData = { 
      email : this.subscribeForm.value.email, 
      name : this.subscribeForm.value.name, 
      date_of_birth: this.subscribeForm.birthDate,
      gender: this.subscribeForm.gender,
      isUpdate : false,
      uuid: this.device.uuid
    };
    this.apiService.runPost('subscribe.php',emailData).then((result) => {
      this.storage.set(Constants.deviceInfo, this.device.uuid);
      // TODO: poner success y desplegar pagina principal
    });
  }
}
