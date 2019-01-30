import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Device } from '@ionic-native/device';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { APIServiceProvider } from '../../providers/api-service/api-service';
import { Constants } from '../../services/constants';
import { SliderPage } from '../slider/slider';

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
  public showSubmitButton : boolean;
  private maxDate : string;
  private response_text : string;
  private responseData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private storage: Storage, public apiService : APIServiceProvider,
    private translateService: TranslateService, private device: Device) {

      this.showSubmitButton = true;
      let aDate = new Date();
      this.maxDateOfPicker = this.maxDate = aDate.toISOString();

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
    this.response_text = '';
    var formData = new FormData();

    formData.append('email', this.subscribeForm.value.email);
    formData.append('name', this.subscribeForm.value.name);
    formData.append('birthDate', this.subscribeForm.value.birthDate);
    formData.append('gender', this.subscribeForm.value.gender);
    formData.append('isUpdate', 'false');
    if(window.hasOwnProperty('cordova')){
      formData.append('uuid', this.device.uuid);
    }
    else {
      formData.append('uuid', Constants.test_uuid);
    }

    this.apiService.runPost('subscribe.php',formData).then((result) => {
      this.responseData = result;
      if(this.responseData.status == 'ok'){
        this.storage.set(Constants.deviceInfoKey, {'uuid': this.responseData.uuid, 'email': this.subscribeForm.value.email });
        this.showSubmitButton = false;
        this.storage.get(Constants.storageKeyLang).then((lang)=>{
          this.translateService.getTranslation(lang).subscribe((value) => {
            this.response_text = value['profile-success-message'];

            setTimeout(() => {
              // despliega la vista de de instrucciones
              this.navCtrl.push(SliderPage);
            }, 5000);

          });
        });
      }
      else{
        this.storage.get(Constants.storageKeyLang).then((lang)=>{
          this.translateService.getTranslation(lang).subscribe((value) => {
            var error = value['profile-error-message'] + ': ';
            if(this.responseData.emailError != 'ok')
              error += '('+this.responseData.emailError;
            if(this.responseData.nameError != 'ok')
              error += this.responseData.nameError;
            if(this.responseData.genderError != 'ok')
              error += this.responseData.genderError;
            if(this.responseData.dateOfBirthError != 'ok')
              error += this.responseData.dateOfBirthError;

            this.response_text = error;
          });
        });
      }
      // TODO: poner success y desplegar pagina principal
    }, (result) => {
      this.storage.get(Constants.storageKeyLang).then((lang)=>{
        this.translateService.getTranslation(lang).subscribe((value) => {
          this.response_text = value['profile-error-message'];
        });
      });
    });
  }
}
