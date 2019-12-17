var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { Device } from '@ionic-native/device';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { APIServiceProvider } from '../../providers/api-service/api-service';
import { Constants } from '../../services/constants';
import { SliderPage } from '../slider/slider';
import { Network } from '@ionic-native/network';
import { FavoritesPage } from '../favorites/favorites';
/**
 * Generated class for the SubscribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubscribePage = /** @class */ (function () {
    function SubscribePage(navCtrl, navParams, zone, formBuilder, storage, apiService, translateService, device, modalCtrl, network) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.apiService = apiService;
        this.translateService = translateService;
        this.device = device;
        this.modalCtrl = modalCtrl;
        this.network = network;
        // obtiene el parametro de que page va a correr al terminar el registro
        this.callBackPage = this.navParams.get('callBackPage');
        this.showSubmitButton = true;
        var aDate = new Date();
        this.maxDateOfPicker = this.maxDate = aDate.toISOString();
        this.subscribeForm = this.formBuilder.group({
            email: ['', Validators.required],
            name: ['', Validators.required],
            gender: ['', Validators.required],
            birthDate: ['', Validators.required]
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    SubscribePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubscribePage');
    };
    SubscribePage.prototype.attemptSubscribe = function () {
        var _this = this;
        this.response_text = '';
        var formData = new FormData();
        formData.append('email', this.subscribeForm.value.email);
        formData.append('name', this.subscribeForm.value.name);
        formData.append('birthDate', this.subscribeForm.value.birthDate);
        formData.append('gender', this.subscribeForm.value.gender);
        formData.append('isUpdate', 'false');
        if (window.hasOwnProperty('cordova')) {
            formData.append('uuid', this.device.uuid);
        }
        else {
            formData.append('uuid', Constants.test_uuid);
        }
        this.apiService.runPost('subscribe.php', formData).then(function (result) {
            _this.responseData = result;
            if (_this.responseData.status == 'ok') {
                _this.storage.set(Constants.deviceInfoKey, { 'uuid': _this.responseData.uuid, 'email': _this.subscribeForm.value.email });
                _this.showSubmitButton = false;
                _this.storage.get(Constants.storageKeyLang).then(function (lang) {
                    _this.translateService.getTranslation(lang).subscribe(function (value) {
                        _this.response_text = value['profile-success-message'];
                        setTimeout(function () {
                            if (_this.callBackPage == 'none') {
                                // despliega la vista de de instrucciones
                                _this.navCtrl.push(SliderPage);
                            }
                            else if (_this.callBackPage == 'favorites') {
                                _this.navCtrl.pop();
                                var profileModal = _this.modalCtrl.create(FavoritesPage, { 'showSave': true });
                                profileModal.present();
                            }
                        }, 5000);
                    });
                });
            }
            else {
                _this.storage.get(Constants.storageKeyLang).then(function (lang) {
                    _this.translateService.getTranslation(lang).subscribe(function (value) {
                        var error = value['profile-error-message'] + ': ';
                        if (_this.responseData.emailError != 'ok') {
                            error += _this.responseData.emailError;
                            _this.errorEmailClass = 'error';
                        }
                        if (_this.responseData.nameError != 'ok') {
                            error += _this.responseData.nameError;
                            _this.errorNameClass = 'error';
                        }
                        if (_this.responseData.genderError != 'ok') {
                            error += _this.responseData.genderError;
                            _this.errorGenderClass = 'error';
                        }
                        if (_this.responseData.dateOfBirthError != 'ok') {
                            error += _this.responseData.dateOfBirthError;
                            _this.errorDateClass = 'error';
                        }
                        _this.response_text = error;
                    });
                });
            }
            // TODO: poner success y desplegar pagina principal
        }, function (result) {
            _this.storage.get(Constants.storageKeyLang).then(function (lang) {
                _this.translateService.getTranslation(lang).subscribe(function (value) {
                    _this.response_text = value['profile-error-message'];
                });
            });
        });
    };
    SubscribePage = __decorate([
        Component({
            selector: 'page-subscribe',
            templateUrl: 'subscribe.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, NgZone,
            FormBuilder, Storage, APIServiceProvider,
            TranslateService, Device, ModalController,
            Network])
    ], SubscribePage);
    return SubscribePage;
}());
export { SubscribePage };
//# sourceMappingURL=subscribe.js.map