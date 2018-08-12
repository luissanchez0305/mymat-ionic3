import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker';
import { Device } from '@ionic-native/device';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
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
  public showSubmitButton : boolean;
  private maxDate : string;
  private response_text : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker,
    private formBuilder: FormBuilder, private storage: Storage, public apiService : APIServiceProvider,
    private translateService: TranslateService, private device: Device) {

      this.showSubmitButton = true;
      this.subscribeDisabled = true;
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
    var emailData = {
      email : this.subscribeForm.value.email,
      name : this.subscribeForm.value.name,
      birthDate: this.subscribeForm.value.birthDate,
      gender: this.subscribeForm.value.gender,
      isUpdate : false,
      uuid: this.device.uuid
    };
    this.apiService.runPost('subscribe.php',emailData).then((result) => {
      if(result.status == 'ok'){
        this.storage.set(Constants.deviceInfo, this.device.uuid);
        this.showSubmitButton = false;
        this.storage.get(Constants.storageKeyLang).then((lang)=>{
          this.translateService.getTranslation(lang).subscribe((value) => {
            this.response_text = value['profile-success-message'];

            setTimeout(() => {
              this.navCtrl.pop();
            }, 5000);

          });
        });
      }
      else{
        this.storage.get(Constants.storageKeyLang).then((lang)=>{
          this.translateService.getTranslation(lang).subscribe((value) => {
            var error = value['profile-error-message'] + ': ';
            if(result.emailError != 'ok')
              error += '('+result.emailError;
            if(result.nameError != 'ok')
              error += result.nameError;
            if(result.genderError != 'ok')
              error += result.genderError;
            if(result.dateOfBirthError != 'ok')
              error += result.dateOfBirthError;

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
