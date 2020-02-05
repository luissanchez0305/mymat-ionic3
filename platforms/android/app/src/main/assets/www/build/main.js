webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SliderPage = (function () {
    function SliderPage(navCtrl, navParams, plt, storage, translateService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.storage = storage;
        this.translateService = translateService;
        this.showHeader = false;
    }
    SliderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
            _this.translateService.getTranslation(lang).subscribe(function (value) {
                _this.culture = value['culture'];
                _this.images = new Array();
                for (var i = 1; i <= 5; i++) {
                    _this.images.push('./assets/imgs/instructions/' + _this.culture + '/' + i + '.png');
                }
            });
        });
    };
    SliderPage.prototype.skipInstructions = function () {
        this.navCtrl.popToRoot();
    };
    SliderPage.prototype.next = function () {
        this.slides.slideNext();
    };
    SliderPage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], SliderPage.prototype, "slides", void 0);
    SliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slider',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\slider\slider.html"*/'<ion-header *ngIf="showHeader">\n  <ion-navbar class="bar">\n    <button ion-button menuToggle end class="button button-clear">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <div class="logo"></div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding no-border>\n        <button float-left ion-button  color="light" class="swiper-button-prev swiper-button-black" (click)="prev()" [disabled]="slides.isBeginning()"></button>\n\n        <ion-slides #slides>\n          <ion-slide *ngFor="let image of images">\n              <img src="{{ image }}"/>\n          </ion-slide>\n        </ion-slides>\n        <button float-right ion-button color="light" class="swiper-button-next swiper-button-black" (click)="next()" [disabled]="slides.isEnd()"></button>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="dark">\n    <ion-buttons end>\n        <button ion-button class="button-clear" (click)="skipInstructions()">\n            {{ \'skip\' | translate }}\n        </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\slider\slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], SliderPage);
    return SliderPage;
}());

//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscribe_subscribe__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_routines_routines__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__programs_programs__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wifi_wifi__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__favorites_favorites__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = (function () {
    function HomePage(navCtrl, storage, routines, translateService, network, zone, events, device, apiService, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.routines = routines;
        this.translateService = translateService;
        this.network = network;
        this.zone = zone;
        this.events = events;
        this.device = device;
        this.apiService = apiService;
        this.modalCtrl = modalCtrl;
        this.showAddFavoriteButton = false;
        //this.checkAllBubbles();
        this.events.subscribe('sharesBubbles', function (bubbles) {
            for (var i = 1; i <= bubbles.length; i++) {
                _this.updateBubbles(i, bubbles[i - 1]);
            }
            _this.AllBubblesChecked(_this.routines.getPrograms());
        });
        this.events.subscribe('addProgramsEvent', function (program1, program2, program3, program4) {
            _this.navCtrl.pop();
            console.log(program1);
            var bubbles = _this.routines.addPrograms('', program1, program2, program3, program4);
            _this.events.publish("sharesBubbles", bubbles);
        });
        this.events.subscribe('switchLangEvent', function (lang) {
            //call methods to refresh content
            _this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyLang, lang);
            _this.checkAllBubbles();
        });
        this.AllBubblesChecked(this.routines.getPrograms());
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
        //this.navCtrl.push(SubscribePage, { callBackPage : 'none' });
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].deviceInfoKey).then(function (info) {
            if (typeof info === 'undefined' || info == null) {
                /*if(window.hasOwnProperty('cordova')){*/
                var formData = new FormData();
                var _uuid = __WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].test_uuid;
                if (window.hasOwnProperty('cordova')) {
                    _uuid = _this.device.uuid;
                }
                formData.append('uuid', _uuid);
                _this.apiService.runPost('check_device.php', formData).then(function (result) {
                    //console.log('check_device success');
                    _this.isDeviceOnline = true;
                    var obj = result;
                    if (obj.found == "0") {
                        // despliega la vista de insercion de datos
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__subscribe_subscribe__["a" /* SubscribePage */], { callBackPage: 'none' });
                    }
                    else {
                        _this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].deviceInfoKey, { "email": obj.email, "uuid": _uuid });
                    }
                }, function (result) {
                    //console.log('check_device error ' + result);
                    //this.isDeviceOnline = false;
                    /*this.storage.get(Constants.storageKeyLang).then((lang)=>{
                      this.translateService.getTranslation(lang).subscribe((value) => {
                        this.offline_device = value['offline-device-text-2'];
                      });
                    });*/
                });
                /*}*/
            }
        });
    }
    HomePage.prototype.addPrograms = function (routineName, program0, program1, program2, program3) {
        this.events.publish('addProgramsEvent', program0, program1, program2, program3);
        this.content.scrollTo(0, 0, 100);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].latestRoutinesKey).then(function (latests) {
            if (latests) {
                _this.showLatestSection = true;
                _this.latestRoutines = latests;
            }
            else {
                _this.showLatestSection = false;
            }
        });
    };
    HomePage.prototype.openAddFavorite = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].deviceInfoKey).then(function (info) {
            if (typeof info === 'undefined' || info == null) {
                // despliega la vista de insercion de datos
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__subscribe_subscribe__["a" /* SubscribePage */], { callBackPage: 'favorites' });
            }
            else {
                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__favorites_favorites__["a" /* FavoritesPage */], { 'showSave': true });
                profileModal.present();
            }
        });
    };
    HomePage.prototype.removeProgramFromRoutine = function (prg) {
        console.log('hold: ' + prg);
    };
    HomePage.prototype.selectBubble = function (prg, add) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__programs_programs__["a" /* ProgramsPage */], { bubble: prg });
    };
    HomePage.prototype.runRoutine = function () {
        var programs = this.routines.getPrograms();
        if (this.AllBubblesChecked(programs)) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__wifi_wifi__["a" /* WifiPage */], { prog1: this.routines.getProgram(programs[0]), prog2: this.routines.getProgram(programs[1]), prog3: this.routines.getProgram(programs[2]), prog4: this.routines.getProgram(programs[3])
            });
        }
    };
    HomePage.prototype.AllBubblesChecked = function (programs) {
        if (typeof programs[0] !== 'undefined' && programs[0] != null && programs[0].length > 0 &&
            typeof programs[1] !== 'undefined' && programs[1] != null && programs[1].length > 0 &&
            typeof programs[2] !== 'undefined' && programs[2] != null && programs[2].length > 0 &&
            typeof programs[3] !== 'undefined' && programs[3] != null && programs[3].length > 0) {
            this.EnableRunRoutine = true;
            this.showAddFavoriteButton = true;
        }
        else {
            this.EnableRunRoutine = false;
            this.showAddFavoriteButton = false;
        }
        return this.EnableRunRoutine;
    };
    HomePage.prototype.cleanRoutine = function () {
        this.routines.cleanPrograms();
        this.AllBubblesChecked(this.routines.getPrograms());
        this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble1, '');
        this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble2, '');
        this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble3, '');
        this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble4, '');
        this.updateBubbles(1, '');
        this.updateBubbles(2, '');
        this.updateBubbles(3, '');
        this.updateBubbles(4, '');
        this.showAddFavoriteButton = false;
    };
    HomePage.prototype.updateBubbles = function (bubble, name) {
        var _this = this;
        switch (bubble) {
            case 1:
                if (typeof name !== 'undefined' && name.length > 0) {
                    this.bubblesCurrentState1 = true;
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                        _this.translateService.getTranslation(lang).subscribe(function (value) {
                            _this.bubblesNames1 = typeof value[name] === 'undefined' ? name : value[name];
                        });
                    });
                }
                else {
                    this.bubblesCurrentState1 = false;
                    this.bubblesNames1 = '';
                }
                break;
            case 2:
                if (typeof name !== 'undefined' && name.length > 0) {
                    this.bubblesCurrentState2 = true;
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                        _this.translateService.getTranslation(lang).subscribe(function (value) {
                            _this.bubblesNames2 = typeof value[name] === 'undefined' ? name : value[name];
                        });
                    });
                }
                else {
                    this.bubblesCurrentState2 = false;
                    this.bubblesNames2 = '';
                }
                break;
            case 3:
                if (typeof name !== 'undefined' && name.length > 0) {
                    this.bubblesCurrentState3 = true;
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                        _this.translateService.getTranslation(lang).subscribe(function (value) {
                            _this.bubblesNames3 = typeof value[name] === 'undefined' ? name : value[name];
                        });
                    });
                }
                else {
                    this.bubblesCurrentState3 = false;
                    this.bubblesNames3 = '';
                }
                break;
            case 4:
                if (typeof name !== 'undefined' && name.length > 0) {
                    this.bubblesCurrentState4 = true;
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                        _this.translateService.getTranslation(lang).subscribe(function (value) {
                            _this.bubblesNames4 = typeof value[name] === 'undefined' ? name : value[name];
                        });
                    });
                }
                else {
                    this.bubblesCurrentState4 = false;
                    this.bubblesNames4 = '';
                }
                break;
        }
    };
    HomePage.prototype.checkAllBubbles = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble1).then(function (val) {
            if (val !== null) {
                var name = val.split('|')[1];
                _this.updateBubbles(1, name);
                _this.routines.setProgram(1, name);
            }
        }).catch(function (err) {
            var emailData = { area: 'checkAllBubbles 1', message: err };
            _this.apiService.sendError(emailData).then(function (result) {
                console.log(err);
            });
        });
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble2).then(function (val) {
            if (val !== null) {
                var name = val.split('|')[1];
                _this.updateBubbles(2, name);
                _this.routines.setProgram(2, name);
            }
        }).catch(function (err) {
            var emailData = { area: 'checkAllBubbles 2', message: err };
            _this.apiService.sendError(emailData).then(function (result) {
                console.log(err);
            });
        });
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble3).then(function (val) {
            if (val !== null) {
                var name = val.split('|')[1];
                _this.updateBubbles(3, name);
                _this.routines.setProgram(3, name);
            }
        }).catch(function (err) {
            var emailData = { area: 'checkAllBubbles 3', message: err };
            _this.apiService.sendError(emailData).then(function (result) {
                console.log(err);
            });
        });
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble4).then(function (val) {
            if (val !== null) {
                var name = val.split('|')[1];
                _this.updateBubbles(4, name);
                _this.routines.setProgram(4, name);
            }
            _this.AllBubblesChecked(_this.routines.getPrograms());
        }).catch(function (err) {
            var emailData = { area: 'checkAllBubbles 4', message: err };
            _this.apiService.sendError(emailData).then(function (result) {
                console.log(err);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\home\home.html"*/'  <ion-header>\n  <ion-navbar class="bar">\n    <button ion-button menuToggle end class="button button-clear">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <div class="logo"></div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home">\n    <div padding class="bubblescontainer">\n        <div class="bubbles">\n            <div (click)="selectBubble(1)" on-hold="removeProgramFromRoutine(1)" [ngStyle]="bubblesCurrentState1 && {\'background-image\':\'url(assets/img/bubble-violet.png)\'}" class="single-bubble-1"></div>\n            <div class="bubbles-program-name-1" (click)="selectBubble(1,true)">{{ bubblesNames1 }}</div>\n\n            <div (click)="selectBubble(2)" on-hold="removeProgramFromRoutine(2)" [ngStyle]="bubblesCurrentState2 && {\'background-image\':\'url(assets/img/bubble-red.png)\'}" class="single-bubble-2"></div>\n            <div class="bubbles-program-name-2" (click)="selectBubble(2,true)">{{ bubblesNames2 }}</div>\n\n            <div (click)="selectBubble(3)" on-hold="removeProgramFromRoutine(3)" [ngStyle]="bubblesCurrentState3 && {\'background-image\':\'url(assets/img/bubble-yellow.png)\'}" class="single-bubble-3"></div>\n            <div class="bubbles-program-name-3" (click)="selectBubble(3,true)">{{ bubblesNames3 }}</div>\n\n            <div (click)="selectBubble(4)" on-hold="removeProgramFromRoutine(4)" [ngStyle]="bubblesCurrentState4 && {\'background-image\':\'url(assets/img/bubble-green.png)\'}" class="single-bubble-4"></div>\n            <div class="bubbles-program-name-4" (click)="selectBubble(4,true)">{{ bubblesNames4 }}</div>\n        </div>\n    </div>\n\n    <div class="bubbleexplain">\n        <br>\n        <b>{{ \'tap-bubble\' | translate }}</b><br><br>\n        <!--<p translate="press-hold"> Press and hold a hearth to remove</p>-->\n        <button [disabled]="!EnableRunRoutine" class="greenbtn" menu-close nav-transition="ios" nav-direction="forward" (click)="runRoutine()" href="#">{{ \'run-routine\' | translate }}</button>\n        <br><br>\n        <button [disabled]="!showAddFavoriteButton" class="orangebtn" menu-close nav-transition="ios" nav-direction="forward" (click)="openAddFavorite()" href="#">{{ \'add-favorite\' | translate }}</button>\n        <br><br>\n        <button class="graybtn" menu-close nav-transition="ios" nav-direction="forward" (click)="cleanRoutine()" href="#">{{ \'clean-routine\' | translate }}</button>\n\n    </div>\n    <div text-center text-uppercase padding-top *ngIf="showLatestSection">{{ \'latest-routines\' | translate }}</div>\n    <div *ngFor="let routine of latestRoutines">\n        <div text-center padding-top>\n          {{ routine.day }} {{ routine.month | translate }} {{ routine.year }} {{ routine.hours }}:{{ routine.minutes }}\n        </div>\n        <!--<div class="purchase-status">{{ routine.purchaseStatus }}</div>-->\n\n        <div class="paddingmodal">\n\n            <ion-list (click)="addPrograms(\'\', routine.programs[0].apiName, routine.programs[1].apiName,\n                routine.programs[2].apiName,routine.programs[3].apiName)">\n\n                <ion-item *ngFor="let program of routine.programs" class="addiction center">\n                     {{ program.name | translate }}\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_routines_routines__["a" /* RoutinesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_service__["a" /* APIServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slider_slider__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__favorites_favorites__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the SubscribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubscribePage = (function () {
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
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            birthDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
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
            formData.append('uuid', __WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].test_uuid);
        }
        this.apiService.runPost('subscribe.php', formData).then(function (result) {
            _this.responseData = result;
            if (_this.responseData.status == 'ok') {
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].deviceInfoKey, { 'uuid': _this.responseData.uuid, 'email': _this.subscribeForm.value.email });
                _this.showSubmitButton = false;
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                    _this.translateService.getTranslation(lang).subscribe(function (value) {
                        _this.response_text = value['profile-success-message'];
                        setTimeout(function () {
                            if (_this.callBackPage == 'none') {
                                // despliega la vista de de instrucciones
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__slider_slider__["a" /* SliderPage */]);
                            }
                            else if (_this.callBackPage == 'favorites') {
                                _this.navCtrl.pop();
                                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__favorites_favorites__["a" /* FavoritesPage */], { 'showSave': true });
                                profileModal.present();
                            }
                        }, 5000);
                    });
                });
            }
            else {
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
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
            _this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                _this.translateService.getTranslation(lang).subscribe(function (value) {
                    _this.response_text = value['profile-error-message'];
                });
            });
        });
    };
    SubscribePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subscribe',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\subscribe\subscribe.html"*/'<!--\n  Generated template for the SubscribePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="bar">\n    <button ion-button menuToggle end class="button button-clear">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <div class="logo"></div>\n    </ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">{{ \'offline-device-text\' | translate }}</ion-item>\n</ion-header>\n\n\n<ion-content padding class="home center">\n\n  <div class="list card cardprogram">\n    <ion-item>\n\n        <h2 padding>{{ \'profile-text\' | translate }}</h2>\n\n    </ion-item>\n\n    <div padding class="item item-body">\n      <form [formGroup]="subscribeForm" (ngSubmit)="attemptSubscribe()">\n        <ion-list>\n          <label>\n            <p class="lorems center-forced" [innerHTML]="\'one-time-profile-text\' | translate">Text</p>\n          </label>\n          <ion-label class="item-input contact" [ngClass]="errorNameClass">\n            <ion-input type="text" placeholder="{{ \'name-text\' | translate }}" formControlName="name" value="{{ name_value }}"></ion-input>\n          </ion-label>\n          <ion-label class="item-input contact" [ngClass]="errorEmailClass">\n            <ion-input type="email" placeholder="Email"  autocapitalize="none" formControlName="email" value="{{ email_value }}"></ion-input>\n          </ion-label>\n          <ion-item class="item-input contact" [ngClass]="errorGenderClass">\n            <ion-label class="item-input contact">{{ \'gender-text\' | translate }}</ion-label>\n              <ion-select formControlName="gender" >\n                <ion-option value="f">{{ \'female-text\' | translate }}</ion-option>\n                <ion-option value="m">{{ \'male-text\' | translate }}</ion-option>\n              </ion-select>\n          </ion-item>\n          <ion-item class="item-input contact select" [ngClass]="errorDateClass">\n            <ion-label class="item-input contact" [ngClass]="errorGenderClass">{{ \'birthdate-text\' | translate }}</ion-label >\n            <ion-datetime [max]="maxDateOfPicker" displayFormat="MMM DD, YYYY" pickerFormat="YYYY-MM-DD" formControlName="birthDate"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <button type="submit" ion-button *ngIf="showSubmitButton" [disabled]="!subscribeForm.valid" class="button-contact button-calm">{{ \'button-send\' | translate }}</button>\n          </ion-item>\n        </ion-list>\n        <div padding>\n          {{ response_text }}\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\subscribe\subscribe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__["a" /* APIServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */]])
    ], SubscribePage);
    return SubscribePage;
}());

