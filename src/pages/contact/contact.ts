import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { APIServiceProvider } from '../../providers/api-service/api-service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Constants } from '../../services/constants';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  private contactForm : FormGroup;
  public contactSent : boolean;
  public  name_value : string;
  public  email_value : string;
  public  message_value : string;
  public button_send : string;
  public response_text : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public apiService : APIServiceProvider, 
    private translateService: TranslateService, private storage: Storage) {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    this.contactSent = false;
    this.name_value = '';
    this.email_value = '';
    this.message_value = '';
    this.response_text = '';
    this.storage.get(Constants.storageKeyLang).then((lang)=>{
      this.translateService.getTranslation(lang).subscribe((value) => {
        this.button_send = value['send-text'];
        // Mostrar texto en label debajo del boton
      });
    });
  }
  
  attemptSendMail(){
    var emailData = { e : this.contactForm.value.email, p : this.contactForm.value.name, m : this.contactForm.value.message };
    this.apiService.sendEmail(emailData).then((result) => {
        var obj : any = result;
        if (obj.status == "ok") {
            this.storage.get(Constants.storageKeyLang).then((lang)=>{
              this.translateService.getTranslation(lang).subscribe((value) => {
                this.response_text = value['email-success-message'];
              });
            });
            this.contactSent = true;
            
            this.storage.get(Constants.storageKeyLang).then((lang)=>{
              this.translateService.getTranslation(lang).subscribe((value) => {
                this.button_send = value['sent-text'];
              });
            });
            
        } else {
            this.storage.get(Constants.storageKeyLang).then((lang)=>{
              this.translateService.getTranslation(lang).subscribe((value) => {
                this.response_text = value['email-error-message'];
              });
            });
        }
    }, (result) => {
      this.storage.get(Constants.storageKeyLang).then((lang)=>{
        this.translateService.getTranslation(lang).subscribe((value) => {
          this.response_text = value['email-error-message'];
        });
      });
    });
  }
}