//# sourceMappingURL=subscribe.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
var Data = { Groups: [
        {
            category: 'basic',
            name: 'pain-relief-upper',
            programs: [
                {
                    name: '',
                    apiName: "Pain_Conditions",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Peace",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Regeneration",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            name: 'injury-upper',
            programs: [
                {
                    name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            name: 'stress-relief-upper',
            programs: [
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            name: 'immune-system-upper',
            programs: [
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            name: 'respiratory-system-upper',
            programs: [
                {
                    name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Sinus_Cavities",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            name: 'detoxification-upper',
            programs: [
                {
                    name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Large_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            name: 'headache-upper',
            programs: [
                {
                    name: '',
                    apiName: "Headache",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Peace",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            name: 'grounding-upper',
            programs: [
                {
                    name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Earth_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Root_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            name: 'energy-booster-upper',
            programs: [
                {
                    name: '',
                    apiName: "Energy_Booster",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Exhaustion",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Adrenal_Gland",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Brow_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            name: 'JET-LAG',
            programs: [
                {
                    name: '',
                    apiName: "Jet-Lag/Climate_Change",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Earth_Element",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            name: 'JET-LAG',
            programs: [
                {
                    name: '',
                    apiName: "Jet-Lag/Climate_Change",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Exhaustion",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Booster",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            name: 'concentration-upper',
            programs: [
                {
                    name: '',
                    apiName: "Concentration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Discernment",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Adrenal_Gland",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Brow_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            name: 'digestion-upper',
            programs: [
                {
                    name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Mineral_Metabolic_Activity",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            name: 'respiratory-system-upper',
            programs: [
                {
                    name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            name: 'lower-backache-upper',
            programs: [
                {
                    name: '',
                    apiName: "Backache",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Root_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            name: 'neck-shoulder-upper',
            programs: [
                {
                    name: '',
                    apiName: "Neck/Shoulder",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Gallbladder_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            name: 'sleep-enhancer-upper',
            programs: [
                {
                    name: '',
                    apiName: "Sleep_Enhancer",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            name: 'children-upper',
            programs: [
                {
                    name: '',
                    apiName: "Child_Development",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            name: 'female-hormonal-imbalances-upper',
            programs: [
                {
                    name: '',
                    apiName: "Female_Hormone_Balance",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            name: 'male-hormonal-imbalances-upper',
            programs: [
                {
                    name: '',
                    apiName: "Male_Hormone_Balance",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            name: 'cold-flu-upper',
            programs: [
                {
                    name: '',
                    apiName: "Flu",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            name: 'constipation-upper',
            programs: [
                {
                    name: '',
                    apiName: "Constipation",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Gallbladder_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Large_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            name: 'diarrhea-upper',
            programs: [
                {
                    name: '',
                    apiName: "Diarrhea",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            name: 'ear-problems-upper',
            programs: [
                {
                    name: '',
                    apiName: "Auditory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Triple_Warmer_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Brow_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            name: 'eyesight-upper',
            programs: [
                {
                    name: '',
                    apiName: "Eyesight",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Brow_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            name: 'intestinal-flu-upper',
            programs: [
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Flu",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            name: 'energy-booster-upper',
            programs: [
                {
                    name: '',
                    apiName: "Energy_Booster",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Adrenal_Gland",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pericardium_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            name: 'regeneration-upper',
            programs: [
                {
                    name: '',
                    apiName: "Regeneration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Vitality",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            name: 'respiratory-system-upper',
            programs: [
                {
                    name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Sinus_Cavities",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            name: 'injury-upper',
            programs: [
                {
                    name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pain_Conditions",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            name: 'pain-upper',
            programs: [
                {
                    name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pain_Conditions",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Regeneration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            name: 'backache-upper',
            programs: [
                {
                    name: '',
                    apiName: "Backache",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Neck/Shoulder",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Vertebrae",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Gallbladder_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            name: 'muscles-upper',
            programs: [
                {
                    name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Connective_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Regeneration",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            name: 'immune-system-upper',
            programs: [
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            name: 'anti-aging-upper',
            programs: [
                {
                    name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Anti_Aging",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Connective_Tissues",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            name: 'weight-control-upper',
            programs: [
                {
                    name: '',
                    apiName: "Addiction",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Weight_Control",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Triple_Warmer_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            name: 'detoxification-upper',
            programs: [
                {
                    name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Mineral_Metabolic_Activity",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            name: 'skin-conditions-upper',
            programs: [
                {
                    name: '',
                    apiName: "Connective_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Skin_Conditions",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            name: 'hair-growth-upper',
            programs: [
                {
                    name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Hair_Growth",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            name: 'low-physical-drive-upper',
            programs: [
                {
                    name: '',
                    apiName: "Pericardium_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Adrenal_Gland",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Low_Physical_Drive",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            name: 'low-mental-drive-upper',
            programs: [
                {
                    name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Low_Mental_Drive",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            name: 'stress-relief-upper',
            programs: [
                {
                    name: '',
                    apiName: "Joy",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            name: 'vitality-upper',
            programs: [
                {
                    name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Joy",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Booster",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Vitality",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            name: 'sleep-enhancer-upper',
            programs: [
                {
                    name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Sleep_Enhancer",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Peace",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            name: 'energy-booster-upper',
            programs: [
                {
                    name: '',
                    apiName: "Adrenal_Gland",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Booster",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Exhaustion",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            name: 'hypertension-upper',
            programs: [
                {
                    name: '',
                    apiName: "Pericardium_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Hypertension",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Heart_Function",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            name: 'thyroid-upper',
            programs: [
                {
                    name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Thyroid_Glands",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Throat_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            name: 'low-mental-drive-upper',
            programs: [
                {
                    name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Low_Mental_Drive",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            name: 'regeneration-upper',
            programs: [
                {
                    name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Regeneration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Connective_Tissues",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            name: 'vitality-upper',
            programs: [
                {
                    name: '',
                    apiName: "Energy_Booster",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Adrenal_Gland",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Vitality",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            name: 'joy-upper',
            programs: [
                {
                    name: '',
                    apiName: "Peace",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Joy",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Metal_Element",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            name: 'sleep-enhancer-upper',
            programs: [
                {
                    name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Sleep_Enhancer",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            name: 'heart-function-upper',
            programs: [
                {
                    name: '',
                    apiName: "Fire_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Heart_Function",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Triple_Warmer_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            name: 'respiratory-system-upper',
            programs: [
                {
                    name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Sinus_Cavities",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            name: 'hypertension-upper',
            programs: [
                {
                    name: '',
                    apiName: "Pericardium_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Hypertension",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            name: 'glucose-metabolic-disorders-upper',
            programs: [
                {
                    name: '',
                    apiName: "Peace",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Glucose_Metabolic_Disorders",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Spleen_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            name: 'hemorrhoids-upper',
            programs: [
                {
                    name: '',
                    apiName: "Hemorrhoids",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Constipation",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Root_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            name: 'urinary-system-upper',
            programs: [
                {
                    name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Urinary_System/Cystitis",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Urinary_Bladder_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            name: 'cold-flu-upper',
            programs: [
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Flu",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            name: 'pain-upper',
            programs: [
                {
                    name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pain_Conditions",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Regeneration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'chakra balancing',
            name: 'lower-chakra-balancing-upper',
            programs: [
                {
                    name: '',
                    apiName: "Root_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Solar_Plexus_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Earth_Element",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'chakra balancing',
            name: 'upper-chakra-balancing-upper',
            programs: [
                {
                    name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Throat_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Brow_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Crown_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'chakra balancing',
            name: 'meditation-basics-upper',
            programs: [
                {
                    name: '',
                    apiName: "Meditation_1",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Root_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Solar_Plexus_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'chakra balancing',
            name: 'meditation-medium-upper',
            programs: [
                {
                    name: '',
                    apiName: "Meditation_2",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Throat_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Peace",
                    runningtime: "",
                    description: ''
                }
            ]
        }, {
            category: 'chakra balancing',
            name: 'meditation-advanced-upper',
            programs: [
                {
                    name: '',
                    apiName: "Meditation_3",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Brow_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Crown_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Joy",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            name: 'earth-element-upper',
            programs: [
                {
                    name: '',
                    apiName: "Stomach_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Spleen_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Earth_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            name: 'fire-element-upper',
            programs: [
                {
                    name: '',
                    apiName: "Heart_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Small_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Fire_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            name: 'fire-element-upper',
            programs: [
                {
                    name: '',
                    apiName: "Pericardium_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Triple_Warmer_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Fire_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            name: 'metal-element-upper',
            programs: [
                {
                    name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Large_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Metal_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Skin_Conditions",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            name: 'water-element-upper',
            programs: [
                {
                    name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Urinary_Bladder_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Water_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            name: 'wood-element-upper',
            programs: [
                {
                    name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Gallbladder_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Wood_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Eyesight",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            name: 'liver-function-upper',
            programs: [
                {
                    name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Gallbladder_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Solar_Plexus_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            name: 'heart-function-upper',
            programs: [
                {
                    name: '',
                    apiName: "Heart_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Small_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            name: 'kidney-function-upper',
            programs: [
                {
                    name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Urinary_Bladder_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Exhaustion",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            name: 'large-intestine-balancing-upper',
            programs: [
                {
                    name: '',
                    apiName: "Large_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Solar_Plexus_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            name: 'pericardium-flow-upper',
            programs: [
                {
                    name: '',
                    apiName: "Pericardium_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Triple_Warmer_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            name: 'stomach-meridian-upper',
            programs: [
                {
                    name: '',
                    apiName: "Stomach_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Spleen_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Solar_Plexus_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            name: 'routine-pets-upper1',
            programs: [
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            name: 'routine-pets-upper2',
            programs: [
                {
                    name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Large_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            name: 'routine-pets-upper3',
            programs: [
                {
                    name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            name: 'routine-pets-upper4',
            programs: [
                {
                    name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            name: 'routine-pets-upper5',
            programs: [
                {
                    name: '',
                    apiName: "Skin_Conditions",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Connective_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            name: 'routine-pets-upper6',
            programs: [
                {
                    name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            name: 'routine-pets-upper7',
            programs: [
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            name: 'routine-pets-upper8',
            programs: [
                {
                    name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            name: 'routine-petx-upper1',
            programs: [
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            name: 'routine-petx-upper2',
            programs: [
                {
                    name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Large_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            name: 'routine-petx-upper3',
            programs: [
                {
                    name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            name: 'routine-petx-upper4',
            programs: [
                {
                    name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            name: 'routine-petx-upper5',
            programs: [
                {
                    name: '',
                    apiName: "Skin_Conditions",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Connective_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            name: 'routine-petx-upper6',
            programs: [
                {
                    name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            name: 'routine-petx-upper7',
            programs: [
                {
                    name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            name: 'routine-petx-upper8',
            programs: [
                {
                    name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        }
    ],
    Programs: [
        {
            name: 'addiction-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Addiction",
            runningtime: "15:05",
            description: 'addiction-description'
        },
        {
            name: 'adrenal-gland-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Adrenal_Gland",
            runningtime: "15:07",
            description: 'adrenal-gland-description'
        },
        {
            name: 'anti-aging-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Anti_Aging",
            runningtime: "11:01",
            description: 'anti-aging-description',
        },
        {
            name: 'auditory-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Auditory_System",
            runningtime: "14:31",
            description: 'auditory-description',
        },
        {
            name: 'backache-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Backache",
            runningtime: "16:30",
            description: 'backache-description',
        },
        {
            name: 'bones-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Bone_Tissues",
            runningtime: "15:04",
            description: 'bones-description'
        },
        {
            name: 'child-developement-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Child_Development",
            runningtime: "13:50",
            description: 'child-developement-description',
        },
        {
            name: 'circulatory-system-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Circulatory_System",
            runningtime: "15:06",
            description: 'circulatory-system-description',
        },
        {
            name: 'concentration-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Concentration",
            runningtime: "21:19",
            description: 'concentration-description'
        },
        {
            name: 'connective-tissue-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Connective_Tissues",
            runningtime: "16:54",
            description: 'connective-tissue-description',
        },
        {
            name: 'constipation-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Constipation",
            runningtime: "14:49",
            description: 'constipation-description'
        },
        {
            name: 'detoxification-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Detoxification",
            runningtime: "16:13",
            description: 'detoxification-description',
        },
        {
            name: 'diarrhea-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Diarrhea",
            runningtime: "13:59",
            description: 'diarrhea-description'
        },
        {
            name: 'digestive-system-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Digestive_System",
            runningtime: "16:41",
            description: 'digestive-system-description'
        },
        {
            name: 'discernment-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Discernment",
            runningtime: "13:37",
            description: 'discernment-description'
        },
        {
            name: 'energy-balancing-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Energy_Balancing",
            runningtime: "17:55",
            description: 'energy-balancing-description',
        },
        {
            name: 'energy-booster-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Energy_Booster",
            runningtime: "13:53",
            description: 'energy-booster-description'
        },
        {
            name: "E-SMOG",
            realName: '',
            sortCategory: 'none',
            apiName: "Electro_Smog",
            runningtime: "14:51",
            description: 'e-smog-description'
        },
        {
            name: 'exhaustion-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Exhaustion",
            runningtime: "14:59",
            description: 'exhaustion-description'
        },
        {
            name: 'eyesight-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Eyesight",
            runningtime: "16:11",
            description: 'eyesight-description'
        },
        {
            name: 'female-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Female_Hormone_Balance",
            runningtime: "14:17",
            description: 'female-description'
        },
        {
            name: 'flu-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Flu",
            runningtime: "13:59",
            description: 'flu-description'
        },
        {
            name: 'glucose-metabolic-disorders-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Glucose_Metabolic_Disorders",
            runningtime: "16:28",
            description: 'glucose-metabolic-disorders-description',
        },
        {
            name: 'hair-growth-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Hair_Growth",
            runningtime: "19:07",
            description: 'hair-growth-description'
        },
        {
            name: 'headache-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Headache",
            runningtime: "18:38",
            description: 'headache-description'
        },
        {
            name: 'heart-function-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Heart_Function",
            runningtime: "13:30",
            description: 'heart-function-description'
        },
        {
            name: 'hemorrhoids-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Hemorrhoids",
            runningtime: "21:13",
            description: 'hemorrhoids-description'
        },
        {
            name: 'hypertension-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Hypertension",
            runningtime: "18:53",
            description: 'hypertension-description'
        },
        {
            name: 'immune-system-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Immune_System",
            runningtime: "14:50",
            description: 'immune-system-description'
        },
        {
            name: 'injury-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Injury",
            runningtime: "18:46",
            description: 'injury-description'
        },
        {
            name: 'intestinal-flora-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Intestinal_Flora",
            runningtime: "18:58",
            description: 'intestinal-flora-description'
        },
        {
            name: 'joints-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Joints",
            runningtime: "17:07",
            description: 'joints-description'
        },
        {
            name: 'joy-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Joy",
            runningtime: "21:04",
            description: 'joy-description'
        },
        {
            name: "JET-LAG",
            realName: '',
            sortCategory: 'none',
            apiName: "Jet-Lag/Climate_Change",
            runningtime: "16:14",
            description: 'jet-lag-description'
        },
        {
            name: 'low-mental-drive-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Low_Mental_Drive",
            runningtime: "15:49",
            description: 'low-mental-drive-description'
        },
        {
            name: 'low-physical-drive-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Low_Physical_Drive",
            runningtime: "16:49",
            description: 'low-physical-drive-description'
        },
        {
            name: 'lymphatic-system-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Lymphatic_System",
            runningtime: "16:04",
            description: 'lymphatic-system-description'
        },
        {
            name: 'male-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Male_Hormone_Balance",
            runningtime: "12:31",
            description: 'male-description'
        },
        {
            name: 'meditation-1-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Meditation_1",
            runningtime: "33:15",
            description: 'meditation-1-description'
        },
        {
            name: 'meditation-2-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Meditation_2",
            runningtime: "29:43",
            description: 'meditation-2-description'
        },
        {
            name: 'meditation-3-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Meditation_3",
            runningtime: "22:49",
            description: 'meditation-3-description'
        },
        {
            name: 'mineral-metabolic-activity-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Mineral_Metabolic_Activity",
            runningtime: "17:25",
            description: 'mineral-metabolic-activity-description'
        },
        {
            name: 'muscle-tissue-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Muscle_Tissues",
            runningtime: "15:59",
            description: 'muscle-tissue-description'
        },
        {
            name: 'neck-shoulder-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Neck/Shoulder",
            runningtime: "16:16",
            description: 'neck-shoulder-description'
        },
        {
            name: 'nervous-system-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Nervous_System",
            runningtime: "19:10",
            description: 'nervous-system-description'
        },
        {
            name: 'peace-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Peace",
            runningtime: "22:08",
            description: 'peace-description'
        },
        {
            name: 'pain-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Pain_Conditions",
            runningtime: "15:18",
            description: 'pain-description'
        },
        {
            name: 'regeneration-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Regeneration",
            runningtime: "17:12",
            description: 'regeneration-description'
        },
        {
            name: 'relaxation-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Relaxation",
            runningtime: "19:55",
            description: 'relaxation-description'
        },
        {
            name: 'respiratory-system-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Respiratory_System",
            runningtime: "15:52",
            description: 'respiratory-system-description'
        },
        {
            name: 'sinus-cavities-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Sinus_Cavities",
            runningtime: "15:33",
            description: 'sinus-cavities-description'
        },
        {
            name: 'skin-conditions-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Skin_Conditions",
            runningtime: "15:50",
            description: 'skin-conditions-description'
        },
        {
            name: 'sleep-enhancer-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Sleep_Enhancer",
            runningtime: "19:58",
            description: 'sleep-enhancer-description'
        },
        {
            name: 'stress-relief-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Frustration",
            runningtime: "18:55",
            description: 'stress-relief-description'
        },
        {
            name: 'thyroid-glands-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Thyroid_Glands",
            runningtime: "17:53",
            description: 'thyroid-glands-description'
        },
        {
            name: 'urinary-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Urinary_System/Cystitis",
            runningtime: "13:39",
            description: 'urinary-description'
        },
        {
            name: 'vertebrae-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Vertebrae",
            runningtime: "12:53",
            description: 'vertebrae-description'
        },
        {
            name: 'vitality-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Vitality",
            runningtime: "14:00",
            description: 'vitality-description'
        },
        {
            name: 'weight-control-upper',
            realName: '',
            sortCategory: 'none',
            apiName: "Weight_Control",
            runningtime: "14:50",
            description: 'weight-control-description'
        },
        {
            name: 'petss-program-upper',
            realName: '',
            sortCategory: 'pets',
            apiName: "Pet_1",
            runningtime: "11:50",
            description: 'petss-program-description'
        },
        {
            name: 'petsx-program-upper',
            realName: '',
            sortCategory: 'pets',
            apiName: "Pet_2",
            runningtime: "12:50",
            description: 'petsx-program-description'
        },
        {
            name: 'stomach-meridian-upper',
            realName: '',
            sortCategory: 'meridian',
            apiName: "Stomach_Meridian",
            runningtime: "17:15",
            description: 'stomach-meridian-description'
        },
        {
            name: 'spleen-pancreas-meridian-upper',
            realName: '',
            sortCategory: 'meridian',
            apiName: "Spleen_Meridian",
            runningtime: "15:37",
            description: 'spleen-pancreas-meridian-description'
        },
        {
            name: 'heart-meridian-upper',
            realName: '',
            sortCategory: 'meridian',
            apiName: "Heart_Meridian",
            runningtime: "14:45",
            description: 'heart-meridian-description'
        },
        {
            name: 'small-intestine-meridian-upper',
            realName: '',
            sortCategory: 'meridian',
            apiName: "Small_Intestine_Meridian",
            runningtime: "13:25",
            description: 'small-intestine-meridian-description'
        },
        {
            name: 'pericardium-meridian-upper',
            realName: '',
            sortCategory: 'meridian',
            apiName: "Pericardium_Meridian",
            runningtime: "21:55",
            description: 'pericardium-meridian-description'
        },
        {
            name: 'triple-warmer-meridian-upper',
            realName: '',
            sortCategory: 'meridian',
            apiName: "Triple_Warmer_Meridian",
            runningtime: "13:20",
            description: 'triple-warmer-meridian-description'
        },
        {
            name: 'lung-meridian-upper',
            realName: '',
            sortCategory: 'meridian',
            apiName: "Lung_Meridian",
            runningtime: "16:38",
            description: 'lung-meridian-description'
        },
        {
            name: 'large-intestine-meridian-upper',
            realName: '',
            sortCategory: 'meridian',
            apiName: "Large_Intestine_Meridian",
            runningtime: "13:53",
            description: 'large-intestine-meridian-description'
        },
        {
            name: 'kidney-meridian-upper',
            realName: '',
            sortCategory: 'meridian',
            apiName: "Kidney_Meridian",
            runningtime: "16:27",
            description: 'kidney-meridian-description'
        },
        {
            name: 'urinary-bladder-meridian-upper',
            realName: '',
            sortCategory: 'meridian',
            apiName: "Urinary_Bladder_Meridian",
            runningtime: "14:19",
            description: 'urinary-bladder-meridian-description'
        },
        {
            name: 'liver-meridian-upper',
            realName: '',
            sortCategory: 'meridian',
            apiName: "Liver_Meridian",
            runningtime: "16:11",
            description: 'liver-meridian-description'
        },
        {
            name: 'gallbladder-meridian-upper',
            realName: '',
            sortCategory: 'meridian',
            apiName: "Gallbladder_Meridian",
            runningtime: "20:39",
            description: 'gallbladder-meridian-description'
        },
        {
            name: "first-chakra-upper",
            realName: '',
            sortCategory: 'chakra',
            apiName: "Root_Chakra",
            runningtime: "15:49",
            description: '1-chakra-description'
        },
        {
            name: "second-chakra-upper",
            realName: '',
            sortCategory: 'chakra',
            apiName: "Sacral_Chakra",
            runningtime: "13:57",
            description: '2-chakra-description'
        },
        {
            name: "third-chakra-upper",
            realName: '',
            sortCategory: 'chakra',
            apiName: "Solar_Plexus_Chakra",
            runningtime: "16:51",
            description: '3-chakra-description'
        },
        {
            name: "fourth-chakra-upper",
            realName: '',
            sortCategory: 'chakra',
            apiName: "Heart_Chakra",
            runningtime: "18:16",
            description: '4-chakra-description'
        },
        {
            name: "fifth-chakra-upper",
            realName: '',
            sortCategory: 'chakra',
            apiName: "Throat_Chakra",
            runningtime: "17:59",
            description: '5-chakra-description'
        },
        {
            name: "sixth-chakra-upper",
            realName: '',
            sortCategory: 'chakra',
            apiName: "Brow_Chakra",
            runningtime: "16:13",
            description: '6-chakra-description'
        },
        {
            name: "seventh-chakra-upper",
            realName: '',
            sortCategory: 'chakra',
            apiName: "Crown_Chakra",
            runningtime: "13:45",
            description: '7-chakra-description'
        },
        {
            name: 'earth-element-upper',
            realName: '',
            sortCategory: 'element',
            apiName: "Earth_Element",
            runningtime: "16:55",
            description: 'earth-element-description'
        },
        {
            name: 'water-element-upper',
            realName: '',
            sortCategory: 'element',
            apiName: "Water_Element",
            runningtime: "17:20",
            description: 'water-element-description'
        },
        {
            name: 'fire-element-upper',
            realName: '',
            sortCategory: 'element',
            apiName: "Fire_Element",
            runningtime: "15:05",
            description: 'fire-element-description'
        },
        {
            name: 'metal-element-upper',
            realName: '',
            sortCategory: 'element',
            apiName: "Metal_Element",
            runningtime: "12:39",
            description: 'metal-element-description'
        },
        {
            name: 'wood-element-upper',
            realName: '',
            sortCategory: 'element',
            apiName: "Wood_Element",
            runningtime: "17:09",
            description: 'wood-element-description'
        }
    ]
};
//# sourceMappingURL=offline_data.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offline_data__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_routines_routines__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__program_program__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_spinner_dialog__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ProgramsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramsPage = (function () {
    function ProgramsPage(navCtrl, storage, navParams, translateService, routines, events, spinnerDialog) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.translateService = translateService;
        this.routines = routines;
        this.events = events;
        this.spinnerDialog = spinnerDialog;
        this.program = navParams.get('bubble');
        this.events.subscribe('add1ProgramEvent', function (programNumber, programName, programRunningTime, programApiName) {
            _this.program = programNumber;
            _this.add1Program(programName, programRunningTime, programApiName);
            _this.navCtrl.pop();
        });
    }
    ProgramsPage.prototype.ionViewDidLeave = function () {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyScrollTop, this.content.getContentDimensions().scrollTop);
    };
    ProgramsPage.prototype.compare = function (a, b) {
        if (a.realName < b.realName) {
            return -1;
        }
        if (a.realName > b.realName) {
            return 1;
        }
        return 0;
    };
    ProgramsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.spinnerDialog.show();
        var self = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyCurrentProgram).then(function (program) {
            _this.getPrograms(program != null ? program : 'basic');
        });
        var programs_raw = [];
        this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
            _this.translateService.getTranslation(lang).subscribe(function (value) {
                for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs.length; i++) {
                    var program = __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs[i];
                    var realName = value[program.name];
                    program.realName = realName ? realName : program.name;
                    programs_raw[i] = program;
                }
                var programs_sort = programs_raw.sort(self.compare);
                var general = [];
                var general_index = 0;
                var pets = [];
                var pets_index = 0;
                var meridians = [];
                var meridians_index = 0;
                var chakras = [];
                var chakras_index = 0;
                var elements = [];
                var elements_index = 0;
                for (var j = 0; j < programs_sort.length; j++) {
                    var program = programs_sort[j];
                    switch (program.sortCategory) {
                        case "none":
                            general[general_index] = program;
                            general_index += 1;
                            break;
                        case "element":
                            elements[elements_index] = program;
                            elements_index += 1;
                            break;
                        case "meridian":
                            meridians[meridians_index] = program;
                            meridians_index += 1;
                            break;
                        case "chakra":
                            chakras[chakras_index] = program;
                            chakras_index += 1;
                            break;
                        case "pets":
                            pets[pets_index] = program;
                            pets_index += 1;
                            break;
                    }
                }
                general = general.sort(self.compare);
                for (var k = 0; k < general.length; k++) {
                    var program = general[k];
                    programs_sort[k] = program;
                }
                for (var l = general.length; l < general.length + elements.length; l++) {
                    var program = elements[l - general.length];
                    programs_sort[l] = program;
                }
                for (var m = general.length + elements.length; m < general.length + elements.length + meridians.length; m++) {
                    var program = meridians[m - (general.length + elements.length)];
                    programs_sort[m] = program;
                }
                for (var n = general.length + elements.length + meridians.length; n < general.length + elements.length + meridians.length + chakras.length; n++) {
                    var program = chakras[n - (general.length + elements.length + meridians.length)];
                    programs_sort[n] = program;
                }
                for (var o = general.length + elements.length + meridians.length + chakras.length; o < general.length + elements.length + meridians.length + chakras.length + pets.length; o++) {
                    var program = pets[o - (general.length + elements.length + meridians.length + chakras.length)];
                    programs_sort[o] = program;
                }
                _this.programs = programs_sort;
                _this.spinnerDialog.hide();
            });
        });
        this.routines.getKey(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyBubble1).then(function (val) {
            if (_this.program != 1 && val != null && val.length > 0) {
                _this.programName1 = val.split('|')[1];
            }
            else {
                _this.programName1 = '';
            }
        });
        this.routines.getKey(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyBubble2).then(function (val) {
            if (_this.program != 2 && val != null && val.length > 0) {
                _this.programName2 = val.split('|')[1];
            }
            else {
                _this.programName2 = '';
            }
        });
        this.routines.getKey(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyBubble3).then(function (val) {
            if (_this.program != 3 && val != null && val.length > 0) {
                _this.programName3 = val.split('|')[1];
            }
            else {
                _this.programName3 = '';
            }
        });
        this.routines.getKey(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyBubble4).then(function (val) {
            if (_this.program != 4 && val != null && val.length > 0) {
                _this.programName4 = val.split('|')[1];
            }
            else {
                _this.programName4 = '';
            }
        });
        setTimeout(function () {
            _this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyScrollTop).then(function (scroll) {
                _this.content.scrollTo(0, scroll, 100);
            });
        }, 500);
    };
    ProgramsPage.prototype.selectPreSetProgram = function (category) {
        this.getPrograms(category);
    };
    ProgramsPage.prototype.getPrograms = function (category) {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyCurrentProgram, category);
        this.basicButton = false;
        this.businessTravelButton = false;
        this.familiyButton = false;
        this.athleteButton = false;
        this.spaButton = false;
        this.stressButton = false;
        this.seniorButton = false;
        this.chakraButton = false;
        this.elementsButton = false;
        this.petssButton = false;
        this.petsxButton = false;
        switch (category) {
            case 'basic':
                this.basicButton = true;
                break;
            case 'business and travel':
                this.businessTravelButton = true;
                break;
            case 'family':
                this.familiyButton = true;
                break;
            case 'athlete':
                this.athleteButton = true;
                break;
            case 'spa':
                this.spaButton = true;
                break;
            case 'stress relief':
                this.stressButton = true;
                break;
            case 'senior':
                this.seniorButton = true;
                break;
            case 'chakra balancing':
                this.chakraButton = true;
                break;
            case 'elements':
                this.elementsButton = true;
                break;
            case 'petss':
                this.petssButton = true;
                break;
            case 'petsx':
                this.petsxButton = true;
                break;
        }
        var groups = [];
        var groupIndex = 0;
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Groups.length; i++) {
            var group = __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Groups[i];
            if (group.category == category) {
                groups[groupIndex] = group;
                for (var j = 0; j < group.programs.length; j++) {
                    var program = group.programs[j];
                    group.programs[j] = this.routines.getProgram(program.apiName);
                }
                groupIndex++;
            }
        }
        this.predefinedPrograms = groups;
    };
    ProgramsPage.prototype.addPrograms = function (routineName, program1, program2, program3, program4) {
        this.navCtrl.pop();
        var bubbleNames = this.routines.addPrograms(routineName, program1, program2, program3, program4);
        this.events.publish("sharesBubbles", bubbleNames);
    };
    ProgramsPage.prototype.add1Program = function (programName, programRunningTime, programApiName) {
        this.routines.addProgramToRoutine(this.program, '', programName, programRunningTime, programApiName);
        this.programName1 = this.program == 1 ? programName : (this.programName1.length > 0 ? this.programName1 : '');
        this.programName2 = this.program == 2 ? programName : (this.programName2.length > 0 ? this.programName2 : '');
        this.programName3 = this.program == 3 ? programName : (this.programName3.length > 0 ? this.programName3 : '');
        this.programName4 = this.program == 4 ? programName : (this.programName4.length > 0 ? this.programName4 : '');
        this.routines.setPrograms(this.programName1, this.programName2, this.programName3, this.programName4);
        var bubbleNames = [
            this.programName1,
            this.programName2,
            this.programName3,
            this.programName4
        ];
        this.events.publish("sharesBubbles", bubbleNames);
        this.navCtrl.pop();
    };
    ProgramsPage.prototype.moreProgramInfo = function (name, runTime, description, apiName) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__program_program__["a" /* ProgramPage */], { programNumber: this.program, name: name, runTime: runTime, description: description, apiName: apiName });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ProgramsPage.prototype, "content", void 0);
    ProgramsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-programs',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\programs\programs.html"*/'<!--\n  Generated template for the ProgramsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'programs\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="home center">\n    <br>\n    <div class="modaltitle">{{ \'program-kits\' | translate }}</div>\n    <div class="modaldesc">{{ \'popular-routines\' | translate }}</div>\n\n    <ion-scroll scrollX="true" scrollY="false" class="wide-as-needed programs">\n\n            <ion-row nowrap class="program {{ basicButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'basic\')">\n                <div class="programpic"><img src="assets/img/Basic.png"></div>\n                <div class="programdesc" [innerHTML]="\'basic\' | translate"><br><br></div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ businessTravelButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'business and travel\')">\n                <div class="programpic"><img src="assets/img/BusinessTraveller.png"></div>\n                <div class="programdesc" [innerHTML]="\'business-traveler\' | translate"></div>\n            </ion-row>\n\n           <ion-row nowrap class="program {{ familiyButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'family\')">\n                <div class="programpic"><img src="assets/img/family.png"></div>\n                <div class="programdesc" [innerHTML]="\'family-kit\' | translate"></div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ athleteButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'athlete\')">\n                <div class="programpic"><img src="assets/img/Athlete.png"></div>\n                <div class="programdesc" [innerHTML]="\'athlete\' | translate"></div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ spaButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'spa\')">\n                <div class="programpic"><img src="assets/img/Spa.png"></div>\n                <div class="programdesc" [innerHTML]="\'spa-wellness\' | translate"><br><br></div>\n            </ion-row>\n\n\n            <ion-row nowrap class="program {{ stressButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'stress relief\')">\n                <div class="programpic"><img src="assets/img/stress.png"></div>\n                <div class="programdesc" [innerHTML]="\'stress-relief\' | translate"></div>\n            </ion-row>\n\n\n            <ion-row nowrap class="program {{ seniorButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'senior\')">\n                <div class="programpic"><img src="assets/img/Senior.png"></div>\n                <div class="programdesc" [innerHTML]="\'senior-upper\' | translate"><br><br></div>\n            </ion-row>\n\n\n            <ion-row nowrap class="program {{ chakraButton ? \'\' : \'opacity-50\' }}"  (click)="selectPreSetProgram(\'chakra balancing\')">\n                <div class="programpic"><img src="assets/img/chakra.png"></div>\n                <div class="programdesc" [innerHTML]="\'chakra-balancing\' | translate"></div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ elementsButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'elements\')">\n                <div class="programpic"><img src="assets/img/Elements.png"></div>\n                <div class="programdesc" [innerHTML]="\'elements-meridians\' | translate"><br></div>\n            </ion-row>\n            <ion-row nowrap class="program {{ petssButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'petss\')">\n                <div class="programpic"><img src="assets/img/MascotasS.png"></div>\n                <div class="programdesc" [innerHTML]="\'petss\' | translate"><br></div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ petsxButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'petsx\')">\n                <div class="programpic"><img src="assets/img/MascotasX.png"></div>\n                <div class="programdesc" [innerHTML]="\'petsx\' | translate"><br></div>\n            </ion-row>\n    </ion-scroll>\n\n\n    <div class="modaltitle">{{ \'programs\' | translate }}</div>\n    <div *ngFor="let routine of predefinedPrograms">\n\n        {{ routine.name | translate }}\n        <!--<div class="purchase-status">{{ routine.purchaseStatus }}</div>-->\n\n        <div class="paddingmodal">\n\n            <ion-list (click)="addPrograms(routine.name, routine.programs[0].apiName, routine.programs[1].apiName,\n                routine.programs[2].apiName,routine.programs[3].apiName)">\n\n                <ion-item *ngFor="let program of routine.programs" class="addiction center">\n                     {{ program.name | translate }}\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n    </div>\n\n\n    <div class="modaltitle">{{ \'independent-programs\' | translate }}</div>\n    <div class="modaldesc" [innerHTML]="\'tap-program\' | translate">PROGRAMS</div>\n    <div class="paddingmodal">\n        <ion-list class="programlist">\n\n\n            <ion-item class="addiction center" *ngFor="let program of programs" nav-transition="ios" nav-direction="forward" href="#/app/routines">\n                <div class="programAddButton" (click)="add1Program(program.name, program.runningtime, program.apiName)">\n                    {{ program.name | translate }}\n                </div>\n                <div class="programInfoButton" end (click)="moreProgramInfo(program.name, program.runningtime, program.description, program.apiName)">\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                </div>\n            </ion-item>\n\n\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\programs\programs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_routines_routines__["a" /* RoutinesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_spinner_dialog__["a" /* SpinnerDialog */]])
    ], ProgramsPage);
    return ProgramsPage;
}());

//# sourceMappingURL=programs.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramPage = (function () {
    function ProgramPage(navCtrl, navParams, storage, translateService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translateService = translateService;
        this.events = events;
    }
    ProgramPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
            _this.translateService.getTranslation(lang).subscribe(function (prog) {
                _this.programRealName = _this.navParams.get('name');
                var programTranslateName = _this.navParams.get('name');
                if (_this.isNameOnArray(__WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].shortTitles, programTranslateName))
                    programTranslateName = programTranslateName.replace('-upper', '-short');
                _this.programName = typeof prog[programTranslateName] === 'undefined' ? programTranslateName : prog[programTranslateName];
                _this.programRunningTime = typeof prog[_this.navParams.get('runTime')] === 'undefined' ? _this.navParams.get('runTime') : prog[_this.navParams.get('runTime')];
                _this.programDescription = typeof prog[_this.navParams.get('description')] === 'undefined' ? _this.navParams.get('description') : prog[_this.navParams.get('description')];
                _this.programApiName = _this.navParams.get('apiName');
                _this.programNumber = _this.navParams.get('programNumber');
            });
        });
    };
    ProgramPage.prototype.add1Program = function (programName, programRunningTime, programApiName) {
        this.events.publish("add1ProgramEvent", this.programNumber, this.programRealName, this.programRunningTime, this.programApiName);
    };
    ProgramPage.prototype.isNameOnArray = function (names, name) {
        for (var i = 0; i < names.length; i++) {
            if (names[i] == name) {
                return true;
            }
        }
        return false;
    };
    ProgramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-program',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\program\program.html"*/'<!--\n  Generated template for the ProgramPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ programName }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="home center">\n\n    <div class="program-info-modal-holder">\n        <div class="program-info-modal-header">\n          <h2 class="program-info-modal-running-time-title">{{ \'running-time\' | translate }} </h2>\n        	<h2 class="program-info-modal-running-time">\n             {{ programRunningTime  }} \n        	</h2>\n        </div>\n       \n        <div class="program-info-modal-mainbody">\n          <ion-scroll style="height:100%;overflow-y:scroll;">\n            <div style="height:100%; line-height:25px;">{{ programDescription }}</div>\n            <br/>\n            <button class="button-add-program" ion-button (click)="add1Program(programName, programRunningTime, programApiName)">{{ \'add-program\' | translate }}</button>\n          </ion-scroll>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\program\program.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ProgramPage);
    return ProgramPage;
}());

//# sourceMappingURL=program.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WifiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playing_playing__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network_interface__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the WifiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WifiPage = (function () {
    function WifiPage(navCtrl, navParams, storage, apiService, translateService, networkInterface, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.apiService = apiService;
        this.translateService = translateService;
        this.networkInterface = networkInterface;
        this.platform = platform;
        this.intervalCount = 0;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
            _this.translateService.getTranslation(lang).subscribe(function (value) {
                _this.coilText = typeof value['coil'] === 'undefined' ? 'Antena' : value['coil'];
            });
        });
        this.program1 = this.navParams.get('prog1');
        this.program2 = this.navParams.get('prog2');
        this.program3 = this.navParams.get('prog3');
        this.program4 = this.navParams.get('prog4');
    }
    WifiPage.prototype.ionViewDidLeave = function () {
        this.stop();
    };
    WifiPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.mymatStatus = false;
        this.showIframeStatus = false;
        this.showLoading = true;
        this.isRunRoutineEnabled = true;
        if (this.platform.is('cordova')) {
            this.networkInterface.getWiFiIPAddress().then(function (response) {
                if (_this.verifyInternalIpAddress(response)) {
                    _this.verifyStatusValues();
                }
                else
                    _this.failIPVerification();
            }, function (response) {
                _this.failIPVerification();
            });
        }
        else {
            this.verifyStatusValues();
        }
        this.mymatWifi = true;
        this.intervalCount = 0;
    };
    WifiPage.prototype.verifyInternalIpAddress = function (ip) {
        for (var i = 1; i < 256; i++) {
            console.log(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].localIPAddress + i);
            console.log(ip);
            if (__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].localIPAddress + i == ip) {
                return true;
            }
        }
        return false;
    };
    WifiPage.prototype.verifyStatusValues = function (restart) {
        var _this = this;
        if (restart === void 0) { restart = true; }
        //this.mymatStatus = true;
        //this.showStatusTable = true;
        if (restart) {
            this.batteryImg = 'assets/img/b100.pn';
            this.coilText1 = 'N/A';
            this.coilText2 = 'N/A';
            this.coilText3 = 'N/A';
            this.coilText4 = 'N/A';
        }
        //this.mymatWifi = false;
        //this.showLoading = false;
        clearInterval(this.testIPInterval);
        // check if mymat is connected
        var myMatTest = this.apiService.test();
        myMatTest.then(function (response) {
            // if is connected quitar imagen, textos y loading y poner status del mat
            if (_this.verifyValues(response)) {
                _this.showStatus();
            }
            else {
                _this.failIPVerification();
            }
        }, function (response) {
            _this.failIPVerification();
        });
    };
    WifiPage.prototype.showNoStatus = function () {
        this.mymatNoStatus = true;
    };
    WifiPage.prototype.showStatus = function () {
        var _this = this;
        this.mymatWifi = false;
        this.mymatStatus = true;
        this.showStatusTable = true;
        this.showLoading = false;
        this.isRunRoutineEnabled = true;
        clearInterval(this.testStatusInterval);
        clearInterval(this.testIPInterval);
        this.testIPInterval = setInterval(function () {
            _this.networkInterface.getWiFiIPAddress().then(function (response) {
                if (_this.verifyInternalIpAddress(response)) {
                    _this.verifyStatusValues(false);
                }
                else {
                    _this.mymatWifi = true;
                    _this.mymatStatus = false;
                    _this.showStatusTable = false;
                    _this.showLoading = true;
                    _this.isRunRoutineEnabled = false;
                    _this.failIPVerification();
                }
            }, function (response) {
                _this.mymatWifi = true;
                _this.mymatStatus = false;
                _this.showStatusTable = false;
                _this.showLoading = true;
                _this.isRunRoutineEnabled = false;
                _this.failIPVerification();
            });
        }, 3000);
    };
    WifiPage.prototype.verifyValues = function (response) {
        if (response.indexOf("<p><h4>Power: ") > -1) {
            var power = response.split("<p><h4>Power: ");
            power = power[1].split("</h4></p>");
            var coil1 = response.split("<tr><td>1.</td><td>");
            coil1 = coil1[2].split("</td></tr>");
            var coil2 = response.split("<tr><td>2.</td><td>");
            coil2 = coil2[2].split("</td></tr>");
            var coil3 = response.split("<tr><td>3.</td><td>");
            coil3 = coil3[2].split("</td></tr>");
            var coil4 = response.split("<tr><td>4.</td><td>");
            coil4 = coil4[2].split("</td></tr>");
            this.batteryCharge = power[0];
            var powerVal = power[0].substr(0, power[0].length - 1);
            if (powerVal > 75)
                this.batteryImg = 'assets/img/b100.png';
            else if (powerVal > 50)
                this.batteryImg = 'assets/img/b75.png';
            else if (powerVal > 25)
                this.batteryImg = 'assets/img/b50.png';
            else if (powerVal > 10)
                this.batteryImg = 'assets/img/b25.png';
            else
                this.batteryImg = 'assets/img/b10.png';
            this.coilText1 = coil1[0];
            this.coilText2 = coil2[0];
            this.coilText3 = coil3[0];
            this.coilText4 = coil4[0];
            return true;
        }
        else {
            return false;
        }
    };
    WifiPage.prototype.failIPVerification = function () {
        var _this = this;
        this.testIPInterval = setInterval(function () {
            _this.networkInterface.getWiFiIPAddress().then(function (response) {
                if (_this.verifyInternalIpAddress(response)) {
                    _this.verifyStatusValues(false);
                }
            });
        }, 3000);
    };
    /*failStatusVerification(){
      this.testStatusInterval = setInterval(() => {
        // timeout of mymat detection 180 segundos
        var failMyMatTest = this.apiService.test();
        failMyMatTest.then((response) => {
          if(this.verifyValues(response)){
            this.showStatus();
          }
        }, (response) => {
          if(this.intervalCount >= 5){
            this.showNoStatus();
          }
        });
  
        this.intervalCount += 1;
      }, 3000);
  
      /*var programs = '';
  
      for(var i = 1; i <= 4; i++){
        switch(i){
          case 1:
            this.storage.get(Constants.storageKeyBubble1).then((val) => {
              programs += "?P1=" + val.split("|")[3] + '&';
            });
            break;
          case 2:
            this.storage.get(Constants.storageKeyBubble2).then((val) => {
       858]
          programs += "P2=" + val.split("|")[3] + '&';
            });
            break;
          case 3:
            this.storage.get(Constants.storageKeyBubble3).then((val) => {
              programs += "P3=" + val.split("|")[3] + '&';
            });
            break;
          case 4:
            this.storage.get(Constants.storageKeyBubble4).then((val) => {
              programs += "P4=" + val.split("|")[3];
  
              this.showIframeStatus = true;
              this.mymatWifi = false;
              this.mymatStatus = true;
              this.showStatusTable = false;
              this.iframeUrl = this.sanitize.bypassSecurityTrustResourceUrl(Constants.myMatApiIndexUrl + programs);
            });
            break;
        }
      }* /
    }*/
    WifiPage.prototype.startRoutine = function () {
        var _this = this;
        /* ANTES DE COCRRER RUTINA VERIFICAR SI SE ESTA CONECTADO AL WIFI DEL MYMAT */
        this.showLoading = true;
        this.isRunRoutineEnabled = false;
        this.apiService.test().then(function (response) {
            _this.showLoading = false;
            _this.isRunRoutineEnabled = true;
            if (_this.verifyValues(response)) {
                /* CORRER RUTINA */
                clearInterval(_this.testStatusInterval);
                clearInterval(_this.testIPInterval);
                var program1Obj = '|' + _this.program1.name + '|' + _this.program1.runningtime + '|' + _this.program1.apiName;
                var program2Obj = '|' + _this.program2.name + '|' + _this.program2.runningtime + '|' + _this.program2.apiName;
                var program3Obj = '|' + _this.program3.name + '|' + _this.program3.runningtime + '|' + _this.program3.apiName;
                var program4Obj = '|' + _this.program4.name + '|' + _this.program4.runningtime + '|' + _this.program4.apiName;
                var programs = [
                    program1Obj,
                    program2Obj,
                    program3Obj,
                    program4Obj
                ];
                _this.apiService.start(programs).then(function (response) {
                    console.log(response + '');
                }).catch(function (response) {
                    /*setTimeout(() => {
                      var emailData = { error : response.data };
                      this.apiService.sendError(emailData).then((result) => {
                        console.log(response.data);
                      });
                    }, 120000);*/
                });
                // Poner rutina en las ultimas corridas
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].latestRoutinesKey).then(function (routines) {
                    var latestArray = [];
                    var t = new Date();
                    var day = t.getDate();
                    var monthIndex = t.getMonth();
                    var year = t.getFullYear();
                    var hours = t.getHours();
                    var minutes = t.getMinutes();
                    var programsArray = [];
                    for (var i = 0; i < programs.length; i++) {
                        programsArray.push({ "apiName": programs[i].split('|')[3], "name": programs[i].split('|')[1] });
                    }
                    latestArray.push({ "day": day, "month": __WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].monthNames[monthIndex], "year": year, "hours": _this.fixZeroOnNumber(hours), "minutes": _this.fixZeroOnNumber(minutes), "programs": programsArray });
                    if (routines != null && routines[0] != null) {
                        latestArray.push(routines[0]);
                    }
                    if (routines != null && routines[1] != null) {
                        latestArray.push(routines[1]);
                    }
                    _this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].latestRoutinesKey, latestArray);
                });
                /* CORRER RUTINA */
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__playing_playing__["a" /* PlayingPage */]);
            }
            else {
                _this.showLoading = false;
                _this.isRunRoutineEnabled = true;
                _this.mymatWifi = true;
                _this.mymatStatus = false;
                _this.showStatusTable = false;
                _this.showLoading = true;
                _this.failIPVerification();
            }
        }, function (response) {
            _this.showLoading = false;
            _this.isRunRoutineEnabled = true;
            _this.mymatWifi = true;
            _this.mymatStatus = false;
            _this.showStatusTable = false;
            _this.showLoading = true;
            _this.failIPVerification();
        });
    };
    WifiPage.prototype.fixZeroOnNumber = function (val) {
        if (val < 10) {
            return '0' + val;
        }
        return val;
    };
    WifiPage.prototype.stop = function () {
        clearInterval(this.testStatusInterval);
        clearInterval(this.testIPInterval);
    };
    WifiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wifi',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\wifi\wifi.html"*/'<!--\n\n  Generated template for the WifiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="bar">\n\n    <button ion-button menuToggle end class="button button-clear">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <div class="logo"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="home center">\n\n        <br>\n\n        <div *ngIf="mymatWifi">\n\n            <img src="assets/img/wifi.png">\n\n            <div class="titleinstructions" [innerHTML]="\'please-pair\' | translate"></div>\n\n            <br>\n\n            <p [innerHTML]="\'activate-wifi\' | translate">Steps to pair your MyMat</p>\n\n            <p [innerHTML]="\'activate-wifi-1\' | translate">1. Turn on your MyMat</p>\n\n            <p [innerHTML]="\'activate-wifi-2\' | translate">2. On your device, navigate to your Wi-Fi settings</p>\n\n            <p [innerHTML]="\'activate-wifi-3\' | translate">3. Connect your device\'s WiFi with your MyMat network</p>\n\n            <p [innerHTML]="\'activate-wifi-4\' | translate">4. Once is connected, return to the MyMat app</p>\n\n            <!--<p class="interval-counter">0</p>-->\n\n            <br/>\n\n            <div *ngIf="mymatNoStatus">\n\n                <p [innerHTML]="\'no-detect-1\' | translate">We were unable to detect your MyMat</p>\n\n                <p [innerHTML]="\'no-detect-2\' | translate">Please follow the steps to do so</p>\n\n            </div>\n\n            <img *ngIf="showLoading" src="assets/img/loading.gif" width="200" />\n\n        </div>\n\n        <div *ngIf="mymatStatus">\n\n            <iframe *ngIf="showIframeStatus" height="100%" width="100%" [src]="iframeUrl" (click)="startRoutine()"></iframe>\n\n            <div *ngIf="showStatusTable" class="status-table divTable">\n\n                <div class="divTableHeading">\n\n                    <div class="divTableRow">\n\n                        <div class="divTableHead divTableCellFirstLeft">\n\n                            <h4 [innerHTML]="\'battery-power\' | translate"></h4>\n\n                        </div>\n\n                        <div class="divTableHead divTableCellFirstRight">\n\n                            <h4 id="battery">{{ batteryCharge }} <img src="{{ batteryImg }}" height="16"></h4>\n\n\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="divTableBody">\n\n                    <div class="divTableRow">\n\n                        <div class="divTableCell">{{ coilText }} 1</div>\n\n                        <div class="divTableCell" id="coil1">{{ coilText1 }}</div>\n\n                    </div>\n\n                    <div class="divTableRow">\n\n                        <div class="divTableCell coilOdd">{{ coilText }} 2</div>\n\n                        <div class="divTableCell coilOdd" id="coil2">{{ coilText2 }}</div>\n\n                    </div>\n\n                    <div class="divTableRow">\n\n                        <div class="divTableCell">{{ coilText }} 3</div>\n\n                        <div class="divTableCell" id="coil3">{{ coilText3 }}</div>\n\n                    </div>\n\n                    <div class="divTableRow">\n\n                        <div class="divTableCell coilOdd divTableCellLastLeft">{{ coilText }} 4</div>\n\n                        <div class="divTableCell coilOdd divTableCellLastRight" id="coil4">{{ coilText4 }}</div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <p>&nbsp;</p>\n\n            <button [disabled]="!isRunRoutineEnabled" class="greenbtn start-routine" menu-close nav-transition="ios" nav-direction="forward" (click)="startRoutine()" [innerHTML]="\'start-routine\' | translate">LAUNCH MYMAT</button>\n\n            <img *ngIf="showLoading" src="assets/img/loading.gif" width="200" />\n\n        </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\wifi\wifi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* APIServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network_interface__["a" /* NetworkInterface */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], WifiPage);
    return WifiPage;
}());

//# sourceMappingURL=wifi.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PlayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayingPage = (function () {
    function PlayingPage(navCtrl, navParams, storage, translateService, localNotifications, plt, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translateService = translateService;
        this.localNotifications = localNotifications;
        this.plt = plt;
        this.zone = zone;
        var _this = this;
        document.addEventListener('resume', function () {
            var t = new Date();
            _this.resume(t.getTime());
        });
    }
    PlayingPage.prototype.simulateResume = function () {
        var t = new Date();
        this.resume(t.getTime() + 10);
    };
    PlayingPage.prototype.resume = function (now) {
        if (Math.round(now / 1000) > this.finishTime) {
            this.displayRunningTime = '00:00';
            this.timerRemain = 0;
            this.timerId++;
            this.startTimer(this.timerId);
        }
        else {
            var secondsLeft = this.timerRemain = this.finishTime - Math.round(now / 1000);
            this.timerId++;
            this.startTimer(this.timerId);
            this.displayRunningTime = this.convertSecondsToTime(secondsLeft);
        }
    };
    PlayingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var program1CurrentTimeDecreasing;
        var program2CurrentTimeDecreasing;
        var program3CurrentTimeDecreasing;
        var program4CurrentTimeDecreasing;
        for (var i = 1; i <= 4; i++) {
            switch (i) {
                case 1:
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyBubble1).then(function (val) {
                        var value = val.split('|');
                        _this.program1CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
                        program1CurrentTimeDecreasing = value[2];
                        _this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                            _this.translateService.getTranslation(lang).subscribe(function (prog) {
                                _this.programTitle1 = typeof prog[value[1]] === 'undefined' ? value[1] : prog[value[1]];
                            });
                        });
                    });
                    break;
                case 2:
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyBubble2).then(function (val) {
                        var value = val.split('|');
                        _this.program2CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
                        program2CurrentTimeDecreasing = value[2];
                        _this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                            _this.translateService.getTranslation(lang).subscribe(function (prog) {
                                _this.programTitle2 = typeof prog[value[1]] === 'undefined' ? value[1] : prog[value[1]];
                            });
                        });
                    });
                    break;
                case 3:
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyBubble3).then(function (val) {
                        var value = val.split('|');
                        _this.program3CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
                        program3CurrentTimeDecreasing = value[2];
                        _this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                            _this.translateService.getTranslation(lang).subscribe(function (prog) {
                                _this.programTitle3 = typeof prog[value[1]] === 'undefined' ? value[1] : prog[value[1]];
                            });
                        });
                    });
                    break;
                case 4:
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyBubble4).then(function (val) {
                        var value = val.split('|');
                        _this.program4CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
                        program4CurrentTimeDecreasing = value[2];
                        _this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                            _this.translateService.getTranslation(lang).subscribe(function (prog) {
                                _this.programTitle4 = typeof prog[value[1]] === 'undefined' ? value[1] : prog[value[1]];
                            });
                        });
                        if (program1CurrentTimeDecreasing > program2CurrentTimeDecreasing && program1CurrentTimeDecreasing > program3CurrentTimeDecreasing && program1CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                            _this.displayRunningTime = program1CurrentTimeDecreasing; //this.convertSecondsToTime(program1CurrentTimeDecreasing);
                        else if (program2CurrentTimeDecreasing > program3CurrentTimeDecreasing && program2CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                            _this.displayRunningTime = program2CurrentTimeDecreasing; //this.convertSecondsToTime(program2CurrentTimeDecreasing);
                        else if (program3CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                            _this.displayRunningTime = program3CurrentTimeDecreasing; //this.convertSecondsToTime(program3CurrentTimeDecreasing);
                        else
                            _this.displayRunningTime = program4CurrentTimeDecreasing; //this.convertSecondsToTime(program4CurrentTimeDecreasing);
                        _this.displayRunningTime = _this.displayRunningTime;
                        var t = new Date();
                        _this.finishTime = Math.round(t.getTime() / 1000) + _this.getSeconds(_this.displayRunningTime);
                        _this.timerRemain = _this.getSeconds(_this.displayRunningTime);
                        _this.timerId = 1;
                        _this.startTimer(_this.timerId);
                        var $this = _this;
                        _this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                            _this.translateService.getTranslation(lang).subscribe(function (prog) {
                                _this.localNotifications.schedule({
                                    id: 1,
                                    title: 'MyMat Light',
                                    text: prog['time-expire-text'],
                                    sound: 'file://assets/sounds/gong_c5.mp3',
                                    trigger: { at: new Date(t.getTime() + 30 * 1000) }
                                });
                                _this.localNotifications.on("click").subscribe({ next: function (notification) {
                                        if (notification.id == 1) {
                                            var t = new Date();
                                            $this.resume(t.getTime());
                                        }
                                    }
                                });
                            });
                        });
                    });
                    break;
            }
        }
    };
    PlayingPage.prototype.ionViewWillLeave = function () {
        this.timerRemain = 0;
    };
    PlayingPage.prototype.startTimer = function (id) {
        var _this = this;
        setTimeout(function () {
            if (_this.timerRemain == 0 || _this.timerId != id) {
                return;
            }
            _this.timerRemain--;
            _this.zone.run(function () {
                _this.displayRunningTime = _this.decreaseSecond(_this.displayRunningTime);
            });
            if (_this.timerRemain > 0) {
                _this.startTimer(_this.timerId);
            }
        }, 1000);
    };
    PlayingPage.prototype.decreaseSecond = function (time) {
        var minutesStr = time.substr(0, time.indexOf(':'));
        var minutes = minutesStr[0] == '0' ? parseInt(minutesStr[1]) : parseInt(minutesStr);
        var secondsStr = time.substr(time.indexOf(':') + 1);
        var seconds = secondsStr[0] == '0' ? parseInt(secondsStr[1]) : parseInt(secondsStr);
        if (seconds - 1 == -1) {
            minutesStr = minutes - 1 < 10 && minutes - 1 >= 0 ? '0' + (minutes - 1) : minutes - 1 == -1 ? '00' : '' + (minutes - 1);
            secondsStr = '59';
        }
        else {
            secondsStr = seconds - 1 < 10 ? '0' + (seconds - 1) : '' + (seconds - 1);
        }
        return minutesStr + ':' + secondsStr;
    };
    PlayingPage.prototype.getSeconds = function (time) {
        var minutesStr = time.substr(0, time.indexOf(':'));
        var minutes = minutesStr[0] == '0' ? parseInt(minutesStr[1]) : parseInt(minutesStr);
        var secondsStr = time.substr(time.indexOf(':') + 1);
        var seconds = secondsStr[0] == '0' ? parseInt(secondsStr[1]) : parseInt(secondsStr);
        return (minutes * 60) + seconds;
    };
    PlayingPage.prototype.convertSecondsToTime = function (timeInSeconds) {
        var minutes = Math.floor(timeInSeconds / 60);
        var minutesStr = "0" + minutes;
        var seconds = "0" + (timeInSeconds - minutes * 60);
        return minutesStr.substr(-2) + ":" + seconds.substr(-2);
    };
    PlayingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-playing',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\playing\playing.html"*/'<!--\n\n  Generated template for the PlayingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="bar">\n\n    <button ion-button menuToggle end class="button button-clear">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <div class="logo"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="home center">\n\n  <div class="list card paddingSmall">\n\n      <div class="item">\n\n\n\n          <h2>{{ \'remaining-time\' | translate }} </h2>\n\n          <h3 style="color:white;">{{ displayRunningTime }}</h3>\n\n\n\n      </div>\n\n\n\n      <div class="item item-time item-body">\n\n          <div class="program-running-left">\n\n            <div class="program-running-title">{{ programTitle1 }}</div>\n\n            <div class="program-running-duration">{{ program1CurrentTimeDecreasingAsTime }}</div>\n\n          </div>\n\n      </div>\n\n\n\n      <div class="item item-time item-body">\n\n          <div class="program-running-left">\n\n            <div class="program-running-title">{{ programTitle2 }}</div>\n\n            <div class="program-running-duration">{{  program2CurrentTimeDecreasingAsTime }}</div>\n\n          </div>\n\n      </div>\n\n\n\n       <div class="item item-time item-body">\n\n          <div class="program-running-left">\n\n            <div class="program-running-title">{{ programTitle3 }}</div>\n\n            <div class="program-running-duration">{{  program3CurrentTimeDecreasingAsTime }}</div>\n\n          </div>\n\n      </div>\n\n\n\n      <div class="item item-time item-body">\n\n          <div class="program-running-left">\n\n            <div class="program-running-title">{{ programTitle4 }}</div>\n\n            <div class="program-running-duration">{{  program4CurrentTimeDecreasingAsTime }}</div>\n\n          </div>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\playing\playing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], PlayingPage);
    return PlayingPage;
}());

//# sourceMappingURL=playing.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n    <ion-header>\n      <ion-navbar class="bar">\n        <button ion-button menuToggle end class="button button-clear">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n          <div class="logo"></div>\n        </ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding class="home">\n\n        <div class="list card cardprogram">\n\n            <div class="item">\n\n                <h2 padding [innerHTML]="\'help-text\' | translate">Help</h2>\n\n            </div>\n\n            <div padding class="item item-body">\n                <div class="" [innerHTML]="\'help-text1\' | translate">How do I know which programs to choose?</div>\n                <p class="lorems" [innerHTML]="\'help-text2\' | translate">\n                    It is always good to start with balancing the System. These are some ways you could start this with:\n                    Energy Balancing, E-Smog, Joy, Vitality<br><br>\n                    \n                    If you would like to enhance your sleeping pattern – choose:<br>\n                    Energy Balancing, E-Smog, Relax, Sleep<br><br>\n                    \n                    If you would like some extra energy in the morning:<br>\n                    Energy Balancing, Energy Booster, Concentration (and any program connected to a problem you are dealing with – as Pain, Muscle, Joints, Headache etc.) <br><br>\n                    \n                    For a full list of programs and their uses regarding symptoms refer to the user’s manual included with your purchase or available for free online.\n                </p>\n                <div class="" [innerHTML]="\'help-text3\' | translate">Which programs should I avoid in the evening?</div>\n                <p class="lorems" [innerHTML]="\'help-text4\' | translate">\n                    If you want to have a good night’s sleep it is better not to over stimulate your organism. If you are used to drinking coffee in the evening and still can sleep you may use any programs but if you are more sensitive – better do not to use the following programs before bed time: Circulation, Immune System, Adrenal, Exhaustion, Concentration and Energy Booster\n                </p>\n                <div class="" [innerHTML]="\'help-text5\' | translate">How do electromagnetic fields affect my body?</div>\n                <p class="lorems" [innerHTML]="\'help-text6\' | translate">\n                    Everything in our bodies is electric, our cells communicate with electromagnetic frequencies, our heart generates electromagnetic waves with every beat, our nervous system communicated when neurons react to electro magnetic signals through synapses. With this in mind we can understand how external magnetic, electric and electromagnetic fields react with every aspect of our body. By regulating specific low intensity frequencies we can chose exactly what we want to react with, acting on specified cells, organs and tissues.\n                </p>\n                <div class="" [innerHTML]="\'help-text7\' | translate">How does treatment at the cellular level help me?</div>\n                <p class="lorems" [innerHTML]="\'help-text8\' | translate">\n                    By charging magnetic fields surrounding cell membranes channels open up for better nutrient penetration. Opening the channels also promotes easier waste elimination, efficiently restoring proper cell function. An efficient system of cells creates efficient tissue, which come together to make organs. Restoring proper function from the cellular level brings beneficial long term effects to all related problems and improves overall well being. Healthy cell function also diminishes the need for cell replacement, slowing down aging processes and energy waste.\n                </p>\n                \n                <div class="" [innerHTML]="\'help-text9\' | translate">Can PEMF therapy protect me from future illnesses?</div>\n                <p class="lorems" [innerHTML]="\'help-text10\' | translate"> Operating effectively at a systematic level will reduce opportunities for diseases to develop. Diseases begin at a cellular level and injuries have to start healing at a cellular level. By using Pulsed Electromagnetic Frequencies one can improve general circulation thus accelerating reparation processes. By improving general cellular health they break down/wear out less often. Healthy operating cells will accelerate recuperation and balance bodily functions. </p>\n\n                <div class="" [innerHTML]="\'help-text11\' | translate">Aren’t Magnetic Fields bad for me?</div>\n                <p class="lorems" [innerHTML]="\'help-text12\' | translate"> The MyMat has a frequency range between 1Hz to 200 kHz and EMF strength wont exceed 10 micro Tesla per channel. The MyMat can operate up to 4 channels simultaneously due to its 4 antennae’s, thus a maximum of 40 micro Tesla. Magnetic fields outside of the low and extremely low frequencies such as microwave, infrared, radio and ultraviolet frequencies do have varied detrimental effects on our cells and body. Most of our exposure risk comes from higher frequencies such as power lines and cell phones attached to our heads daily. These frequencies pose higher risks because we are constantly exposed to them and they can induce tissue damage, alter cellular function and create general cellular damage. It is practically impossible to live a life avoiding these frequencies, they are everywhere and penetrate everything. We cant escape E-smog, but we can use the MyMat which has several programs that can help reduce damaging effects from all our constant electronic bombardment by adding frequencies that mantain our bodies in balance, mantaining the healthy, natural frequencies. </p>\n\n                <div class="" [innerHTML]="\'help-text13\' | translate">Will PEMF therapy replace my medication?</div>\n                <p class="lorems" [innerHTML]="\'help-text14\' | translate"> Therapy with the Pulsed Electromagnetic Frequencies can make a significant improvement in overall well-being and diminish many negative symptoms. It can be used alongside treatments and medication to improve results. It is important to discuss with medical professionals before replacing any treatments or medication. Once a proper plan is created and results are seen it is possible to reduce or eliminate treatments or medication. Always make sure to ask for medical advise or consultation before changing or replacing existing treatments. </p>\n\n                <div class="" [innerHTML]="\'help-text15\' | translate">How do electromagnetic fields affect my body?</div>\n                <p class="lorems" [innerHTML]="\'help-text16\' | translate">Everything in our bodies is electric, our cells communicate with electromagnetic frequencies, our heart generates electromagnetic waves with every beat, our nervous system communicated when neurons react to electro magnetic signals through synapses. With this in mind we can understand how external magnetic, electric and electromagnetic fields react with every aspect of our body. By regulating specific low intensity frequencies we can chose exactly what we want to react with, acting on specified cells, organs and tissues. </p>\n\n                <div class="" [innerHTML]="\'help-text23\' | translate">Can I overdose on a magnetic field?</div>\n                <p class="lorems" [innerHTML]="\'help-text24\' | translate"> The MyMat operates with very low intensity pulsed magnetic fields. A healthy cell operates at ideal capacity so has no need for more energy and cannot accept more energy, so it ignores these frequencies. A damaged or malfunctioning cell can absorb some of this energy but it is impossible for it to overcharge because there is no possibility of storing any more energy than is needed. </p>\n\n                <div class="" [innerHTML]="\'help-text25\' | translate">What are some of the basic beneficial actions PEMFs will have in my body?</div>\n                <p class="lorems" [innerHTML]="\'help-text26\' | translate">Improving tissue healing \n         Reducing pain<br>\nIncreasing energy<br>\nImproving sleep<br>\nMaking soft tissue more flexible<br>\nMeridian Stimulation<br>\nReducing Blood Pressure<br>\nImproving clotting factors<br>\nReducing Arthritis ontake<br>\nImmune system stimulation<br>\nDetox<br>\nHelping nerve function<br>\nImproving Nutrient Absorbtion<br>\nReducing Muscle tension</p>\n            </div>\n        </div>\n\n    </ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams, formBuilder, apiService, translateService, storage, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.translateService = translateService;
        this.storage = storage;
        this.events = events;
        this.contactForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.events.subscribe('switchLangEventContact', function (lang) {
            //call methods to refresh content
            _this.changeButtonText(lang);
        });
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.cleanForm();
        this.response_text = '';
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
            _this.changeButtonText(lang);
        });
    };
    ContactPage.prototype.changeButtonText = function (lang) {
        var _this = this;
        this.translateService.getTranslation(lang).subscribe(function (value) {
            _this.button_send = value['send-text'];
            // Mostrar texto en label debajo del boton
        });
    };
    ContactPage.prototype.cleanForm = function () {
        this.contactDisabled = true;
        this.name_value = '';
        this.email_value = '';
        this.message_value = '';
    };
    ContactPage.prototype.attemptSendMail = function () {
        var _this = this;
        var emailData = { email: this.contactForm.value.email, name: this.contactForm.value.name, message: this.contactForm.value.message };
        this.apiService.runPost('contact_us.php', emailData).then(function (result) {
            var obj = result;
            if (obj.status == "ok") {
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                    _this.translateService.getTranslation(lang).subscribe(function (value) {
                        _this.response_text = value['email-success-message'];
                    });
                });
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                    _this.translateService.getTranslation(lang).subscribe(function (value) {
                        _this.button_send = value['sent-text'];
                        _this.cleanForm();
                    });
                });
            }
            else {
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                    _this.translateService.getTranslation(lang).subscribe(function (value) {
                        _this.response_text = value['email-error-message'];
                    });
                });
            }
        }, function (result) {
            _this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                _this.translateService.getTranslation(lang).subscribe(function (value) {
                    _this.response_text = value['email-error-message'];
                });
            });
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\contact\contact.html"*/'<!--\n\n  Generated template for the ContactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="bar">\n\n    <button ion-button menuToggle end class="button button-clear">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <div class="logo"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="home center">\n\n  <div class="list card cardprogram">\n\n    <div class="item">\n\n\n\n        <h2 padding>{{ \'contact-us-text\' | translate }}</h2>\n\n\n\n    </div>\n\n\n\n    <div padding class="item item-body">\n\n      <form [formGroup]="contactForm" (ngSubmit)="attemptSendMail()">\n\n        <p class="lorems center-forced" [innerHTML]="\'get-in-touch\' | translate">Text</p>\n\n        <label class="item-input contact">\n\n          <ion-input type="text" placeholder="{{ \'name-text\' | translate }}" formControlName="name" value="{{ name_value }}"></ion-input>\n\n        </label><br>\n\n        <label class="item-input contact">\n\n          <ion-input type="email" placeholder="Email"  autocapitalize="none"formControlName="email" value="{{ email_value }}"></ion-input>\n\n        </label><br>\n\n        <label class="item-input contact">\n\n          <ion-textarea placeholder="{{ \'message-text\' | translate }}" formControlName="message" value="{{ message_value }}"></ion-textarea>\n\n        </label><br>\n\n        <button type="submit" ion-button [disabled]="!contactForm.valid" [disabled]="contactDisabled" class="button-contact button-calm">{{ button_send }}</button>\n\n        <div padding>\n\n          {{ response_text }}\n\n        </div>\n\n      </form>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* APIServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = {
    localIPAddress: '192.168.0.',
    myMatApiStartUrl: 'http://192.168.1.3/start.htm',
    myMatApiIndexUrl: 'http://192.168.1.3/index.htm',
    myMatApiUrl: 'https://healinghouse.life/api/mymat/',
    storageKeyLang: 'mymat_lang',
    storageKeyBubble1: 'MyMat_bubbleRoutineProgram1',
    storageKeyBubble2: 'MyMat_bubbleRoutineProgram2',
    storageKeyBubble3: 'MyMat_bubbleRoutineProgram3',
    storageKeyBubble4: 'MyMat_bubbleRoutineProgram4',
    storageKeyScrollTop: 'MyMat_scrollTop',
    storageKeyCurrentProgram: 'MyMat_currentProgram',
    deviceInfoKey: 'MyMatDevice',
    test_uuid: 'UUIDTEST-1234-5678-9100-0000AGO19813',
    latestRoutinesKey: 'latestRoutines',
    monthNames: [
        "january", "february", "march",
        "april", "may", "june", "july",
        "August", "September", "October",
        "november", "december"
    ],
    shortTitles: [
        'earth-element-upper',
        'fire-element-upper',
        'metal-element-upper',
        'water-element-upper',
        'wood-element-upper',
        'gallbladder-meridian-upper',
        'kidney-meridian-upper',
        'heart-meridian-upper',
        'large-intestine-meridian-upper',
        'liver-meridian-upper',
        'lung-meridian-upper',
        'pericardium-meridian-upper',
        'small-intestine-meridian-upper',
        'spleen-pancreas-meridian-upper',
        'stomach-meridian-upper',
        'triple-warmer-meridian-upper',
        'urinary-bladder-meridian-upper'
    ]
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network_interface__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_date_picker__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_spinner_dialog__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_help_help__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_programs_programs__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_wifi_wifi__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_playing_playing__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_program_program__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_subscribe_subscribe__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_slider_slider__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_favorites_favorites__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_routines_routines__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_api_service_api_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_network__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_device__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // solo se usa para hacer la prueba de conexion con el MyMat





//import { Network } from '@ionic-native/network';




















function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_programs_programs__["a" /* ProgramsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_wifi_wifi__["a" /* WifiPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_playing_playing__["a" /* PlayingPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_subscribe_subscribe__["a" /* SubscribePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_program_program__["a" /* ProgramPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_favorites_favorites__["a" /* FavoritesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_programs_programs__["a" /* ProgramsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_wifi_wifi__["a" /* WifiPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_playing_playing__["a" /* PlayingPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_subscribe_subscribe__["a" /* SubscribePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_program_program__["a" /* ProgramPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_favorites_favorites__["a" /* FavoritesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_26__providers_routines_routines__["a" /* RoutinesProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_network_interface__["a" /* NetworkInterface */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_27__providers_api_service_api_service__["a" /* APIServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_help_help__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_slider_slider__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_favorites_favorites__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translateService, menuCtrl, storage, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translateService = translateService;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'home-title', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], icon: 'menuitemhome', isPush: false },
            { title: 'help-title', component: __WEBPACK_IMPORTED_MODULE_8__pages_help_help__["a" /* HelpPage */], icon: 'menuitemhelp', isPush: false },
            { title: 'contact-title', component: __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */], icon: 'menuitemcontact', isPush: false },
            { title: 'fav-title', component: __WEBPACK_IMPORTED_MODULE_11__pages_favorites_favorites__["a" /* FavoritesPage */], icon: 'menufavorites', isPush: true },
            { title: 'slider-title', component: __WEBPACK_IMPORTED_MODULE_10__pages_slider_slider__["a" /* SliderPage */], icon: 'menuiteminfo', isPush: true }
        ];
        platform.ready().then(function () {
            _this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyLang).then(function (value) {
                if (!value) {
                    value = navigator.language.split('-')[0];
                    if (!value)
                        value = 'en';
                    translateService.setDefaultLang(value);
                }
                translateService.use(value);
                _this.switchLang(value);
            })
                .catch(function (err) {
                var value = 'en';
                translateService.setDefaultLang(value);
                translateService.use(value);
                _this.switchLang(value);
            });
            ;
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.isPush)
            this.nav.push(page.component);
        else
            this.nav.setRoot(page.component);
    };
    MyApp.prototype.switchLang = function (lang) {
        this.events.publish('switchLangEvent', lang);
        this.events.publish('switchLangEventContact', lang);
        switch (lang) {
            case 'es':
                this.lang_en = true;
                this.lang_es = false;
                this.lang_pt = true;
                this.lang_fr = true;
                this.lang_gr = true;
                this.lang_it = true;
                break;
            case 'en':
                this.lang_en = false;
                this.lang_es = true;
                this.lang_pt = true;
                this.lang_fr = true;
                this.lang_gr = true;
                this.lang_it = true;
                break;
            case 'pt':
                this.lang_en = true;
                this.lang_es = true;
                this.lang_pt = false;
                this.lang_fr = true;
                this.lang_gr = true;
                this.lang_it = true;
                break;
            case 'it':
                this.lang_en = true;
                this.lang_es = true;
                this.lang_pt = true;
                this.lang_fr = true;
                this.lang_gr = true;
                this.lang_it = false;
                break;
            case 'gr':
                this.lang_en = true;
                this.lang_es = true;
                this.lang_pt = true;
                this.lang_fr = true;
                this.lang_gr = false;
                this.lang_it = true;
                break;
            case 'fr':
                this.lang_en = true;
                this.lang_es = true;
                this.lang_pt = true;
                this.lang_fr = false;
                this.lang_gr = true;
                this.lang_it = true;
                break;
        }
        this.translateService.use(lang);
        this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyLang, lang);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n    <ion-list>\n\n      <div class="menutitle"><img src="assets/img/logomenu.png"></div>\n\n      <ion-item class="menuitemhome" menu-close>\n\n        <img *ngIf="lang_en" src="assets/img/flag-england.png" width="35" height="35" (click)="switchLang(\'en\')">\n\n        <img *ngIf="lang_es" src="assets/img/flag-spain.png" width="35" height="35" (click)="switchLang(\'es\')">\n\n        <img *ngIf="lang_it" src="assets/img/flag-italy.png" width="35" height="35" (click)="switchLang(\'it\')">\n\n        <img *ngIf="lang_gr" src="assets/img/flag-germany.png" width="35" height="35" (click)="switchLang(\'gr\')">\n\n        <img *ngIf="lang_fr" src="assets/img/flag-france.png" width="35" height="35" (click)="switchLang(\'fr\')">\n\n        <img *ngIf="lang_pt" src="assets/img/flag-brazil.png" width="35" height="35" (click)="switchLang(\'pt\')">\n\n      </ion-item>\n\n      <button menuClose ion-item class="item-button item-block item-md {{ p.icon }}" *ngFor="let p of pages" (click)="openPage(p)">\n\n        <label class="item-content" text-uppercase></label>\n\n        {{p.title | translate}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Network } from '@ionic-native/network';


//import * as $ from "jquery";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var APIServiceProvider = (function () {
    function APIServiceProvider(http, httpNative, httpModule) {
        this.http = http;
        this.httpNative = httpNative;
        this.httpModule = httpModule;
    }
    APIServiceProvider.prototype.test_language = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].myMatApiIndexUrl)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    APIServiceProvider.prototype.test = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return new Promise(function (resolve, reject) {
            _this.httpModule.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].myMatApiIndexUrl, { headers: headers })
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["timeout"])(5000) //5 seconds
            )
                .map(function (res) { return res.text(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    APIServiceProvider.prototype.sendError = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // watch network for a connection
            /*let connectSubscription = this.network.onConnect().subscribe(() => {*/
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.httpModule.post(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].myMatApiUrl + 'report_error.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
            /*});*/
        });
    };
    APIServiceProvider.prototype.sendEmail = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // watch network for a connection
            /*let connectSubscription = this.network.onConnect().subscribe(() => {*/
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.httpModule.post(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].myMatApiUrl + 'contact_us.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
            /*});*/
        });
    };
    APIServiceProvider.prototype.runPost = function (scriptFile, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].myMatApiUrl + scriptFile, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
            /*});*/
        });
    };
    APIServiceProvider.prototype.start = function (programs) {
        var program1 = programs[0].split("|")[3];
        var program2 = programs[1].split("|")[3];
        var program3 = programs[2].split("|")[3];
        var program4 = programs[3].split("|")[3];
        /*var formData = new FormData();
        formData.append('P1', program1);
        formData.append('P2', program2);
        formData.append('P3', program3);
        formData.append('P4', program4);*/
        var params = "P1=" + program1 + "&P2=" + program2 + "&P3=" + program3 + "&P4=" + program4;
        return this.httpNative.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].myMatApiStartUrl + '?' + params, "", {});
    };
    APIServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], APIServiceProvider);
    return APIServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_routines_routines__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = (function () {
    function FavoritesPage(navParams, viewCtrl, routines, formBuilder, translateService, storage, apiService, network, loadingCtrl, alertCtrl, zone, events) {
        var _this = this;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.routines = routines;
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.storage = storage;
        this.apiService = apiService;
        this.network = network;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.events = events;
        this.showSaveForm = true;
        this.showLoadingListing = false;
        this.isDeviceOnline = true;
        var programs = this.routines.getPrograms();
        if (programs[0] && programs[1] && programs[2] && programs[3]) {
            this.program1 = programs[0];
            this.program2 = programs[1];
            this.program3 = programs[2];
            this.program4 = programs[3];
        }
        this.saveRoutineForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        if (navParams.get('showSave'))
            this.showSaveForm = true;
        else
            this.showSaveForm = false;
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
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].deviceInfoKey).then(function (device) {
                    _this.loadFavoriteList(device.email);
                });
            });
        });
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].deviceInfoKey).then(function (device) {
            if (typeof device !== 'undefined' && device != null)
                _this.loadFavoriteList(device.email);
        });
    };
    FavoritesPage.prototype.loadFavoriteList = function (email) {
        var _this = this;
        var formData = new FormData();
        //formData.append('uuid', uuid);
        formData.append('type', 'get');
        formData.append('email', email);
        if (this.isDeviceOnline) {
            this.showLoadingListing = true;
            this.apiService.runPost('favorites.php', formData).then(function (result) {
                _this.showLoadingListing = false;
                _this.responseData = result;
                _this.favoritesList = _this.responseData.favorites;
            }, function (err) {
                _this.showLoadingListing = false;
                console.log(err);
            });
        }
    };
    FavoritesPage.prototype.dismiss = function (event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.viewCtrl.dismiss();
    };
    FavoritesPage.prototype.delete = function (event, id) {
        var _this = this;
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        var formData = new FormData();
        //formData.append('uuid', uuid);
        formData.append('type', 'del');
        formData.append('id', id);
        this.apiService.runPost('favorites.php', formData).then(function (result) {
            _this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].deviceInfoKey).then(function (device) {
                _this.loadFavoriteList(device.email);
            });
        });
    };
    FavoritesPage.prototype.showProgram = function (id, name, program1, program2, program3, program4) {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
            _this.translateService.getTranslation(lang).subscribe(function (value) {
                var program_1 = (program1 == 'E-SMOG' ? program1 : value[program1]);
                var program_2 = (program2 == 'E-SMOG' ? program2 : value[program2]);
                var program_3 = (program3 == 'E-SMOG' ? program3 : value[program3]);
                var program_4 = (program4 == 'E-SMOG' ? program4 : value[program4]);
                var alert = _this.alertCtrl.create({
                    title: 'Rutina - ' + name,
                    message: program_1 + '\n' + program_2 + '\n' + program_3 + '\n' + program_4,
                    buttons: [
                        {
                            text: value['choose'],
                            handler: function (data) {
                                _this.events.publish('addProgramsEvent', { name: program1 }, { name: program2 }, { name: program3 }, { name: program4 });
                            }
                        }
                    ]
                });
                alert.present();
                // Mostrar texto en label debajo del boton
            });
        });
    };
    FavoritesPage.prototype.attemptSaveFavorite = function () {
        var _this = this;
        this.response_text = '';
        this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].deviceInfoKey).then(function (device) {
            var formData = new FormData();
            formData.append('type', 'new');
            formData.append('email', device.email);
            formData.append('name', _this.saveRoutineForm.value.name);
            formData.append('program1', _this.program1);
            formData.append('program2', _this.program2);
            formData.append('program3', _this.program3);
            formData.append('program4', _this.program4);
            _this.apiService.runPost('favorites.php', formData).then(function (result) {
                _this.responseData = result;
                if (_this.responseData.status == 'ok') {
                    _this.showSaveForm = false;
                    _this.favoritesList = _this.responseData.favorites;
                }
            });
        });
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\favorites\favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ \'favorite-routines\' | translate }}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">{{ \'back\' | translate }}</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">{{ \'offline-device-text\' | translate }}</ion-item>\n</ion-header>\n\n<ion-content>\n  <div padding *ngIf="showSaveForm">\n    <div text-center text-uppercase>{{ \'add-favorites\' | translate }}</div>\n    <form [formGroup]="saveRoutineForm" (ngSubmit)="attemptSaveFavorite()">\n      <ion-list>\n        <ion-item class="item-input contact">\n          <ion-input type="text" placeholder="{{ \'name-text\' | translate }}" formControlName="name" padding></ion-input>\n        </ion-item>\n        <ion-item>\n          <p>{{ program1 | translate }}</p>\n          <p>{{ program2 | translate }}</p>\n          <p>{{ program3 | translate }}</p>\n          <p>{{ program4 | translate  }}</p>\n        </ion-item>\n        <ion-item>\n          <button type="submit" ion-button item-left [disabled]="!saveRoutineForm.valid" class="button-contact button-calm">{{ \'button-save\' | translate }}</button>\n          <button ion-button icon-only item-end (click)="dismiss($event)" class="button-contact button-calm">\n            <span ion-text color="primary" showWhen="ios">Cancel</span>\n            <span ion-text showWhen="android,windows">Cancel</span>\n          </button>\n        </ion-item>\n      </ion-list>\n    </form>\n  </div>\n  <div padding-top>\n    <div text-center text-uppercase>{{ \'my-favorites\' | translate }}</div>\n    <div *ngIf="showLoadingListing" text-center>{{ \'loading\' | translate }}...</div>\n    <div *ngIf="!isDeviceOnline" text-center>{{ \'connect-favorites-text\' | translate }}...</div>\n    <ion-item *ngFor="let item of favoritesList" (click)="showProgram(item.id, item.name, item.program1, item.program2, item.program3, item.program4)">\n      {{item.name}}\n      <button ion-button icon-only item-end (click)="delete($event, item.id)">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-item>\n  </div>\n</ion-content>'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\favorites\favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_routines_routines__["a" /* RoutinesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__["a" /* APIServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutinesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offline_data__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/*
  Generated class for the RoutinesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RoutinesProvider = (function () {
    function RoutinesProvider(storage) {
        this.storage = storage;
        console.log('Hello RoutinesProvider Provider');
    }
    RoutinesProvider.prototype.setProgram = function (index, prog) {
        switch (index) {
            case 1:
                this.program1 = prog;
                break;
            case 2:
                this.program2 = prog;
                break;
            case 3:
                this.program3 = prog;
                break;
            case 4:
                this.program4 = prog;
                break;
        }
    };
    RoutinesProvider.prototype.cleanPrograms = function () {
        this.program1 = null;
        this.program2 = null;
        this.program3 = null;
        this.program4 = null;
    };
    RoutinesProvider.prototype.setPrograms = function (prog1, prog2, prog3, prog4) {
        this.program1 = prog1;
        this.program2 = prog2;
        this.program3 = prog3;
        this.program4 = prog4;
    };
    RoutinesProvider.prototype.getPrograms = function () {
        return [this.program1, this.program2, this.program3, this.program4];
    };
    RoutinesProvider.prototype.getKey = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RoutinesProvider.prototype.addPrograms = function (routineName, program1, program2, program3, program4) {
        var objProgram1 = this.getProgram(program1);
        var objProgram2 = this.getProgram(program2);
        var objProgram3 = this.getProgram(program3);
        var objProgram4 = this.getProgram(program4);
        this.insertPreSetProgram(routineName, objProgram1, objProgram2, objProgram3, objProgram4);
        this.setPrograms(objProgram1.name, objProgram2.name, objProgram3.name, objProgram4.name);
        return [objProgram1.name, objProgram2.name, objProgram3.name, objProgram4.name];
    };
    RoutinesProvider.prototype.getProgram = function (name) {
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs.length; i++) {
            var program = __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs[i];
            if (program.apiName == name || program.name == name.name || program.name == name)
                return program;
        }
    };
    RoutinesProvider.prototype.insertPreSetProgram = function (routineName, program1, program2, program3, program4) {
        this.storage.set('MyMat_routineName', routineName);
        this.addProgramToRoutine(1, "", program1.name, program1.runningtime, program1.apiName);
        this.addProgramToRoutine(2, "", program2.name, program2.runningtime, program2.apiName);
        this.addProgramToRoutine(3, "", program3.name, program3.runningtime, program3.apiName);
        this.addProgramToRoutine(4, "", program4.name, program4.runningtime, program4.apiName);
    };
    RoutinesProvider.prototype.addProgramToRoutine = function (currentBubbleSlot, idProgram, programName, programRunningTime, apiName) {
        if (currentBubbleSlot == 1) {
            this.storage.set('MyMat_bubbleRoutineProgram1', idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName);
        }
        else if (currentBubbleSlot == 2) {
            this.storage.set('MyMat_bubbleRoutineProgram2', idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName);
        }
        else if (currentBubbleSlot == 3) {
            this.storage.set('MyMat_bubbleRoutineProgram3', idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName);
        }
        else if (currentBubbleSlot == 4) {
            this.storage.set('MyMat_bubbleRoutineProgram4', idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName);
        }
    };
    RoutinesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], RoutinesProvider);
    return RoutinesProvider;
}());

//# sourceMappingURL=routines.js.map

/***/ })

},[267]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9zbGlkZXIvc2xpZGVyLnRzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5IiwiLi4vLi4vc3JjIGxhenkiLCIuLi8uLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3N1YnNjcmliZS9zdWJzY3JpYmUudHMiLCIuLi8uLi9zcmMvc2VydmljZXMvb2ZmbGluZV9kYXRhLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3Byb2dyYW1zL3Byb2dyYW1zLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3Byb2dyYW0vcHJvZ3JhbS50cyIsIi4uLy4uL3NyYy9wYWdlcy93aWZpL3dpZmkudHMiLCIuLi8uLi9zcmMvcGFnZXMvcGxheWluZy9wbGF5aW5nLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2hlbHAvaGVscC50cyIsIi4uLy4uL3NyYy9wYWdlcy9jb250YWN0L2NvbnRhY3QudHMiLCIuLi8uLi9zcmMvYXBwL21haW4udHMiLCIuLi8uLi9zcmMvc2VydmljZXMvY29uc3RhbnRzLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLi4vLi4vc3JjL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZS50cyIsIi4uLy4uL3NyYy9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLnRzIiwiLi4vLi4vc3JjL3Byb3ZpZGVycy9yb3V0aW5lcy9yb3V0aW5lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDWTtBQUN4QjtBQUNjO0FBQ0Y7QUFDWjtBQUN6Qzs7Ozs7R0FLRztBQU1IO0lBS0Usb0JBQW1CLE9BQXNCLEVBQVMsU0FBb0IsRUFBUyxHQUFhLEVBQVMsT0FBZ0IsRUFBUyxnQkFBa0M7UUFBN0ksWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFTLGNBQVMsR0FBVCxTQUFT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QyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixLQUFLLENBQUM7WUFDUixLQUFLLElBQUk7Z0JBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxJQUFJO2dCQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQztZQUNSLEtBQUssSUFBSTtnQkFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixL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LEVBQUUsU0FBUyxHQUFHLEdBQUcsR0FBRyxXQUFXLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUM5SCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsU0FBUyxHQUFHLEdBQUcsR0FBRyxXQUFXLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUM5SCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsU0FBUyxHQUFHLEdBQUcsR0FBRyxXQUFXLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUM5SCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsU0FBUyxHQUFHLEdBQUcsR0FBRyxXQUFXLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUM5SCxDQUFDO0lBQ0wsQ0FBQztJQXpGUSxnQkFBZ0I7UUFENUIseUVBQVUsRUFBRTt5Q0FPaUIsK0RBQU87T0FOeEIsZ0JBQWdCLENBMEY1QjtJQUFELHVCQUFDO0NBQUE7QUExRjRCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBTbGlkZXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgU2xpZGVyUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyUGFnZSB7XG4gIHB1YmxpYyBzaG93SGVhZGVyIDogYm9vbGVhbjtcbiAgQFZpZXdDaGlsZCgnc2xpZGVzJykgc2xpZGVzOiBTbGlkZXM7XG4gIHB1YmxpYyBpbWFnZXMgOiBBcnJheTxzdHJpbmc+O1xuICBwdWJsaWMgY3VsdHVyZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwdWJsaWMgcGx0OiBQbGF0Zm9ybSwgcHVibGljIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5zaG93SGVhZGVyID0gZmFsc2U7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuY3VsdHVyZSA9IHZhbHVlWydjdWx0dXJlJ107XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8PSA1OyBpKyspe1xuICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goJy4vYXNzZXRzL2ltZ3MvaW5zdHJ1Y3Rpb25zLycgKyB0aGlzLmN1bHR1cmUgKyAnLycrIGkgKycucG5nJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2tpcEluc3RydWN0aW9ucygpe1xuICAgIHRoaXMubmF2Q3RybC5wb3BUb1Jvb3QoKTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgdGhpcy5zbGlkZXMuc2xpZGVOZXh0KCk7XG4gIH1cblxuICBwcmV2KCkge1xuICAgIHRoaXMuc2xpZGVzLnNsaWRlUHJldigpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvc2xpZGVyL3NsaWRlci50cyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDE0NztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eVxuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDE5MTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYyBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgRXZlbnRzLCBNb2RhbENvbnRyb2xsZXIsIENvbnRlbnQgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVQYWdlIH0gZnJvbSAnLi4vc3Vic2NyaWJlL3N1YnNjcmliZSc7XG5pbXBvcnQgeyBSb3V0aW5lc1Byb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3JvdXRpbmVzL3JvdXRpbmVzJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IERldmljZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV2aWNlJztcbmltcG9ydCB7IEFQSVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBQcm9ncmFtc1BhZ2UgfSBmcm9tICcuLi9wcm9ncmFtcy9wcm9ncmFtcyc7XG5pbXBvcnQgeyBXaWZpUGFnZSB9IGZyb20gJy4uL3dpZmkvd2lmaSc7XG5pbXBvcnQgeyBGYXZvcml0ZXNQYWdlIH0gZnJvbSAnLi4vZmF2b3JpdGVzL2Zhdm9yaXRlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIHtcbiAgQFZpZXdDaGlsZChDb250ZW50KSBjb250ZW50OiBDb250ZW50O1xuICBwdWJsaWMgYnViYmxlc05hbWVzMSA6IHN0cmluZztcbiAgcHVibGljIGJ1YmJsZXNOYW1lczIgOiBzdHJpbmc7XG4gIHB1YmxpYyBidWJibGVzTmFtZXMzIDogc3RyaW5nO1xuICBwdWJsaWMgYnViYmxlc05hbWVzNCA6IHN0cmluZztcbiAgcHVibGljIEVuYWJsZVJ1blJvdXRpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0N1cnJlbnRTdGF0ZTEgOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0N1cnJlbnRTdGF0ZTIgOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0N1cnJlbnRTdGF0ZTMgOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0N1cnJlbnRTdGF0ZTQgOiBib29sZWFuO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgb2ZmbGluZV9kZXZpY2UgOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93QWRkRmF2b3JpdGVCdXR0b24gOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93TGF0ZXN0U2VjdGlvbjogYm9vbGVhbjtcbiAgcHVibGljIGxhdGVzdFJvdXRpbmVzIDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyByb3V0aW5lczogUm91dGluZXNQcm92aWRlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHVibGljIGV2ZW50czogRXZlbnRzLCBwcml2YXRlIGRldmljZTogRGV2aWNlLCBwdWJsaWMgYXBpU2VydmljZSA6IEFQSVNlcnZpY2VQcm92aWRlciwgcHVibGljIG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyKSB7XG4gICAgLy90aGlzLmNoZWNrQWxsQnViYmxlcygpO1xuICAgIHRoaXMuZXZlbnRzLnN1YnNjcmliZSgnc2hhcmVzQnViYmxlcycsIChidWJibGVzKSA9PiB7XG4gICAgICBmb3IodmFyIGkgPSAxOyBpIDw9IGJ1YmJsZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoaSwgYnViYmxlc1tpIC0gMV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5BbGxCdWJibGVzQ2hlY2tlZCh0aGlzLnJvdXRpbmVzLmdldFByb2dyYW1zKCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ldmVudHMuc3Vic2NyaWJlKCdhZGRQcm9ncmFtc0V2ZW50JywgKHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMsIHByb2dyYW00KSA9PiB7XG4gICAgICB0aGlzLm5hdkN0cmwucG9wKCk7XG4gICAgICBjb25zb2xlLmxvZyhwcm9ncmFtMSk7XG4gICAgICBsZXQgYnViYmxlcyA9IHRoaXMucm91dGluZXMuYWRkUHJvZ3JhbXMoJycsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMsIHByb2dyYW00KTtcbiAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJzaGFyZXNCdWJibGVzXCIsIGJ1YmJsZXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ldmVudHMuc3Vic2NyaWJlKCdzd2l0Y2hMYW5nRXZlbnQnLChsYW5nKSA9PiB7XG4gICAgICAgIC8vY2FsbCBtZXRob2RzIHRvIHJlZnJlc2ggY29udGVudFxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZywgbGFuZylcbiAgICAgICAgdGhpcy5jaGVja0FsbEJ1YmJsZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLkFsbEJ1YmJsZXNDaGVja2VkKHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbXMoKSk7XG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vdGhpcy5uYXZDdHJsLnB1c2goU3Vic2NyaWJlUGFnZSwgeyBjYWxsQmFja1BhZ2UgOiAnbm9uZScgfSk7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuZGV2aWNlSW5mb0tleSkudGhlbigoaW5mbyk9PntcbiAgICAgIGlmKHR5cGVvZiBpbmZvID09PSAndW5kZWZpbmVkJyB8fCBpbmZvID09IG51bGwpe1xuICAgICAgICAvKmlmKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnY29yZG92YScpKXsqL1xuICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgIHZhciBfdXVpZCA9IENvbnN0YW50cy50ZXN0X3V1aWQ7XG4gICAgICAgICAgaWYod2luZG93Lmhhc093blByb3BlcnR5KCdjb3Jkb3ZhJykpe1xuICAgICAgICAgICAgX3V1aWQgPSB0aGlzLmRldmljZS51dWlkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3V1aWQnLCBfdXVpZCk7XG5cbiAgICAgICAgICB0aGlzLmFwaVNlcnZpY2UucnVuUG9zdCgnY2hlY2tfZGV2aWNlLnBocCcsZm9ybURhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2hlY2tfZGV2aWNlIHN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9iaiA6IGFueSA9IHJlc3VsdDtcbiAgICAgICAgICAgIGlmIChvYmouZm91bmQgPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgLy8gZGVzcGxpZWdhIGxhIHZpc3RhIGRlIGluc2VyY2lvbiBkZSBkYXRvc1xuICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwucHVzaChTdWJzY3JpYmVQYWdlLCB7IGNhbGxCYWNrUGFnZSA6ICdub25lJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXksIHsgXCJlbWFpbFwiIDogb2JqLmVtYWlsLCBcInV1aWRcIiA6IF91dWlkIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NoZWNrX2RldmljZSBlcnJvciAnICsgcmVzdWx0KTtcbiAgICAgICAgICAgIC8vdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgICAgICAgLyp0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZmxpbmVfZGV2aWNlID0gdmFsdWVbJ29mZmxpbmUtZGV2aWNlLXRleHQtMiddO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pOyovXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8qfSovXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRQcm9ncmFtcyhyb3V0aW5lTmFtZSwgcHJvZ3JhbTAsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMpe1xuICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ2FkZFByb2dyYW1zRXZlbnQnLCBwcm9ncmFtMCwgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMyk7XG4gICAgdGhpcy5jb250ZW50LnNjcm9sbFRvKDAsIDAsIDEwMCk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5sYXRlc3RSb3V0aW5lc0tleSkudGhlbigobGF0ZXN0cyk9PntcbiAgICAgIGlmKGxhdGVzdHMpe1xuICAgICAgICB0aGlzLnNob3dMYXRlc3RTZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYXRlc3RSb3V0aW5lcyA9IGxhdGVzdHM7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGlzLnNob3dMYXRlc3RTZWN0aW9uID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvcGVuQWRkRmF2b3JpdGUoKXtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChpbmZvKT0+e1xuICAgICAgaWYodHlwZW9mIGluZm8gPT09ICd1bmRlZmluZWQnIHx8IGluZm8gPT0gbnVsbCl7XG4gICAgICAgIC8vIGRlc3BsaWVnYSBsYSB2aXN0YSBkZSBpbnNlcmNpb24gZGUgZGF0b3NcbiAgICAgICAgdGhpcy5uYXZDdHJsLnB1c2goU3Vic2NyaWJlUGFnZSwgeyBjYWxsQmFja1BhZ2UgOiAnZmF2b3JpdGVzJyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcm9maWxlTW9kYWwgPSB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoRmF2b3JpdGVzUGFnZSwgeyAnc2hvd1NhdmUnOiB0cnVlIH0pO1xuICAgICAgICBwcm9maWxlTW9kYWwucHJlc2VudCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlUHJvZ3JhbUZyb21Sb3V0aW5lKHByZyl7XG4gICAgY29uc29sZS5sb2coJ2hvbGQ6ICcgKyBwcmcpO1xuICB9XG5cbiAgc2VsZWN0QnViYmxlKHByZywgYWRkKXtcbiAgICB0aGlzLm5hdkN0cmwucHVzaChQcm9ncmFtc1BhZ2UsIHsgYnViYmxlOiBwcmcgfSk7XG4gIH1cblxuICBydW5Sb3V0aW5lKCl7XG4gICAgdmFyIHByb2dyYW1zID0gdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpO1xuICAgIGlmKHRoaXMuQWxsQnViYmxlc0NoZWNrZWQocHJvZ3JhbXMpKXtcbiAgICAgIHRoaXMubmF2Q3RybC5wdXNoKFxuICAgICAgICBXaWZpUGFnZSxcbiAgICAgICAgeyBwcm9nMTogdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtKHByb2dyYW1zWzBdKSwgcHJvZzI6IHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbShwcm9ncmFtc1sxXSksIHByb2czOiB0aGlzLnJvdXRpbmVzLmdldFByb2dyYW0ocHJvZ3JhbXNbMl0pLCBwcm9nNDogdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtKHByb2dyYW1zWzNdKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBBbGxCdWJibGVzQ2hlY2tlZChwcm9ncmFtcyl7XG5cbiAgICBpZih0eXBlb2YgcHJvZ3JhbXNbMF0gIT09ICd1bmRlZmluZWQnICYmIHByb2dyYW1zWzBdICE9IG51bGwgJiYgcHJvZ3JhbXNbMF0ubGVuZ3RoID4gMCAmJlxuICAgIHR5cGVvZiBwcm9ncmFtc1sxXSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvZ3JhbXNbMV0gIT0gbnVsbCAmJiBwcm9ncmFtc1sxXS5sZW5ndGggPiAwICYmXG4gICAgdHlwZW9mIHByb2dyYW1zWzJdICE9PSAndW5kZWZpbmVkJyAmJiBwcm9ncmFtc1syXSAhPSBudWxsICYmIHByb2dyYW1zWzJdLmxlbmd0aCA+IDAgJiZcbiAgICB0eXBlb2YgcHJvZ3JhbXNbM10gIT09ICd1bmRlZmluZWQnICYmIHByb2dyYW1zWzNdICE9IG51bGwgJiYgcHJvZ3JhbXNbM10ubGVuZ3RoID4gMCl7XG4gICAgICAgIHRoaXMuRW5hYmxlUnVuUm91dGluZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd0FkZEZhdm9yaXRlQnV0dG9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRoaXMuRW5hYmxlUnVuUm91dGluZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dBZGRGYXZvcml0ZUJ1dHRvbiA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuRW5hYmxlUnVuUm91dGluZTtcbiAgfVxuXG4gIGNsZWFuUm91dGluZSgpe1xuICAgIHRoaXMucm91dGluZXMuY2xlYW5Qcm9ncmFtcygpO1xuICAgIHRoaXMuQWxsQnViYmxlc0NoZWNrZWQodGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMSwnJyk7XG4gICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTIsJycpO1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUzLCcnKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlNCwnJyk7XG4gICAgdGhpcy51cGRhdGVCdWJibGVzKDEsJycpO1xuICAgIHRoaXMudXBkYXRlQnViYmxlcygyLCcnKTtcbiAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoMywnJyk7XG4gICAgdGhpcy51cGRhdGVCdWJibGVzKDQsJycpO1xuICAgIHRoaXMuc2hvd0FkZEZhdm9yaXRlQnV0dG9uID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUJ1YmJsZXMoYnViYmxlLG5hbWUpe1xuICAgIHN3aXRjaChidWJibGUpe1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpZih0eXBlb2YgbmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNDdXJyZW50U3RhdGUxID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PntcbiAgICAgICAgICAgICAgdGhpcy5idWJibGVzTmFtZXMxID0gdHlwZW9mIHZhbHVlW25hbWVdID09PSAndW5kZWZpbmVkJyA/IG5hbWUgOiB2YWx1ZVtuYW1lXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpZih0eXBlb2YgbmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNDdXJyZW50U3RhdGUyID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PntcbiAgICAgICAgICAgICAgdGhpcy5idWJibGVzTmFtZXMyID0gdHlwZW9mIHZhbHVlW25hbWVdID09PSAndW5kZWZpbmVkJyA/IG5hbWUgOiB2YWx1ZVtuYW1lXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMiA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMiA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpZih0eXBlb2YgbmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNDdXJyZW50U3RhdGUzID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PntcbiAgICAgICAgICAgICAgdGhpcy5idWJibGVzTmFtZXMzID0gdHlwZW9mIHZhbHVlW25hbWVdID09PSAndW5kZWZpbmVkJyA/IG5hbWUgOiB2YWx1ZVtuYW1lXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMyA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpZih0eXBlb2YgbmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNDdXJyZW50U3RhdGU0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PntcbiAgICAgICAgICAgICAgdGhpcy5idWJibGVzTmFtZXM0ID0gdHlwZW9mIHZhbHVlW25hbWVdID09PSAndW5kZWZpbmVkJyA/IG5hbWUgOiB2YWx1ZVtuYW1lXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlNCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzNCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tBbGxCdWJibGVzKCl7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTEpLnRoZW4oKHZhbCk9PntcbiAgICAgIGlmKHZhbCAhPT0gbnVsbCl7XG4gICAgICAgIHZhciBuYW1lID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlcygxLG5hbWUpO1xuICAgICAgICB0aGlzLnJvdXRpbmVzLnNldFByb2dyYW0oMSxuYW1lKVxuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHZhciBlbWFpbERhdGEgPSB7IGFyZWEgOiAnY2hlY2tBbGxCdWJibGVzIDEnLCBtZXNzYWdlIDogZXJyIH07XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2VuZEVycm9yKGVtYWlsRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUyKS50aGVuKCh2YWwpPT57XG4gICAgICBpZih2YWwgIT09IG51bGwpe1xuICAgICAgICB2YXIgbmFtZSA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoMixuYW1lKTtcbiAgICAgICAgdGhpcy5yb3V0aW5lcy5zZXRQcm9ncmFtKDIsbmFtZSlcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB2YXIgZW1haWxEYXRhID0geyBhcmVhIDogJ2NoZWNrQWxsQnViYmxlcyAyJywgbWVzc2FnZSA6IGVyciB9O1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRFcnJvcihlbWFpbERhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMykudGhlbigodmFsKT0+e1xuICAgICAgaWYodmFsICE9PSBudWxsKXtcbiAgICAgICAgdmFyIG5hbWUgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzKDMsbmFtZSk7XG4gICAgICAgIHRoaXMucm91dGluZXMuc2V0UHJvZ3JhbSgzLG5hbWUpXG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdmFyIGVtYWlsRGF0YSA9IHsgYXJlYSA6ICdjaGVja0FsbEJ1YmJsZXMgMycsIG1lc3NhZ2UgOiBlcnIgfTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZW5kRXJyb3IoZW1haWxEYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTQpLnRoZW4oKHZhbCk9PntcbiAgICAgIGlmKHZhbCAhPT0gbnVsbCl7XG4gICAgICAgIHZhciBuYW1lID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlcyg0LG5hbWUpO1xuICAgICAgICB0aGlzLnJvdXRpbmVzLnNldFByb2dyYW0oNCxuYW1lKVxuICAgICAgfVxuICAgICAgdGhpcy5BbGxCdWJibGVzQ2hlY2tlZCh0aGlzLnJvdXRpbmVzLmdldFByb2dyYW1zKCkpXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdmFyIGVtYWlsRGF0YSA9IHsgYXJlYSA6ICdjaGVja0FsbEJ1YmJsZXMgNCcsIG1lc3NhZ2UgOiBlcnIgfTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZW5kRXJyb3IoZW1haWxEYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2UnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEFQSVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgU2xpZGVyUGFnZSB9IGZyb20gJy4uL3NsaWRlci9zbGlkZXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBGYXZvcml0ZXNQYWdlIH0gZnJvbSAnLi4vZmF2b3JpdGVzL2Zhdm9yaXRlcyc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgU3Vic2NyaWJlUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zdWJzY3JpYmUnLFxuICB0ZW1wbGF0ZVVybDogJ3N1YnNjcmliZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlUGFnZSB7XG4gIHByaXZhdGUgbWF4RGF0ZU9mUGlja2VyIDogc3RyaW5nO1xuICBwcml2YXRlIHN1YnNjcmliZUZvcm0gOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBzaG93U3VibWl0QnV0dG9uIDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBtYXhEYXRlIDogc3RyaW5nO1xuICBwcml2YXRlIHJlc3BvbnNlX3RleHQgOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwcml2YXRlIGNhbGxCYWNrUGFnZSA6IHN0cmluZztcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIGVycm9yTmFtZUNsYXNzIDogc3RyaW5nO1xuICBwdWJsaWMgZXJyb3JFbWFpbENsYXNzIDogc3RyaW5nO1xuICBwdWJsaWMgZXJyb3JHZW5kZXJDbGFzcyA6IHN0cmluZztcbiAgcHVibGljIGVycm9yRGF0ZUNsYXNzIDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQVBJU2VydmljZVByb3ZpZGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBkZXZpY2U6IERldmljZSwgcHJpdmF0ZSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmspIHtcbiAgICAgIC8vIG9idGllbmUgZWwgcGFyYW1ldHJvIGRlIHF1ZSBwYWdlIHZhIGEgY29ycmVyIGFsIHRlcm1pbmFyIGVsIHJlZ2lzdHJvXG4gICAgICB0aGlzLmNhbGxCYWNrUGFnZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnY2FsbEJhY2tQYWdlJyk7XG4gICAgICB0aGlzLnNob3dTdWJtaXRCdXR0b24gPSB0cnVlO1xuICAgICAgbGV0IGFEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIHRoaXMubWF4RGF0ZU9mUGlja2VyID0gdGhpcy5tYXhEYXRlID0gYURhdGUudG9JU09TdHJpbmcoKTtcblxuICAgICAgdGhpcy5zdWJzY3JpYmVGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBnZW5kZXI6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIGJpcnRoRGF0ZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgfSk7XG4gICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIFN1YnNjcmliZVBhZ2UnKTtcbiAgfVxuXG4gIGF0dGVtcHRTdWJzY3JpYmUoKXtcbiAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSAnJztcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCB0aGlzLnN1YnNjcmliZUZvcm0udmFsdWUuZW1haWwpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMuc3Vic2NyaWJlRm9ybS52YWx1ZS5uYW1lKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2JpcnRoRGF0ZScsIHRoaXMuc3Vic2NyaWJlRm9ybS52YWx1ZS5iaXJ0aERhdGUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZ2VuZGVyJywgdGhpcy5zdWJzY3JpYmVGb3JtLnZhbHVlLmdlbmRlcik7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdpc1VwZGF0ZScsICdmYWxzZScpO1xuICAgIGlmKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnY29yZG92YScpKXtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXVpZCcsIHRoaXMuZGV2aWNlLnV1aWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXVpZCcsIENvbnN0YW50cy50ZXN0X3V1aWQpO1xuICAgIH1cblxuICAgIHRoaXMuYXBpU2VydmljZS5ydW5Qb3N0KCdzdWJzY3JpYmUucGhwJyxmb3JtRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgIGlmKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSAnb2snKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXksIHsndXVpZCc6IHRoaXMucmVzcG9uc2VEYXRhLnV1aWQsICdlbWFpbCc6IHRoaXMuc3Vic2NyaWJlRm9ybS52YWx1ZS5lbWFpbCB9KTtcbiAgICAgICAgdGhpcy5zaG93U3VibWl0QnV0dG9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSB2YWx1ZVsncHJvZmlsZS1zdWNjZXNzLW1lc3NhZ2UnXTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmKHRoaXMuY2FsbEJhY2tQYWdlID09ICdub25lJyl7XG4gICAgICAgICAgICAgICAgLy8gZGVzcGxpZWdhIGxhIHZpc3RhIGRlIGRlIGluc3RydWNjaW9uZXNcbiAgICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwucHVzaChTbGlkZXJQYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuY2FsbEJhY2tQYWdlID09ICdmYXZvcml0ZXMnKXtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwucG9wKCk7XG4gICAgICAgICAgICAgICAgbGV0IHByb2ZpbGVNb2RhbCA9IHRoaXMubW9kYWxDdHJsLmNyZWF0ZShGYXZvcml0ZXNQYWdlLCB7ICdzaG93U2F2ZSc6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgcHJvZmlsZU1vZGFsLnByZXNlbnQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNTAwMCk7XG5cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IHZhbHVlWydwcm9maWxlLWVycm9yLW1lc3NhZ2UnXSArICc6ICc7XG4gICAgICAgICAgICBpZih0aGlzLnJlc3BvbnNlRGF0YS5lbWFpbEVycm9yICE9ICdvaycpe1xuICAgICAgICAgICAgICBlcnJvciArPSB0aGlzLnJlc3BvbnNlRGF0YS5lbWFpbEVycm9yO1xuICAgICAgICAgICAgICB0aGlzLmVycm9yRW1haWxDbGFzcyAgPSAnZXJyb3InO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5yZXNwb25zZURhdGEubmFtZUVycm9yICE9ICdvaycpe1xuICAgICAgICAgICAgICBlcnJvciArPSB0aGlzLnJlc3BvbnNlRGF0YS5uYW1lRXJyb3I7XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JOYW1lQ2xhc3MgID0gJ2Vycm9yJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucmVzcG9uc2VEYXRhLmdlbmRlckVycm9yICE9ICdvaycpe1xuICAgICAgICAgICAgICBlcnJvciArPSB0aGlzLnJlc3BvbnNlRGF0YS5nZW5kZXJFcnJvcjtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvckdlbmRlckNsYXNzICA9ICdlcnJvcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLnJlc3BvbnNlRGF0YS5kYXRlT2ZCaXJ0aEVycm9yICE9ICdvaycpe1xuICAgICAgICAgICAgICBlcnJvciArPSB0aGlzLnJlc3BvbnNlRGF0YS5kYXRlT2ZCaXJ0aEVycm9yO1xuICAgICAgICAgICAgICB0aGlzLmVycm9yRGF0ZUNsYXNzICA9ICdlcnJvcic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9IGVycm9yO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIFRPRE86IHBvbmVyIHN1Y2Nlc3MgeSBkZXNwbGVnYXIgcGFnaW5hIHByaW5jaXBhbFxuICAgIH0sIChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9IHZhbHVlWydwcm9maWxlLWVycm9yLW1lc3NhZ2UnXTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3N1YnNjcmliZS9zdWJzY3JpYmUudHMiLCJleHBvcnQgdmFyIERhdGEgPSB7IEdyb3VwcyA6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICBuYW1lOiAncGFpbi1yZWxpZWYtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGFpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlZ2VuZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdpbmp1cnktdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW5qdXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdzdHJlc3MtcmVsaWVmLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdpbW11bmUtc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICBuYW1lOiAncmVzcGlyYXRvcnktc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNpbnVzX0Nhdml0aWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdkZXRveGlmaWNhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnaGVhZGFjaGUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhZGFjaGVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgbmFtZTogJ2dyb3VuZGluZy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWFydGhfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZW5lcmd5LWJvb3N0ZXItdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFeGhhdXN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRyZW5hbF9HbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSkVULUxBRycsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJKZXQtTGFnL0NsaW1hdGVfQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVhcnRoX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdKRVQtTEFHJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkpldC1MYWcvQ2xpbWF0ZV9DaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFeGhhdXN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdjb25jZW50cmF0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbmNlbnRyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaXNjZXJubWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgbmFtZTogJ2RpZ2VzdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNaW5lcmFsX01ldGFib2xpY19BY3Rpdml0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkludGVzdGluYWxfRmxvcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgbmFtZTogJ3Jlc3BpcmF0b3J5LXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgbmFtZTogJ2xvd2VyLWJhY2thY2hlLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJhY2thY2hlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSb290X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICBuYW1lOiAnbmVjay1zaG91bGRlci11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZWNrL1Nob3VsZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkdhbGxibGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdzbGVlcC1lbmhhbmNlci11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTbGVlcF9FbmhhbmNlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdjaGlsZHJlbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaGlsZF9EZXZlbG9wbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdmZW1hbGUtaG9ybW9uYWwtaW1iYWxhbmNlcy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGZW1hbGVfSG9ybW9uZV9CYWxhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgbmFtZTogJ21hbGUtaG9ybW9uYWwtaW1iYWxhbmNlcy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNYWxlX0hvcm1vbmVfQmFsYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgbmFtZTogJ2NvbGQtZmx1LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZsdVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICBuYW1lOiAnY29uc3RpcGF0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbnN0aXBhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJHYWxsYmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxhcmdlX0ludGVzdGluZV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICBuYW1lOiAnZGlhcnJoZWEtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlhcnJoZWFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdlYXItcHJvYmxlbXMtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQXVkaXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICBuYW1lOiAnZXllc2lnaHQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRXllc2lnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdpbnRlc3RpbmFsLWZsdS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRmx1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcclxuICAgICAgICAgICAgbmFtZTogJ2VuZXJneS1ib29zdGVyLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRyZW5hbF9HbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICBuYW1lOiAncmVnZW5lcmF0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlZ2VuZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlZpdGFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICBuYW1lOiAncmVzcGlyYXRvcnktc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTaW51c19DYXZpdGllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRobGV0ZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdpbmp1cnktdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW5qdXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTXVzY2xlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQYWluX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcclxuICAgICAgICAgICAgbmFtZTogJ3BhaW4tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQYWluX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnYmFja2FjaGUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQmFja2FjaGVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZWNrL1Nob3VsZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVmVydGVicmFlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRobGV0ZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtdXNjbGVzLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRobGV0ZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdpbW11bmUtc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgbmFtZTogJ2FudGktYWdpbmctdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQW50aV9BZ2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgbmFtZTogJ3dlaWdodC1jb250cm9sLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkZGljdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiV2VpZ2h0X0NvbnRyb2xcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUcmlwbGVfV2FybWVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgbmFtZTogJ2RldG94aWZpY2F0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNaW5lcmFsX01ldGFib2xpY19BY3Rpdml0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzcGEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnc2tpbi1jb25kaXRpb25zLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbm5lY3RpdmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNraW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzcGEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnaGFpci1ncm93dGgtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGFpcl9Hcm93dGhcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgbmFtZTogJ2xvdy1waHlzaWNhbC1kcml2ZS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMb3dfUGh5c2ljYWxfRHJpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgbmFtZTogJ2xvdy1tZW50YWwtZHJpdmUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxvd19NZW50YWxfRHJpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdzdHJlc3MtcmVsaWVmLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkpveVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0cmVzcyByZWxpZWYnLFxyXG4gICAgICAgICAgICBuYW1lOiAndml0YWxpdHktdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJKb3lcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQm9vc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlZpdGFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdzbGVlcC1lbmhhbmNlci11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2xlZXBfRW5oYW5jZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzdHJlc3MgcmVsaWVmJyxcclxuICAgICAgICAgICAgbmFtZTogJ2VuZXJneS1ib29zdGVyLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQm9vc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkV4aGF1c3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0cmVzcyByZWxpZWYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnaHlwZXJ0ZW5zaW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSHlwZXJ0ZW5zaW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfRnVuY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXHJcbiAgICAgICAgICAgIG5hbWU6ICd0aHlyb2lkLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRoeXJvaWRfR2xhbmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUaHJvYXRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdsb3ctbWVudGFsLWRyaXZlLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMb3dfTWVudGFsX0RyaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZXJ2b3VzX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICBuYW1lOiAncmVnZW5lcmF0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgbmFtZTogJ3ZpdGFsaXR5LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRyZW5hbF9HbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlZpdGFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdqb3ktdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkpveVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1ldGFsX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgbmFtZTogJ3NsZWVwLWVuaGFuY2VyLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTbGVlcF9FbmhhbmNlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdoZWFydC1mdW5jdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGaXJlX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9GdW5jdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRyaXBsZV9XYXJtZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgbmFtZTogJ3Jlc3BpcmF0b3J5LXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTaW51c19DYXZpdGllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgbmFtZTogJ2h5cGVydGVuc2lvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkh5cGVydGVuc2lvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICBuYW1lOiAnZ2x1Y29zZS1tZXRhYm9saWMtZGlzb3JkZXJzLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlYWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2x1Y29zZV9NZXRhYm9saWNfRGlzb3JkZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU3BsZWVuX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICBuYW1lOiAnaGVtb3JyaG9pZHMtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVtb3JyaG9pZHNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25zdGlwYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUm9vdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgbmFtZTogJ3VyaW5hcnktc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlVyaW5hcnlfU3lzdGVtL0N5c3RpdGlzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVXJpbmFyeV9CbGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICBuYW1lOiAnY29sZC1mbHUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZsdVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgbmFtZTogJ3BhaW4tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQYWluX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2NoYWtyYSBiYWxhbmNpbmcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnbG93ZXItY2hha3JhLWJhbGFuY2luZy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSb290X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTb2xhcl9QbGV4dXNfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWFydGhfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjaGFrcmEgYmFsYW5jaW5nJyxcclxuICAgICAgICAgICAgbmFtZTogJ3VwcGVyLWNoYWtyYS1iYWxhbmNpbmctdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVGhyb2F0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ3Jvd25fQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2NoYWtyYSBiYWxhbmNpbmcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnbWVkaXRhdGlvbi1iYXNpY3MtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWVkaXRhdGlvbl8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUm9vdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU29sYXJfUGxleHVzX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjaGFrcmEgYmFsYW5jaW5nJyxcclxuICAgICAgICAgICAgbmFtZTogJ21lZGl0YXRpb24tbWVkaXVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRocm9hdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjaGFrcmEgYmFsYW5jaW5nJyxcclxuICAgICAgICAgICAgbmFtZTogJ21lZGl0YXRpb24tYWR2YW5jZWQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWVkaXRhdGlvbl8zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQnJvd19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDcm93bl9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJKb3lcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZWFydGgtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTdG9tYWNoX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU3BsZWVuX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWFydGhfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdmaXJlLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTbWFsbF9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGaXJlX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZmlyZS1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZpcmVfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtZXRhbC1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNZXRhbF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2tpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgbmFtZTogJ3dhdGVyLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVXJpbmFyeV9CbGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiV2F0ZXJfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIG5hbWU6ICd3b29kLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJHYWxsYmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIldvb2RfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkV5ZXNpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgbmFtZTogJ2xpdmVyLWZ1bmN0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnaGVhcnQtZnVuY3Rpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTbWFsbF9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAna2lkbmV5LWZ1bmN0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlVyaW5hcnlfQmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkV4aGF1c3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnbGFyZ2UtaW50ZXN0aW5lLWJhbGFuY2luZy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdwZXJpY2FyZGl1bS1mbG93LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdzdG9tYWNoLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlN0b21hY2hfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTcGxlZW5fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzcycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdyb3V0aW5lLXBldHMtdXBwZXIxJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyMicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyMycsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHNzJyxcclxuICAgICAgICAgICAgbmFtZTogJ3JvdXRpbmUtcGV0cy11cHBlcjQnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzcycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdyb3V0aW5lLXBldHMtdXBwZXI1JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNraW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbm5lY3RpdmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzcycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdyb3V0aW5lLXBldHMtdXBwZXI2JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzcycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdyb3V0aW5lLXBldHMtdXBwZXI3JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyOCcsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzeCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdyb3V0aW5lLXBldHgtdXBwZXIxJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyMicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyMycsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHN4JyxcclxuICAgICAgICAgICAgbmFtZTogJ3JvdXRpbmUtcGV0eC11cHBlcjQnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzeCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdyb3V0aW5lLXBldHgtdXBwZXI1JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNraW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbm5lY3RpdmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzeCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdyb3V0aW5lLXBldHgtdXBwZXI2JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzeCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdyb3V0aW5lLXBldHgtdXBwZXI3JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyOCcsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgUHJvZ3JhbXMgOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnYWRkaWN0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJBZGRpY3Rpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6MDVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdhZGRpY3Rpb24tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhZHJlbmFsLWdsYW5kLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJBZHJlbmFsX0dsYW5kXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjA3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYWRyZW5hbC1nbGFuZC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2FudGktYWdpbmctdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkFudGlfQWdpbmdcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTE6MDFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdhbnRpLWFnaW5nLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhdWRpdG9yeS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQXVkaXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjMxXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYXVkaXRvcnktZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnYmFja2FjaGUtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkJhY2thY2hlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjMwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYmFja2FjaGUtZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnYm9uZXMtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTowNFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2JvbmVzLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnY2hpbGQtZGV2ZWxvcGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJDaGlsZF9EZXZlbG9wbWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzo1MFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NoaWxkLWRldmVsb3BlbWVudC1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdjaXJjdWxhdG9yeS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTowNlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NpcmN1bGF0b3J5LXN5c3RlbS1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICAnY29uY2VudHJhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29uY2VudHJhdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMToxOVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NvbmNlbnRyYXRpb24tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdjb25uZWN0aXZlLXRpc3N1ZS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29ubmVjdGl2ZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjU0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnY29ubmVjdGl2ZS10aXNzdWUtZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnY29uc3RpcGF0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJDb25zdGlwYXRpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6NDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjb25zdGlwYXRpb24tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdkZXRveGlmaWNhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkZXRveGlmaWNhdGlvbi1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdkaWFycmhlYS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlhcnJoZWFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkaWFycmhlYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2RpZ2VzdGl2ZS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6NDFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkaWdlc3RpdmUtc3lzdGVtLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZGlzY2Vybm1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkRpc2Nlcm5tZW50XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjM3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGlzY2Vybm1lbnQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdlbmVyZ3ktYmFsYW5jaW5nLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjU1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZW5lcmd5LWJhbGFuY2luZy1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdlbmVyZ3ktYm9vc3Rlci11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdlbmVyZ3ktYm9vc3Rlci1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJFLVNNT0dcIixcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6NTFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdlLXNtb2ctZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdleGhhdXN0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJFeGhhdXN0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjU5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZXhoYXVzdGlvbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2V5ZXNpZ2h0LXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJFeWVzaWdodFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjoxMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2V5ZXNpZ2h0LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZmVtYWxlLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJGZW1hbGVfSG9ybW9uZV9CYWxhbmNlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjE3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmVtYWxlLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZmx1LXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJGbHVcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdmbHUtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZ2x1Y29zZS1tZXRhYm9saWMtZGlzb3JkZXJzLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJHbHVjb3NlX01ldGFib2xpY19EaXNvcmRlcnNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MjhcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdnbHVjb3NlLW1ldGFib2xpYy1kaXNvcmRlcnMtZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnaGFpci1ncm93dGgtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkhhaXJfR3Jvd3RoXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE5OjA3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaGFpci1ncm93dGgtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdoZWFkYWNoZS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhZGFjaGVcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTg6MzhcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdoZWFkYWNoZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2hlYXJ0LWZ1bmN0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9GdW5jdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzozMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2hlYXJ0LWZ1bmN0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2hlbW9ycmhvaWRzLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJIZW1vcnJob2lkc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMToxM1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2hlbW9ycmhvaWRzLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnaHlwZXJ0ZW5zaW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJIeXBlcnRlbnNpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTg6NTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdoeXBlcnRlbnNpb24tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdpbW11bmUtc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjUwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaW1tdW5lLXN5c3RlbS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2luanVyeS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSW5qdXJ5XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjQ2XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaW5qdXJ5LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnaW50ZXN0aW5hbC1mbG9yYS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxODo1OFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ludGVzdGluYWwtZmxvcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdqb2ludHMtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkpvaW50c1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzowN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2pvaW50cy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2pveS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSm95XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIxOjA0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnam95LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkpFVC1MQUdcIixcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJKZXQtTGFnL0NsaW1hdGVfQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjE0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnamV0LWxhZy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2xvdy1tZW50YWwtZHJpdmUtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkxvd19NZW50YWxfRHJpdmVcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6NDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdsb3ctbWVudGFsLWRyaXZlLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnbG93LXBoeXNpY2FsLWRyaXZlLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJMb3dfUGh5c2ljYWxfRHJpdmVcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6NDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdsb3ctcGh5c2ljYWwtZHJpdmUtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdseW1waGF0aWMtc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjA0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbHltcGhhdGljLXN5c3RlbS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ21hbGUtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk1hbGVfSG9ybW9uZV9CYWxhbmNlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEyOjMxXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbWFsZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ21lZGl0YXRpb24tMS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTWVkaXRhdGlvbl8xXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjMzOjE1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbWVkaXRhdGlvbi0xLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnbWVkaXRhdGlvbi0yLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJNZWRpdGF0aW9uXzJcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMjk6NDNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtZWRpdGF0aW9uLTItZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdtZWRpdGF0aW9uLTMtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fM1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMjo0OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21lZGl0YXRpb24tMy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ21pbmVyYWwtbWV0YWJvbGljLWFjdGl2aXR5LXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJNaW5lcmFsX01ldGFib2xpY19BY3Rpdml0eVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzoyNVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21pbmVyYWwtbWV0YWJvbGljLWFjdGl2aXR5LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnbXVzY2xlLXRpc3N1ZS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTXVzY2xlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6NTlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtdXNjbGUtdGlzc3VlLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnbmVjay1zaG91bGRlci11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVjay9TaG91bGRlclwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjoxNlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ25lY2stc2hvdWxkZXItZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICduZXJ2b3VzLXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTk6MTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICduZXJ2b3VzLXN5c3RlbS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3BlYWNlLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMjowOFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3BlYWNlLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncGFpbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUGFpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjE4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAncGFpbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3JlZ2VuZXJhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjEyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAncmVnZW5lcmF0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncmVsYXhhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxOTo1NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3JlbGF4YXRpb24tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTo1MlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3Jlc3BpcmF0b3J5LXN5c3RlbS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3NpbnVzLWNhdml0aWVzLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJTaW51c19DYXZpdGllc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTozM1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3NpbnVzLWNhdml0aWVzLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnc2tpbi1jb25kaXRpb25zLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJTa2luX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6NTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdza2luLWNvbmRpdGlvbnMtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdzbGVlcC1lbmhhbmNlci11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU2xlZXBfRW5oYW5jZXJcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTk6NThcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzbGVlcC1lbmhhbmNlci1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3N0cmVzcy1yZWxpZWYtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjU1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc3RyZXNzLXJlbGllZi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3RoeXJvaWQtZ2xhbmRzLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJUaHlyb2lkX0dsYW5kc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzo1M1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3RoeXJvaWQtZ2xhbmRzLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3VyaW5hcnktdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlVyaW5hcnlfU3lzdGVtL0N5c3RpdGlzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjM5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAndXJpbmFyeS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd2ZXJ0ZWJyYWUtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlZlcnRlYnJhZVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMjo1M1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3ZlcnRlYnJhZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3ZpdGFsaXR5LXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJWaXRhbGl0eVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDowMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3ZpdGFsaXR5LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnd2VpZ2h0LWNvbnRyb2wtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIldlaWdodF9Db250cm9sXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjUwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnd2VpZ2h0LWNvbnRyb2wtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwZXRzcy1wcm9ncmFtLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdwZXRzJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMTo1MFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3BldHNzLXByb2dyYW0tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwZXRzeC1wcm9ncmFtLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdwZXRzJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMjo1MFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3BldHN4LXByb2dyYW0tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdzdG9tYWNoLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdtZXJpZGlhbicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU3RvbWFjaF9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzoxNVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3N0b21hY2gtbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdzcGxlZW4tcGFuY3JlYXMtbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ21lcmlkaWFuJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJTcGxlZW5fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6MzdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzcGxlZW4tcGFuY3JlYXMtbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdoZWFydC1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbWVyaWRpYW4nLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjQ1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaGVhcnQtbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdzbWFsbC1pbnRlc3RpbmUtbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ21lcmlkaWFuJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJTbWFsbF9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6MjVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzbWFsbC1pbnRlc3RpbmUtbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwZXJpY2FyZGl1bS1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbWVyaWRpYW4nLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIxOjU1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAncGVyaWNhcmRpdW0tbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0cmlwbGUtd2FybWVyLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdtZXJpZGlhbicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzoyMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3RyaXBsZS13YXJtZXItbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdsdW5nLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdtZXJpZGlhbicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjozOFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2x1bmctbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdsYXJnZS1pbnRlc3RpbmUtbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ21lcmlkaWFuJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdsYXJnZS1pbnRlc3RpbmUtbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdraWRuZXktbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ21lcmlkaWFuJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MjdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdraWRuZXktbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd1cmluYXJ5LWJsYWRkZXItbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ21lcmlkaWFuJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJVcmluYXJ5X0JsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6MTlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd1cmluYXJ5LWJsYWRkZXItbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdsaXZlci1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbWVyaWRpYW4nLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjExXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbGl2ZXItbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdnYWxsYmxhZGRlci1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbWVyaWRpYW4nLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkdhbGxibGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIwOjM5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZ2FsbGJsYWRkZXItbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZmlyc3QtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnY2hha3JhJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJSb290X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTo0OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzEtY2hha3JhLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNlY29uZC1jaGFrcmEtdXBwZXJcIixcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdjaGFrcmEnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcyLWNoYWtyYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJ0aGlyZC1jaGFrcmEtdXBwZXJcIixcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdjaGFrcmEnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6NTFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICczLWNoYWtyYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb3VydGgtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnY2hha3JhJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTg6MTZcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICc0LWNoYWtyYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJmaWZ0aC1jaGFrcmEtdXBwZXJcIixcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdjaGFrcmEnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlRocm9hdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6NTlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICc1LWNoYWtyYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJzaXh0aC1jaGFrcmEtdXBwZXJcIixcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdjaGFrcmEnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjEzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNi1jaGFrcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2V2ZW50aC1jaGFrcmEtdXBwZXJcIixcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdjaGFrcmEnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkNyb3duX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzo0NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzctY2hha3JhLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZWFydGgtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnZWxlbWVudCcsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRWFydGhfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjo1NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2VhcnRoLWVsZW1lbnQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd3YXRlci1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdlbGVtZW50JyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJXYXRlcl9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjIwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnd2F0ZXItZWxlbWVudC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2ZpcmUtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnZWxlbWVudCcsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRmlyZV9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjA1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmlyZS1lbGVtZW50LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnbWV0YWwtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnZWxlbWVudCcsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTWV0YWxfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMjozOVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21ldGFsLWVsZW1lbnQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd3b29kLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ2VsZW1lbnQnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIldvb2RfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzowOVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3dvb2QtZWxlbWVudC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL29mZmxpbmVfZGF0YS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIEV2ZW50cywgQ29udGVudCB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29mZmxpbmVfZGF0YSc7XG5pbXBvcnQgeyBSb3V0aW5lc1Byb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3JvdXRpbmVzL3JvdXRpbmVzJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQcm9ncmFtUGFnZSB9IGZyb20gJy4uL3Byb2dyYW0vcHJvZ3JhbSc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgU3Bpbm5lckRpYWxvZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3Bpbm5lci1kaWFsb2cnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFByb2dyYW1zUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1wcm9ncmFtcycsXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3JhbXMuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyYW1zUGFnZSB7XG4gIEBWaWV3Q2hpbGQoQ29udGVudCkgY29udGVudDogQ29udGVudDtcbiAgcHVibGljIHByZWRlZmluZWRQcm9ncmFtcyA6IGFueTtcbiAgcHVibGljIHByb2dyYW1zIDogYW55O1xuICBwdWJsaWMgcHJvZ3JhbSA6IG51bWJlcjtcbiAgcHVibGljIHByb2dyYW1OYW1lMSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1OYW1lMiA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1OYW1lMyA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1OYW1lNCA6IHN0cmluZztcbiAgcHVibGljIGJhc2ljQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIGJ1c2luZXNzVHJhdmVsQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIGZhbWlsaXlCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgYXRobGV0ZUJ1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBzcGFCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgc3RyZXNzQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIHNlbmlvckJ1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBjaGFrcmFCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgZWxlbWVudHNCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgcGV0c3NCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgcGV0c3hCdXR0b24gOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwdWJsaWMgcm91dGluZXM6IFJvdXRpbmVzUHJvdmlkZXIsIHB1YmxpYyBldmVudHM6IEV2ZW50cyxcbiAgICBwcml2YXRlIHNwaW5uZXJEaWFsb2c6IFNwaW5uZXJEaWFsb2cpIHtcbiAgICAgIHRoaXMucHJvZ3JhbSA9IG5hdlBhcmFtcy5nZXQoJ2J1YmJsZScpO1xuXG4gICAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoJ2FkZDFQcm9ncmFtRXZlbnQnLCAocHJvZ3JhbU51bWJlciwgcHJvZ3JhbU5hbWUsIHByb2dyYW1SdW5uaW5nVGltZSwgcHJvZ3JhbUFwaU5hbWUpID0+IHtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbU51bWJlcjtcbiAgICAgICAgdGhpcy5hZGQxUHJvZ3JhbShwcm9ncmFtTmFtZSwgcHJvZ3JhbVJ1bm5pbmdUaW1lLCBwcm9ncmFtQXBpTmFtZSk7XG4gICAgICAgIHRoaXMubmF2Q3RybC5wb3AoKTtcbiAgICAgIH0pO1xuICB9XG4gIGlvblZpZXdEaWRMZWF2ZSgpe1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlTY3JvbGxUb3AsIHRoaXMuY29udGVudC5nZXRDb250ZW50RGltZW5zaW9ucygpLnNjcm9sbFRvcCk7XG4gIH1cblxuICBjb21wYXJlKCBhLCBiICkge1xuICBpZiAoIGEucmVhbE5hbWUgPCBiLnJlYWxOYW1lICl7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmICggYS5yZWFsTmFtZSA+IGIucmVhbE5hbWUgKXtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuICBpb25WaWV3RGlkTG9hZCgpe1xuICAgICAgdGhpcy5zcGlubmVyRGlhbG9nLnNob3coKTtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlDdXJyZW50UHJvZ3JhbSkudGhlbigocHJvZ3JhbSk9PntcbiAgICAgICAgdGhpcy5nZXRQcm9ncmFtcyhwcm9ncmFtICE9IG51bGwgPyBwcm9ncmFtIDogJ2Jhc2ljJyk7XG4gICAgICB9KVxuICAgICAgbGV0IHByb2dyYW1zX3JhdyA9IFtdO1xuICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT57XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IERhdGEuUHJvZ3JhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgbGV0IHByb2dyYW0gPSBEYXRhLlByb2dyYW1zW2ldOyAgIFxuICAgICAgICAgICAgICBsZXQgcmVhbE5hbWUgPSB2YWx1ZVtwcm9ncmFtLm5hbWVdO1xuXG4gICAgICAgICAgICAgIHByb2dyYW0ucmVhbE5hbWUgPSByZWFsTmFtZSA/IHJlYWxOYW1lIDogcHJvZ3JhbS5uYW1lO1xuICAgICAgICAgICAgICBwcm9ncmFtc19yYXdbaV0gPSBwcm9ncmFtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcHJvZ3JhbXNfc29ydCA9IHByb2dyYW1zX3Jhdy5zb3J0KHNlbGYuY29tcGFyZSk7XG4gICAgICAgICAgICBsZXQgZ2VuZXJhbCA9IFtdO1xuICAgICAgICAgICAgbGV0IGdlbmVyYWxfaW5kZXggPSAwO1xuICAgICAgICAgICAgbGV0IHBldHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBwZXRzX2luZGV4ID0gMDtcbiAgICAgICAgICAgIGxldCBtZXJpZGlhbnMgPSBbXTtcbiAgICAgICAgICAgIGxldCBtZXJpZGlhbnNfaW5kZXggPSAwO1xuICAgICAgICAgICAgbGV0IGNoYWtyYXMgPSBbXTtcbiAgICAgICAgICAgIGxldCBjaGFrcmFzX2luZGV4ID0gMDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRzX2luZGV4ID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcHJvZ3JhbXNfc29ydC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBsZXQgcHJvZ3JhbSA9IHByb2dyYW1zX3NvcnRbal07ICAgICAgICBcbiAgICAgICAgICAgICAgc3dpdGNoIChwcm9ncmFtLnNvcnRDYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgICAgICAgICAgICBnZW5lcmFsW2dlbmVyYWxfaW5kZXhdID0gcHJvZ3JhbTtcbiAgICAgICAgICAgICAgICAgIGdlbmVyYWxfaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlbGVtZW50XCI6XG4gICAgICAgICAgICAgICAgICBlbGVtZW50c1tlbGVtZW50c19pbmRleF0gPSBwcm9ncmFtO1xuICAgICAgICAgICAgICAgICAgZWxlbWVudHNfaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtZXJpZGlhblwiOlxuICAgICAgICAgICAgICAgICAgbWVyaWRpYW5zW21lcmlkaWFuc19pbmRleF0gPSBwcm9ncmFtO1xuICAgICAgICAgICAgICAgICAgbWVyaWRpYW5zX2luZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2hha3JhXCI6XG4gICAgICAgICAgICAgICAgICBjaGFrcmFzW2NoYWtyYXNfaW5kZXhdID0gcHJvZ3JhbTtcbiAgICAgICAgICAgICAgICAgIGNoYWtyYXNfaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwZXRzXCI6XG4gICAgICAgICAgICAgICAgICBwZXRzW3BldHNfaW5kZXhdID0gcHJvZ3JhbTtcbiAgICAgICAgICAgICAgICAgIHBldHNfaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdlbmVyYWwgPSBnZW5lcmFsLnNvcnQoc2VsZi5jb21wYXJlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZ2VuZXJhbC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICBsZXQgcHJvZ3JhbSA9IGdlbmVyYWxba107ICAgICAgICBcbiAgICAgICAgICAgICAgcHJvZ3JhbXNfc29ydFtrXSA9IHByb2dyYW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGwgPSBnZW5lcmFsLmxlbmd0aDsgbCA8IGdlbmVyYWwubGVuZ3RoICsgZWxlbWVudHMubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgICAgbGV0IHByb2dyYW0gPSBlbGVtZW50c1tsIC0gZ2VuZXJhbC5sZW5ndGhdOyAgIFxuICAgICAgICAgICAgICBwcm9ncmFtc19zb3J0W2xdID0gcHJvZ3JhbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgbSA9IGdlbmVyYWwubGVuZ3RoICsgZWxlbWVudHMubGVuZ3RoOyBtIDwgZ2VuZXJhbC5sZW5ndGggKyBlbGVtZW50cy5sZW5ndGggKyBtZXJpZGlhbnMubGVuZ3RoOyBtKyspIHtcbiAgICAgICAgICAgICAgbGV0IHByb2dyYW0gPSBtZXJpZGlhbnNbbSAtIChnZW5lcmFsLmxlbmd0aCArIGVsZW1lbnRzLmxlbmd0aCldOyAgIFxuICAgICAgICAgICAgICBwcm9ncmFtc19zb3J0W21dID0gcHJvZ3JhbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgbiA9IGdlbmVyYWwubGVuZ3RoICsgZWxlbWVudHMubGVuZ3RoICsgbWVyaWRpYW5zLmxlbmd0aDsgbiA8IGdlbmVyYWwubGVuZ3RoICsgZWxlbWVudHMubGVuZ3RoICsgbWVyaWRpYW5zLmxlbmd0aCArIGNoYWtyYXMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgbGV0IHByb2dyYW0gPSBjaGFrcmFzW24gLSAoZ2VuZXJhbC5sZW5ndGggKyBlbGVtZW50cy5sZW5ndGggKyBtZXJpZGlhbnMubGVuZ3RoKV07ICAgXG4gICAgICAgICAgICAgIHByb2dyYW1zX3NvcnRbbl0gPSBwcm9ncmFtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBvID0gZ2VuZXJhbC5sZW5ndGggKyBlbGVtZW50cy5sZW5ndGggKyBtZXJpZGlhbnMubGVuZ3RoICsgY2hha3Jhcy5sZW5ndGg7IG8gPCBnZW5lcmFsLmxlbmd0aCArIGVsZW1lbnRzLmxlbmd0aCArIG1lcmlkaWFucy5sZW5ndGggKyBjaGFrcmFzLmxlbmd0aCArIHBldHMubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgbGV0IHByb2dyYW0gPSBwZXRzW28gLSAoZ2VuZXJhbC5sZW5ndGggKyBlbGVtZW50cy5sZW5ndGggKyBtZXJpZGlhbnMubGVuZ3RoICsgY2hha3Jhcy5sZW5ndGgpXTsgICBcbiAgICAgICAgICAgICAgcHJvZ3JhbXNfc29ydFtvXSA9IHByb2dyYW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbXMgPSBwcm9ncmFtc19zb3J0O1xuICAgICAgICAgICAgdGhpcy5zcGlubmVyRGlhbG9nLmhpZGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgdGhpcy5yb3V0aW5lcy5nZXRLZXkoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUxKS50aGVuKHZhbCA9PiB7XG4gICAgICAgIGlmKHRoaXMucHJvZ3JhbSAhPSAxICYmIHZhbCAhPSBudWxsICYmIHZhbC5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lMSA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTEgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnJvdXRpbmVzLmdldEtleShDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTIpLnRoZW4odmFsID0+IHtcbiAgICAgICAgaWYodGhpcy5wcm9ncmFtICE9IDIgJiYgdmFsICE9IG51bGwgJiYgdmFsLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUyID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lMiA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMucm91dGluZXMuZ2V0S2V5KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMykudGhlbih2YWwgPT4ge1xuICAgICAgICBpZih0aGlzLnByb2dyYW0gIT0gMyAmJiB2YWwgIT0gbnVsbCAmJiB2YWwubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTMgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUzID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5yb3V0aW5lcy5nZXRLZXkoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGU0KS50aGVuKHZhbCA9PiB7XG4gICAgICAgIGlmKHRoaXMucHJvZ3JhbSAhPSA0ICYmIHZhbCAhPSBudWxsICYmIHZhbC5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lNCA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTQgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleVNjcm9sbFRvcCkudGhlbigoc2Nyb2xsKT0+e1xuICAgICAgICAgIHRoaXMuY29udGVudC5zY3JvbGxUbygwLCBzY3JvbGwsIDEwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTAwKTtcbiAgfVxuXG4gIHNlbGVjdFByZVNldFByb2dyYW0oY2F0ZWdvcnkpe1xuICAgICAgdGhpcy5nZXRQcm9ncmFtcyhjYXRlZ29yeSk7XG4gIH1cblxuICBnZXRQcm9ncmFtcyhjYXRlZ29yeSl7XG4gICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleUN1cnJlbnRQcm9ncmFtLCBjYXRlZ29yeSk7XG4gICAgdGhpcy5iYXNpY0J1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuYnVzaW5lc3NUcmF2ZWxCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmZhbWlsaXlCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmF0aGxldGVCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnNwYUJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuc3RyZXNzQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5zZW5pb3JCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmNoYWtyYUJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudHNCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnBldHNzQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5wZXRzeEJ1dHRvbiA9IGZhbHNlO1xuICAgIHN3aXRjaChjYXRlZ29yeSl7XG4gICAgICBjYXNlICdiYXNpYyc6XG4gICAgICAgIHRoaXMuYmFzaWNCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2J1c2luZXNzIGFuZCB0cmF2ZWwnOlxuICAgICAgICB0aGlzLmJ1c2luZXNzVHJhdmVsQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmYW1pbHknOlxuICAgICAgICB0aGlzLmZhbWlsaXlCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2F0aGxldGUnOlxuICAgICAgICB0aGlzLmF0aGxldGVCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NwYSc6XG4gICAgICAgIHRoaXMuc3BhQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJlc3MgcmVsaWVmJzpcbiAgICAgICAgdGhpcy5zdHJlc3NCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Nlbmlvcic6XG4gICAgICAgIHRoaXMuc2VuaW9yQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGFrcmEgYmFsYW5jaW5nJzpcbiAgICAgICAgdGhpcy5jaGFrcmFCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VsZW1lbnRzJzpcbiAgICAgICAgdGhpcy5lbGVtZW50c0J1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGV0c3MnOlxuICAgICAgICB0aGlzLnBldHNzQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwZXRzeCc6XG4gICAgICAgIHRoaXMucGV0c3hCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGdyb3VwcyA9IFtdO1xuICAgIHZhciBncm91cEluZGV4ID0gMDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgRGF0YS5Hcm91cHMubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIGdyb3VwID0gRGF0YS5Hcm91cHNbaV07XG4gICAgICBpZihncm91cC5jYXRlZ29yeSA9PSBjYXRlZ29yeSl7XG4gICAgICAgIGdyb3Vwc1tncm91cEluZGV4XSA9IGdyb3VwO1xuICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgZ3JvdXAucHJvZ3JhbXMubGVuZ3RoOyBqKyspe1xuICAgICAgICAgIHZhciBwcm9ncmFtID0gZ3JvdXAucHJvZ3JhbXNbal07XG4gICAgICAgICAgZ3JvdXAucHJvZ3JhbXNbal0gPSB0aGlzLnJvdXRpbmVzLmdldFByb2dyYW0ocHJvZ3JhbS5hcGlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBncm91cEluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJlZGVmaW5lZFByb2dyYW1zID0gZ3JvdXBzO1xuICB9XG5cbiAgYWRkUHJvZ3JhbXMocm91dGluZU5hbWUsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMsIHByb2dyYW00KXtcbiAgICB0aGlzLm5hdkN0cmwucG9wKCk7XG4gICAgdmFyIGJ1YmJsZU5hbWVzID0gdGhpcy5yb3V0aW5lcy5hZGRQcm9ncmFtcyhyb3V0aW5lTmFtZSwgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMywgcHJvZ3JhbTQpO1xuICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJzaGFyZXNCdWJibGVzXCIsIGJ1YmJsZU5hbWVzKTtcbiAgfVxuXG4gIGFkZDFQcm9ncmFtKHByb2dyYW1OYW1lLCBwcm9ncmFtUnVubmluZ1RpbWUsIHByb2dyYW1BcGlOYW1lKXtcbiAgICB0aGlzLnJvdXRpbmVzLmFkZFByb2dyYW1Ub1JvdXRpbmUodGhpcy5wcm9ncmFtLCAnJywgcHJvZ3JhbU5hbWUsIHByb2dyYW1SdW5uaW5nVGltZSwgcHJvZ3JhbUFwaU5hbWUpO1xuXG4gICAgdGhpcy5wcm9ncmFtTmFtZTEgPSB0aGlzLnByb2dyYW0gPT0gMSA/IHByb2dyYW1OYW1lIDogKHRoaXMucHJvZ3JhbU5hbWUxLmxlbmd0aCA+IDAgPyB0aGlzLnByb2dyYW1OYW1lMSA6ICcnKTtcbiAgICB0aGlzLnByb2dyYW1OYW1lMiA9IHRoaXMucHJvZ3JhbSA9PSAyID8gcHJvZ3JhbU5hbWUgOiAodGhpcy5wcm9ncmFtTmFtZTIubGVuZ3RoID4gMCA/IHRoaXMucHJvZ3JhbU5hbWUyIDogJycpO1xuICAgIHRoaXMucHJvZ3JhbU5hbWUzID0gdGhpcy5wcm9ncmFtID09IDMgPyBwcm9ncmFtTmFtZSA6ICh0aGlzLnByb2dyYW1OYW1lMy5sZW5ndGggPiAwID8gdGhpcy5wcm9ncmFtTmFtZTMgOiAnJyk7XG4gICAgdGhpcy5wcm9ncmFtTmFtZTQgPSB0aGlzLnByb2dyYW0gPT0gNCA/IHByb2dyYW1OYW1lIDogKHRoaXMucHJvZ3JhbU5hbWU0Lmxlbmd0aCA+IDAgPyB0aGlzLnByb2dyYW1OYW1lNCA6ICcnKTtcblxuICAgIHRoaXMucm91dGluZXMuc2V0UHJvZ3JhbXModGhpcy5wcm9ncmFtTmFtZTEsIHRoaXMucHJvZ3JhbU5hbWUyLCB0aGlzLnByb2dyYW1OYW1lMywgdGhpcy5wcm9ncmFtTmFtZTQpO1xuXG4gICAgdmFyIGJ1YmJsZU5hbWVzID0gW1xuICAgICAgdGhpcy5wcm9ncmFtTmFtZTEsXG4gICAgICB0aGlzLnByb2dyYW1OYW1lMixcbiAgICAgIHRoaXMucHJvZ3JhbU5hbWUzLFxuICAgICAgdGhpcy5wcm9ncmFtTmFtZTRcbiAgICBdO1xuICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJzaGFyZXNCdWJibGVzXCIsIGJ1YmJsZU5hbWVzKTtcbiAgICB0aGlzLm5hdkN0cmwucG9wKCk7XG4gIH1cblxuICBtb3JlUHJvZ3JhbUluZm8obmFtZSwgcnVuVGltZSwgZGVzY3JpcHRpb24sIGFwaU5hbWUpe1xuICAgIHRoaXMubmF2Q3RybC5wdXNoKFByb2dyYW1QYWdlLCB7IHByb2dyYW1OdW1iZXI6IHRoaXMucHJvZ3JhbSwgbmFtZTogbmFtZSwgcnVuVGltZTogcnVuVGltZSwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBhcGlOYW1lOiBhcGlOYW1lIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcHJvZ3JhbXMvcHJvZ3JhbXMudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgRXZlbnRzIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBQcm9ncmFtUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1wcm9ncmFtJyxcbiAgdGVtcGxhdGVVcmw6ICdwcm9ncmFtLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmFtUGFnZSB7XG4gIHB1YmxpYyBwcm9ncmFtTmFtZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1SdW5uaW5nVGltZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1EZXNjcmlwdGlvbiA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1BcGlOYW1lIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbU51bWJlciA6IG51bWJlcjtcbiAgcHVibGljIHByb2dyYW1SZWFsTmFtZSA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwdWJsaWMgc3RvcmFnZTogU3RvcmFnZSxcbiAgICBwdWJsaWMgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHVibGljIGV2ZW50czogRXZlbnRzKSB7XG4gIH1cbiAgaW9uVmlld0RpZExvYWQoKXtcbiAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKChwcm9nKSA9PntcbiAgICAgICAgICB0aGlzLnByb2dyYW1SZWFsTmFtZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnbmFtZScpO1xuICAgICAgICAgIHZhciBwcm9ncmFtVHJhbnNsYXRlTmFtZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnbmFtZScpO1xuICAgICAgICAgIGlmKHRoaXMuaXNOYW1lT25BcnJheShDb25zdGFudHMuc2hvcnRUaXRsZXMsIHByb2dyYW1UcmFuc2xhdGVOYW1lKSlcbiAgICAgICAgICAgIHByb2dyYW1UcmFuc2xhdGVOYW1lID0gcHJvZ3JhbVRyYW5zbGF0ZU5hbWUucmVwbGFjZSgnLXVwcGVyJywgJy1zaG9ydCcpO1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUgPSB0eXBlb2YgcHJvZ1twcm9ncmFtVHJhbnNsYXRlTmFtZV0gPT09ICd1bmRlZmluZWQnID8gcHJvZ3JhbVRyYW5zbGF0ZU5hbWUgOiBwcm9nW3Byb2dyYW1UcmFuc2xhdGVOYW1lXTtcbiAgICAgICAgICB0aGlzLnByb2dyYW1SdW5uaW5nVGltZSA9IHR5cGVvZiBwcm9nW3RoaXMubmF2UGFyYW1zLmdldCgncnVuVGltZScpXSA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm5hdlBhcmFtcy5nZXQoJ3J1blRpbWUnKSA6IHByb2dbdGhpcy5uYXZQYXJhbXMuZ2V0KCdydW5UaW1lJyldO1xuICAgICAgICAgIHRoaXMucHJvZ3JhbURlc2NyaXB0aW9uID0gdHlwZW9mIHByb2dbdGhpcy5uYXZQYXJhbXMuZ2V0KCdkZXNjcmlwdGlvbicpXSA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm5hdlBhcmFtcy5nZXQoJ2Rlc2NyaXB0aW9uJykgOiBwcm9nW3RoaXMubmF2UGFyYW1zLmdldCgnZGVzY3JpcHRpb24nKV07XG4gICAgICAgICAgdGhpcy5wcm9ncmFtQXBpTmFtZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnYXBpTmFtZScpO1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU51bWJlciA9IHRoaXMubmF2UGFyYW1zLmdldCgncHJvZ3JhbU51bWJlcicpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBhZGQxUHJvZ3JhbShwcm9ncmFtTmFtZSwgcHJvZ3JhbVJ1bm5pbmdUaW1lLCBwcm9ncmFtQXBpTmFtZSl7XG4gICAgdGhpcy5ldmVudHMucHVibGlzaChcImFkZDFQcm9ncmFtRXZlbnRcIiwgdGhpcy5wcm9ncmFtTnVtYmVyLCB0aGlzLnByb2dyYW1SZWFsTmFtZSwgdGhpcy5wcm9ncmFtUnVubmluZ1RpbWUsIHRoaXMucHJvZ3JhbUFwaU5hbWUpO1xuICB9XG5cbiAgaXNOYW1lT25BcnJheShuYW1lcywgbmFtZSl7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKG5hbWVzW2ldID09IG5hbWUpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcHJvZ3JhbS9wcm9ncmFtLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgUGxhdGZvcm0gIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcbmltcG9ydCB7IEFQSVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XHJcbmltcG9ydCB7IFBsYXlpbmdQYWdlIH0gZnJvbSAnLi4vcGxheWluZy9wbGF5aW5nJztcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yay1pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgV2lmaVBhZ2UgcGFnZS5cclxuICpcclxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXHJcbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxyXG4gKi9cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGFnZS13aWZpJyxcclxuICB0ZW1wbGF0ZVVybDogJ3dpZmkuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWZpUGFnZSB7XHJcbiAgcHVibGljIHRlc3RCZWdpblJvdXRpbmVJbnRlcnZhbCA6IGFueTtcclxuICBwdWJsaWMgdGVzdElQSW50ZXJ2YWwgOiBhbnk7XHJcbiAgcHVibGljIHRlc3RTdGF0dXNJbnRlcnZhbCA6IGFueTtcclxuICBwdWJsaWMgaW50ZXJ2YWxDb3VudCA6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIG15bWF0U3RhdHVzIDogYm9vbGVhbjtcclxuICBwdWJsaWMgbXltYXRXaWZpIDogYm9vbGVhbjtcclxuICBwdWJsaWMgbXltYXROb1N0YXR1cyA6IGJvb2xlYW47XHJcbiAgcHVibGljIGJhdHRlcnlDaGFyZ2UgOiBzdHJpbmc7XHJcbiAgcHVibGljIGJhdHRlcnlJbWcgOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvaWxUZXh0IDogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb2lsVGV4dDEgOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvaWxUZXh0MiA6IHN0cmluZztcclxuICBwdWJsaWMgY29pbFRleHQzIDogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb2lsVGV4dDQgOiBzdHJpbmc7XHJcbiAgcHVibGljIHNob3dTdGF0dXNUYWJsZSA6IGJvb2xlYW47XHJcbiAgcHVibGljIHNob3dMb2FkaW5nIDogYm9vbGVhbjtcclxuICBwdWJsaWMgaXNSdW5Sb3V0aW5lRW5hYmxlZCA6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBwcm9ncmFtMTogYW55O1xyXG4gIHByaXZhdGUgcHJvZ3JhbTI6IGFueTtcclxuICBwcml2YXRlIHByb2dyYW0zOiBhbnk7XHJcbiAgcHJpdmF0ZSBwcm9ncmFtNDogYW55O1xyXG5cclxuICBwdWJsaWMgaWZyYW1lVXJsOiBhbnk7XHJcbiAgcHVibGljIHNob3dJZnJhbWVTdGF0dXMgOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQVBJU2VydmljZVByb3ZpZGVyLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwdWJsaWMgbmV0d29ya0ludGVyZmFjZSA6IE5ldHdvcmtJbnRlcmZhY2UsIHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcclxuICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgodmFsdWUpID0+e1xyXG4gICAgICAgICAgdGhpcy5jb2lsVGV4dCA9IHR5cGVvZiB2YWx1ZVsnY29pbCddID09PSAndW5kZWZpbmVkJyA/ICdBbnRlbmEnIDogdmFsdWVbJ2NvaWwnXTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucHJvZ3JhbTEgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ3Byb2cxJyk7XHJcbiAgICAgIHRoaXMucHJvZ3JhbTIgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ3Byb2cyJyk7XHJcbiAgICAgIHRoaXMucHJvZ3JhbTMgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ3Byb2czJyk7XHJcbiAgICAgIHRoaXMucHJvZ3JhbTQgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ3Byb2c0Jyk7XHJcbiAgfVxyXG5cclxuICBpb25WaWV3RGlkTGVhdmUoKXtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgaW9uVmlld0RpZExvYWQoKSB7XHJcbiAgICB0aGlzLm15bWF0U3RhdHVzID0gZmFsc2U7XHJcbiAgICB0aGlzLnNob3dJZnJhbWVTdGF0dXMgPSBmYWxzZTtcclxuICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gdHJ1ZTtcclxuICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XHJcbiAgICAgIHRoaXMubmV0d29ya0ludGVyZmFjZS5nZXRXaUZpSVBBZGRyZXNzKCkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgaWYodGhpcy52ZXJpZnlJbnRlcm5hbElwQWRkcmVzcyhyZXNwb25zZSkpe1xyXG4gICAgICAgICAgdGhpcy52ZXJpZnlTdGF0dXNWYWx1ZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgfSwocmVzcG9uc2UpPT57XHJcbiAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0aGlzLnZlcmlmeVN0YXR1c1ZhbHVlcygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5teW1hdFdpZmkgPSB0cnVlO1xyXG4gICAgdGhpcy5pbnRlcnZhbENvdW50ID0gMDtcclxuICB9XHJcblxyXG4gIHZlcmlmeUludGVybmFsSXBBZGRyZXNzKGlwKXtcclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCAyNTY7IGkrKyl7XHJcbiAgICAgIGNvbnNvbGUubG9nKENvbnN0YW50cy5sb2NhbElQQWRkcmVzcyArIGkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhpcCk7XHJcbiAgICAgIGlmKENvbnN0YW50cy5sb2NhbElQQWRkcmVzcyArIGkgPT0gaXApe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB2ZXJpZnlTdGF0dXNWYWx1ZXMocmVzdGFydCA9IHRydWUpe1xyXG4gICAgLy90aGlzLm15bWF0U3RhdHVzID0gdHJ1ZTtcclxuICAgIC8vdGhpcy5zaG93U3RhdHVzVGFibGUgPSB0cnVlO1xyXG4gICAgaWYocmVzdGFydCl7XHJcbiAgICAgIHRoaXMuYmF0dGVyeUltZyA9ICdhc3NldHMvaW1nL2IxMDAucG4nO1xyXG4gICAgICB0aGlzLmNvaWxUZXh0MSA9ICdOL0EnO1xyXG4gICAgICB0aGlzLmNvaWxUZXh0MiA9ICdOL0EnO1xyXG4gICAgICB0aGlzLmNvaWxUZXh0MyA9ICdOL0EnO1xyXG4gICAgICB0aGlzLmNvaWxUZXh0NCA9ICdOL0EnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcy5teW1hdFdpZmkgPSBmYWxzZTtcclxuICAgIC8vdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RJUEludGVydmFsKTtcclxuXHJcbiAgICAvLyBjaGVjayBpZiBteW1hdCBpcyBjb25uZWN0ZWRcclxuICAgIHZhciBteU1hdFRlc3QgPSB0aGlzLmFwaVNlcnZpY2UudGVzdCgpO1xyXG4gICAgbXlNYXRUZXN0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIC8vIGlmIGlzIGNvbm5lY3RlZCBxdWl0YXIgaW1hZ2VuLCB0ZXh0b3MgeSBsb2FkaW5nIHkgcG9uZXIgc3RhdHVzIGRlbCBtYXRcclxuICAgICAgaWYodGhpcy52ZXJpZnlWYWx1ZXMocmVzcG9uc2UpKXtcclxuICAgICAgICB0aGlzLnNob3dTdGF0dXMoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLmZhaWxJUFZlcmlmaWNhdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93Tm9TdGF0dXMoKXtcclxuICAgICAgdGhpcy5teW1hdE5vU3RhdHVzID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNob3dTdGF0dXMoKXtcclxuICAgICAgdGhpcy5teW1hdFdpZmkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmlzUnVuUm91dGluZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGVzdFN0YXR1c0ludGVydmFsKTtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RJUEludGVydmFsKTtcclxuXHJcbiAgICAgIHRoaXMudGVzdElQSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZXR3b3JrSW50ZXJmYWNlLmdldFdpRmlJUEFkZHJlc3MoKS50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgaWYodGhpcy52ZXJpZnlJbnRlcm5hbElwQWRkcmVzcyhyZXNwb25zZSkpe1xyXG4gICAgICAgICAgICAgIHRoaXMudmVyaWZ5U3RhdHVzVmFsdWVzKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgIHRoaXMubXltYXRXaWZpID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLm15bWF0U3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93U3RhdHVzVGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLmlzUnVuUm91dGluZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLmZhaWxJUFZlcmlmaWNhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgdGhpcy5teW1hdFdpZmkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm15bWF0U3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzUnVuUm91dGluZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LCAzMDAwKTtcclxuICB9XHJcblxyXG4gIHZlcmlmeVZhbHVlcyhyZXNwb25zZSl7XHJcbiAgICBpZihyZXNwb25zZS5pbmRleE9mKFwiPHA+PGg0PlBvd2VyOiBcIikgPiAtMSl7XHJcbiAgICAgIHZhciBwb3dlciA9IHJlc3BvbnNlLnNwbGl0KFwiPHA+PGg0PlBvd2VyOiBcIik7XHJcbiAgICAgIHBvd2VyID0gcG93ZXJbMV0uc3BsaXQoXCI8L2g0PjwvcD5cIik7XHJcbiAgICAgIHZhciBjb2lsMSA9IHJlc3BvbnNlLnNwbGl0KFwiPHRyPjx0ZD4xLjwvdGQ+PHRkPlwiKTtcclxuICAgICAgY29pbDEgPSBjb2lsMVsyXS5zcGxpdChcIjwvdGQ+PC90cj5cIik7XHJcbiAgICAgIHZhciBjb2lsMiA9IHJlc3BvbnNlLnNwbGl0KFwiPHRyPjx0ZD4yLjwvdGQ+PHRkPlwiKTtcclxuICAgICAgY29pbDIgPSBjb2lsMlsyXS5zcGxpdChcIjwvdGQ+PC90cj5cIik7XHJcbiAgICAgIHZhciBjb2lsMyA9IHJlc3BvbnNlLnNwbGl0KFwiPHRyPjx0ZD4zLjwvdGQ+PHRkPlwiKTtcclxuICAgICAgY29pbDMgPSBjb2lsM1syXS5zcGxpdChcIjwvdGQ+PC90cj5cIik7XHJcbiAgICAgIHZhciBjb2lsNCA9IHJlc3BvbnNlLnNwbGl0KFwiPHRyPjx0ZD40LjwvdGQ+PHRkPlwiKTtcclxuICAgICAgY29pbDQgPSBjb2lsNFsyXS5zcGxpdChcIjwvdGQ+PC90cj5cIik7XHJcbiAgICAgIHRoaXMuYmF0dGVyeUNoYXJnZSA9IHBvd2VyWzBdO1xyXG4gICAgICB2YXIgcG93ZXJWYWwgPSBwb3dlclswXS5zdWJzdHIoMCxwb3dlclswXS5sZW5ndGgtMSk7XHJcbiAgICAgIGlmKHBvd2VyVmFsID4gNzUpXHJcbiAgICAgICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iMTAwLnBuZyc7XHJcbiAgICAgIGVsc2UgaWYocG93ZXJWYWwgPiA1MClcclxuICAgICAgICAgIHRoaXMuYmF0dGVyeUltZyA9ICdhc3NldHMvaW1nL2I3NS5wbmcnO1xyXG4gICAgICBlbHNlIGlmKHBvd2VyVmFsID4gMjUpXHJcbiAgICAgICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iNTAucG5nJztcclxuICAgICAgZWxzZSBpZihwb3dlclZhbCA+IDEwKVxyXG4gICAgICAgICAgdGhpcy5iYXR0ZXJ5SW1nID0gJ2Fzc2V0cy9pbWcvYjI1LnBuZyc7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICAgIHRoaXMuYmF0dGVyeUltZyA9ICdhc3NldHMvaW1nL2IxMC5wbmcnO1xyXG5cclxuICAgICAgdGhpcy5jb2lsVGV4dDEgPSBjb2lsMVswXTtcclxuICAgICAgdGhpcy5jb2lsVGV4dDIgPSBjb2lsMlswXTtcclxuICAgICAgdGhpcy5jb2lsVGV4dDMgPSBjb2lsM1swXTtcclxuICAgICAgdGhpcy5jb2lsVGV4dDQgPSBjb2lsNFswXTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZhaWxJUFZlcmlmaWNhdGlvbigpe1xyXG4gICAgICB0aGlzLnRlc3RJUEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmV0d29ya0ludGVyZmFjZS5nZXRXaUZpSVBBZGRyZXNzKCkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMudmVyaWZ5SW50ZXJuYWxJcEFkZHJlc3MocmVzcG9uc2UpKXtcclxuICAgICAgICAgICAgICB0aGlzLnZlcmlmeVN0YXR1c1ZhbHVlcyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LCAzMDAwKTtcclxuICB9XHJcblxyXG4gIC8qZmFpbFN0YXR1c1ZlcmlmaWNhdGlvbigpe1xyXG4gICAgdGhpcy50ZXN0U3RhdHVzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIC8vIHRpbWVvdXQgb2YgbXltYXQgZGV0ZWN0aW9uIDE4MCBzZWd1bmRvc1xyXG4gICAgICB2YXIgZmFpbE15TWF0VGVzdCA9IHRoaXMuYXBpU2VydmljZS50ZXN0KCk7XHJcbiAgICAgIGZhaWxNeU1hdFRlc3QudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZih0aGlzLnZlcmlmeVZhbHVlcyhyZXNwb25zZSkpe1xyXG4gICAgICAgICAgdGhpcy5zaG93U3RhdHVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZih0aGlzLmludGVydmFsQ291bnQgPj0gNSl7XHJcbiAgICAgICAgICB0aGlzLnNob3dOb1N0YXR1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmludGVydmFsQ291bnQgKz0gMTtcclxuICAgIH0sIDMwMDApO1xyXG5cclxuICAgIC8qdmFyIHByb2dyYW1zID0gJyc7XHJcblxyXG4gICAgZm9yKHZhciBpID0gMTsgaSA8PSA0OyBpKyspe1xyXG4gICAgICBzd2l0Y2goaSl7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTEpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9ncmFtcyArPSBcIj9QMT1cIiArIHZhbC5zcGxpdChcInxcIilbM10gKyAnJic7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUyKS50aGVuKCh2YWwpID0+IHtcclxuICAgICA4NThdXHJcbiAgICAgICAgcHJvZ3JhbXMgKz0gXCJQMj1cIiArIHZhbC5zcGxpdChcInxcIilbM10gKyAnJic7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUzKS50aGVuKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgcHJvZ3JhbXMgKz0gXCJQMz1cIiArIHZhbC5zcGxpdChcInxcIilbM10gKyAnJic7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGU0KS50aGVuKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgcHJvZ3JhbXMgKz0gXCJQND1cIiArIHZhbC5zcGxpdChcInxcIilbM107XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dJZnJhbWVTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm15bWF0V2lmaSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm15bWF0U3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U3RhdHVzVGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pZnJhbWVVcmwgPSB0aGlzLnNhbml0aXplLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChDb25zdGFudHMubXlNYXRBcGlJbmRleFVybCArIHByb2dyYW1zKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0qIC9cclxuICB9Ki9cclxuXHJcbiAgc3RhcnRSb3V0aW5lKCl7XHJcbiAgICAvKiBBTlRFUyBERSBDT0NSUkVSIFJVVElOQSBWRVJJRklDQVIgU0kgU0UgRVNUQSBDT05FQ1RBRE8gQUwgV0lGSSBERUwgTVlNQVQgKi9cclxuICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UudGVzdCgpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzUnVuUm91dGluZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMudmVyaWZ5VmFsdWVzKHJlc3BvbnNlKSl7XHJcbiAgICAgICAgICAvKiBDT1JSRVIgUlVUSU5BICovXHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGVzdFN0YXR1c0ludGVydmFsKTtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0SVBJbnRlcnZhbCk7XHJcbiAgICAgICAgICB2YXIgcHJvZ3JhbTFPYmogPSAnfCcgKyB0aGlzLnByb2dyYW0xLm5hbWUgKyAnfCcgKyB0aGlzLnByb2dyYW0xLnJ1bm5pbmd0aW1lICsgJ3wnICsgdGhpcy5wcm9ncmFtMS5hcGlOYW1lO1xyXG4gICAgICAgICAgdmFyIHByb2dyYW0yT2JqID0gJ3wnICsgdGhpcy5wcm9ncmFtMi5uYW1lICsgJ3wnICsgdGhpcy5wcm9ncmFtMi5ydW5uaW5ndGltZSArICd8JyArIHRoaXMucHJvZ3JhbTIuYXBpTmFtZTtcclxuICAgICAgICAgIHZhciBwcm9ncmFtM09iaiA9ICd8JyArIHRoaXMucHJvZ3JhbTMubmFtZSArICd8JyArIHRoaXMucHJvZ3JhbTMucnVubmluZ3RpbWUgKyAnfCcgKyB0aGlzLnByb2dyYW0zLmFwaU5hbWU7XHJcbiAgICAgICAgICB2YXIgcHJvZ3JhbTRPYmogPSAnfCcgKyB0aGlzLnByb2dyYW00Lm5hbWUgKyAnfCcgKyB0aGlzLnByb2dyYW00LnJ1bm5pbmd0aW1lICsgJ3wnICsgdGhpcy5wcm9ncmFtNC5hcGlOYW1lO1xyXG5cclxuICAgICAgICAgIHZhciBwcm9ncmFtcyA9IFtcclxuICAgICAgICAgICAgICBwcm9ncmFtMU9iaixcclxuICAgICAgICAgICAgICBwcm9ncmFtMk9iaixcclxuICAgICAgICAgICAgICBwcm9ncmFtM09iaixcclxuICAgICAgICAgICAgICBwcm9ncmFtNE9ialxyXG4gICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICB0aGlzLmFwaVNlcnZpY2Uuc3RhcnQocHJvZ3JhbXMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlICsgJycpO1xyXG4gICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgLypzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB2YXIgZW1haWxEYXRhID0geyBlcnJvciA6IHJlc3BvbnNlLmRhdGEgfTtcclxuICAgICAgICAgICAgICB0aGlzLmFwaVNlcnZpY2Uuc2VuZEVycm9yKGVtYWlsRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMTIwMDAwKTsqL1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gUG9uZXIgcnV0aW5hIGVuIGxhcyB1bHRpbWFzIGNvcnJpZGFzXHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5sYXRlc3RSb3V0aW5lc0tleSkudGhlbigocm91dGluZXMpPT57XHJcbiAgICAgICAgICAgIGxldCBsYXRlc3RBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIHQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRheSA9IHQuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICB2YXIgbW9udGhJbmRleCA9IHQuZ2V0TW9udGgoKTtcclxuICAgICAgICAgICAgdmFyIHllYXIgPSB0LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIHZhciBob3VycyA9IHQuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSB0LmdldE1pbnV0ZXMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9ncmFtc0FycmF5ID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9ncmFtcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgcHJvZ3JhbXNBcnJheS5wdXNoKHsgXCJhcGlOYW1lXCIgOiBwcm9ncmFtc1tpXS5zcGxpdCgnfCcpWzNdLCBcIm5hbWVcIiA6IHByb2dyYW1zW2ldLnNwbGl0KCd8JylbMV0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhdGVzdEFycmF5LnB1c2goeyBcImRheVwiIDogZGF5LCBcIm1vbnRoXCIgOiBDb25zdGFudHMubW9udGhOYW1lc1ttb250aEluZGV4XSwgXCJ5ZWFyXCIgOiB5ZWFyLCBcImhvdXJzXCIgOiB0aGlzLmZpeFplcm9Pbk51bWJlcihob3VycyksIFwibWludXRlc1wiIDogdGhpcy5maXhaZXJvT25OdW1iZXIobWludXRlcyksIFwicHJvZ3JhbXNcIiA6IHByb2dyYW1zQXJyYXkgfSk7XHJcbiAgICAgICAgICAgIGlmKHJvdXRpbmVzICE9IG51bGwgJiYgcm91dGluZXNbMF0gIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgbGF0ZXN0QXJyYXkucHVzaChyb3V0aW5lc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocm91dGluZXMgIT0gbnVsbCAmJiByb3V0aW5lc1sxXSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICBsYXRlc3RBcnJheS5wdXNoKHJvdXRpbmVzWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5sYXRlc3RSb3V0aW5lc0tleSwgbGF0ZXN0QXJyYXkpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLyogQ09SUkVSIFJVVElOQSAqL1xyXG4gICAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoUGxheWluZ1BhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMubXltYXRXaWZpID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMubXltYXRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LChyZXNwb25zZSk9PntcclxuICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm15bWF0V2lmaSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpeFplcm9Pbk51bWJlcih2YWwpe1xyXG4gICAgaWYodmFsIDwgMTApe1xyXG4gICAgICByZXR1cm4gJzAnICsgdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5cclxuICBzdG9wKCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMudGVzdFN0YXR1c0ludGVydmFsKTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0SVBJbnRlcnZhbCk7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3dpZmkvd2lmaS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9sb2NhbC1ub3RpZmljYXRpb25zJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgUGxheWluZ1BhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtcGxheWluZycsXG4gIHRlbXBsYXRlVXJsOiAncGxheWluZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGxheWluZ1BhZ2Uge1xuICBwdWJsaWMgcHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nQXNUaW1lIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtVGl0bGUxIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbVRpdGxlMiA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1UaXRsZTMgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtVGl0bGU0IDogc3RyaW5nO1xuICBwdWJsaWMgZGlzcGxheVJ1bm5pbmdUaW1lIDogc3RyaW5nO1xuICBwdWJsaWMgZmluaXNoVGltZSA6IGFueTtcbiAgcHVibGljIHRpbWVyUmVtYWluIDogYW55O1xuICBwdWJsaWMgdGltZXJJZCA6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwdWJsaWMgc3RvcmFnZTogU3RvcmFnZSxcbiAgICBwdWJsaWMgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBsb2NhbE5vdGlmaWNhdGlvbnMgOiBMb2NhbE5vdGlmaWNhdGlvbnMsIHB1YmxpYyBwbHQ6IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzdW1lJywgKCkgPT4ge1xuICAgICAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIF90aGlzLnJlc3VtZSh0LmdldFRpbWUoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNpbXVsYXRlUmVzdW1lKCl7XG4gICAgdmFyIHQgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMucmVzdW1lKHQuZ2V0VGltZSgpICsgMTApO1xuICB9XG5cbiAgcmVzdW1lKG5vdyl7XG4gICAgaWYoTWF0aC5yb3VuZChub3cgLyAxMDAwKSA+IHRoaXMuZmluaXNoVGltZSl7XG4gICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9ICcwMDowMCc7XG4gICAgICB0aGlzLnRpbWVyUmVtYWluID0gMDtcbiAgICAgIHRoaXMudGltZXJJZCsrO1xuICAgICAgdGhpcy5zdGFydFRpbWVyKHRoaXMudGltZXJJZCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB2YXIgc2Vjb25kc0xlZnQgPSB0aGlzLnRpbWVyUmVtYWluID0gdGhpcy5maW5pc2hUaW1lIC0gTWF0aC5yb3VuZChub3cgLyAxMDAwKTtcbiAgICAgIHRoaXMudGltZXJJZCsrO1xuICAgICAgdGhpcy5zdGFydFRpbWVyKHRoaXMudGltZXJJZCk7XG4gICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9IHRoaXMuY29udmVydFNlY29uZHNUb1RpbWUoc2Vjb25kc0xlZnQpO1xuICAgIH1cbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHZhciBwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZztcbiAgICB2YXIgcHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmc7XG4gICAgdmFyIHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nO1xuICAgIHZhciBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZztcbiAgICBmb3IodmFyIGkgPSAxOyBpIDw9IDQ7IGkrKyl7XG4gICAgICBzd2l0Y2goaSl7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMSkudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWwuc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgPSB2YWx1ZVsyXTsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHZhbHVlWzJdKTtcbiAgICAgICAgICAgIHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nID0gdmFsdWVbMl07XG5cbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKChwcm9nKSA9PntcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1UaXRsZTEgPSB0eXBlb2YgcHJvZ1t2YWx1ZVsxXV0gPT09ICd1bmRlZmluZWQnID8gdmFsdWVbMV0gOiBwcm9nW3ZhbHVlWzFdXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUyKS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbC5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA9IHZhbHVlWzJdOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUodmFsdWVbMl0pO1xuICAgICAgICAgICAgcHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmcgPSB2YWx1ZVsyXTtcblxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHByb2cpID0+e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbVRpdGxlMiA9IHR5cGVvZiBwcm9nW3ZhbHVlWzFdXSA9PT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZVsxXSA6IHByb2dbdmFsdWVbMV1dO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTMpLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsLnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nQXNUaW1lID0gdmFsdWVbMl07IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZSh2YWx1ZVsyXSk7XG4gICAgICAgICAgICBwcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZyA9IHZhbHVlWzJdO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgocHJvZykgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtVGl0bGUzID0gdHlwZW9mIHByb2dbdmFsdWVbMV1dID09PSAndW5kZWZpbmVkJyA/IHZhbHVlWzFdIDogcHJvZ1t2YWx1ZVsxXV07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlNCkudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWwuc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgPSB2YWx1ZVsyXTsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHZhbHVlWzJdKTtcbiAgICAgICAgICAgIHByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nID0gdmFsdWVbMl07XG5cbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKChwcm9nKSA9PntcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1UaXRsZTQgPSB0eXBlb2YgcHJvZ1t2YWx1ZVsxXV0gPT09ICd1bmRlZmluZWQnID8gdmFsdWVbMV0gOiBwcm9nW3ZhbHVlWzFdXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYocHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmcgPiBwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZyAmJiBwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZyA+IHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nICYmIHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nID4gcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPSBwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZzsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nKTtcbiAgICAgICAgICAgIGVsc2UgaWYocHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmcgPiBwcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZyAmJiBwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZyA+IHByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nKVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gcHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmc7IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZShwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZyk7XG4gICAgICAgICAgICBlbHNlIGlmKHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nID4gcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPSBwcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZzsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9IHByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUocHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmcpO1xuXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9IHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lO1xuICAgICAgICAgICAgdmFyIHQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5maW5pc2hUaW1lID0gTWF0aC5yb3VuZCh0LmdldFRpbWUoKSAvIDEwMDApICsgdGhpcy5nZXRTZWNvbmRzKHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lKTtcblxuICAgICAgICAgICAgdGhpcy50aW1lclJlbWFpbiA9IHRoaXMuZ2V0U2Vjb25kcyh0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVySWQgPSAxO1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKHRoaXMudGltZXJJZCk7XG5cbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgocHJvZykgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoe1xuICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ015TWF0IExpZ2h0JyxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHByb2dbJ3RpbWUtZXhwaXJlLXRleHQnXSxcbiAgICAgICAgICAgICAgICAgIHNvdW5kOiAnZmlsZTovL2Fzc2V0cy9zb3VuZHMvZ29uZ19jNS5tcDMnLFxuICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogeyBhdDogbmV3IERhdGUodC5nZXRUaW1lKCkgKyAvKnRoaXMuZ2V0U2Vjb25kcyh0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSkqLyAzMCAqIDEwMDApIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxOb3RpZmljYXRpb25zLm9uKFwiY2xpY2tcIikuc3Vic2NyaWJlKHsgbmV4dChub3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnJlc3VtZSh0LmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb25WaWV3V2lsbExlYXZlKCkge1xuICAgIHRoaXMudGltZXJSZW1haW4gPSAwO1xuICB9XG5cbiAgc3RhcnRUaW1lcihpZCl7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZih0aGlzLnRpbWVyUmVtYWluID09IDAgfHwgdGhpcy50aW1lcklkICE9IGlkKSB7IHJldHVybjsgfVxuXG4gICAgICB0aGlzLnRpbWVyUmVtYWluLS07XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPSB0aGlzLmRlY3JlYXNlU2Vjb25kKHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZih0aGlzLnRpbWVyUmVtYWluID4gMCl7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcih0aGlzLnRpbWVySWQpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgZGVjcmVhc2VTZWNvbmQodGltZSl7XG4gICAgdmFyIG1pbnV0ZXNTdHIgPSB0aW1lLnN1YnN0cigwLHRpbWUuaW5kZXhPZignOicpKTtcbiAgICB2YXIgbWludXRlcyA9IG1pbnV0ZXNTdHJbMF0gPT0gJzAnID8gcGFyc2VJbnQobWludXRlc1N0clsxXSkgOiBwYXJzZUludChtaW51dGVzU3RyKTtcbiAgICB2YXIgc2Vjb25kc1N0ciA9IHRpbWUuc3Vic3RyKHRpbWUuaW5kZXhPZignOicpICsgMSk7XG4gICAgdmFyIHNlY29uZHMgPSBzZWNvbmRzU3RyWzBdID09ICcwJyA/IHBhcnNlSW50KHNlY29uZHNTdHJbMV0pIDogcGFyc2VJbnQoc2Vjb25kc1N0cik7XG4gICAgaWYoc2Vjb25kcyAtIDEgPT0gLTEpe1xuICAgICAgbWludXRlc1N0ciA9IG1pbnV0ZXMgLSAxIDwgMTAgJiYgbWludXRlcyAtIDEgPj0gMCA/ICcwJyArIChtaW51dGVzIC0gMSkgOiBtaW51dGVzIC0gMSA9PSAtMSA/ICcwMCcgOiAnJyArIChtaW51dGVzIC0gMSk7XG4gICAgICBzZWNvbmRzU3RyID0gJzU5JztcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHNlY29uZHNTdHIgPSBzZWNvbmRzIC0gMSA8IDEwID8gJzAnICsgKHNlY29uZHMgLSAxKSA6ICcnICsgKHNlY29uZHMgLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIG1pbnV0ZXNTdHIgKyAnOicgKyBzZWNvbmRzU3RyO1xuICB9XG5cbiAgZ2V0U2Vjb25kcyh0aW1lKXtcbiAgICB2YXIgbWludXRlc1N0ciA9IHRpbWUuc3Vic3RyKDAsdGltZS5pbmRleE9mKCc6JykpO1xuICAgIHZhciBtaW51dGVzID0gbWludXRlc1N0clswXSA9PSAnMCcgPyBwYXJzZUludChtaW51dGVzU3RyWzFdKSA6IHBhcnNlSW50KG1pbnV0ZXNTdHIpO1xuICAgIHZhciBzZWNvbmRzU3RyID0gdGltZS5zdWJzdHIodGltZS5pbmRleE9mKCc6JykgKyAxKTtcbiAgICB2YXIgc2Vjb25kcyA9IHNlY29uZHNTdHJbMF0gPT0gJzAnID8gcGFyc2VJbnQoc2Vjb25kc1N0clsxXSkgOiBwYXJzZUludChzZWNvbmRzU3RyKTtcbiAgICByZXR1cm4gKG1pbnV0ZXMgKiA2MCkgKyBzZWNvbmRzO1xuICB9XG5cbiAgY29udmVydFNlY29uZHNUb1RpbWUodGltZUluU2Vjb25kcykge1xuICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lSW5TZWNvbmRzIC8gNjApO1xuICAgIHZhciBtaW51dGVzU3RyID0gXCIwXCIgKyBtaW51dGVzO1xuICAgIHZhciBzZWNvbmRzID0gXCIwXCIgKyAodGltZUluU2Vjb25kcyAtIG1pbnV0ZXMgKiA2MCk7XG4gICAgcmV0dXJuIG1pbnV0ZXNTdHIuc3Vic3RyKC0yKSArIFwiOlwiICsgc2Vjb25kcy5zdWJzdHIoLTIpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcGxheWluZy9wbGF5aW5nLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBIZWxwUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1oZWxwJyxcbiAgdGVtcGxhdGVVcmw6ICdoZWxwLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIZWxwUGFnZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcykge1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIEhlbHBQYWdlJyk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2hlbHAvaGVscC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBFdmVudHMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgQ29udGFjdFBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtY29udGFjdCcsXG4gIHRlbXBsYXRlVXJsOiAnY29udGFjdC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdFBhZ2Uge1xuICBwcml2YXRlIGNvbnRhY3RGb3JtIDogRm9ybUdyb3VwO1xuICBwdWJsaWMgY29udGFjdERpc2FibGVkIDogYm9vbGVhbjtcbiAgcHVibGljICBuYW1lX3ZhbHVlIDogc3RyaW5nO1xuICBwdWJsaWMgIGVtYWlsX3ZhbHVlIDogc3RyaW5nO1xuICBwdWJsaWMgIG1lc3NhZ2VfdmFsdWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBidXR0b25fc2VuZCA6IHN0cmluZztcbiAgcHVibGljIHJlc3BvbnNlX3RleHQgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQVBJU2VydmljZVByb3ZpZGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzKSB7XG4gICAgdGhpcy5jb250YWN0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbWVzc2FnZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuXG4gICAgdGhpcy5ldmVudHMuc3Vic2NyaWJlKCdzd2l0Y2hMYW5nRXZlbnRDb250YWN0JywobGFuZykgPT4ge1xuICAgICAgICAvL2NhbGwgbWV0aG9kcyB0byByZWZyZXNoIGNvbnRlbnRcbiAgICAgICAgdGhpcy5jaGFuZ2VCdXR0b25UZXh0KGxhbmcpO1xuICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgdGhpcy5jbGVhbkZvcm0oKTtcbiAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSAnJztcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgIHRoaXMuY2hhbmdlQnV0dG9uVGV4dChsYW5nKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgY2hhbmdlQnV0dG9uVGV4dChsYW5nKXtcbiAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuYnV0dG9uX3NlbmQgPSB2YWx1ZVsnc2VuZC10ZXh0J107XG4gICAgICAgIC8vIE1vc3RyYXIgdGV4dG8gZW4gbGFiZWwgZGViYWpvIGRlbCBib3RvblxuICAgICAgfSk7XG4gIH1cblxuICBjbGVhbkZvcm0oKXtcbiAgICB0aGlzLmNvbnRhY3REaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5uYW1lX3ZhbHVlID0gJyc7XG4gICAgdGhpcy5lbWFpbF92YWx1ZSA9ICcnO1xuICAgIHRoaXMubWVzc2FnZV92YWx1ZSA9ICcnO1xuICB9XG5cbiAgYXR0ZW1wdFNlbmRNYWlsKCl7XG4gICAgdmFyIGVtYWlsRGF0YSA9IHsgZW1haWwgOiB0aGlzLmNvbnRhY3RGb3JtLnZhbHVlLmVtYWlsLCBuYW1lIDogdGhpcy5jb250YWN0Rm9ybS52YWx1ZS5uYW1lLCBtZXNzYWdlIDogdGhpcy5jb250YWN0Rm9ybS52YWx1ZS5tZXNzYWdlIH07XG4gICAgdGhpcy5hcGlTZXJ2aWNlLnJ1blBvc3QoJ2NvbnRhY3RfdXMucGhwJyxlbWFpbERhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB2YXIgb2JqIDogYW55ID0gcmVzdWx0O1xuICAgICAgICBpZiAob2JqLnN0YXR1cyA9PSBcIm9rXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9IHZhbHVlWydlbWFpbC1zdWNjZXNzLW1lc3NhZ2UnXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25fc2VuZCA9IHZhbHVlWydzZW50LXRleHQnXTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuRm9ybSgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSB2YWx1ZVsnZW1haWwtZXJyb3ItbWVzc2FnZSddO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gdmFsdWVbJ2VtYWlsLWVycm9yLW1lc3NhZ2UnXTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2NvbnRhY3QvY29udGFjdC50cyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZW5hYmxlUHJvZE1vZGUoKTtcclxuXHJcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluLnRzIiwiZXhwb3J0IHZhciBDb25zdGFudHMgPSB7XG4gICAgbG9jYWxJUEFkZHJlc3MgICAgOiAnMTkyLjE2OC4wLicsXG4gIFx0bXlNYXRBcGlTdGFydFVybCAgOiAnaHR0cDovLzE5Mi4xNjguMS4zL3N0YXJ0Lmh0bScsXG4gICAgbXlNYXRBcGlJbmRleFVybCAgOiAnaHR0cDovLzE5Mi4xNjguMS4zL2luZGV4Lmh0bScsXG4gIFx0bXlNYXRBcGlVcmwgICAgICAgOiAnaHR0cHM6Ly9oZWFsaW5naG91c2UubGlmZS9hcGkvbXltYXQvJywgLy8naHR0cHM6Ly93d3cuZXNmZXJhc29sdWNpb25lcy5jb20vYXBpL215bWF0LycsXG4gICAgc3RvcmFnZUtleUxhbmcgICAgOiAnbXltYXRfbGFuZycsXG4gICAgc3RvcmFnZUtleUJ1YmJsZTEgOiAnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW0xJyxcbiAgICBzdG9yYWdlS2V5QnViYmxlMiA6ICdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTInLFxuICAgIHN0b3JhZ2VLZXlCdWJibGUzIDogJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtMycsXG4gICAgc3RvcmFnZUtleUJ1YmJsZTQgOiAnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW00JyxcbiAgICBzdG9yYWdlS2V5U2Nyb2xsVG9wIDogJ015TWF0X3Njcm9sbFRvcCcsXG4gICAgc3RvcmFnZUtleUN1cnJlbnRQcm9ncmFtIDogJ015TWF0X2N1cnJlbnRQcm9ncmFtJyxcbiAgICBkZXZpY2VJbmZvS2V5OiAnTXlNYXREZXZpY2UnLFxuICAgIHRlc3RfdXVpZDogJ1VVSURURVNULTEyMzQtNTY3OC05MTAwLTAwMDBBR08xOTgxMycsXG4gICAgbGF0ZXN0Um91dGluZXNLZXk6ICdsYXRlc3RSb3V0aW5lcycsXG4gICAgbW9udGhOYW1lczogW1xuICAgICAgICBcImphbnVhcnlcIiwgXCJmZWJydWFyeVwiLCBcIm1hcmNoXCIsXG4gICAgICAgIFwiYXByaWxcIiwgXCJtYXlcIiwgXCJqdW5lXCIsIFwianVseVwiLFxuICAgICAgICBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIixcbiAgICAgICAgXCJub3ZlbWJlclwiLCBcImRlY2VtYmVyXCJcbiAgICAgIF0sXG4gICAgc2hvcnRUaXRsZXMgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnZWFydGgtZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmlyZS1lbGVtZW50LXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdtZXRhbC1lbGVtZW50LXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd3YXRlci1lbGVtZW50LXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd3b29kLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dhbGxibGFkZGVyLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdraWRuZXktbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hlYXJ0LW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYXJnZS1pbnRlc3RpbmUtbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xpdmVyLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdsdW5nLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwZXJpY2FyZGl1bS1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc21hbGwtaW50ZXN0aW5lLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGxlZW4tcGFuY3JlYXMtbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0b21hY2gtbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RyaXBsZS13YXJtZXItbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3VyaW5hcnktYmxhZGRlci1tZXJpZGlhbi11cHBlcidcbiAgICAgICAgICAgICAgICAgICAgICBdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL2NvbnN0YW50cy50cyIsImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcbmltcG9ydCB7IElvbmljQXBwLCBJb25pY0Vycm9ySGFuZGxlciwgSW9uaWNNb2R1bGUgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnOyAvLyBzb2xvIHNlIHVzYSBwYXJhIGhhY2VyIGxhIHBydWViYSBkZSBjb25leGlvbiBjb24gZWwgTXlNYXRcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaHR0cCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XHJcbmltcG9ydCB7IE5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmstaW50ZXJmYWNlJztcclxuLy9pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcclxuaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9sb2NhbC1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGF0ZS1waWNrZXInOyBcclxuaW1wb3J0IHsgU3Bpbm5lckRpYWxvZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3Bpbm5lci1kaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgTXlBcHAgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2hvbWUvaG9tZSc7XHJcbmltcG9ydCB7IEhlbHBQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaGVscC9oZWxwJztcclxuaW1wb3J0IHsgQ29udGFjdFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9jb250YWN0L2NvbnRhY3QnO1xyXG5pbXBvcnQgeyBQcm9ncmFtc1BhZ2UgfSBmcm9tICcuLi9wYWdlcy9wcm9ncmFtcy9wcm9ncmFtcyc7XHJcbmltcG9ydCB7IFdpZmlQYWdlIH0gZnJvbSAnLi4vcGFnZXMvd2lmaS93aWZpJztcclxuaW1wb3J0IHsgUGxheWluZ1BhZ2UgfSBmcm9tICcuLi9wYWdlcy9wbGF5aW5nL3BsYXlpbmcnO1xyXG5pbXBvcnQgeyBQcm9ncmFtUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3Byb2dyYW0vcHJvZ3JhbSc7XHJcbmltcG9ydCB7IFN1YnNjcmliZVBhZ2UgfSBmcm9tICcuLi9wYWdlcy9zdWJzY3JpYmUvc3Vic2NyaWJlJztcclxuaW1wb3J0IHsgU2xpZGVyUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3NsaWRlci9zbGlkZXInO1xyXG5pbXBvcnQgeyBGYXZvcml0ZXNQYWdlIH0gZnJvbSAnLi4vcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcyc7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXInO1xyXG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4nO1xyXG5pbXBvcnQgeyBSb3V0aW5lc1Byb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL3JvdXRpbmVzL3JvdXRpbmVzJztcclxuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XHJcbmltcG9ydCB7IERldmljZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV2aWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIdHRwTG9hZGVyRmFjdG9yeShodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCwgJy4vYXNzZXRzL2kxOG4vJywgJy5qc29uJyk7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNeUFwcCxcclxuICAgIEhvbWVQYWdlLFxyXG4gICAgSGVscFBhZ2UsXHJcbiAgICBDb250YWN0UGFnZSxcclxuICAgIFByb2dyYW1zUGFnZSxcclxuICAgIFdpZmlQYWdlLFxyXG4gICAgUGxheWluZ1BhZ2UsXHJcbiAgICBTdWJzY3JpYmVQYWdlLFxyXG4gICAgU2xpZGVyUGFnZSxcclxuICAgIFByb2dyYW1QYWdlLFxyXG4gICAgRmF2b3JpdGVzUGFnZVxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIEh0dHBNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUuZm9yUm9vdChNeUFwcCksXHJcbiAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAgIGxvYWRlcjoge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXHJcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IEh0dHBMb2FkZXJGYWN0b3J5LFxyXG4gICAgICAgICAgICBkZXBzOiBbSHR0cENsaWVudF1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbSW9uaWNBcHBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgTXlBcHAsXHJcbiAgICBIb21lUGFnZSxcclxuICAgIEhlbHBQYWdlLFxyXG4gICAgQ29udGFjdFBhZ2UsXHJcbiAgICBQcm9ncmFtc1BhZ2UsXHJcbiAgICBXaWZpUGFnZSxcclxuICAgIFBsYXlpbmdQYWdlLFxyXG4gICAgU3Vic2NyaWJlUGFnZSxcclxuICAgIFNsaWRlclBhZ2UsXHJcbiAgICBQcm9ncmFtUGFnZSxcclxuICAgIEZhdm9yaXRlc1BhZ2VcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgU3RhdHVzQmFyLFxyXG4gICAgU3BsYXNoU2NyZWVuLFxyXG4gICAgUm91dGluZXNQcm92aWRlcixcclxuICAgIE5ldHdvcmtJbnRlcmZhY2UsXHJcbiAgICBOZXR3b3JrLFxyXG4gICAgRGV2aWNlLFxyXG4gICAgTG9jYWxOb3RpZmljYXRpb25zLFxyXG4gICAgRGF0ZVBpY2tlcixcclxuICAgIFNwaW5uZXJEaWFsb2csXHJcbiAgICB7IHByb3ZpZGU6IEVycm9ySGFuZGxlciwgdXNlQ2xhc3M6IElvbmljRXJyb3JIYW5kbGVyIH0sXHJcbiAgICBBUElTZXJ2aWNlUHJvdmlkZXIsXHJcbiAgICBIVFRQXHJcblxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgSG9tZVBhZ2VcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVudUNvbnRyb2xsZXIsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBOYXYsIFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XHJcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3RhdHVzLWJhcic7XHJcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaG9tZS9ob21lJztcclxuaW1wb3J0IHsgSGVscFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9oZWxwL2hlbHAnO1xyXG5pbXBvcnQgeyBDb250YWN0UGFnZSB9IGZyb20gJy4uL3BhZ2VzL2NvbnRhY3QvY29udGFjdCc7XHJcbmltcG9ydCB7IFNsaWRlclBhZ2UgfSBmcm9tICcuLi9wYWdlcy9zbGlkZXIvc2xpZGVyJztcclxuaW1wb3J0IHsgRmF2b3JpdGVzUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2Zhdm9yaXRlcy9mYXZvcml0ZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE15QXBwIHtcclxuICBAVmlld0NoaWxkKE5hdikgbmF2OiBOYXY7XHJcblxyXG4gIHJvb3RQYWdlOiBhbnkgPSBIb21lUGFnZTtcclxuICBsYW5nX2VuIDogYm9vbGVhbjtcclxuICBsYW5nX2VzIDogYm9vbGVhbjtcclxuICBsYW5nX3B0IDogYm9vbGVhbjtcclxuICBsYW5nX2ZyIDogYm9vbGVhbjtcclxuICBsYW5nX2dyIDogYm9vbGVhbjtcclxuICBsYW5nX2l0IDogYm9vbGVhbjtcclxuXHJcbiAgcGFnZXM6IEFycmF5PHt0aXRsZTogc3RyaW5nLCBjb21wb25lbnQ6IGFueSwgaWNvbjogYW55LCBpc1B1c2g6IGJvb2xlYW59PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHVibGljIHN0YXR1c0JhcjogU3RhdHVzQmFyLCBwdWJsaWMgc3BsYXNoU2NyZWVuOiBTcGxhc2hTY3JlZW4sXHJcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsIHB1YmxpYyBtZW51Q3RybDogTWVudUNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSxcclxuICAgIHB1YmxpYyBldmVudHMgOiBFdmVudHMpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUFwcCgpO1xyXG5cclxuICAgIC8vIHVzZWQgZm9yIGFuIGV4YW1wbGUgb2YgbmdGb3IgYW5kIG5hdmlnYXRpb25cclxuICAgIHRoaXMucGFnZXMgPSBbXHJcbiAgICAgIHsgdGl0bGU6ICdob21lLXRpdGxlJywgY29tcG9uZW50OiBIb21lUGFnZSwgaWNvbjogJ21lbnVpdGVtaG9tZScsIGlzUHVzaDogZmFsc2UgfSxcclxuICAgICAgeyB0aXRsZTogJ2hlbHAtdGl0bGUnLCBjb21wb25lbnQ6IEhlbHBQYWdlLCBpY29uOiAnbWVudWl0ZW1oZWxwJywgaXNQdXNoOiBmYWxzZSB9LFxyXG4gICAgICB7IHRpdGxlOiAnY29udGFjdC10aXRsZScsIGNvbXBvbmVudDogQ29udGFjdFBhZ2UsIGljb246ICdtZW51aXRlbWNvbnRhY3QnLCBpc1B1c2g6IGZhbHNlIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdmYXYtdGl0bGUnLCBjb21wb25lbnQ6IEZhdm9yaXRlc1BhZ2UsIGljb246ICdtZW51ZmF2b3JpdGVzJywgaXNQdXNoOiB0cnVlIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdzbGlkZXItdGl0bGUnLCBjb21wb25lbnQ6IFNsaWRlclBhZ2UsIGljb246ICdtZW51aXRlbWluZm8nLCBpc1B1c2g6IHRydWV9XHJcbiAgICBdO1xyXG4gICAgcGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKHZhbHVlKT0+e1xyXG4gICAgICAgIGlmKCF2YWx1ZSl7XHJcbiAgICAgICAgICB2YWx1ZSA9IG5hdmlnYXRvci5sYW5ndWFnZS5zcGxpdCgnLScpWzBdO1xyXG4gICAgICAgICAgaWYoIXZhbHVlKVxyXG4gICAgICAgICAgICB2YWx1ZSA9ICdlbic7XHJcbiAgICAgICAgICB0cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJhbnNsYXRlU2VydmljZS51c2UodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoTGFuZyh2YWx1ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgdmFyIHZhbHVlID0gJ2VuJztcclxuICAgICAgICAgIHRyYW5zbGF0ZVNlcnZpY2Uuc2V0RGVmYXVsdExhbmcodmFsdWUpO1xyXG4gICAgICAgICAgdHJhbnNsYXRlU2VydmljZS51c2UodmFsdWUpO1xyXG4gICAgICAgICAgdGhpcy5zd2l0Y2hMYW5nKHZhbHVlKTtcclxuICAgICAgfSk7O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplQXBwKCkge1xyXG4gICAgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAvLyBPa2F5LCBzbyB0aGUgcGxhdGZvcm0gaXMgcmVhZHkgYW5kIG91ciBwbHVnaW5zIGFyZSBhdmFpbGFibGUuXHJcbiAgICAgIC8vIEhlcmUgeW91IGNhbiBkbyBhbnkgaGlnaGVyIGxldmVsIG5hdGl2ZSB0aGluZ3MgeW91IG1pZ2h0IG5lZWQuXHJcbiAgICAgIHRoaXMuc3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLnNwbGFzaFNjcmVlbi5oaWRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5QYWdlKHBhZ2UpIHtcclxuICAgIC8vIFJlc2V0IHRoZSBjb250ZW50IG5hdiB0byBoYXZlIGp1c3QgdGhpcyBwYWdlXHJcbiAgICAvLyB3ZSB3b3VsZG4ndCB3YW50IHRoZSBiYWNrIGJ1dHRvbiB0byBzaG93IGluIHRoaXMgc2NlbmFyaW9cclxuICAgIGlmKHBhZ2UuaXNQdXNoKVxyXG4gICAgICB0aGlzLm5hdi5wdXNoKHBhZ2UuY29tcG9uZW50KTtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5uYXYuc2V0Um9vdChwYWdlLmNvbXBvbmVudCk7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2hMYW5nKGxhbmcpe1xyXG5cdCAgdGhpcy5ldmVudHMucHVibGlzaCgnc3dpdGNoTGFuZ0V2ZW50JyxsYW5nKTtcclxuXHQgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ3N3aXRjaExhbmdFdmVudENvbnRhY3QnLCBsYW5nKTtcclxuICAgIHN3aXRjaChsYW5nKXtcclxuICAgICAgY2FzZSAnZXMnOlxyXG4gICAgICAgIHRoaXMubGFuZ19lbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2VzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYW5nX3B0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfZnIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFuZ19nciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2l0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgIHRoaXMubGFuZ19lbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFuZ19lcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX3B0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfZnIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFuZ19nciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2l0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncHQnOlxyXG4gICAgICAgIHRoaXMubGFuZ19lbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2VzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfcHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxhbmdfZnIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFuZ19nciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2l0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaXQnOlxyXG4gICAgICAgIHRoaXMubGFuZ19lbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2VzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfcHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFuZ19mciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2dyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfaXQgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZ3InOlxyXG4gICAgICAgIHRoaXMubGFuZ19lbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2VzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfcHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFuZ19mciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2dyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYW5nX2l0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZnInOlxyXG4gICAgICAgIHRoaXMubGFuZ19lbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2VzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfcHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFuZ19mciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFuZ19nciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2l0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XHJcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZywgbGFuZyk7XHJcbiAgICB0aGlzLm1lbnVDdHJsLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9odHRwJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG4vL2ltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbi8qXG4gIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEF1dGhTZXJ2aWNlUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVyc1xuICBhbmQgQW5ndWxhciBESS5cbiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQVBJU2VydmljZVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgaHR0cE5hdGl2ZTogSFRUUCwgcHVibGljIGh0dHBNb2R1bGU6IEh0dHAsIC8qLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmsqLykge1xuXG4gIH1cbiAgdGVzdF9sYW5ndWFnZSgpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmh0dHAuZ2V0KENvbnN0YW50cy5teU1hdEFwaUluZGV4VXJsKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB0ZXN0KCl7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmh0dHBNb2R1bGUuZ2V0KENvbnN0YW50cy5teU1hdEFwaUluZGV4VXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICAgICAgdGltZW91dCg1MDAwKSAvLzUgc2Vjb25kc1xuICAgICAgIClcbiAgICAgIC5tYXAocmVzID0+IHJlcy50ZXh0KCkpXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRFcnJvcihkYXRhKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgICAvKmxldCBjb25uZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7Ki9cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXG4gICAgICAgIHRoaXMuaHR0cE1vZHVsZS5wb3N0KENvbnN0YW50cy5teU1hdEFwaVVybCArICdyZXBvcnRfZXJyb3IucGhwJywgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5qc29uKCkpO1xuICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgLyp9KTsqL1xuICAgIH0pO1xuICB9XG5cbiAgc2VuZEVtYWlsKGRhdGEpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICAgIC8qbGV0IGNvbm5lY3RTdWJzY3JpcHRpb24gPSB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHsqL1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cbiAgICAgICAgdGhpcy5odHRwTW9kdWxlLnBvc3QoQ29uc3RhbnRzLm15TWF0QXBpVXJsICsgJ2NvbnRhY3RfdXMucGhwJywgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5qc29uKCkpO1xuICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgLyp9KTsqL1xuICAgIH0pO1xuICB9XG5cbiAgcnVuUG9zdChzY3JpcHRGaWxlLCBkYXRhKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmh0dHAucG9zdChDb25zdGFudHMubXlNYXRBcGlVcmwgKyBzY3JpcHRGaWxlLCBkYXRhKVxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIC8qfSk7Ki9cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0KHByb2dyYW1zKXtcbiAgICB2YXIgcHJvZ3JhbTEgPSBwcm9ncmFtc1swXS5zcGxpdChcInxcIilbM107XG4gICAgdmFyIHByb2dyYW0yID0gcHJvZ3JhbXNbMV0uc3BsaXQoXCJ8XCIpWzNdO1xuICAgIHZhciBwcm9ncmFtMyA9IHByb2dyYW1zWzJdLnNwbGl0KFwifFwiKVszXTtcbiAgICB2YXIgcHJvZ3JhbTQgPSBwcm9ncmFtc1szXS5zcGxpdChcInxcIilbM107XG5cbiAgICAvKnZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnUDEnLCBwcm9ncmFtMSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdQMicsIHByb2dyYW0yKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ1AzJywgcHJvZ3JhbTMpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnUDQnLCBwcm9ncmFtNCk7Ki9cbiAgICB2YXIgcGFyYW1zID0gXCJQMT1cIitwcm9ncmFtMStcIiZQMj1cIitwcm9ncmFtMitcIiZQMz1cIitwcm9ncmFtMytcIiZQND1cIitwcm9ncmFtNDtcblxuICAgIHJldHVybiB0aGlzLmh0dHBOYXRpdmUuZ2V0KENvbnN0YW50cy5teU1hdEFwaVN0YXJ0VXJsICsgJz8nICsgcGFyYW1zLCBcIlwiLCB7fSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2UGFyYW1zLCBWaWV3Q29udHJvbGxlciwgTG9hZGluZ0NvbnRyb2xsZXIsIEFsZXJ0Q29udHJvbGxlciwgRXZlbnRzIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBSb3V0aW5lc1Byb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3JvdXRpbmVzL3JvdXRpbmVzJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBGYXZvcml0ZXNQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWZhdm9yaXRlcycsXG4gIHRlbXBsYXRlVXJsOiAnZmF2b3JpdGVzLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZXNQYWdlIHtcbiAgcHJpdmF0ZSBwcm9ncmFtMSA6IGFueTtcbiAgcHJpdmF0ZSBwcm9ncmFtMiA6IGFueTtcbiAgcHJpdmF0ZSBwcm9ncmFtMyA6IGFueTtcbiAgcHJpdmF0ZSBwcm9ncmFtNCA6IGFueTtcbiAgcHJpdmF0ZSByZXNwb25zZURhdGEgOiBhbnk7XG4gIHByaXZhdGUgcmVzcG9uc2VfdGV4dCA6IHN0cmluZztcbiAgcHJpdmF0ZSBzYXZlUm91dGluZUZvcm0gOiBGb3JtR3JvdXA7XG4gIHByaXZhdGUgc2hvd1NhdmVGb3JtIDogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgZmF2b3JpdGVzTGlzdCA6IGFueTtcbiAgcHJpdmF0ZSBzaG93TG9hZGluZ0xpc3RpbmcgOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBvZmZsaW5lX2RldmljZSA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHB1YmxpYyB2aWV3Q3RybDogVmlld0NvbnRyb2xsZXIsIHB1YmxpYyByb3V0aW5lczogUm91dGluZXNQcm92aWRlcixcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsXG4gICAgcHVibGljIGFwaVNlcnZpY2UgOiBBUElTZXJ2aWNlUHJvdmlkZXIsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwdWJsaWMgYWxlcnRDdHJsIDogQWxlcnRDb250cm9sbGVyLCBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHVibGljIGV2ZW50czogRXZlbnRzKSB7XG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgdmFyIHByb2dyYW1zID0gdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpO1xuICAgIGlmKHByb2dyYW1zWzBdICYmIHByb2dyYW1zWzFdICYmIHByb2dyYW1zWzJdICYmIHByb2dyYW1zWzNdKXtcbiAgICAgIHRoaXMucHJvZ3JhbTEgPSBwcm9ncmFtc1swXTtcbiAgICAgIHRoaXMucHJvZ3JhbTIgPSBwcm9ncmFtc1sxXTtcbiAgICAgIHRoaXMucHJvZ3JhbTMgPSBwcm9ncmFtc1syXTtcbiAgICAgIHRoaXMucHJvZ3JhbTQgPSBwcm9ncmFtc1szXTtcbiAgICB9XG4gICAgdGhpcy5zYXZlUm91dGluZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICBpZihuYXZQYXJhbXMuZ2V0KCdzaG93U2F2ZScpKVxuICAgICAgdGhpcy5zaG93U2F2ZUZvcm0gPSB0cnVlO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuc2hvd1NhdmVGb3JtID0gZmFsc2U7XG5cbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXkpLnRoZW4oKGRldmljZSk9PntcbiAgICAgICAgICB0aGlzLmxvYWRGYXZvcml0ZUxpc3QoZGV2aWNlLmVtYWlsKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXkpLnRoZW4oKGRldmljZSk9PntcbiAgICAgIGlmKHR5cGVvZiBkZXZpY2UgIT09ICd1bmRlZmluZWQnICYmIGRldmljZSAhPSBudWxsKVxuICAgICAgICB0aGlzLmxvYWRGYXZvcml0ZUxpc3QoZGV2aWNlLmVtYWlsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRGYXZvcml0ZUxpc3QoZW1haWwpe1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgLy9mb3JtRGF0YS5hcHBlbmQoJ3V1aWQnLCB1dWlkKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCAnZ2V0Jyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIGVtYWlsKTtcbiAgICBpZih0aGlzLmlzRGV2aWNlT25saW5lKXtcbiAgICAgIHRoaXMuc2hvd0xvYWRpbmdMaXN0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5ydW5Qb3N0KCdmYXZvcml0ZXMucGhwJyxmb3JtRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmdMaXN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICB0aGlzLmZhdm9yaXRlc0xpc3QgPSB0aGlzLnJlc3BvbnNlRGF0YS5mYXZvcml0ZXM7XG5cbiAgICAgIH0sKGVycikgPT4ge1xuICAgICAgICB0aGlzLnNob3dMb2FkaW5nTGlzdGluZyA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGlzbWlzcyhldmVudCA6IEV2ZW50KSB7XG4gICAgaWYoZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLnZpZXdDdHJsLmRpc21pc3MoKTtcbiAgfVxuXG4gIGRlbGV0ZShldmVudDogRXZlbnQsIGlkKXtcbiAgICBpZihldmVudCl7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAvL2Zvcm1EYXRhLmFwcGVuZCgndXVpZCcsIHV1aWQpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgndHlwZScsICdkZWwnKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgaWQpO1xuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLnJ1blBvc3QoJ2Zhdm9yaXRlcy5waHAnLGZvcm1EYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXkpLnRoZW4oKGRldmljZSk9PntcbiAgICAgICAgdGhpcy5sb2FkRmF2b3JpdGVMaXN0KGRldmljZS5lbWFpbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dQcm9ncmFtKGlkLCBuYW1lLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zLCBwcm9ncmFtNCl7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBwcm9ncmFtXzEgPSAocHJvZ3JhbTEgPT0gJ0UtU01PRycgPyBwcm9ncmFtMSA6IHZhbHVlW3Byb2dyYW0xXSk7XG4gICAgICAgIGxldCBwcm9ncmFtXzIgPSAocHJvZ3JhbTIgPT0gJ0UtU01PRycgPyBwcm9ncmFtMiA6IHZhbHVlW3Byb2dyYW0yXSk7XG4gICAgICAgIGxldCBwcm9ncmFtXzMgPSAocHJvZ3JhbTMgPT0gJ0UtU01PRycgPyBwcm9ncmFtMyA6IHZhbHVlW3Byb2dyYW0zXSk7XG4gICAgICAgIGxldCBwcm9ncmFtXzQgPSAocHJvZ3JhbTQgPT0gJ0UtU01PRycgPyBwcm9ncmFtNCA6IHZhbHVlW3Byb2dyYW00XSk7XG4gICAgICAgIGxldCBhbGVydCA9IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICAgICAgdGl0bGU6ICdSdXRpbmEgLSAnICsgbmFtZSxcbiAgICAgICAgICBtZXNzYWdlOiBwcm9ncmFtXzEgKyAnXFxuJyArIHByb2dyYW1fMiArICdcXG4nICsgcHJvZ3JhbV8zICsgJ1xcbicgKyBwcm9ncmFtXzQsXG4gICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogdmFsdWVbJ2Nob29zZSddLFxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaCgnYWRkUHJvZ3JhbXNFdmVudCcsIHsgbmFtZSA6IHByb2dyYW0xIH0sIHsgbmFtZSA6IHByb2dyYW0yIH0sIHsgbmFtZSA6IHByb2dyYW0zIH0sIHsgbmFtZSA6IHByb2dyYW00IH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgICAgYWxlcnQucHJlc2VudCgpO1xuICAgICAgICAvLyBNb3N0cmFyIHRleHRvIGVuIGxhYmVsIGRlYmFqbyBkZWwgYm90b25cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuICBhdHRlbXB0U2F2ZUZhdm9yaXRlKCl7XG4gICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gJyc7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChkZXZpY2UpPT57XG5cbiAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCAnbmV3Jyk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgZGV2aWNlLmVtYWlsKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMuc2F2ZVJvdXRpbmVGb3JtLnZhbHVlLm5hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9ncmFtMScsIHRoaXMucHJvZ3JhbTEpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9ncmFtMicsIHRoaXMucHJvZ3JhbTIpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9ncmFtMycsIHRoaXMucHJvZ3JhbTMpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9ncmFtNCcsIHRoaXMucHJvZ3JhbTQpO1xuXG5cbiAgICAgIHRoaXMuYXBpU2VydmljZS5ydW5Qb3N0KCdmYXZvcml0ZXMucGhwJyxmb3JtRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICBpZih0aGlzLnJlc3BvbnNlRGF0YS5zdGF0dXMgPT0gJ29rJyl7XG4gICAgICAgICAgICB0aGlzLnNob3dTYXZlRm9ybSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXNMaXN0ID0gdGhpcy5yZXNwb25zZURhdGEuZmF2b3JpdGVzO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2ZmbGluZV9kYXRhJztcblxuLypcbiAgR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgUm91dGluZXNQcm92aWRlciBwcm92aWRlci5cblxuICBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uIGZvciBtb3JlIGluZm8gb24gcHJvdmlkZXJzXG4gIGFuZCBBbmd1bGFyIERJLlxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0aW5lc1Byb3ZpZGVyIHtcbiAgcHVibGljIHByb2dyYW0xIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbTIgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtMyA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW00IDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlKSB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvIFJvdXRpbmVzUHJvdmlkZXIgUHJvdmlkZXInKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQcm9ncmFtKGluZGV4LHByb2cpe1xuICAgIHN3aXRjaCAoaW5kZXgpe1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLnByb2dyYW0xID0gcHJvZztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMucHJvZ3JhbTIgPSBwcm9nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgdGhpcy5wcm9ncmFtMyA9IHByb2c7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICB0aGlzLnByb2dyYW00ID0gcHJvZztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFuUHJvZ3JhbXMoKXtcbiAgICB0aGlzLnByb2dyYW0xID0gbnVsbDtcbiAgICB0aGlzLnByb2dyYW0yID0gbnVsbDtcbiAgICB0aGlzLnByb2dyYW0zID0gbnVsbDtcbiAgICB0aGlzLnByb2dyYW00ID0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQcm9ncmFtcyhwcm9nMSwgcHJvZzIsIHByb2czLCBwcm9nNCl7XG4gICAgdGhpcy5wcm9ncmFtMSA9IHByb2cxO1xuICAgIHRoaXMucHJvZ3JhbTIgPSBwcm9nMjtcbiAgICB0aGlzLnByb2dyYW0zID0gcHJvZzM7XG4gICAgdGhpcy5wcm9ncmFtNCA9IHByb2c0O1xuICB9XG5cbiAgcHVibGljIGdldFByb2dyYW1zKCl7XG4gICAgcmV0dXJuIFsgdGhpcy5wcm9ncmFtMSwgdGhpcy5wcm9ncmFtMiwgdGhpcy5wcm9ncmFtMywgdGhpcy5wcm9ncmFtNCBdO1xuICB9XG4gIHB1YmxpYyBhc3luYyBnZXRLZXkoa2V5OnN0cmluZyl7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuc3RvcmFnZS5nZXQoa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRQcm9ncmFtcyhyb3V0aW5lTmFtZSwgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMywgcHJvZ3JhbTQpe1xuICAgIHZhciBvYmpQcm9ncmFtMSA9IHRoaXMuZ2V0UHJvZ3JhbShwcm9ncmFtMSk7XG4gICAgdmFyIG9ialByb2dyYW0yID0gdGhpcy5nZXRQcm9ncmFtKHByb2dyYW0yKTtcbiAgICB2YXIgb2JqUHJvZ3JhbTMgPSB0aGlzLmdldFByb2dyYW0ocHJvZ3JhbTMpO1xuICAgIHZhciBvYmpQcm9ncmFtNCA9IHRoaXMuZ2V0UHJvZ3JhbShwcm9ncmFtNCk7XG4gICAgdGhpcy5pbnNlcnRQcmVTZXRQcm9ncmFtKHJvdXRpbmVOYW1lLCBvYmpQcm9ncmFtMSwgb2JqUHJvZ3JhbTIsIG9ialByb2dyYW0zLCBvYmpQcm9ncmFtNCk7XG5cbiAgICB0aGlzLnNldFByb2dyYW1zKG9ialByb2dyYW0xLm5hbWUsIG9ialByb2dyYW0yLm5hbWUsIG9ialByb2dyYW0zLm5hbWUsIG9ialByb2dyYW00Lm5hbWUpO1xuICAgIHJldHVybiBbb2JqUHJvZ3JhbTEubmFtZSwgb2JqUHJvZ3JhbTIubmFtZSwgb2JqUHJvZ3JhbTMubmFtZSwgb2JqUHJvZ3JhbTQubmFtZV07XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJvZ3JhbShuYW1lKXtcbiAgICAgIGZvcih2YXIgaSA9IDA7ICBpIDwgRGF0YS5Qcm9ncmFtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBwcm9ncmFtID0gRGF0YS5Qcm9ncmFtc1tpXTtcbiAgICAgICAgaWYocHJvZ3JhbS5hcGlOYW1lID09IG5hbWUgfHwgcHJvZ3JhbS5uYW1lID09IG5hbWUubmFtZSB8fCBwcm9ncmFtLm5hbWUgPT0gbmFtZSlcbiAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpbnNlcnRQcmVTZXRQcm9ncmFtIChyb3V0aW5lTmFtZSwgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMywgcHJvZ3JhbTQpIHtcblxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdNeU1hdF9yb3V0aW5lTmFtZScsIHJvdXRpbmVOYW1lKTtcbiAgICAgICAgdGhpcy5hZGRQcm9ncmFtVG9Sb3V0aW5lKDEsIFwiXCIsIHByb2dyYW0xLm5hbWUsIHByb2dyYW0xLnJ1bm5pbmd0aW1lLCBwcm9ncmFtMS5hcGlOYW1lKTtcblxuICAgICAgICB0aGlzLmFkZFByb2dyYW1Ub1JvdXRpbmUoMiwgXCJcIiwgcHJvZ3JhbTIubmFtZSwgcHJvZ3JhbTIucnVubmluZ3RpbWUsIHByb2dyYW0yLmFwaU5hbWUpO1xuXG4gICAgICAgIHRoaXMuYWRkUHJvZ3JhbVRvUm91dGluZSgzLCBcIlwiLCBwcm9ncmFtMy5uYW1lLCBwcm9ncmFtMy5ydW5uaW5ndGltZSwgcHJvZ3JhbTMuYXBpTmFtZSk7XG5cbiAgICAgICAgdGhpcy5hZGRQcm9ncmFtVG9Sb3V0aW5lKDQsIFwiXCIsIHByb2dyYW00Lm5hbWUsIHByb2dyYW00LnJ1bm5pbmd0aW1lLCBwcm9ncmFtNC5hcGlOYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRQcm9ncmFtVG9Sb3V0aW5lIChjdXJyZW50QnViYmxlU2xvdCwgaWRQcm9ncmFtLCBwcm9ncmFtTmFtZSwgcHJvZ3JhbVJ1bm5pbmdUaW1lLCBhcGlOYW1lKSB7XG4gICAgICAgIGlmIChjdXJyZW50QnViYmxlU2xvdCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTEnLCBpZFByb2dyYW0gKyBcInxcIiArIHByb2dyYW1OYW1lICsgXCJ8XCIgKyBwcm9ncmFtUnVubmluZ1RpbWUgKyBcInxcIiArIGFwaU5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRCdWJibGVTbG90ID09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtMicsIGlkUHJvZ3JhbSArIFwifFwiICsgcHJvZ3JhbU5hbWUgKyBcInxcIiArIHByb2dyYW1SdW5uaW5nVGltZSArIFwifFwiICsgYXBpTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEJ1YmJsZVNsb3QgPT0gMykge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW0zJywgaWRQcm9ncmFtICsgXCJ8XCIgKyBwcm9ncmFtTmFtZSArIFwifFwiICsgcHJvZ3JhbVJ1bm5pbmdUaW1lICsgXCJ8XCIgKyBhcGlOYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50QnViYmxlU2xvdCA9PSA0KSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTQnLCBpZFByb2dyYW0gKyBcInxcIiArIHByb2dyYW1OYW1lICsgXCJ8XCIgKyBwcm9ncmFtUnVubmluZ1RpbWUgKyBcInxcIiArIGFwaU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3ZpZGVycy9yb3V0aW5lcy9yb3V0aW5lcy50cyJdLCJzb3VyY2VSb290IjoiIn0=