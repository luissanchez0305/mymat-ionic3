webpackJsonp([0],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(29);
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

/***/ 174:
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
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 219:
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
webpackEmptyAsyncContext.id = 219;

/***/ }),

/***/ 29:
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

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscribe_subscribe__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_routines_routines__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__programs_programs__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wifi_wifi__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__favorites_favorites__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_local_notifications_ngx__ = __webpack_require__(153);
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
    function HomePage(navCtrl, storage, routines, translateService, network, zone, events, device, apiService, modalCtrl, localNotifications) {
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
        this.localNotifications = localNotifications;
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
        /*var t = new Date();
        this.localNotifications.schedule({
          id: 1,
          title: 'MyMat Light',
          text: 'TESTING MODE',
          sound: 'file://assets/sounds/gong_c5.mp3',
          trigger: { at: new Date(t.getTime() + 10000) }
        });*/
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_service__["a" /* APIServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_local_notifications_ngx__["a" /* LocalNotifications */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slider_slider__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__favorites_favorites__ = __webpack_require__(92);
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

/***/ 362:
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

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offline_data__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_routines_routines__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__program_program__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_spinner_dialog__ = __webpack_require__(357);
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

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
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

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WifiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playing_playing__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network_interface__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(28);
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

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications_ngx__ = __webpack_require__(153);
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
                                    trigger: { at: new Date(t.getTime() + _this.getSeconds(_this.displayRunningTime) * 1000) }
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
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications_ngx__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], PlayingPage);
    return PlayingPage;
}());

//# sourceMappingURL=playing.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(29);
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

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network_interface__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications_ngx__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_date_picker__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_spinner_dialog__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_help_help__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_programs_programs__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_wifi_wifi__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_playing_playing__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_program_program__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_subscribe_subscribe__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_slider_slider__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_favorites_favorites__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_routines_routines__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_api_service_api_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_network__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_device__ = __webpack_require__(162);
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
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications_ngx__["a" /* LocalNotifications */],
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(356);
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

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_help_help__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_slider_slider__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_favorites_favorites__ = __webpack_require__(92);
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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_routines_routines__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(23);
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

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutinesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offline_data__ = __webpack_require__(362);
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

},[369]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9zbGlkZXIvc2xpZGVyLnRzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5IiwiLi4vLi4vc3JjIGxhenkiLCIuLi8uLi9zcmMvc2VydmljZXMvY29uc3RhbnRzLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsIi4uLy4uL3NyYy9wYWdlcy9zdWJzY3JpYmUvc3Vic2NyaWJlLnRzIiwiLi4vLi4vc3JjL3NlcnZpY2VzL29mZmxpbmVfZGF0YS50cyIsIi4uLy4uL3NyYy9wYWdlcy9wcm9ncmFtcy9wcm9ncmFtcy50cyIsIi4uLy4uL3NyYy9wYWdlcy9wcm9ncmFtL3Byb2dyYW0udHMiLCIuLi8uLi9zcmMvcGFnZXMvd2lmaS93aWZpLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3BsYXlpbmcvcGxheWluZy50cyIsIi4uLy4uL3NyYy9wYWdlcy9oZWxwL2hlbHAudHMiLCIuLi8uLi9zcmMvcGFnZXMvY29udGFjdC9jb250YWN0LnRzIiwiLi4vLi4vc3JjL2FwcC9tYWluLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiLi4vLi4vc3JjL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZS50cyIsIi4uLy4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi4uLy4uL3NyYy9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLnRzIiwiLi4vLi4vc3JjL3Byb3ZpZGVycy9yb3V0aW5lcy9yb3V0aW5lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDWTtBQUN4QjtBQUNjO0FBQ0Y7QUFDWjtBQUN6Qzs7Ozs7R0FLRztBQU1IO0lBS0Usb0JBQW1CLE9BQXNCLEVBQVMsU0FBb0IsRUFBUyxHQUFhLEVBQVMsT0FBZ0IsRUFBUyxnQkFBa0M7UUFBN0ksWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFTLGNBQVMsR0FBVCxTQUFT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QztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixLQUFLLENBQUM7WUFDUixLQUFLLElBQUk7Z0JBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxJQUFJO2dCQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQztZQUNSLEtBQUssSUFBSTtnQkFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJ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MUY0QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgU2xpZGVzIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFNsaWRlclBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2Utc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlclBhZ2Uge1xuICBwdWJsaWMgc2hvd0hlYWRlciA6IGJvb2xlYW47XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcycpIHNsaWRlczogU2xpZGVzO1xuICBwdWJsaWMgaW1hZ2VzIDogQXJyYXk8c3RyaW5nPjtcbiAgcHVibGljIGN1bHR1cmU6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHVibGljIHBsdDogUGxhdGZvcm0sIHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge1xuICAgIHRoaXMuc2hvd0hlYWRlciA9IGZhbHNlO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLmN1bHR1cmUgPSB2YWx1ZVsnY3VsdHVyZSddO1xuICAgICAgICB0aGlzLmltYWdlcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPD0gNTsgaSsrKXtcbiAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKCcuL2Fzc2V0cy9pbWdzL2luc3RydWN0aW9ucy8nICsgdGhpcy5jdWx0dXJlICsgJy8nKyBpICsnLnBuZycpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNraXBJbnN0cnVjdGlvbnMoKXtcbiAgICB0aGlzLm5hdkN0cmwucG9wVG9Sb290KCk7XG4gIH1cblxuICBuZXh0KCkge1xuICAgIHRoaXMuc2xpZGVzLnNsaWRlTmV4dCgpO1xuICB9XG5cbiAgcHJldigpIHtcbiAgICB0aGlzLnNsaWRlcy5zbGlkZVByZXYoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3NsaWRlci9zbGlkZXIudHMiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXRjaGVkIGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSAxNzQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9lc201IGxhenlcbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXRjaGVkIGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSAyMTk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMgbGF6eVxuLy8gbW9kdWxlIGlkID0gMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgQ29uc3RhbnRzID0ge1xuICAgIGxvY2FsSVBBZGRyZXNzICAgIDogJzE5Mi4xNjguMC4nLFxuICBcdG15TWF0QXBpU3RhcnRVcmwgIDogJ2h0dHA6Ly8xOTIuMTY4LjEuMy9zdGFydC5odG0nLFxuICAgIG15TWF0QXBpSW5kZXhVcmwgIDogJ2h0dHA6Ly8xOTIuMTY4LjEuMy9pbmRleC5odG0nLFxuICBcdG15TWF0QXBpVXJsICAgICAgIDogJ2h0dHBzOi8vaGVhbGluZ2hvdXNlLmxpZmUvYXBpL215bWF0LycsIC8vJ2h0dHBzOi8vd3d3LmVzZmVyYXNvbHVjaW9uZXMuY29tL2FwaS9teW1hdC8nLFxuICAgIHN0b3JhZ2VLZXlMYW5nICAgIDogJ215bWF0X2xhbmcnLFxuICAgIHN0b3JhZ2VLZXlCdWJibGUxIDogJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtMScsXG4gICAgc3RvcmFnZUtleUJ1YmJsZTIgOiAnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW0yJyxcbiAgICBzdG9yYWdlS2V5QnViYmxlMyA6ICdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTMnLFxuICAgIHN0b3JhZ2VLZXlCdWJibGU0IDogJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtNCcsXG4gICAgc3RvcmFnZUtleVNjcm9sbFRvcCA6ICdNeU1hdF9zY3JvbGxUb3AnLFxuICAgIHN0b3JhZ2VLZXlDdXJyZW50UHJvZ3JhbSA6ICdNeU1hdF9jdXJyZW50UHJvZ3JhbScsXG4gICAgZGV2aWNlSW5mb0tleTogJ015TWF0RGV2aWNlJyxcbiAgICB0ZXN0X3V1aWQ6ICdVVUlEVEVTVC0xMjM0LTU2NzgtOTEwMC0wMDAwQUdPMTk4MTMnLFxuICAgIGxhdGVzdFJvdXRpbmVzS2V5OiAnbGF0ZXN0Um91dGluZXMnLFxuICAgIG1vbnRoTmFtZXM6IFtcbiAgICAgICAgXCJqYW51YXJ5XCIsIFwiZmVicnVhcnlcIiwgXCJtYXJjaFwiLFxuICAgICAgICBcImFwcmlsXCIsIFwibWF5XCIsIFwianVuZVwiLCBcImp1bHlcIixcbiAgICAgICAgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsXG4gICAgICAgIFwibm92ZW1iZXJcIiwgXCJkZWNlbWJlclwiXG4gICAgICBdLFxuICAgIHNob3J0VGl0bGVzICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2VhcnRoLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpcmUtZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbWV0YWwtZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnd2F0ZXItZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnd29vZC1lbGVtZW50LXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdnYWxsYmxhZGRlci1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAna2lkbmV5LW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdoZWFydC1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFyZ2UtaW50ZXN0aW5lLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdsaXZlci1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbHVuZy1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAncGVyaWNhcmRpdW0tbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NtYWxsLWludGVzdGluZS1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3BsZWVuLXBhbmNyZWFzLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdG9tYWNoLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0cmlwbGUtd2FybWVyLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1cmluYXJ5LWJsYWRkZXItbWVyaWRpYW4tdXBwZXInXG4gICAgICAgICAgICAgICAgICAgICAgXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9jb25zdGFudHMudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBFdmVudHMsIE1vZGFsQ29udHJvbGxlciwgQ29udGVudCB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IFN1YnNjcmliZVBhZ2UgfSBmcm9tICcuLi9zdWJzY3JpYmUvc3Vic2NyaWJlJztcbmltcG9ydCB7IFJvdXRpbmVzUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2UnO1xuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IFByb2dyYW1zUGFnZSB9IGZyb20gJy4uL3Byb2dyYW1zL3Byb2dyYW1zJztcbmltcG9ydCB7IFdpZmlQYWdlIH0gZnJvbSAnLi4vd2lmaS93aWZpJztcbmltcG9ydCB7IEZhdm9yaXRlc1BhZ2UgfSBmcm9tICcuLi9mYXZvcml0ZXMvZmF2b3JpdGVzJztcbmltcG9ydCB7IExvY2FsTm90aWZpY2F0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbG9jYWwtbm90aWZpY2F0aW9ucy9uZ3gnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG4gIEBWaWV3Q2hpbGQoQ29udGVudCkgY29udGVudDogQ29udGVudDtcbiAgcHVibGljIGJ1YmJsZXNOYW1lczEgOiBzdHJpbmc7XG4gIHB1YmxpYyBidWJibGVzTmFtZXMyIDogc3RyaW5nO1xuICBwdWJsaWMgYnViYmxlc05hbWVzMyA6IHN0cmluZztcbiAgcHVibGljIGJ1YmJsZXNOYW1lczQgOiBzdHJpbmc7XG4gIHB1YmxpYyBFbmFibGVSdW5Sb3V0aW5lIDogYm9vbGVhbjtcbiAgcHVibGljIGJ1YmJsZXNDdXJyZW50U3RhdGUxIDogYm9vbGVhbjtcbiAgcHVibGljIGJ1YmJsZXNDdXJyZW50U3RhdGUyIDogYm9vbGVhbjtcbiAgcHVibGljIGJ1YmJsZXNDdXJyZW50U3RhdGUzIDogYm9vbGVhbjtcbiAgcHVibGljIGJ1YmJsZXNDdXJyZW50U3RhdGU0IDogYm9vbGVhbjtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIG9mZmxpbmVfZGV2aWNlIDogc3RyaW5nO1xuICBwdWJsaWMgc2hvd0FkZEZhdm9yaXRlQnV0dG9uIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd0xhdGVzdFNlY3Rpb246IGJvb2xlYW47XG4gIHB1YmxpYyBsYXRlc3RSb3V0aW5lcyA6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgcm91dGluZXM6IFJvdXRpbmVzUHJvdmlkZXIsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHB1YmxpYyBldmVudHM6IEV2ZW50cywgcHJpdmF0ZSBkZXZpY2U6IERldmljZSwgcHVibGljIGFwaVNlcnZpY2UgOiBBUElTZXJ2aWNlUHJvdmlkZXIsIHB1YmxpYyBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlciwgXG4gICAgcHJpdmF0ZSBsb2NhbE5vdGlmaWNhdGlvbnMgOiBMb2NhbE5vdGlmaWNhdGlvbnMpIHtcbiAgICAvL3RoaXMuY2hlY2tBbGxCdWJibGVzKCk7XG4gICAgdGhpcy5ldmVudHMuc3Vic2NyaWJlKCdzaGFyZXNCdWJibGVzJywgKGJ1YmJsZXMpID0+IHtcbiAgICAgIGZvcih2YXIgaSA9IDE7IGkgPD0gYnViYmxlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlcyhpLCBidWJibGVzW2kgLSAxXSk7XG4gICAgICB9XG4gICAgICB0aGlzLkFsbEJ1YmJsZXNDaGVja2VkKHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbXMoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoJ2FkZFByb2dyYW1zRXZlbnQnLCAocHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMywgcHJvZ3JhbTQpID0+IHtcbiAgICAgIHRoaXMubmF2Q3RybC5wb3AoKTtcbiAgICAgIGNvbnNvbGUubG9nKHByb2dyYW0xKTtcbiAgICAgIGxldCBidWJibGVzID0gdGhpcy5yb3V0aW5lcy5hZGRQcm9ncmFtcygnJywgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMywgcHJvZ3JhbTQpO1xuICAgICAgdGhpcy5ldmVudHMucHVibGlzaChcInNoYXJlc0J1YmJsZXNcIiwgYnViYmxlcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoJ3N3aXRjaExhbmdFdmVudCcsKGxhbmcpID0+IHtcbiAgICAgICAgLy9jYWxsIG1ldGhvZHMgdG8gcmVmcmVzaCBjb250ZW50XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nLCBsYW5nKVxuICAgICAgICB0aGlzLmNoZWNrQWxsQnViYmxlcygpO1xuICAgIH0pO1xuICAgIHRoaXMuQWxsQnViYmxlc0NoZWNrZWQodGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpKTtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy90aGlzLm5hdkN0cmwucHVzaChTdWJzY3JpYmVQYWdlLCB7IGNhbGxCYWNrUGFnZSA6ICdub25lJyB9KTtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChpbmZvKT0+e1xuICAgICAgaWYodHlwZW9mIGluZm8gPT09ICd1bmRlZmluZWQnIHx8IGluZm8gPT0gbnVsbCl7XG4gICAgICAgIC8qaWYod2luZG93Lmhhc093blByb3BlcnR5KCdjb3Jkb3ZhJykpeyovXG4gICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgdmFyIF91dWlkID0gQ29uc3RhbnRzLnRlc3RfdXVpZDtcbiAgICAgICAgICBpZih3aW5kb3cuaGFzT3duUHJvcGVydHkoJ2NvcmRvdmEnKSl7XG4gICAgICAgICAgICBfdXVpZCA9IHRoaXMuZGV2aWNlLnV1aWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXVpZCcsIF91dWlkKTtcblxuICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5ydW5Qb3N0KCdjaGVja19kZXZpY2UucGhwJyxmb3JtRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjaGVja19kZXZpY2Ugc3VjY2VzcycpO1xuICAgICAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2JqIDogYW55ID0gcmVzdWx0O1xuICAgICAgICAgICAgaWYgKG9iai5mb3VuZCA9PSBcIjBcIikge1xuICAgICAgICAgICAgICAvLyBkZXNwbGllZ2EgbGEgdmlzdGEgZGUgaW5zZXJjaW9uIGRlIGRhdG9zXG4gICAgICAgICAgICAgIHRoaXMubmF2Q3RybC5wdXNoKFN1YnNjcmliZVBhZ2UsIHsgY2FsbEJhY2tQYWdlIDogJ25vbmUnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuZGV2aWNlSW5mb0tleSwgeyBcImVtYWlsXCIgOiBvYmouZW1haWwsIFwidXVpZFwiIDogX3V1aWQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2hlY2tfZGV2aWNlIGVycm9yICcgKyByZXN1bHQpO1xuICAgICAgICAgICAgLy90aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICAgICAgICAvKnRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub2ZmbGluZV9kZXZpY2UgPSB2YWx1ZVsnb2ZmbGluZS1kZXZpY2UtdGV4dC0yJ107XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7Ki9cbiAgICAgICAgICB9KTtcbiAgICAgICAgLyp9Ki9cbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKnZhciB0ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZSh7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiAnTXlNYXQgTGlnaHQnLFxuICAgICAgdGV4dDogJ1RFU1RJTkcgTU9ERScsXG4gICAgICBzb3VuZDogJ2ZpbGU6Ly9hc3NldHMvc291bmRzL2dvbmdfYzUubXAzJyxcbiAgICAgIHRyaWdnZXI6IHsgYXQ6IG5ldyBEYXRlKHQuZ2V0VGltZSgpICsgMTAwMDApIH1cbiAgICB9KTsqL1xuICB9XG5cbiAgYWRkUHJvZ3JhbXMocm91dGluZU5hbWUsIHByb2dyYW0wLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zKXtcbiAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdhZGRQcm9ncmFtc0V2ZW50JywgcHJvZ3JhbTAsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMpO1xuICAgIHRoaXMuY29udGVudC5zY3JvbGxUbygwLCAwLCAxMDApO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMubGF0ZXN0Um91dGluZXNLZXkpLnRoZW4oKGxhdGVzdHMpPT57XG4gICAgICBpZihsYXRlc3RzKXtcbiAgICAgICAgdGhpcy5zaG93TGF0ZXN0U2VjdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMubGF0ZXN0Um91dGluZXMgPSBsYXRlc3RzO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgdGhpcy5zaG93TGF0ZXN0U2VjdGlvbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3BlbkFkZEZhdm9yaXRlKCl7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuZGV2aWNlSW5mb0tleSkudGhlbigoaW5mbyk9PntcbiAgICAgIGlmKHR5cGVvZiBpbmZvID09PSAndW5kZWZpbmVkJyB8fCBpbmZvID09IG51bGwpe1xuICAgICAgICAvLyBkZXNwbGllZ2EgbGEgdmlzdGEgZGUgaW5zZXJjaW9uIGRlIGRhdG9zXG4gICAgICAgIHRoaXMubmF2Q3RybC5wdXNoKFN1YnNjcmliZVBhZ2UsIHsgY2FsbEJhY2tQYWdlIDogJ2Zhdm9yaXRlcycgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJvZmlsZU1vZGFsID0gdGhpcy5tb2RhbEN0cmwuY3JlYXRlKEZhdm9yaXRlc1BhZ2UsIHsgJ3Nob3dTYXZlJzogdHJ1ZSB9KTtcbiAgICAgICAgcHJvZmlsZU1vZGFsLnByZXNlbnQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVByb2dyYW1Gcm9tUm91dGluZShwcmcpe1xuICAgIGNvbnNvbGUubG9nKCdob2xkOiAnICsgcHJnKTtcbiAgfVxuXG4gIHNlbGVjdEJ1YmJsZShwcmcsIGFkZCl7XG4gICAgdGhpcy5uYXZDdHJsLnB1c2goUHJvZ3JhbXNQYWdlLCB7IGJ1YmJsZTogcHJnIH0pO1xuICB9XG5cbiAgcnVuUm91dGluZSgpe1xuICAgIHZhciBwcm9ncmFtcyA9IHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbXMoKTtcbiAgICBpZih0aGlzLkFsbEJ1YmJsZXNDaGVja2VkKHByb2dyYW1zKSl7XG4gICAgICB0aGlzLm5hdkN0cmwucHVzaChcbiAgICAgICAgV2lmaVBhZ2UsXG4gICAgICAgIHsgcHJvZzE6IHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbShwcm9ncmFtc1swXSksIHByb2cyOiB0aGlzLnJvdXRpbmVzLmdldFByb2dyYW0ocHJvZ3JhbXNbMV0pLCBwcm9nMzogdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtKHByb2dyYW1zWzJdKSwgcHJvZzQ6IHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbShwcm9ncmFtc1szXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgQWxsQnViYmxlc0NoZWNrZWQocHJvZ3JhbXMpe1xuXG4gICAgaWYodHlwZW9mIHByb2dyYW1zWzBdICE9PSAndW5kZWZpbmVkJyAmJiBwcm9ncmFtc1swXSAhPSBudWxsICYmIHByb2dyYW1zWzBdLmxlbmd0aCA+IDAgJiZcbiAgICB0eXBlb2YgcHJvZ3JhbXNbMV0gIT09ICd1bmRlZmluZWQnICYmIHByb2dyYW1zWzFdICE9IG51bGwgJiYgcHJvZ3JhbXNbMV0ubGVuZ3RoID4gMCAmJlxuICAgIHR5cGVvZiBwcm9ncmFtc1syXSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvZ3JhbXNbMl0gIT0gbnVsbCAmJiBwcm9ncmFtc1syXS5sZW5ndGggPiAwICYmXG4gICAgdHlwZW9mIHByb2dyYW1zWzNdICE9PSAndW5kZWZpbmVkJyAmJiBwcm9ncmFtc1szXSAhPSBudWxsICYmIHByb2dyYW1zWzNdLmxlbmd0aCA+IDApe1xuICAgICAgICB0aGlzLkVuYWJsZVJ1blJvdXRpbmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dBZGRGYXZvcml0ZUJ1dHRvbiA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGlzLkVuYWJsZVJ1blJvdXRpbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93QWRkRmF2b3JpdGVCdXR0b24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLkVuYWJsZVJ1blJvdXRpbmU7XG4gIH1cblxuICBjbGVhblJvdXRpbmUoKXtcbiAgICB0aGlzLnJvdXRpbmVzLmNsZWFuUHJvZ3JhbXMoKTtcbiAgICB0aGlzLkFsbEJ1YmJsZXNDaGVja2VkKHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbXMoKSk7XG4gICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTEsJycpO1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUyLCcnKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMywnJyk7XG4gICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTQsJycpO1xuICAgIHRoaXMudXBkYXRlQnViYmxlcygxLCcnKTtcbiAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoMiwnJyk7XG4gICAgdGhpcy51cGRhdGVCdWJibGVzKDMsJycpO1xuICAgIHRoaXMudXBkYXRlQnViYmxlcyg0LCcnKTtcbiAgICB0aGlzLnNob3dBZGRGYXZvcml0ZUJ1dHRvbiA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVCdWJibGVzKGJ1YmJsZSxuYW1lKXtcbiAgICBzd2l0Y2goYnViYmxlKXtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaWYodHlwZW9mIG5hbWUgIT09ICd1bmRlZmluZWQnICYmIG5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT57XG4gICAgICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMSA9IHR5cGVvZiB2YWx1ZVtuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBuYW1lIDogdmFsdWVbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTEgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczEgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaWYodHlwZW9mIG5hbWUgIT09ICd1bmRlZmluZWQnICYmIG5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT57XG4gICAgICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMiA9IHR5cGVvZiB2YWx1ZVtuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBuYW1lIDogdmFsdWVbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTIgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczIgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaWYodHlwZW9mIG5hbWUgIT09ICd1bmRlZmluZWQnICYmIG5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT57XG4gICAgICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMyA9IHR5cGVvZiB2YWx1ZVtuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBuYW1lIDogdmFsdWVbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTMgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczMgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaWYodHlwZW9mIG5hbWUgIT09ICd1bmRlZmluZWQnICYmIG5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlNCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT57XG4gICAgICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzNCA9IHR5cGVvZiB2YWx1ZVtuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBuYW1lIDogdmFsdWVbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQWxsQnViYmxlcygpe1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUxKS50aGVuKCh2YWwpPT57XG4gICAgICBpZih2YWwgIT09IG51bGwpe1xuICAgICAgICB2YXIgbmFtZSA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoMSxuYW1lKTtcbiAgICAgICAgdGhpcy5yb3V0aW5lcy5zZXRQcm9ncmFtKDEsbmFtZSlcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB2YXIgZW1haWxEYXRhID0geyBhcmVhIDogJ2NoZWNrQWxsQnViYmxlcyAxJywgbWVzc2FnZSA6IGVyciB9O1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRFcnJvcihlbWFpbERhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMikudGhlbigodmFsKT0+e1xuICAgICAgaWYodmFsICE9PSBudWxsKXtcbiAgICAgICAgdmFyIG5hbWUgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzKDIsbmFtZSk7XG4gICAgICAgIHRoaXMucm91dGluZXMuc2V0UHJvZ3JhbSgyLG5hbWUpXG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdmFyIGVtYWlsRGF0YSA9IHsgYXJlYSA6ICdjaGVja0FsbEJ1YmJsZXMgMicsIG1lc3NhZ2UgOiBlcnIgfTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZW5kRXJyb3IoZW1haWxEYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTMpLnRoZW4oKHZhbCk9PntcbiAgICAgIGlmKHZhbCAhPT0gbnVsbCl7XG4gICAgICAgIHZhciBuYW1lID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlcygzLG5hbWUpO1xuICAgICAgICB0aGlzLnJvdXRpbmVzLnNldFByb2dyYW0oMyxuYW1lKVxuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHZhciBlbWFpbERhdGEgPSB7IGFyZWEgOiAnY2hlY2tBbGxCdWJibGVzIDMnLCBtZXNzYWdlIDogZXJyIH07XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2VuZEVycm9yKGVtYWlsRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGU0KS50aGVuKCh2YWwpPT57XG4gICAgICBpZih2YWwgIT09IG51bGwpe1xuICAgICAgICB2YXIgbmFtZSA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoNCxuYW1lKTtcbiAgICAgICAgdGhpcy5yb3V0aW5lcy5zZXRQcm9ncmFtKDQsbmFtZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuQWxsQnViYmxlc0NoZWNrZWQodGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpKVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHZhciBlbWFpbERhdGEgPSB7IGFyZWEgOiAnY2hlY2tBbGxCdWJibGVzIDQnLCBtZXNzYWdlIDogZXJyIH07XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2VuZEVycm9yKGVtYWlsRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIE1vZGFsQ29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERldmljZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IFNsaWRlclBhZ2UgfSBmcm9tICcuLi9zbGlkZXIvc2xpZGVyJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgRmF2b3JpdGVzUGFnZSB9IGZyb20gJy4uL2Zhdm9yaXRlcy9mYXZvcml0ZXMnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFN1YnNjcmliZVBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2Utc3Vic2NyaWJlJyxcbiAgdGVtcGxhdGVVcmw6ICdzdWJzY3JpYmUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZVBhZ2Uge1xuICBwcml2YXRlIG1heERhdGVPZlBpY2tlciA6IHN0cmluZztcbiAgcHJpdmF0ZSBzdWJzY3JpYmVGb3JtIDogRm9ybUdyb3VwO1xuICBwdWJsaWMgc2hvd1N1Ym1pdEJ1dHRvbiA6IGJvb2xlYW47XG4gIHByaXZhdGUgbWF4RGF0ZSA6IHN0cmluZztcbiAgcHJpdmF0ZSByZXNwb25zZV90ZXh0IDogc3RyaW5nO1xuICBwcml2YXRlIHJlc3BvbnNlRGF0YSA6IGFueTtcbiAgcHJpdmF0ZSBjYWxsQmFja1BhZ2UgOiBzdHJpbmc7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBlcnJvck5hbWVDbGFzcyA6IHN0cmluZztcbiAgcHVibGljIGVycm9yRW1haWxDbGFzcyA6IHN0cmluZztcbiAgcHVibGljIGVycm9yR2VuZGVyQ2xhc3MgOiBzdHJpbmc7XG4gIHB1YmxpYyBlcnJvckRhdGVDbGFzcyA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgYXBpU2VydmljZSA6IEFQSVNlcnZpY2VQcm92aWRlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgZGV2aWNlOiBEZXZpY2UsIHByaXZhdGUgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrKSB7XG4gICAgICAvLyBvYnRpZW5lIGVsIHBhcmFtZXRybyBkZSBxdWUgcGFnZSB2YSBhIGNvcnJlciBhbCB0ZXJtaW5hciBlbCByZWdpc3Ryb1xuICAgICAgdGhpcy5jYWxsQmFja1BhZ2UgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ2NhbGxCYWNrUGFnZScpO1xuICAgICAgdGhpcy5zaG93U3VibWl0QnV0dG9uID0gdHJ1ZTtcbiAgICAgIGxldCBhRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICB0aGlzLm1heERhdGVPZlBpY2tlciA9IHRoaXMubWF4RGF0ZSA9IGFEYXRlLnRvSVNPU3RyaW5nKCk7XG5cbiAgICAgIHRoaXMuc3Vic2NyaWJlRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgZ2VuZGVyOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBiaXJ0aERhdGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBTdWJzY3JpYmVQYWdlJyk7XG4gIH1cblxuICBhdHRlbXB0U3Vic2NyaWJlKCl7XG4gICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gJyc7XG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgdGhpcy5zdWJzY3JpYmVGb3JtLnZhbHVlLmVtYWlsKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCB0aGlzLnN1YnNjcmliZUZvcm0udmFsdWUubmFtZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdiaXJ0aERhdGUnLCB0aGlzLnN1YnNjcmliZUZvcm0udmFsdWUuYmlydGhEYXRlKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2dlbmRlcicsIHRoaXMuc3Vic2NyaWJlRm9ybS52YWx1ZS5nZW5kZXIpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnaXNVcGRhdGUnLCAnZmFsc2UnKTtcbiAgICBpZih3aW5kb3cuaGFzT3duUHJvcGVydHkoJ2NvcmRvdmEnKSl7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3V1aWQnLCB0aGlzLmRldmljZS51dWlkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3V1aWQnLCBDb25zdGFudHMudGVzdF91dWlkKTtcbiAgICB9XG5cbiAgICB0aGlzLmFwaVNlcnZpY2UucnVuUG9zdCgnc3Vic2NyaWJlLnBocCcsZm9ybURhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICBpZih0aGlzLnJlc3BvbnNlRGF0YS5zdGF0dXMgPT0gJ29rJykge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5LCB7J3V1aWQnOiB0aGlzLnJlc3BvbnNlRGF0YS51dWlkLCAnZW1haWwnOiB0aGlzLnN1YnNjcmliZUZvcm0udmFsdWUuZW1haWwgfSk7XG4gICAgICAgIHRoaXMuc2hvd1N1Ym1pdEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gdmFsdWVbJ3Byb2ZpbGUtc3VjY2Vzcy1tZXNzYWdlJ107XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBpZih0aGlzLmNhbGxCYWNrUGFnZSA9PSAnbm9uZScpe1xuICAgICAgICAgICAgICAgIC8vIGRlc3BsaWVnYSBsYSB2aXN0YSBkZSBkZSBpbnN0cnVjY2lvbmVzXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZDdHJsLnB1c2goU2xpZGVyUGFnZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmNhbGxCYWNrUGFnZSA9PSAnZmF2b3JpdGVzJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZDdHJsLnBvcCgpO1xuICAgICAgICAgICAgICAgIGxldCBwcm9maWxlTW9kYWwgPSB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoRmF2b3JpdGVzUGFnZSwgeyAnc2hvd1NhdmUnOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHByb2ZpbGVNb2RhbC5wcmVzZW50KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwMDApO1xuXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSB2YWx1ZVsncHJvZmlsZS1lcnJvci1tZXNzYWdlJ10gKyAnOiAnO1xuICAgICAgICAgICAgaWYodGhpcy5yZXNwb25zZURhdGEuZW1haWxFcnJvciAhPSAnb2snKXtcbiAgICAgICAgICAgICAgZXJyb3IgKz0gdGhpcy5yZXNwb25zZURhdGEuZW1haWxFcnJvcjtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvckVtYWlsQ2xhc3MgID0gJ2Vycm9yJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMucmVzcG9uc2VEYXRhLm5hbWVFcnJvciAhPSAnb2snKXtcbiAgICAgICAgICAgICAgZXJyb3IgKz0gdGhpcy5yZXNwb25zZURhdGEubmFtZUVycm9yO1xuICAgICAgICAgICAgICB0aGlzLmVycm9yTmFtZUNsYXNzICA9ICdlcnJvcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLnJlc3BvbnNlRGF0YS5nZW5kZXJFcnJvciAhPSAnb2snKXtcbiAgICAgICAgICAgICAgZXJyb3IgKz0gdGhpcy5yZXNwb25zZURhdGEuZ2VuZGVyRXJyb3I7XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JHZW5kZXJDbGFzcyAgPSAnZXJyb3InO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5yZXNwb25zZURhdGEuZGF0ZU9mQmlydGhFcnJvciAhPSAnb2snKXtcbiAgICAgICAgICAgICAgZXJyb3IgKz0gdGhpcy5yZXNwb25zZURhdGEuZGF0ZU9mQmlydGhFcnJvcjtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvckRhdGVDbGFzcyAgPSAnZXJyb3InO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSBlcnJvcjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBwb25lciBzdWNjZXNzIHkgZGVzcGxlZ2FyIHBhZ2luYSBwcmluY2lwYWxcbiAgICB9LCAocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSB2YWx1ZVsncHJvZmlsZS1lcnJvci1tZXNzYWdlJ107XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9zdWJzY3JpYmUvc3Vic2NyaWJlLnRzIiwiZXhwb3J0IHZhciBEYXRhID0geyBHcm91cHMgOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgbmFtZTogJ3BhaW4tcmVsaWVmLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBhaW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnaW5qdXJ5LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCb25lX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnc3RyZXNzLXJlbGllZi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnaW1tdW5lLXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgbmFtZTogJ3Jlc3BpcmF0b3J5LXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTaW51c19DYXZpdGllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZGV0b3hpZmljYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGFyZ2VfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgbmFtZTogJ2hlYWRhY2hlLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYWRhY2hlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdncm91bmRpbmctdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVhcnRoX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSb290X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgbmFtZTogJ2VuZXJneS1ib29zdGVyLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRXhoYXVzdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgbmFtZTogJ0pFVC1MQUcnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSmV0LUxhZy9DbGltYXRlX0NoYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFYXJ0aF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICBuYW1lOiAnSkVULUxBRycsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJKZXQtTGFnL0NsaW1hdGVfQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRXhoYXVzdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICBuYW1lOiAnY29uY2VudHJhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25jZW50cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlzY2Vybm1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBZHJlbmFsX0dsYW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQnJvd19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdkaWdlc3Rpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWluZXJhbF9NZXRhYm9saWNfQWN0aXZpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdsb3dlci1iYWNrYWNoZS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCYWNrYWNoZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUm9vdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgbmFtZTogJ25lY2stc2hvdWxkZXItdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVjay9TaG91bGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTXVzY2xlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJHYWxsYmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICBuYW1lOiAnc2xlZXAtZW5oYW5jZXItdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2xlZXBfRW5oYW5jZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICBuYW1lOiAnY2hpbGRyZW4tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2hpbGRfRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCb25lX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICBuYW1lOiAnZmVtYWxlLWhvcm1vbmFsLWltYmFsYW5jZXMtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRmVtYWxlX0hvcm1vbmVfQmFsYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtYWxlLWhvcm1vbmFsLWltYmFsYW5jZXMtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWFsZV9Ib3Jtb25lX0JhbGFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdjb2xkLWZsdS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGbHVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgbmFtZTogJ2NvbnN0aXBhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25zdGlwYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgbmFtZTogJ2RpYXJyaGVhLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpYXJyaGVhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICBuYW1lOiAnZWFyLXByb2JsZW1zLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkF1ZGl0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRyaXBsZV9XYXJtZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgbmFtZTogJ2V5ZXNpZ2h0LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkV5ZXNpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICBuYW1lOiAnaW50ZXN0aW5hbC1mbHUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZsdVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRobGV0ZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdlbmVyZ3ktYm9vc3Rlci11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQm9vc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcclxuICAgICAgICAgICAgbmFtZTogJ3JlZ2VuZXJhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJWaXRhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcclxuICAgICAgICAgICAgbmFtZTogJ3Jlc3BpcmF0b3J5LXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2ludXNfQ2F2aXRpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnaW5qdXJ5LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGFpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRobGV0ZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdwYWluLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGFpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcclxuICAgICAgICAgICAgbmFtZTogJ2JhY2thY2hlLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJhY2thY2hlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVjay9TaG91bGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlZlcnRlYnJhZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkdhbGxibGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnbXVzY2xlcy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29ubmVjdGl2ZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICBuYW1lOiAnaW1tdW5lLXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdhbnRpLWFnaW5nLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFudGlfQWdpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29ubmVjdGl2ZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXHJcbiAgICAgICAgICAgIG5hbWU6ICd3ZWlnaHQtY29udHJvbC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBZGRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIldlaWdodF9Db250cm9sXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdkZXRveGlmaWNhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWluZXJhbF9NZXRhYm9saWNfQWN0aXZpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgbmFtZTogJ3NraW4tY29uZGl0aW9ucy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTa2luX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgbmFtZTogJ2hhaXItZ3Jvd3RoLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhhaXJfR3Jvd3RoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdsb3ctcGh5c2ljYWwtZHJpdmUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVyaWNhcmRpdW1fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBZHJlbmFsX0dsYW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTG93X1BoeXNpY2FsX0RyaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdsb3ctbWVudGFsLWRyaXZlLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMb3dfTWVudGFsX0RyaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZXJ2b3VzX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0cmVzcyByZWxpZWYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnc3RyZXNzLXJlbGllZi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJKb3lcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzdHJlc3MgcmVsaWVmJyxcclxuICAgICAgICAgICAgbmFtZTogJ3ZpdGFsaXR5LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSm95XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJWaXRhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0cmVzcyByZWxpZWYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnc2xlZXAtZW5oYW5jZXItdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNsZWVwX0VuaGFuY2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdlbmVyZ3ktYm9vc3Rlci11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBZHJlbmFsX0dsYW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFeGhhdXN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzdHJlc3MgcmVsaWVmJyxcclxuICAgICAgICAgICAgbmFtZTogJ2h5cGVydGVuc2lvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkh5cGVydGVuc2lvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0Z1bmN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0cmVzcyByZWxpZWYnLFxyXG4gICAgICAgICAgICBuYW1lOiAndGh5cm9pZC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUaHlyb2lkX0dsYW5kc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVGhyb2F0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0cmVzcyByZWxpZWYnLFxyXG4gICAgICAgICAgICBuYW1lOiAnbG93LW1lbnRhbC1kcml2ZS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTG93X01lbnRhbF9Ecml2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgbmFtZTogJ3JlZ2VuZXJhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29ubmVjdGl2ZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIG5hbWU6ICd2aXRhbGl0eS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQm9vc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJWaXRhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICBuYW1lOiAnam95LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlYWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJKb3lcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNZXRhbF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdzbGVlcC1lbmhhbmNlci11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2xlZXBfRW5oYW5jZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICBuYW1lOiAnaGVhcnQtZnVuY3Rpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRmlyZV9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfRnVuY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUcmlwbGVfV2FybWVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2ludXNfQ2F2aXRpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdoeXBlcnRlbnNpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVyaWNhcmRpdW1fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIeXBlcnRlbnNpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgbmFtZTogJ2dsdWNvc2UtbWV0YWJvbGljLWRpc29yZGVycy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkdsdWNvc2VfTWV0YWJvbGljX0Rpc29yZGVyc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNwbGVlbl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgbmFtZTogJ2hlbW9ycmhvaWRzLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlbW9ycmhvaWRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29uc3RpcGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIG5hbWU6ICd1cmluYXJ5LXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJVcmluYXJ5X1N5c3RlbS9DeXN0aXRpc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlVyaW5hcnlfQmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgbmFtZTogJ2NvbGQtZmx1LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGbHVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdwYWluLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGFpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjaGFrcmEgYmFsYW5jaW5nJyxcclxuICAgICAgICAgICAgbmFtZTogJ2xvd2VyLWNoYWtyYS1iYWxhbmNpbmctdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUm9vdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU29sYXJfUGxleHVzX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVhcnRoX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnY2hha3JhIGJhbGFuY2luZycsXHJcbiAgICAgICAgICAgIG5hbWU6ICd1cHBlci1jaGFrcmEtYmFsYW5jaW5nLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRocm9hdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNyb3duX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjaGFrcmEgYmFsYW5jaW5nJyxcclxuICAgICAgICAgICAgbmFtZTogJ21lZGl0YXRpb24tYmFzaWNzLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnY2hha3JhIGJhbGFuY2luZycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtZWRpdGF0aW9uLW1lZGl1bS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNZWRpdGF0aW9uXzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUaHJvYXRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnY2hha3JhIGJhbGFuY2luZycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtZWRpdGF0aW9uLWFkdmFuY2VkLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ3Jvd25fQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSm95XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgbmFtZTogJ2VhcnRoLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU3RvbWFjaF9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNwbGVlbl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVhcnRoX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZmlyZS1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU21hbGxfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRmlyZV9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgbmFtZTogJ2ZpcmUtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRyaXBsZV9XYXJtZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGaXJlX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnbWV0YWwtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGFyZ2VfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWV0YWxfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNraW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIG5hbWU6ICd3YXRlci1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlVyaW5hcnlfQmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIldhdGVyX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCb25lX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnd29vZC1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJXb29kX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFeWVzaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdsaXZlci1mdW5jdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkdhbGxibGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTb2xhcl9QbGV4dXNfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgbmFtZTogJ2hlYXJ0LWZ1bmN0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU21hbGxfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgbmFtZTogJ2tpZG5leS1mdW5jdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJVcmluYXJ5X0JsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFeGhhdXN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgbmFtZTogJ2xhcmdlLWludGVzdGluZS1iYWxhbmNpbmctdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGFyZ2VfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTb2xhcl9QbGV4dXNfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAncGVyaWNhcmRpdW0tZmxvdy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRyaXBsZV9XYXJtZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnc3RvbWFjaC1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTdG9tYWNoX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU3BsZWVuX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTb2xhcl9QbGV4dXNfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyMScsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHNzJyxcclxuICAgICAgICAgICAgbmFtZTogJ3JvdXRpbmUtcGV0cy11cHBlcjInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGFyZ2VfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHNzJyxcclxuICAgICAgICAgICAgbmFtZTogJ3JvdXRpbmUtcGV0cy11cHBlcjMnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzcycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdyb3V0aW5lLXBldHMtdXBwZXI0JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyNScsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTa2luX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyNicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyNycsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHNzJyxcclxuICAgICAgICAgICAgbmFtZTogJ3JvdXRpbmUtcGV0cy11cHBlcjgnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyMScsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHN4JyxcclxuICAgICAgICAgICAgbmFtZTogJ3JvdXRpbmUtcGV0eC11cHBlcjInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGFyZ2VfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHN4JyxcclxuICAgICAgICAgICAgbmFtZTogJ3JvdXRpbmUtcGV0eC11cHBlcjMnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzeCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdyb3V0aW5lLXBldHgtdXBwZXI0JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyNScsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTa2luX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyNicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyNycsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHN4JyxcclxuICAgICAgICAgICAgbmFtZTogJ3JvdXRpbmUtcGV0eC11cHBlcjgnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFByb2dyYW1zIDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2FkZGljdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjA1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYWRkaWN0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnYWRyZW5hbC1nbGFuZC11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRyZW5hbF9HbGFuZFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTowN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2FkcmVuYWwtZ2xhbmQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhbnRpLWFnaW5nLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJBbnRpX0FnaW5nXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjExOjAxXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYW50aS1hZ2luZy1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnYXVkaXRvcnktdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkF1ZGl0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDozMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2F1ZGl0b3J5LWRlc2NyaXB0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2JhY2thY2hlLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJCYWNrYWNoZVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjozMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2JhY2thY2hlLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2JvbmVzLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJCb25lX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6MDRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdib25lcy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2NoaWxkLWRldmVsb3BlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2hpbGRfRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjaGlsZC1kZXZlbG9wZW1lbnQtZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnY2lyY3VsYXRvcnktc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6MDZcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjaXJjdWxhdG9yeS1zeXN0ZW0tZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAgJ2NvbmNlbnRyYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkNvbmNlbnRyYXRpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMjE6MTlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjb25jZW50cmF0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnY29ubmVjdGl2ZS10aXNzdWUtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkNvbm5lY3RpdmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjo1NFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2Nvbm5lY3RpdmUtdGlzc3VlLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2NvbnN0aXBhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29uc3RpcGF0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjQ5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnY29uc3RpcGF0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZGV0b3hpZmljYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjEzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGV0b3hpZmljYXRpb24tZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZGlhcnJoZWEtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkRpYXJyaGVhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjU5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGlhcnJoZWEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdkaWdlc3RpdmUtc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjQxXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGlnZXN0aXZlLXN5c3RlbS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2Rpc2Nlcm5tZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJEaXNjZXJubWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzozN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2Rpc2Nlcm5tZW50LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZW5lcmd5LWJhbGFuY2luZy11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzo1NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2VuZXJneS1iYWxhbmNpbmctZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZW5lcmd5LWJvb3N0ZXItdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjUzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZW5lcmd5LWJvb3N0ZXItZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiRS1TTU9HXCIsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjUxXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZS1zbW9nLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZXhoYXVzdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRXhoYXVzdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDo1OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2V4aGF1c3Rpb24tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdleWVzaWdodC11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRXllc2lnaHRcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MTFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdleWVzaWdodC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2ZlbWFsZS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRmVtYWxlX0hvcm1vbmVfQmFsYW5jZVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDoxN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZlbWFsZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2ZsdS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRmx1XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjU5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmx1LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2dsdWNvc2UtbWV0YWJvbGljLWRpc29yZGVycy11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiR2x1Y29zZV9NZXRhYm9saWNfRGlzb3JkZXJzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjI4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZ2x1Y29zZS1tZXRhYm9saWMtZGlzb3JkZXJzLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2hhaXItZ3Jvd3RoLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJIYWlyX0dyb3d0aFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxOTowN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2hhaXItZ3Jvd3RoLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnaGVhZGFjaGUtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkhlYWRhY2hlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjM4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaGVhZGFjaGUtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdoZWFydC1mdW5jdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfRnVuY3Rpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6MzBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdoZWFydC1mdW5jdGlvbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdoZW1vcnJob2lkcy11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVtb3JyaG9pZHNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMjE6MTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdoZW1vcnJob2lkcy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2h5cGVydGVuc2lvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSHlwZXJ0ZW5zaW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjUzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaHlwZXJ0ZW5zaW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnaW1tdW5lLXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDo1MFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ltbXVuZS1zeXN0ZW0tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdpbmp1cnktdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxODo0NlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2luanVyeS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2ludGVzdGluYWwtZmxvcmEtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkludGVzdGluYWxfRmxvcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTg6NThcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdpbnRlc3RpbmFsLWZsb3JhLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnam9pbnRzLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJKb2ludHNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6MDdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdqb2ludHMtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdqb3ktdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkpveVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMTowNFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2pveS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJKRVQtTEFHXCIsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSmV0LUxhZy9DbGltYXRlX0NoYW5nZVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjoxNFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2pldC1sYWctZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdsb3ctbWVudGFsLWRyaXZlLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJMb3dfTWVudGFsX0RyaXZlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjQ5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbG93LW1lbnRhbC1kcml2ZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2xvdy1waHlzaWNhbC1kcml2ZS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTG93X1BoeXNpY2FsX0RyaXZlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjQ5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbG93LXBoeXNpY2FsLWRyaXZlLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnbHltcGhhdGljLXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjowNFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2x5bXBoYXRpYy1zeXN0ZW0tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdtYWxlLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJNYWxlX0hvcm1vbmVfQmFsYW5jZVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMjozMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21hbGUtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdtZWRpdGF0aW9uLTEtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fMVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIzMzoxNVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21lZGl0YXRpb24tMS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ21lZGl0YXRpb24tMi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTWVkaXRhdGlvbl8yXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjI5OjQzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbWVkaXRhdGlvbi0yLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnbWVkaXRhdGlvbi0zLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJNZWRpdGF0aW9uXzNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMjI6NDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtZWRpdGF0aW9uLTMtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdtaW5lcmFsLW1ldGFib2xpYy1hY3Rpdml0eS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTWluZXJhbF9NZXRhYm9saWNfQWN0aXZpdHlcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6MjVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtaW5lcmFsLW1ldGFib2xpYy1hY3Rpdml0eS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ211c2NsZS10aXNzdWUtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjU5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbXVzY2xlLXRpc3N1ZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ25lY2stc2hvdWxkZXItdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk5lY2svU2hvdWxkZXJcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MTZcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICduZWNrLXNob3VsZGVyLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnbmVydm91cy1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE5OjEwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbmVydm91cy1zeXN0ZW0tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdwZWFjZS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMjI6MDhcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdwZWFjZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3BhaW4tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlBhaW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNToxOFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3BhaW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdyZWdlbmVyYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlJlZ2VuZXJhdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzoxMlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3JlZ2VuZXJhdGlvbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3JlbGF4YXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTk6NTVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdyZWxheGF0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncmVzcGlyYXRvcnktc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6NTJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdyZXNwaXJhdG9yeS1zeXN0ZW0tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdzaW51cy1jYXZpdGllcy11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU2ludXNfQ2F2aXRpZXNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6MzNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzaW51cy1jYXZpdGllcy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3NraW4tY29uZGl0aW9ucy11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU2tpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjUwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc2tpbi1jb25kaXRpb25zLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnc2xlZXAtZW5oYW5jZXItdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ25vbmUnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlNsZWVwX0VuaGFuY2VyXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE5OjU4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc2xlZXAtZW5oYW5jZXItZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdzdHJlc3MtcmVsaWVmLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxODo1NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3N0cmVzcy1yZWxpZWYtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0aHlyb2lkLWdsYW5kcy11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVGh5cm9pZF9HbGFuZHNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6NTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0aHlyb2lkLWdsYW5kcy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd1cmluYXJ5LXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJVcmluYXJ5X1N5c3RlbS9DeXN0aXRpc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzozOVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3VyaW5hcnktZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAndmVydGVicmFlLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJWZXJ0ZWJyYWVcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTI6NTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd2ZXJ0ZWJyYWUtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd2aXRhbGl0eS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbm9uZScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVml0YWxpdHlcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6MDBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd2aXRhbGl0eS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ3dlaWdodC1jb250cm9sLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdub25lJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJXZWlnaHRfQ29udHJvbFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDo1MFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3dlaWdodC1jb250cm9sLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncGV0c3MtcHJvZ3JhbS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAncGV0cycsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTE6NTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdwZXRzcy1wcm9ncmFtLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncGV0c3gtcHJvZ3JhbS11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAncGV0cycsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTI6NTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdwZXRzeC1wcm9ncmFtLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnc3RvbWFjaC1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbWVyaWRpYW4nLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlN0b21hY2hfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6MTVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzdG9tYWNoLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnc3BsZWVuLXBhbmNyZWFzLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdtZXJpZGlhbicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU3BsZWVuX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjM3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc3BsZWVuLXBhbmNyZWFzLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnaGVhcnQtbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ21lcmlkaWFuJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDo0NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2hlYXJ0LW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnc21hbGwtaW50ZXN0aW5lLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdtZXJpZGlhbicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU21hbGxfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjI1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc21hbGwtaW50ZXN0aW5lLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncGVyaWNhcmRpdW0tbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ21lcmlkaWFuJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMTo1NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3BlcmljYXJkaXVtLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAndHJpcGxlLXdhcm1lci1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbWVyaWRpYW4nLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlRyaXBsZV9XYXJtZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6MjBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0cmlwbGUtd2FybWVyLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnbHVuZy1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnbWVyaWRpYW4nLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MzhcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdsdW5nLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnbGFyZ2UtaW50ZXN0aW5lLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdtZXJpZGlhbicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTGFyZ2VfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjUzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbGFyZ2UtaW50ZXN0aW5lLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAna2lkbmV5LW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdtZXJpZGlhbicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjI3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAna2lkbmV5LW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAndXJpbmFyeS1ibGFkZGVyLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdtZXJpZGlhbicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVXJpbmFyeV9CbGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjE5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAndXJpbmFyeS1ibGFkZGVyLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnbGl2ZXItbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ21lcmlkaWFuJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjoxMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2xpdmVyLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnZ2FsbGJsYWRkZXItbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ21lcmlkaWFuJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJHYWxsYmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMDozOVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2dhbGxibGFkZGVyLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImZpcnN0LWNoYWtyYS11cHBlclwiLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ2NoYWtyYScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUm9vdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6NDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcxLWNoYWtyYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJzZWNvbmQtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnY2hha3JhJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjU3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnMi1jaGFrcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidGhpcmQtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnY2hha3JhJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJTb2xhcl9QbGV4dXNfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjUxXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnMy1jaGFrcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZm91cnRoLWNoYWtyYS11cHBlclwiLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ2NoYWtyYScsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjE2XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNC1jaGFrcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZmlmdGgtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnY2hha3JhJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJUaHJvYXRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjU5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNS1jaGFrcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2l4dGgtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnY2hha3JhJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjoxM1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzYtY2hha3JhLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNldmVudGgtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnY2hha3JhJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJDcm93bl9DaGFrcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NDVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICc3LWNoYWtyYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2VhcnRoLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ2VsZW1lbnQnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkVhcnRoX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6NTVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdlYXJ0aC1lbGVtZW50LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnd2F0ZXItZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHJlYWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgc29ydENhdGVnb3J5OiAnZWxlbWVudCcsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiV2F0ZXJfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzoyMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3dhdGVyLWVsZW1lbnQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdmaXJlLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ2VsZW1lbnQnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkZpcmVfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTowNVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZpcmUtZWxlbWVudC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ21ldGFsLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICByZWFsTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNvcnRDYXRlZ29yeTogJ2VsZW1lbnQnLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk1ldGFsX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTI6MzlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtZXRhbC1lbGVtZW50LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnd29vZC1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcmVhbE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzb3J0Q2F0ZWdvcnk6ICdlbGVtZW50JyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJXb29kX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6MDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd3b29kLWVsZW1lbnQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9vZmZsaW5lX2RhdGEudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBFdmVudHMsIENvbnRlbnQgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vZmZsaW5lX2RhdGEnO1xuaW1wb3J0IHsgUm91dGluZXNQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9yb3V0aW5lcy9yb3V0aW5lcyc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJvZ3JhbVBhZ2UgfSBmcm9tICcuLi9wcm9ncmFtL3Byb2dyYW0nO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJEaWFsb2cgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwaW5uZXItZGlhbG9nJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBQcm9ncmFtc1BhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtcHJvZ3JhbXMnLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyYW1zLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmFtc1BhZ2Uge1xuICBAVmlld0NoaWxkKENvbnRlbnQpIGNvbnRlbnQ6IENvbnRlbnQ7XG4gIHB1YmxpYyBwcmVkZWZpbmVkUHJvZ3JhbXMgOiBhbnk7XG4gIHB1YmxpYyBwcm9ncmFtcyA6IGFueTtcbiAgcHVibGljIHByb2dyYW0gOiBudW1iZXI7XG4gIHB1YmxpYyBwcm9ncmFtTmFtZTEgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtTmFtZTIgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtTmFtZTMgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtTmFtZTQgOiBzdHJpbmc7XG4gIHB1YmxpYyBiYXNpY0J1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBidXNpbmVzc1RyYXZlbEJ1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBmYW1pbGl5QnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIGF0aGxldGVCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgc3BhQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIHN0cmVzc0J1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBzZW5pb3JCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgY2hha3JhQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIGVsZW1lbnRzQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIHBldHNzQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIHBldHN4QnV0dG9uIDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHVibGljIHJvdXRpbmVzOiBSb3V0aW5lc1Byb3ZpZGVyLCBwdWJsaWMgZXZlbnRzOiBFdmVudHMsXG4gICAgcHJpdmF0ZSBzcGlubmVyRGlhbG9nOiBTcGlubmVyRGlhbG9nKSB7XG4gICAgICB0aGlzLnByb2dyYW0gPSBuYXZQYXJhbXMuZ2V0KCdidWJibGUnKTtcblxuICAgICAgdGhpcy5ldmVudHMuc3Vic2NyaWJlKCdhZGQxUHJvZ3JhbUV2ZW50JywgKHByb2dyYW1OdW1iZXIsIHByb2dyYW1OYW1lLCBwcm9ncmFtUnVubmluZ1RpbWUsIHByb2dyYW1BcGlOYW1lKSA9PiB7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW1OdW1iZXI7XG4gICAgICAgIHRoaXMuYWRkMVByb2dyYW0ocHJvZ3JhbU5hbWUsIHByb2dyYW1SdW5uaW5nVGltZSwgcHJvZ3JhbUFwaU5hbWUpO1xuICAgICAgICB0aGlzLm5hdkN0cmwucG9wKCk7XG4gICAgICB9KTtcbiAgfVxuICBpb25WaWV3RGlkTGVhdmUoKXtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5U2Nyb2xsVG9wLCB0aGlzLmNvbnRlbnQuZ2V0Q29udGVudERpbWVuc2lvbnMoKS5zY3JvbGxUb3ApO1xuICB9XG5cbiAgY29tcGFyZSggYSwgYiApIHtcbiAgaWYgKCBhLnJlYWxOYW1lIDwgYi5yZWFsTmFtZSApe1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoIGEucmVhbE5hbWUgPiBiLnJlYWxOYW1lICl7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbiAgaW9uVmlld0RpZExvYWQoKXtcbiAgICAgIHRoaXMuc3Bpbm5lckRpYWxvZy5zaG93KCk7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5Q3VycmVudFByb2dyYW0pLnRoZW4oKHByb2dyYW0pPT57XG4gICAgICAgIHRoaXMuZ2V0UHJvZ3JhbXMocHJvZ3JhbSAhPSBudWxsID8gcHJvZ3JhbSA6ICdiYXNpYycpO1xuICAgICAgfSlcbiAgICAgIGxldCBwcm9ncmFtc19yYXcgPSBbXTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgodmFsdWUpID0+e1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBEYXRhLlByb2dyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGxldCBwcm9ncmFtID0gRGF0YS5Qcm9ncmFtc1tpXTsgICBcbiAgICAgICAgICAgICAgbGV0IHJlYWxOYW1lID0gdmFsdWVbcHJvZ3JhbS5uYW1lXTtcblxuICAgICAgICAgICAgICBwcm9ncmFtLnJlYWxOYW1lID0gcmVhbE5hbWUgPyByZWFsTmFtZSA6IHByb2dyYW0ubmFtZTtcbiAgICAgICAgICAgICAgcHJvZ3JhbXNfcmF3W2ldID0gcHJvZ3JhbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHByb2dyYW1zX3NvcnQgPSBwcm9ncmFtc19yYXcuc29ydChzZWxmLmNvbXBhcmUpO1xuICAgICAgICAgICAgbGV0IGdlbmVyYWwgPSBbXTtcbiAgICAgICAgICAgIGxldCBnZW5lcmFsX2luZGV4ID0gMDtcbiAgICAgICAgICAgIGxldCBwZXRzID0gW107XG4gICAgICAgICAgICBsZXQgcGV0c19pbmRleCA9IDA7XG4gICAgICAgICAgICBsZXQgbWVyaWRpYW5zID0gW107XG4gICAgICAgICAgICBsZXQgbWVyaWRpYW5zX2luZGV4ID0gMDtcbiAgICAgICAgICAgIGxldCBjaGFrcmFzID0gW107XG4gICAgICAgICAgICBsZXQgY2hha3Jhc19pbmRleCA9IDA7XG4gICAgICAgICAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50c19pbmRleCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHByb2dyYW1zX3NvcnQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgbGV0IHByb2dyYW0gPSBwcm9ncmFtc19zb3J0W2pdOyAgICAgICAgXG4gICAgICAgICAgICAgIHN3aXRjaCAocHJvZ3JhbS5zb3J0Q2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgICAgICAgICAgICAgZ2VuZXJhbFtnZW5lcmFsX2luZGV4XSA9IHByb2dyYW07XG4gICAgICAgICAgICAgICAgICBnZW5lcmFsX2luZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZWxlbWVudFwiOlxuICAgICAgICAgICAgICAgICAgZWxlbWVudHNbZWxlbWVudHNfaW5kZXhdID0gcHJvZ3JhbTtcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnRzX2luZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibWVyaWRpYW5cIjpcbiAgICAgICAgICAgICAgICAgIG1lcmlkaWFuc1ttZXJpZGlhbnNfaW5kZXhdID0gcHJvZ3JhbTtcbiAgICAgICAgICAgICAgICAgIG1lcmlkaWFuc19pbmRleCArPSAxO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNoYWtyYVwiOlxuICAgICAgICAgICAgICAgICAgY2hha3Jhc1tjaGFrcmFzX2luZGV4XSA9IHByb2dyYW07XG4gICAgICAgICAgICAgICAgICBjaGFrcmFzX2luZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGV0c1wiOlxuICAgICAgICAgICAgICAgICAgcGV0c1twZXRzX2luZGV4XSA9IHByb2dyYW07XG4gICAgICAgICAgICAgICAgICBwZXRzX2luZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZW5lcmFsID0gZ2VuZXJhbC5zb3J0KHNlbGYuY29tcGFyZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGdlbmVyYWwubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgbGV0IHByb2dyYW0gPSBnZW5lcmFsW2tdOyAgICAgICAgXG4gICAgICAgICAgICAgIHByb2dyYW1zX3NvcnRba10gPSBwcm9ncmFtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBsID0gZ2VuZXJhbC5sZW5ndGg7IGwgPCBnZW5lcmFsLmxlbmd0aCArIGVsZW1lbnRzLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgIGxldCBwcm9ncmFtID0gZWxlbWVudHNbbCAtIGdlbmVyYWwubGVuZ3RoXTsgICBcbiAgICAgICAgICAgICAgcHJvZ3JhbXNfc29ydFtsXSA9IHByb2dyYW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIG0gPSBnZW5lcmFsLmxlbmd0aCArIGVsZW1lbnRzLmxlbmd0aDsgbSA8IGdlbmVyYWwubGVuZ3RoICsgZWxlbWVudHMubGVuZ3RoICsgbWVyaWRpYW5zLmxlbmd0aDsgbSsrKSB7XG4gICAgICAgICAgICAgIGxldCBwcm9ncmFtID0gbWVyaWRpYW5zW20gLSAoZ2VuZXJhbC5sZW5ndGggKyBlbGVtZW50cy5sZW5ndGgpXTsgICBcbiAgICAgICAgICAgICAgcHJvZ3JhbXNfc29ydFttXSA9IHByb2dyYW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIG4gPSBnZW5lcmFsLmxlbmd0aCArIGVsZW1lbnRzLmxlbmd0aCArIG1lcmlkaWFucy5sZW5ndGg7IG4gPCBnZW5lcmFsLmxlbmd0aCArIGVsZW1lbnRzLmxlbmd0aCArIG1lcmlkaWFucy5sZW5ndGggKyBjaGFrcmFzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgIGxldCBwcm9ncmFtID0gY2hha3Jhc1tuIC0gKGdlbmVyYWwubGVuZ3RoICsgZWxlbWVudHMubGVuZ3RoICsgbWVyaWRpYW5zLmxlbmd0aCldOyAgIFxuICAgICAgICAgICAgICBwcm9ncmFtc19zb3J0W25dID0gcHJvZ3JhbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgbyA9IGdlbmVyYWwubGVuZ3RoICsgZWxlbWVudHMubGVuZ3RoICsgbWVyaWRpYW5zLmxlbmd0aCArIGNoYWtyYXMubGVuZ3RoOyBvIDwgZ2VuZXJhbC5sZW5ndGggKyBlbGVtZW50cy5sZW5ndGggKyBtZXJpZGlhbnMubGVuZ3RoICsgY2hha3Jhcy5sZW5ndGggKyBwZXRzLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgIGxldCBwcm9ncmFtID0gcGV0c1tvIC0gKGdlbmVyYWwubGVuZ3RoICsgZWxlbWVudHMubGVuZ3RoICsgbWVyaWRpYW5zLmxlbmd0aCArIGNoYWtyYXMubGVuZ3RoKV07ICAgXG4gICAgICAgICAgICAgIHByb2dyYW1zX3NvcnRbb10gPSBwcm9ncmFtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb2dyYW1zID0gcHJvZ3JhbXNfc29ydDtcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lckRpYWxvZy5oaWRlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgIHRoaXMucm91dGluZXMuZ2V0S2V5KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMSkudGhlbih2YWwgPT4ge1xuICAgICAgICBpZih0aGlzLnByb2dyYW0gIT0gMSAmJiB2YWwgIT0gbnVsbCAmJiB2YWwubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTEgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUxID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5yb3V0aW5lcy5nZXRLZXkoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUyKS50aGVuKHZhbCA9PiB7XG4gICAgICAgIGlmKHRoaXMucHJvZ3JhbSAhPSAyICYmIHZhbCAhPSBudWxsICYmIHZhbC5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lMiA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTIgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnJvdXRpbmVzLmdldEtleShDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTMpLnRoZW4odmFsID0+IHtcbiAgICAgICAgaWYodGhpcy5wcm9ncmFtICE9IDMgJiYgdmFsICE9IG51bGwgJiYgdmFsLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUzID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lMyA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMucm91dGluZXMuZ2V0S2V5KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlNCkudGhlbih2YWwgPT4ge1xuICAgICAgICBpZih0aGlzLnByb2dyYW0gIT0gNCAmJiB2YWwgIT0gbnVsbCAmJiB2YWwubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTQgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWU0ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlTY3JvbGxUb3ApLnRoZW4oKHNjcm9sbCk9PntcbiAgICAgICAgICB0aGlzLmNvbnRlbnQuc2Nyb2xsVG8oMCwgc2Nyb2xsLCAxMDApO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDUwMCk7XG4gIH1cblxuICBzZWxlY3RQcmVTZXRQcm9ncmFtKGNhdGVnb3J5KXtcbiAgICAgIHRoaXMuZ2V0UHJvZ3JhbXMoY2F0ZWdvcnkpO1xuICB9XG5cbiAgZ2V0UHJvZ3JhbXMoY2F0ZWdvcnkpe1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlDdXJyZW50UHJvZ3JhbSwgY2F0ZWdvcnkpO1xuICAgIHRoaXMuYmFzaWNCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmJ1c2luZXNzVHJhdmVsQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5mYW1pbGl5QnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5hdGhsZXRlQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5zcGFCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnN0cmVzc0J1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuc2VuaW9yQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5jaGFrcmFCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmVsZW1lbnRzQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5wZXRzc0J1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMucGV0c3hCdXR0b24gPSBmYWxzZTtcbiAgICBzd2l0Y2goY2F0ZWdvcnkpe1xuICAgICAgY2FzZSAnYmFzaWMnOlxuICAgICAgICB0aGlzLmJhc2ljQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdidXNpbmVzcyBhbmQgdHJhdmVsJzpcbiAgICAgICAgdGhpcy5idXNpbmVzc1RyYXZlbEJ1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmFtaWx5JzpcbiAgICAgICAgdGhpcy5mYW1pbGl5QnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhdGhsZXRlJzpcbiAgICAgICAgdGhpcy5hdGhsZXRlQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzcGEnOlxuICAgICAgICB0aGlzLnNwYUJ1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyZXNzIHJlbGllZic6XG4gICAgICAgIHRoaXMuc3RyZXNzQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZW5pb3InOlxuICAgICAgICB0aGlzLnNlbmlvckJ1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hha3JhIGJhbGFuY2luZyc6XG4gICAgICAgIHRoaXMuY2hha3JhQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbGVtZW50cyc6XG4gICAgICAgIHRoaXMuZWxlbWVudHNCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BldHNzJzpcbiAgICAgICAgdGhpcy5wZXRzc0J1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGV0c3gnOlxuICAgICAgICB0aGlzLnBldHN4QnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBncm91cHMgPSBbXTtcbiAgICB2YXIgZ3JvdXBJbmRleCA9IDA7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IERhdGEuR3JvdXBzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBncm91cCA9IERhdGEuR3JvdXBzW2ldO1xuICAgICAgaWYoZ3JvdXAuY2F0ZWdvcnkgPT0gY2F0ZWdvcnkpe1xuICAgICAgICBncm91cHNbZ3JvdXBJbmRleF0gPSBncm91cDtcbiAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGdyb3VwLnByb2dyYW1zLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICB2YXIgcHJvZ3JhbSA9IGdyb3VwLnByb2dyYW1zW2pdO1xuICAgICAgICAgIGdyb3VwLnByb2dyYW1zW2pdID0gdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtKHByb2dyYW0uYXBpTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXBJbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByZWRlZmluZWRQcm9ncmFtcyA9IGdyb3VwcztcbiAgfVxuXG4gIGFkZFByb2dyYW1zKHJvdXRpbmVOYW1lLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zLCBwcm9ncmFtNCl7XG4gICAgdGhpcy5uYXZDdHJsLnBvcCgpO1xuICAgIHZhciBidWJibGVOYW1lcyA9IHRoaXMucm91dGluZXMuYWRkUHJvZ3JhbXMocm91dGluZU5hbWUsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMsIHByb2dyYW00KTtcbiAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKFwic2hhcmVzQnViYmxlc1wiLCBidWJibGVOYW1lcyk7XG4gIH1cblxuICBhZGQxUHJvZ3JhbShwcm9ncmFtTmFtZSwgcHJvZ3JhbVJ1bm5pbmdUaW1lLCBwcm9ncmFtQXBpTmFtZSl7XG4gICAgdGhpcy5yb3V0aW5lcy5hZGRQcm9ncmFtVG9Sb3V0aW5lKHRoaXMucHJvZ3JhbSwgJycsIHByb2dyYW1OYW1lLCBwcm9ncmFtUnVubmluZ1RpbWUsIHByb2dyYW1BcGlOYW1lKTtcblxuICAgIHRoaXMucHJvZ3JhbU5hbWUxID0gdGhpcy5wcm9ncmFtID09IDEgPyBwcm9ncmFtTmFtZSA6ICh0aGlzLnByb2dyYW1OYW1lMS5sZW5ndGggPiAwID8gdGhpcy5wcm9ncmFtTmFtZTEgOiAnJyk7XG4gICAgdGhpcy5wcm9ncmFtTmFtZTIgPSB0aGlzLnByb2dyYW0gPT0gMiA/IHByb2dyYW1OYW1lIDogKHRoaXMucHJvZ3JhbU5hbWUyLmxlbmd0aCA+IDAgPyB0aGlzLnByb2dyYW1OYW1lMiA6ICcnKTtcbiAgICB0aGlzLnByb2dyYW1OYW1lMyA9IHRoaXMucHJvZ3JhbSA9PSAzID8gcHJvZ3JhbU5hbWUgOiAodGhpcy5wcm9ncmFtTmFtZTMubGVuZ3RoID4gMCA/IHRoaXMucHJvZ3JhbU5hbWUzIDogJycpO1xuICAgIHRoaXMucHJvZ3JhbU5hbWU0ID0gdGhpcy5wcm9ncmFtID09IDQgPyBwcm9ncmFtTmFtZSA6ICh0aGlzLnByb2dyYW1OYW1lNC5sZW5ndGggPiAwID8gdGhpcy5wcm9ncmFtTmFtZTQgOiAnJyk7XG5cbiAgICB0aGlzLnJvdXRpbmVzLnNldFByb2dyYW1zKHRoaXMucHJvZ3JhbU5hbWUxLCB0aGlzLnByb2dyYW1OYW1lMiwgdGhpcy5wcm9ncmFtTmFtZTMsIHRoaXMucHJvZ3JhbU5hbWU0KTtcblxuICAgIHZhciBidWJibGVOYW1lcyA9IFtcbiAgICAgIHRoaXMucHJvZ3JhbU5hbWUxLFxuICAgICAgdGhpcy5wcm9ncmFtTmFtZTIsXG4gICAgICB0aGlzLnByb2dyYW1OYW1lMyxcbiAgICAgIHRoaXMucHJvZ3JhbU5hbWU0XG4gICAgXTtcbiAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKFwic2hhcmVzQnViYmxlc1wiLCBidWJibGVOYW1lcyk7XG4gICAgdGhpcy5uYXZDdHJsLnBvcCgpO1xuICB9XG5cbiAgbW9yZVByb2dyYW1JbmZvKG5hbWUsIHJ1blRpbWUsIGRlc2NyaXB0aW9uLCBhcGlOYW1lKXtcbiAgICB0aGlzLm5hdkN0cmwucHVzaChQcm9ncmFtUGFnZSwgeyBwcm9ncmFtTnVtYmVyOiB0aGlzLnByb2dyYW0sIG5hbWU6IG5hbWUsIHJ1blRpbWU6IHJ1blRpbWUsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgYXBpTmFtZTogYXBpTmFtZSB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3Byb2dyYW1zL3Byb2dyYW1zLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgUHJvZ3JhbVBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtcHJvZ3JhbScsXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3JhbS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3JhbVBhZ2Uge1xuICBwdWJsaWMgcHJvZ3JhbU5hbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtUnVubmluZ1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtRGVzY3JpcHRpb24gOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtQXBpTmFtZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1OdW1iZXIgOiBudW1iZXI7XG4gIHB1YmxpYyBwcm9ncmFtUmVhbE5hbWUgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHVibGljIHN0b3JhZ2U6IFN0b3JhZ2UsXG4gICAgcHVibGljIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsIHB1YmxpYyBldmVudHM6IEV2ZW50cykge1xuICB9XG4gIGlvblZpZXdEaWRMb2FkKCl7XG4gICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgocHJvZykgPT57XG4gICAgICAgICAgdGhpcy5wcm9ncmFtUmVhbE5hbWUgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ25hbWUnKTtcbiAgICAgICAgICB2YXIgcHJvZ3JhbVRyYW5zbGF0ZU5hbWUgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ25hbWUnKTtcbiAgICAgICAgICBpZih0aGlzLmlzTmFtZU9uQXJyYXkoQ29uc3RhbnRzLnNob3J0VGl0bGVzLCBwcm9ncmFtVHJhbnNsYXRlTmFtZSkpXG4gICAgICAgICAgICBwcm9ncmFtVHJhbnNsYXRlTmFtZSA9IHByb2dyYW1UcmFuc2xhdGVOYW1lLnJlcGxhY2UoJy11cHBlcicsICctc2hvcnQnKTtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lID0gdHlwZW9mIHByb2dbcHJvZ3JhbVRyYW5zbGF0ZU5hbWVdID09PSAndW5kZWZpbmVkJyA/IHByb2dyYW1UcmFuc2xhdGVOYW1lIDogcHJvZ1twcm9ncmFtVHJhbnNsYXRlTmFtZV07XG4gICAgICAgICAgdGhpcy5wcm9ncmFtUnVubmluZ1RpbWUgPSB0eXBlb2YgcHJvZ1t0aGlzLm5hdlBhcmFtcy5nZXQoJ3J1blRpbWUnKV0gPT09ICd1bmRlZmluZWQnID8gdGhpcy5uYXZQYXJhbXMuZ2V0KCdydW5UaW1lJykgOiBwcm9nW3RoaXMubmF2UGFyYW1zLmdldCgncnVuVGltZScpXTtcbiAgICAgICAgICB0aGlzLnByb2dyYW1EZXNjcmlwdGlvbiA9IHR5cGVvZiBwcm9nW3RoaXMubmF2UGFyYW1zLmdldCgnZGVzY3JpcHRpb24nKV0gPT09ICd1bmRlZmluZWQnID8gdGhpcy5uYXZQYXJhbXMuZ2V0KCdkZXNjcmlwdGlvbicpIDogcHJvZ1t0aGlzLm5hdlBhcmFtcy5nZXQoJ2Rlc2NyaXB0aW9uJyldO1xuICAgICAgICAgIHRoaXMucHJvZ3JhbUFwaU5hbWUgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ2FwaU5hbWUnKTtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OdW1iZXIgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ3Byb2dyYW1OdW1iZXInKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYWRkMVByb2dyYW0ocHJvZ3JhbU5hbWUsIHByb2dyYW1SdW5uaW5nVGltZSwgcHJvZ3JhbUFwaU5hbWUpe1xuICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJhZGQxUHJvZ3JhbUV2ZW50XCIsIHRoaXMucHJvZ3JhbU51bWJlciwgdGhpcy5wcm9ncmFtUmVhbE5hbWUsIHRoaXMucHJvZ3JhbVJ1bm5pbmdUaW1lLCB0aGlzLnByb2dyYW1BcGlOYW1lKTtcbiAgfVxuXG4gIGlzTmFtZU9uQXJyYXkobmFtZXMsIG5hbWUpe1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihuYW1lc1tpXSA9PSBuYW1lKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3Byb2dyYW0vcHJvZ3JhbS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIFBsYXRmb3JtICB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBBUElTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbGF5aW5nUGFnZSB9IGZyb20gJy4uL3BsYXlpbmcvcGxheWluZyc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IE5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmstaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFdpZmlQYWdlIHBhZ2UuXHJcbiAqXHJcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxyXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BhZ2Utd2lmaScsXHJcbiAgdGVtcGxhdGVVcmw6ICd3aWZpLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lmaVBhZ2Uge1xyXG4gIHB1YmxpYyB0ZXN0QmVnaW5Sb3V0aW5lSW50ZXJ2YWwgOiBhbnk7XHJcbiAgcHVibGljIHRlc3RJUEludGVydmFsIDogYW55O1xyXG4gIHB1YmxpYyB0ZXN0U3RhdHVzSW50ZXJ2YWwgOiBhbnk7XHJcbiAgcHVibGljIGludGVydmFsQ291bnQgOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBteW1hdFN0YXR1cyA6IGJvb2xlYW47XHJcbiAgcHVibGljIG15bWF0V2lmaSA6IGJvb2xlYW47XHJcbiAgcHVibGljIG15bWF0Tm9TdGF0dXMgOiBib29sZWFuO1xyXG4gIHB1YmxpYyBiYXR0ZXJ5Q2hhcmdlIDogc3RyaW5nO1xyXG4gIHB1YmxpYyBiYXR0ZXJ5SW1nIDogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb2lsVGV4dCA6IHN0cmluZztcclxuICBwdWJsaWMgY29pbFRleHQxIDogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb2lsVGV4dDIgOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvaWxUZXh0MyA6IHN0cmluZztcclxuICBwdWJsaWMgY29pbFRleHQ0IDogc3RyaW5nO1xyXG4gIHB1YmxpYyBzaG93U3RhdHVzVGFibGUgOiBib29sZWFuO1xyXG4gIHB1YmxpYyBzaG93TG9hZGluZyA6IGJvb2xlYW47XHJcbiAgcHVibGljIGlzUnVuUm91dGluZUVuYWJsZWQgOiBib29sZWFuO1xyXG4gIHByaXZhdGUgcHJvZ3JhbTE6IGFueTtcclxuICBwcml2YXRlIHByb2dyYW0yOiBhbnk7XHJcbiAgcHJpdmF0ZSBwcm9ncmFtMzogYW55O1xyXG4gIHByaXZhdGUgcHJvZ3JhbTQ6IGFueTtcclxuXHJcbiAgcHVibGljIGlmcmFtZVVybDogYW55O1xyXG4gIHB1YmxpYyBzaG93SWZyYW1lU3RhdHVzIDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgYXBpU2VydmljZSA6IEFQSVNlcnZpY2VQcm92aWRlcixcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHVibGljIG5ldHdvcmtJbnRlcmZhY2UgOiBOZXR3b3JrSW50ZXJmYWNlLCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtKSB7XHJcbiAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PntcclxuICAgICAgICAgIHRoaXMuY29pbFRleHQgPSB0eXBlb2YgdmFsdWVbJ2NvaWwnXSA9PT0gJ3VuZGVmaW5lZCcgPyAnQW50ZW5hJyA6IHZhbHVlWydjb2lsJ107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnByb2dyYW0xID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdwcm9nMScpO1xyXG4gICAgICB0aGlzLnByb2dyYW0yID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdwcm9nMicpO1xyXG4gICAgICB0aGlzLnByb2dyYW0zID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdwcm9nMycpO1xyXG4gICAgICB0aGlzLnByb2dyYW00ID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdwcm9nNCcpO1xyXG4gIH1cclxuXHJcbiAgaW9uVmlld0RpZExlYXZlKCl7XHJcbiAgICB0aGlzLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIGlvblZpZXdEaWRMb2FkKCkge1xyXG4gICAgdGhpcy5teW1hdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93SWZyYW1lU3RhdHVzID0gZmFsc2U7XHJcbiAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IHRydWU7XHJcbiAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xyXG4gICAgICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UuZ2V0V2lGaUlQQWRkcmVzcygpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgIGlmKHRoaXMudmVyaWZ5SW50ZXJuYWxJcEFkZHJlc3MocmVzcG9uc2UpKXtcclxuICAgICAgICAgIHRoaXMudmVyaWZ5U3RhdHVzVmFsdWVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgIH0sKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdGhpcy52ZXJpZnlTdGF0dXNWYWx1ZXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMubXltYXRXaWZpID0gdHJ1ZTtcclxuICAgIHRoaXMuaW50ZXJ2YWxDb3VudCA9IDA7XHJcbiAgfVxyXG5cclxuICB2ZXJpZnlJbnRlcm5hbElwQWRkcmVzcyhpcCl7XHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgMjU2OyBpKyspe1xyXG4gICAgICBjb25zb2xlLmxvZyhDb25zdGFudHMubG9jYWxJUEFkZHJlc3MgKyBpKTtcclxuICAgICAgY29uc29sZS5sb2coaXApO1xyXG4gICAgICBpZihDb25zdGFudHMubG9jYWxJUEFkZHJlc3MgKyBpID09IGlwKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdmVyaWZ5U3RhdHVzVmFsdWVzKHJlc3RhcnQgPSB0cnVlKXtcclxuICAgIC8vdGhpcy5teW1hdFN0YXR1cyA9IHRydWU7XHJcbiAgICAvL3RoaXMuc2hvd1N0YXR1c1RhYmxlID0gdHJ1ZTtcclxuICAgIGlmKHJlc3RhcnQpe1xyXG4gICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iMTAwLnBuJztcclxuICAgICAgdGhpcy5jb2lsVGV4dDEgPSAnTi9BJztcclxuICAgICAgdGhpcy5jb2lsVGV4dDIgPSAnTi9BJztcclxuICAgICAgdGhpcy5jb2lsVGV4dDMgPSAnTi9BJztcclxuICAgICAgdGhpcy5jb2lsVGV4dDQgPSAnTi9BJztcclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMubXltYXRXaWZpID0gZmFsc2U7XHJcbiAgICAvL3RoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0SVBJbnRlcnZhbCk7XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgbXltYXQgaXMgY29ubmVjdGVkXHJcbiAgICB2YXIgbXlNYXRUZXN0ID0gdGhpcy5hcGlTZXJ2aWNlLnRlc3QoKTtcclxuICAgIG15TWF0VGVzdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAvLyBpZiBpcyBjb25uZWN0ZWQgcXVpdGFyIGltYWdlbiwgdGV4dG9zIHkgbG9hZGluZyB5IHBvbmVyIHN0YXR1cyBkZWwgbWF0XHJcbiAgICAgIGlmKHRoaXMudmVyaWZ5VmFsdWVzKHJlc3BvbnNlKSl7XHJcbiAgICAgICAgdGhpcy5zaG93U3RhdHVzKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICB0aGlzLmZhaWxJUFZlcmlmaWNhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9LCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd05vU3RhdHVzKCl7XHJcbiAgICAgIHRoaXMubXltYXROb1N0YXR1cyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzaG93U3RhdHVzKCl7XHJcbiAgICAgIHRoaXMubXltYXRXaWZpID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubXltYXRTdGF0dXMgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RTdGF0dXNJbnRlcnZhbCk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0SVBJbnRlcnZhbCk7XHJcblxyXG4gICAgICB0aGlzLnRlc3RJUEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmV0d29ya0ludGVyZmFjZS5nZXRXaUZpSVBBZGRyZXNzKCkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMudmVyaWZ5SW50ZXJuYWxJcEFkZHJlc3MocmVzcG9uc2UpKXtcclxuICAgICAgICAgICAgICB0aGlzLnZlcmlmeVN0YXR1c1ZhbHVlcyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICB0aGlzLm15bWF0V2lmaSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgIHRoaXMubXltYXRXaWZpID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICB2ZXJpZnlWYWx1ZXMocmVzcG9uc2Upe1xyXG4gICAgaWYocmVzcG9uc2UuaW5kZXhPZihcIjxwPjxoND5Qb3dlcjogXCIpID4gLTEpe1xyXG4gICAgICB2YXIgcG93ZXIgPSByZXNwb25zZS5zcGxpdChcIjxwPjxoND5Qb3dlcjogXCIpO1xyXG4gICAgICBwb3dlciA9IHBvd2VyWzFdLnNwbGl0KFwiPC9oND48L3A+XCIpO1xyXG4gICAgICB2YXIgY29pbDEgPSByZXNwb25zZS5zcGxpdChcIjx0cj48dGQ+MS48L3RkPjx0ZD5cIik7XHJcbiAgICAgIGNvaWwxID0gY29pbDFbMl0uc3BsaXQoXCI8L3RkPjwvdHI+XCIpO1xyXG4gICAgICB2YXIgY29pbDIgPSByZXNwb25zZS5zcGxpdChcIjx0cj48dGQ+Mi48L3RkPjx0ZD5cIik7XHJcbiAgICAgIGNvaWwyID0gY29pbDJbMl0uc3BsaXQoXCI8L3RkPjwvdHI+XCIpO1xyXG4gICAgICB2YXIgY29pbDMgPSByZXNwb25zZS5zcGxpdChcIjx0cj48dGQ+My48L3RkPjx0ZD5cIik7XHJcbiAgICAgIGNvaWwzID0gY29pbDNbMl0uc3BsaXQoXCI8L3RkPjwvdHI+XCIpO1xyXG4gICAgICB2YXIgY29pbDQgPSByZXNwb25zZS5zcGxpdChcIjx0cj48dGQ+NC48L3RkPjx0ZD5cIik7XHJcbiAgICAgIGNvaWw0ID0gY29pbDRbMl0uc3BsaXQoXCI8L3RkPjwvdHI+XCIpO1xyXG4gICAgICB0aGlzLmJhdHRlcnlDaGFyZ2UgPSBwb3dlclswXTtcclxuICAgICAgdmFyIHBvd2VyVmFsID0gcG93ZXJbMF0uc3Vic3RyKDAscG93ZXJbMF0ubGVuZ3RoLTEpO1xyXG4gICAgICBpZihwb3dlclZhbCA+IDc1KVxyXG4gICAgICAgICAgdGhpcy5iYXR0ZXJ5SW1nID0gJ2Fzc2V0cy9pbWcvYjEwMC5wbmcnO1xyXG4gICAgICBlbHNlIGlmKHBvd2VyVmFsID4gNTApXHJcbiAgICAgICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iNzUucG5nJztcclxuICAgICAgZWxzZSBpZihwb3dlclZhbCA+IDI1KVxyXG4gICAgICAgICAgdGhpcy5iYXR0ZXJ5SW1nID0gJ2Fzc2V0cy9pbWcvYjUwLnBuZyc7XHJcbiAgICAgIGVsc2UgaWYocG93ZXJWYWwgPiAxMClcclxuICAgICAgICAgIHRoaXMuYmF0dGVyeUltZyA9ICdhc3NldHMvaW1nL2IyNS5wbmcnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iMTAucG5nJztcclxuXHJcbiAgICAgIHRoaXMuY29pbFRleHQxID0gY29pbDFbMF07XHJcbiAgICAgIHRoaXMuY29pbFRleHQyID0gY29pbDJbMF07XHJcbiAgICAgIHRoaXMuY29pbFRleHQzID0gY29pbDNbMF07XHJcbiAgICAgIHRoaXMuY29pbFRleHQ0ID0gY29pbDRbMF07XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmYWlsSVBWZXJpZmljYXRpb24oKXtcclxuICAgICAgdGhpcy50ZXN0SVBJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UuZ2V0V2lGaUlQQWRkcmVzcygpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLnZlcmlmeUludGVybmFsSXBBZGRyZXNzKHJlc3BvbnNlKSl7XHJcbiAgICAgICAgICAgICAgdGhpcy52ZXJpZnlTdGF0dXNWYWx1ZXMoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICAvKmZhaWxTdGF0dXNWZXJpZmljYXRpb24oKXtcclxuICAgIHRoaXMudGVzdFN0YXR1c0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAvLyB0aW1lb3V0IG9mIG15bWF0IGRldGVjdGlvbiAxODAgc2VndW5kb3NcclxuICAgICAgdmFyIGZhaWxNeU1hdFRlc3QgPSB0aGlzLmFwaVNlcnZpY2UudGVzdCgpO1xyXG4gICAgICBmYWlsTXlNYXRUZXN0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy52ZXJpZnlWYWx1ZXMocmVzcG9uc2UpKXtcclxuICAgICAgICAgIHRoaXMuc2hvd1N0YXR1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5pbnRlcnZhbENvdW50ID49IDUpe1xyXG4gICAgICAgICAgdGhpcy5zaG93Tm9TdGF0dXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5pbnRlcnZhbENvdW50ICs9IDE7XHJcbiAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAvKnZhciBwcm9ncmFtcyA9ICcnO1xyXG5cclxuICAgIGZvcih2YXIgaSA9IDE7IGkgPD0gNDsgaSsrKXtcclxuICAgICAgc3dpdGNoKGkpe1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUxKS50aGVuKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgcHJvZ3JhbXMgKz0gXCI/UDE9XCIgKyB2YWwuc3BsaXQoXCJ8XCIpWzNdICsgJyYnO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMikudGhlbigodmFsKSA9PiB7XHJcbiAgICAgODU4XVxyXG4gICAgICAgIHByb2dyYW1zICs9IFwiUDI9XCIgKyB2YWwuc3BsaXQoXCJ8XCIpWzNdICsgJyYnO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMykudGhlbigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2dyYW1zICs9IFwiUDM9XCIgKyB2YWwuc3BsaXQoXCJ8XCIpWzNdICsgJyYnO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlNCkudGhlbigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2dyYW1zICs9IFwiUDQ9XCIgKyB2YWwuc3BsaXQoXCJ8XCIpWzNdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93SWZyYW1lU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5teW1hdFdpZmkgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lVXJsID0gdGhpcy5zYW5pdGl6ZS5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoQ29uc3RhbnRzLm15TWF0QXBpSW5kZXhVcmwgKyBwcm9ncmFtcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KiAvXHJcbiAgfSovXHJcblxyXG4gIHN0YXJ0Um91dGluZSgpe1xyXG4gICAgLyogQU5URVMgREUgQ09DUlJFUiBSVVRJTkEgVkVSSUZJQ0FSIFNJIFNFIEVTVEEgQ09ORUNUQURPIEFMIFdJRkkgREVMIE1ZTUFUICovXHJcbiAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLnRlc3QoKS50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLnZlcmlmeVZhbHVlcyhyZXNwb25zZSkpe1xyXG4gICAgICAgICAgLyogQ09SUkVSIFJVVElOQSAqL1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RTdGF0dXNJbnRlcnZhbCk7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGVzdElQSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgdmFyIHByb2dyYW0xT2JqID0gJ3wnICsgdGhpcy5wcm9ncmFtMS5uYW1lICsgJ3wnICsgdGhpcy5wcm9ncmFtMS5ydW5uaW5ndGltZSArICd8JyArIHRoaXMucHJvZ3JhbTEuYXBpTmFtZTtcclxuICAgICAgICAgIHZhciBwcm9ncmFtMk9iaiA9ICd8JyArIHRoaXMucHJvZ3JhbTIubmFtZSArICd8JyArIHRoaXMucHJvZ3JhbTIucnVubmluZ3RpbWUgKyAnfCcgKyB0aGlzLnByb2dyYW0yLmFwaU5hbWU7XHJcbiAgICAgICAgICB2YXIgcHJvZ3JhbTNPYmogPSAnfCcgKyB0aGlzLnByb2dyYW0zLm5hbWUgKyAnfCcgKyB0aGlzLnByb2dyYW0zLnJ1bm5pbmd0aW1lICsgJ3wnICsgdGhpcy5wcm9ncmFtMy5hcGlOYW1lO1xyXG4gICAgICAgICAgdmFyIHByb2dyYW00T2JqID0gJ3wnICsgdGhpcy5wcm9ncmFtNC5uYW1lICsgJ3wnICsgdGhpcy5wcm9ncmFtNC5ydW5uaW5ndGltZSArICd8JyArIHRoaXMucHJvZ3JhbTQuYXBpTmFtZTtcclxuXHJcbiAgICAgICAgICB2YXIgcHJvZ3JhbXMgPSBbXHJcbiAgICAgICAgICAgICAgcHJvZ3JhbTFPYmosXHJcbiAgICAgICAgICAgICAgcHJvZ3JhbTJPYmosXHJcbiAgICAgICAgICAgICAgcHJvZ3JhbTNPYmosXHJcbiAgICAgICAgICAgICAgcHJvZ3JhbTRPYmpcclxuICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnN0YXJ0KHByb2dyYW1zKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSArICcnKTtcclxuICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgIC8qc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdmFyIGVtYWlsRGF0YSA9IHsgZXJyb3IgOiByZXNwb25zZS5kYXRhIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRFcnJvcihlbWFpbERhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDEyMDAwMCk7Ki9cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIFBvbmVyIHJ1dGluYSBlbiBsYXMgdWx0aW1hcyBjb3JyaWRhc1xyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMubGF0ZXN0Um91dGluZXNLZXkpLnRoZW4oKHJvdXRpbmVzKT0+e1xyXG4gICAgICAgICAgICBsZXQgbGF0ZXN0QXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkYXkgPSB0LmdldERhdGUoKTtcclxuICAgICAgICAgICAgdmFyIG1vbnRoSW5kZXggPSB0LmdldE1vbnRoKCk7XHJcbiAgICAgICAgICAgIHZhciB5ZWFyID0gdC5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICB2YXIgaG91cnMgPSB0LmdldEhvdXJzKCk7XHJcbiAgICAgICAgICAgIHZhciBtaW51dGVzID0gdC5nZXRNaW51dGVzKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvZ3JhbXNBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvZ3JhbXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgIHByb2dyYW1zQXJyYXkucHVzaCh7IFwiYXBpTmFtZVwiIDogcHJvZ3JhbXNbaV0uc3BsaXQoJ3wnKVszXSwgXCJuYW1lXCIgOiBwcm9ncmFtc1tpXS5zcGxpdCgnfCcpWzFdIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYXRlc3RBcnJheS5wdXNoKHsgXCJkYXlcIiA6IGRheSwgXCJtb250aFwiIDogQ29uc3RhbnRzLm1vbnRoTmFtZXNbbW9udGhJbmRleF0sIFwieWVhclwiIDogeWVhciwgXCJob3Vyc1wiIDogdGhpcy5maXhaZXJvT25OdW1iZXIoaG91cnMpLCBcIm1pbnV0ZXNcIiA6IHRoaXMuZml4WmVyb09uTnVtYmVyKG1pbnV0ZXMpLCBcInByb2dyYW1zXCIgOiBwcm9ncmFtc0FycmF5IH0pO1xyXG4gICAgICAgICAgICBpZihyb3V0aW5lcyAhPSBudWxsICYmIHJvdXRpbmVzWzBdICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgIGxhdGVzdEFycmF5LnB1c2gocm91dGluZXNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHJvdXRpbmVzICE9IG51bGwgJiYgcm91dGluZXNbMV0gIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgbGF0ZXN0QXJyYXkucHVzaChyb3V0aW5lc1sxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMubGF0ZXN0Um91dGluZXNLZXksIGxhdGVzdEFycmF5KTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8qIENPUlJFUiBSVVRJTkEgKi9cclxuICAgICAgICAgIHRoaXMubmF2Q3RybC5zZXRSb290KFBsYXlpbmdQYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLm15bWF0V2lmaSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLm15bWF0U3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmZhaWxJUFZlcmlmaWNhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwocmVzcG9uc2UpPT57XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5teW1hdFdpZmkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubXltYXRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXhaZXJvT25OdW1iZXIodmFsKXtcclxuICAgIGlmKHZhbCA8IDEwKXtcclxuICAgICAgcmV0dXJuICcwJyArIHZhbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuICBcclxuICBcclxuXHJcbiAgc3RvcCgpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RTdGF0dXNJbnRlcnZhbCk7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMudGVzdElQSW50ZXJ2YWwpO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy93aWZpL3dpZmkudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IExvY2FsTm90aWZpY2F0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbG9jYWwtbm90aWZpY2F0aW9ucy9uZ3gnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBQbGF5aW5nUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1wbGF5aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICdwbGF5aW5nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQbGF5aW5nUGFnZSB7XG4gIHB1YmxpYyBwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nQXNUaW1lIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1UaXRsZTEgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtVGl0bGUyIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbVRpdGxlMyA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1UaXRsZTQgOiBzdHJpbmc7XG4gIHB1YmxpYyBkaXNwbGF5UnVubmluZ1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBmaW5pc2hUaW1lIDogYW55O1xuICBwdWJsaWMgdGltZXJSZW1haW4gOiBhbnk7XG4gIHB1YmxpYyB0aW1lcklkIDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlLFxuICAgIHB1YmxpYyB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIGxvY2FsTm90aWZpY2F0aW9ucyA6IExvY2FsTm90aWZpY2F0aW9ucywgcHVibGljIHBsdDogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXN1bWUnLCAoKSA9PiB7XG4gICAgICAgIHZhciB0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgX3RoaXMucmVzdW1lKHQuZ2V0VGltZSgpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2ltdWxhdGVSZXN1bWUoKXtcbiAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5yZXN1bWUodC5nZXRUaW1lKCkgKyAxMCk7XG4gIH1cblxuICByZXN1bWUobm93KXtcbiAgICBpZihNYXRoLnJvdW5kKG5vdyAvIDEwMDApID4gdGhpcy5maW5pc2hUaW1lKXtcbiAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gJzAwOjAwJztcbiAgICAgIHRoaXMudGltZXJSZW1haW4gPSAwO1xuICAgICAgdGhpcy50aW1lcklkKys7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy50aW1lcklkKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHZhciBzZWNvbmRzTGVmdCA9IHRoaXMudGltZXJSZW1haW4gPSB0aGlzLmZpbmlzaFRpbWUgLSBNYXRoLnJvdW5kKG5vdyAvIDEwMDApO1xuICAgICAgdGhpcy50aW1lcklkKys7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy50aW1lcklkKTtcbiAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZShzZWNvbmRzTGVmdCk7XG4gICAgfVxuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgdmFyIHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nO1xuICAgIHZhciBwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZztcbiAgICB2YXIgcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmc7XG4gICAgdmFyIHByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nO1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPD0gNDsgaSsrKXtcbiAgICAgIHN3aXRjaChpKXtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUxKS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbC5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA9IHZhbHVlWzJdOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUodmFsdWVbMl0pO1xuICAgICAgICAgICAgcHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmcgPSB2YWx1ZVsyXTtcblxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHByb2cpID0+e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbVRpdGxlMSA9IHR5cGVvZiBwcm9nW3ZhbHVlWzFdXSA9PT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZVsxXSA6IHByb2dbdmFsdWVbMV1dO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTIpLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsLnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nQXNUaW1lID0gdmFsdWVbMl07IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZSh2YWx1ZVsyXSk7XG4gICAgICAgICAgICBwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZyA9IHZhbHVlWzJdO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgocHJvZykgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtVGl0bGUyID0gdHlwZW9mIHByb2dbdmFsdWVbMV1dID09PSAndW5kZWZpbmVkJyA/IHZhbHVlWzFdIDogcHJvZ1t2YWx1ZVsxXV07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMykudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWwuc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgPSB2YWx1ZVsyXTsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHZhbHVlWzJdKTtcbiAgICAgICAgICAgIHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nID0gdmFsdWVbMl07XG5cbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKChwcm9nKSA9PntcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1UaXRsZTMgPSB0eXBlb2YgcHJvZ1t2YWx1ZVsxXV0gPT09ICd1bmRlZmluZWQnID8gdmFsdWVbMV0gOiBwcm9nW3ZhbHVlWzFdXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGU0KS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbC5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA9IHZhbHVlWzJdOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUodmFsdWVbMl0pO1xuICAgICAgICAgICAgcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmcgPSB2YWx1ZVsyXTtcblxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHByb2cpID0+e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbVRpdGxlNCA9IHR5cGVvZiBwcm9nW3ZhbHVlWzFdXSA9PT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZVsxXSA6IHByb2dbdmFsdWVbMV1dO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZyA+IHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nICYmIHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nID4gcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcgJiYgcHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmcgPiBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZylcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9IHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUocHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmcpO1xuICAgICAgICAgICAgZWxzZSBpZihwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZyA+IHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nICYmIHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nID4gcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPSBwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZzsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nKTtcbiAgICAgICAgICAgIGVsc2UgaWYocHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcgPiBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZylcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9IHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUocHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmc7IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZShwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZyk7XG5cbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gdGhpcy5kaXNwbGF5UnVubmluZ1RpbWU7XG4gICAgICAgICAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaFRpbWUgPSBNYXRoLnJvdW5kKHQuZ2V0VGltZSgpIC8gMTAwMCkgKyB0aGlzLmdldFNlY29uZHModGhpcy5kaXNwbGF5UnVubmluZ1RpbWUpO1xuXG4gICAgICAgICAgICB0aGlzLnRpbWVyUmVtYWluID0gdGhpcy5nZXRTZWNvbmRzKHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IDE7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy50aW1lcklkKTtcblxuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKChwcm9nKSA9PntcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZSh7XG4gICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTXlNYXQgTGlnaHQnLFxuICAgICAgICAgICAgICAgICAgdGV4dDogcHJvZ1sndGltZS1leHBpcmUtdGV4dCddLFxuICAgICAgICAgICAgICAgICAgc291bmQ6ICdmaWxlOi8vYXNzZXRzL3NvdW5kcy9nb25nX2M1Lm1wMycsXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB7IGF0OiBuZXcgRGF0ZSh0LmdldFRpbWUoKSArIHRoaXMuZ2V0U2Vjb25kcyh0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSkgKiAxMDAwKSB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5vbihcImNsaWNrXCIpLnN1YnNjcmliZSh7IG5leHQobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3RpZmljYXRpb24uaWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5yZXN1bWUodC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uVmlld1dpbGxMZWF2ZSgpIHtcbiAgICB0aGlzLnRpbWVyUmVtYWluID0gMDtcbiAgfVxuXG4gIHN0YXJ0VGltZXIoaWQpe1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYodGhpcy50aW1lclJlbWFpbiA9PSAwIHx8IHRoaXMudGltZXJJZCAhPSBpZCkgeyByZXR1cm47IH1cblxuICAgICAgdGhpcy50aW1lclJlbWFpbi0tO1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gdGhpcy5kZWNyZWFzZVNlY29uZCh0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy50aW1lclJlbWFpbiA+IDApe1xuICAgICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy50aW1lcklkKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGRlY3JlYXNlU2Vjb25kKHRpbWUpe1xuICAgIHZhciBtaW51dGVzU3RyID0gdGltZS5zdWJzdHIoMCx0aW1lLmluZGV4T2YoJzonKSk7XG4gICAgdmFyIG1pbnV0ZXMgPSBtaW51dGVzU3RyWzBdID09ICcwJyA/IHBhcnNlSW50KG1pbnV0ZXNTdHJbMV0pIDogcGFyc2VJbnQobWludXRlc1N0cik7XG4gICAgdmFyIHNlY29uZHNTdHIgPSB0aW1lLnN1YnN0cih0aW1lLmluZGV4T2YoJzonKSArIDEpO1xuICAgIHZhciBzZWNvbmRzID0gc2Vjb25kc1N0clswXSA9PSAnMCcgPyBwYXJzZUludChzZWNvbmRzU3RyWzFdKSA6IHBhcnNlSW50KHNlY29uZHNTdHIpO1xuICAgIGlmKHNlY29uZHMgLSAxID09IC0xKXtcbiAgICAgIG1pbnV0ZXNTdHIgPSBtaW51dGVzIC0gMSA8IDEwICYmIG1pbnV0ZXMgLSAxID49IDAgPyAnMCcgKyAobWludXRlcyAtIDEpIDogbWludXRlcyAtIDEgPT0gLTEgPyAnMDAnIDogJycgKyAobWludXRlcyAtIDEpO1xuICAgICAgc2Vjb25kc1N0ciA9ICc1OSc7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBzZWNvbmRzU3RyID0gc2Vjb25kcyAtIDEgPCAxMCA/ICcwJyArIChzZWNvbmRzIC0gMSkgOiAnJyArIChzZWNvbmRzIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiBtaW51dGVzU3RyICsgJzonICsgc2Vjb25kc1N0cjtcbiAgfVxuXG4gIGdldFNlY29uZHModGltZSl7XG4gICAgdmFyIG1pbnV0ZXNTdHIgPSB0aW1lLnN1YnN0cigwLHRpbWUuaW5kZXhPZignOicpKTtcbiAgICB2YXIgbWludXRlcyA9IG1pbnV0ZXNTdHJbMF0gPT0gJzAnID8gcGFyc2VJbnQobWludXRlc1N0clsxXSkgOiBwYXJzZUludChtaW51dGVzU3RyKTtcbiAgICB2YXIgc2Vjb25kc1N0ciA9IHRpbWUuc3Vic3RyKHRpbWUuaW5kZXhPZignOicpICsgMSk7XG4gICAgdmFyIHNlY29uZHMgPSBzZWNvbmRzU3RyWzBdID09ICcwJyA/IHBhcnNlSW50KHNlY29uZHNTdHJbMV0pIDogcGFyc2VJbnQoc2Vjb25kc1N0cik7XG4gICAgcmV0dXJuIChtaW51dGVzICogNjApICsgc2Vjb25kcztcbiAgfVxuXG4gIGNvbnZlcnRTZWNvbmRzVG9UaW1lKHRpbWVJblNlY29uZHMpIHtcbiAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IodGltZUluU2Vjb25kcyAvIDYwKTtcbiAgICB2YXIgbWludXRlc1N0ciA9IFwiMFwiICsgbWludXRlcztcbiAgICB2YXIgc2Vjb25kcyA9IFwiMFwiICsgKHRpbWVJblNlY29uZHMgLSBtaW51dGVzICogNjApO1xuICAgIHJldHVybiBtaW51dGVzU3RyLnN1YnN0cigtMikgKyBcIjpcIiArIHNlY29uZHMuc3Vic3RyKC0yKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3BsYXlpbmcvcGxheWluZy50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgSGVscFBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaGVscCcsXG4gIHRlbXBsYXRlVXJsOiAnaGVscC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSGVscFBhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMpIHtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBIZWxwUGFnZScpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9oZWxwL2hlbHAudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgRXZlbnRzIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIENvbnRhY3RQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWNvbnRhY3QnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbnRhY3QuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RQYWdlIHtcbiAgcHJpdmF0ZSBjb250YWN0Rm9ybSA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGNvbnRhY3REaXNhYmxlZCA6IGJvb2xlYW47XG4gIHB1YmxpYyAgbmFtZV92YWx1ZSA6IHN0cmluZztcbiAgcHVibGljICBlbWFpbF92YWx1ZSA6IHN0cmluZztcbiAgcHVibGljICBtZXNzYWdlX3ZhbHVlIDogc3RyaW5nO1xuICBwdWJsaWMgYnV0dG9uX3NlbmQgOiBzdHJpbmc7XG4gIHB1YmxpYyByZXNwb25zZV90ZXh0IDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgYXBpU2VydmljZSA6IEFQSVNlcnZpY2VQcm92aWRlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIGV2ZW50cyA6IEV2ZW50cykge1xuICAgIHRoaXMuY29udGFjdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIG1lc3NhZ2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcblxuICAgIHRoaXMuZXZlbnRzLnN1YnNjcmliZSgnc3dpdGNoTGFuZ0V2ZW50Q29udGFjdCcsKGxhbmcpID0+IHtcbiAgICAgICAgLy9jYWxsIG1ldGhvZHMgdG8gcmVmcmVzaCBjb250ZW50XG4gICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uVGV4dChsYW5nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuY2xlYW5Gb3JtKCk7XG4gICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gJyc7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICB0aGlzLmNoYW5nZUJ1dHRvblRleHQobGFuZyk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIGNoYW5nZUJ1dHRvblRleHQobGFuZyl7XG4gICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLmJ1dHRvbl9zZW5kID0gdmFsdWVbJ3NlbmQtdGV4dCddO1xuICAgICAgICAvLyBNb3N0cmFyIHRleHRvIGVuIGxhYmVsIGRlYmFqbyBkZWwgYm90b25cbiAgICAgIH0pO1xuICB9XG5cbiAgY2xlYW5Gb3JtKCl7XG4gICAgdGhpcy5jb250YWN0RGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubmFtZV92YWx1ZSA9ICcnO1xuICAgIHRoaXMuZW1haWxfdmFsdWUgPSAnJztcbiAgICB0aGlzLm1lc3NhZ2VfdmFsdWUgPSAnJztcbiAgfVxuXG4gIGF0dGVtcHRTZW5kTWFpbCgpe1xuICAgIHZhciBlbWFpbERhdGEgPSB7IGVtYWlsIDogdGhpcy5jb250YWN0Rm9ybS52YWx1ZS5lbWFpbCwgbmFtZSA6IHRoaXMuY29udGFjdEZvcm0udmFsdWUubmFtZSwgbWVzc2FnZSA6IHRoaXMuY29udGFjdEZvcm0udmFsdWUubWVzc2FnZSB9O1xuICAgIHRoaXMuYXBpU2VydmljZS5ydW5Qb3N0KCdjb250YWN0X3VzLnBocCcsZW1haWxEYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgdmFyIG9iaiA6IGFueSA9IHJlc3VsdDtcbiAgICAgICAgaWYgKG9iai5zdGF0dXMgPT0gXCJva1wiKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSB2YWx1ZVsnZW1haWwtc3VjY2Vzcy1tZXNzYWdlJ107XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uX3NlbmQgPSB2YWx1ZVsnc2VudC10ZXh0J107XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbkZvcm0oKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gdmFsdWVbJ2VtYWlsLWVycm9yLW1lc3NhZ2UnXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9IHZhbHVlWydlbWFpbC1lcnJvci1tZXNzYWdlJ107XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9jb250YWN0L2NvbnRhY3QudHMiLCJpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi50cyIsImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcbmltcG9ydCB7IElvbmljQXBwLCBJb25pY0Vycm9ySGFuZGxlciwgSW9uaWNNb2R1bGUgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnOyAvLyBzb2xvIHNlIHVzYSBwYXJhIGhhY2VyIGxhIHBydWViYSBkZSBjb25leGlvbiBjb24gZWwgTXlNYXRcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaHR0cCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XHJcbmltcG9ydCB7IE5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmstaW50ZXJmYWNlJztcclxuLy9pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcclxuaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9sb2NhbC1ub3RpZmljYXRpb25zL25neCc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RhdGUtcGlja2VyJzsgXHJcbmltcG9ydCB7IFNwaW5uZXJEaWFsb2cgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwaW5uZXItZGlhbG9nJztcclxuXHJcbmltcG9ydCB7IE15QXBwIH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9wYWdlcy9ob21lL2hvbWUnO1xyXG5pbXBvcnQgeyBIZWxwUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2hlbHAvaGVscCc7XHJcbmltcG9ydCB7IENvbnRhY3RQYWdlIH0gZnJvbSAnLi4vcGFnZXMvY29udGFjdC9jb250YWN0JztcclxuaW1wb3J0IHsgUHJvZ3JhbXNQYWdlIH0gZnJvbSAnLi4vcGFnZXMvcHJvZ3JhbXMvcHJvZ3JhbXMnO1xyXG5pbXBvcnQgeyBXaWZpUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3dpZmkvd2lmaSc7XHJcbmltcG9ydCB7IFBsYXlpbmdQYWdlIH0gZnJvbSAnLi4vcGFnZXMvcGxheWluZy9wbGF5aW5nJztcclxuaW1wb3J0IHsgUHJvZ3JhbVBhZ2UgfSBmcm9tICcuLi9wYWdlcy9wcm9ncmFtL3Byb2dyYW0nO1xyXG5pbXBvcnQgeyBTdWJzY3JpYmVQYWdlIH0gZnJvbSAnLi4vcGFnZXMvc3Vic2NyaWJlL3N1YnNjcmliZSc7XHJcbmltcG9ydCB7IFNsaWRlclBhZ2UgfSBmcm9tICcuLi9wYWdlcy9zbGlkZXIvc2xpZGVyJztcclxuaW1wb3J0IHsgRmF2b3JpdGVzUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2Zhdm9yaXRlcy9mYXZvcml0ZXMnO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyJztcclxuaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcGxhc2gtc2NyZWVuJztcclxuaW1wb3J0IHsgUm91dGluZXNQcm92aWRlciB9IGZyb20gJy4uL3Byb3ZpZGVycy9yb3V0aW5lcy9yb3V0aW5lcyc7XHJcbmltcG9ydCB7IEFQSVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XHJcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xyXG5pbXBvcnQgeyBEZXZpY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RldmljZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSHR0cExvYWRlckZhY3RvcnkoaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHAsICcuL2Fzc2V0cy9pMThuLycsICcuanNvbicpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXlBcHAsXHJcbiAgICBIb21lUGFnZSxcclxuICAgIEhlbHBQYWdlLFxyXG4gICAgQ29udGFjdFBhZ2UsXHJcbiAgICBQcm9ncmFtc1BhZ2UsXHJcbiAgICBXaWZpUGFnZSxcclxuICAgIFBsYXlpbmdQYWdlLFxyXG4gICAgU3Vic2NyaWJlUGFnZSxcclxuICAgIFNsaWRlclBhZ2UsXHJcbiAgICBQcm9ncmFtUGFnZSxcclxuICAgIEZhdm9yaXRlc1BhZ2VcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBIdHRwTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIElvbmljTW9kdWxlLmZvclJvb3QoTXlBcHApLFxyXG4gICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHtcclxuICAgICAgICBsb2FkZXI6IHtcclxuICAgICAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxyXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiBIdHRwTG9hZGVyRmFjdG9yeSxcclxuICAgICAgICAgICAgZGVwczogW0h0dHBDbGllbnRdXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW0lvbmljQXBwXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIE15QXBwLFxyXG4gICAgSG9tZVBhZ2UsXHJcbiAgICBIZWxwUGFnZSxcclxuICAgIENvbnRhY3RQYWdlLFxyXG4gICAgUHJvZ3JhbXNQYWdlLFxyXG4gICAgV2lmaVBhZ2UsXHJcbiAgICBQbGF5aW5nUGFnZSxcclxuICAgIFN1YnNjcmliZVBhZ2UsXHJcbiAgICBTbGlkZXJQYWdlLFxyXG4gICAgUHJvZ3JhbVBhZ2UsXHJcbiAgICBGYXZvcml0ZXNQYWdlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFN0YXR1c0JhcixcclxuICAgIFNwbGFzaFNjcmVlbixcclxuICAgIFJvdXRpbmVzUHJvdmlkZXIsXHJcbiAgICBOZXR3b3JrSW50ZXJmYWNlLFxyXG4gICAgTmV0d29yayxcclxuICAgIERldmljZSxcclxuICAgIExvY2FsTm90aWZpY2F0aW9ucyxcclxuICAgIERhdGVQaWNrZXIsXHJcbiAgICBTcGlubmVyRGlhbG9nLFxyXG4gICAgeyBwcm92aWRlOiBFcnJvckhhbmRsZXIsIHVzZUNsYXNzOiBJb25pY0Vycm9ySGFuZGxlciB9LFxyXG4gICAgQVBJU2VydmljZVByb3ZpZGVyLFxyXG4gICAgSFRUUFxyXG5cclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEhvbWVQYWdlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9odHRwJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG4vL2ltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbi8qXG4gIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEF1dGhTZXJ2aWNlUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVyc1xuICBhbmQgQW5ndWxhciBESS5cbiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQVBJU2VydmljZVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgaHR0cE5hdGl2ZTogSFRUUCwgcHVibGljIGh0dHBNb2R1bGU6IEh0dHAsIC8qLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmsqLykge1xuXG4gIH1cbiAgdGVzdF9sYW5ndWFnZSgpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmh0dHAuZ2V0KENvbnN0YW50cy5teU1hdEFwaUluZGV4VXJsKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB0ZXN0KCl7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmh0dHBNb2R1bGUuZ2V0KENvbnN0YW50cy5teU1hdEFwaUluZGV4VXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICAgICAgdGltZW91dCg1MDAwKSAvLzUgc2Vjb25kc1xuICAgICAgIClcbiAgICAgIC5tYXAocmVzID0+IHJlcy50ZXh0KCkpXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRFcnJvcihkYXRhKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgICAvKmxldCBjb25uZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7Ki9cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXG4gICAgICAgIHRoaXMuaHR0cE1vZHVsZS5wb3N0KENvbnN0YW50cy5teU1hdEFwaVVybCArICdyZXBvcnRfZXJyb3IucGhwJywgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5qc29uKCkpO1xuICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgLyp9KTsqL1xuICAgIH0pO1xuICB9XG5cbiAgc2VuZEVtYWlsKGRhdGEpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICAgIC8qbGV0IGNvbm5lY3RTdWJzY3JpcHRpb24gPSB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHsqL1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cbiAgICAgICAgdGhpcy5odHRwTW9kdWxlLnBvc3QoQ29uc3RhbnRzLm15TWF0QXBpVXJsICsgJ2NvbnRhY3RfdXMucGhwJywgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5qc29uKCkpO1xuICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgLyp9KTsqL1xuICAgIH0pO1xuICB9XG5cbiAgcnVuUG9zdChzY3JpcHRGaWxlLCBkYXRhKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmh0dHAucG9zdChDb25zdGFudHMubXlNYXRBcGlVcmwgKyBzY3JpcHRGaWxlLCBkYXRhKVxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIC8qfSk7Ki9cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0KHByb2dyYW1zKXtcbiAgICB2YXIgcHJvZ3JhbTEgPSBwcm9ncmFtc1swXS5zcGxpdChcInxcIilbM107XG4gICAgdmFyIHByb2dyYW0yID0gcHJvZ3JhbXNbMV0uc3BsaXQoXCJ8XCIpWzNdO1xuICAgIHZhciBwcm9ncmFtMyA9IHByb2dyYW1zWzJdLnNwbGl0KFwifFwiKVszXTtcbiAgICB2YXIgcHJvZ3JhbTQgPSBwcm9ncmFtc1szXS5zcGxpdChcInxcIilbM107XG5cbiAgICAvKnZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnUDEnLCBwcm9ncmFtMSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdQMicsIHByb2dyYW0yKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ1AzJywgcHJvZ3JhbTMpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnUDQnLCBwcm9ncmFtNCk7Ki9cbiAgICB2YXIgcGFyYW1zID0gXCJQMT1cIitwcm9ncmFtMStcIiZQMj1cIitwcm9ncmFtMitcIiZQMz1cIitwcm9ncmFtMytcIiZQND1cIitwcm9ncmFtNDtcblxuICAgIHJldHVybiB0aGlzLmh0dHBOYXRpdmUuZ2V0KENvbnN0YW50cy5teU1hdEFwaVN0YXJ0VXJsICsgJz8nICsgcGFyYW1zLCBcIlwiLCB7fSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNZW51Q29udHJvbGxlciwgRXZlbnRzIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XHJcbmltcG9ydCB7IE5hdiwgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcclxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyJztcclxuaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcGxhc2gtc2NyZWVuJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vc2VydmljZXMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9wYWdlcy9ob21lL2hvbWUnO1xyXG5pbXBvcnQgeyBIZWxwUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2hlbHAvaGVscCc7XHJcbmltcG9ydCB7IENvbnRhY3RQYWdlIH0gZnJvbSAnLi4vcGFnZXMvY29udGFjdC9jb250YWN0JztcclxuaW1wb3J0IHsgU2xpZGVyUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3NsaWRlci9zbGlkZXInO1xyXG5pbXBvcnQgeyBGYXZvcml0ZXNQYWdlIH0gZnJvbSAnLi4vcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlBcHAge1xyXG4gIEBWaWV3Q2hpbGQoTmF2KSBuYXY6IE5hdjtcclxuXHJcbiAgcm9vdFBhZ2U6IGFueSA9IEhvbWVQYWdlO1xyXG4gIGxhbmdfZW4gOiBib29sZWFuO1xyXG4gIGxhbmdfZXMgOiBib29sZWFuO1xyXG4gIGxhbmdfcHQgOiBib29sZWFuO1xyXG4gIGxhbmdfZnIgOiBib29sZWFuO1xyXG4gIGxhbmdfZ3IgOiBib29sZWFuO1xyXG4gIGxhbmdfaXQgOiBib29sZWFuO1xyXG5cclxuICBwYWdlczogQXJyYXk8e3RpdGxlOiBzdHJpbmcsIGNvbXBvbmVudDogYW55LCBpY29uOiBhbnksIGlzUHVzaDogYm9vbGVhbn0+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwdWJsaWMgc3RhdHVzQmFyOiBTdGF0dXNCYXIsIHB1YmxpYyBzcGxhc2hTY3JlZW46IFNwbGFzaFNjcmVlbixcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHVibGljIG1lbnVDdHJsOiBNZW51Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLFxyXG4gICAgcHVibGljIGV2ZW50cyA6IEV2ZW50cykge1xyXG4gICAgdGhpcy5pbml0aWFsaXplQXBwKCk7XHJcblxyXG4gICAgLy8gdXNlZCBmb3IgYW4gZXhhbXBsZSBvZiBuZ0ZvciBhbmQgbmF2aWdhdGlvblxyXG4gICAgdGhpcy5wYWdlcyA9IFtcclxuICAgICAgeyB0aXRsZTogJ2hvbWUtdGl0bGUnLCBjb21wb25lbnQ6IEhvbWVQYWdlLCBpY29uOiAnbWVudWl0ZW1ob21lJywgaXNQdXNoOiBmYWxzZSB9LFxyXG4gICAgICB7IHRpdGxlOiAnaGVscC10aXRsZScsIGNvbXBvbmVudDogSGVscFBhZ2UsIGljb246ICdtZW51aXRlbWhlbHAnLCBpc1B1c2g6IGZhbHNlIH0sXHJcbiAgICAgIHsgdGl0bGU6ICdjb250YWN0LXRpdGxlJywgY29tcG9uZW50OiBDb250YWN0UGFnZSwgaWNvbjogJ21lbnVpdGVtY29udGFjdCcsIGlzUHVzaDogZmFsc2UgfSxcclxuICAgICAgeyB0aXRsZTogJ2Zhdi10aXRsZScsIGNvbXBvbmVudDogRmF2b3JpdGVzUGFnZSwgaWNvbjogJ21lbnVmYXZvcml0ZXMnLCBpc1B1c2g6IHRydWUgfSxcclxuICAgICAgeyB0aXRsZTogJ3NsaWRlci10aXRsZScsIGNvbXBvbmVudDogU2xpZGVyUGFnZSwgaWNvbjogJ21lbnVpdGVtaW5mbycsIGlzUHVzaDogdHJ1ZX1cclxuICAgIF07XHJcbiAgICBwbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigodmFsdWUpPT57XHJcbiAgICAgICAgaWYoIXZhbHVlKXtcclxuICAgICAgICAgIHZhbHVlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnNwbGl0KCctJylbMF07XHJcbiAgICAgICAgICBpZighdmFsdWUpXHJcbiAgICAgICAgICAgIHZhbHVlID0gJ2VuJztcclxuICAgICAgICAgIHRyYW5zbGF0ZVNlcnZpY2Uuc2V0RGVmYXVsdExhbmcodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmFuc2xhdGVTZXJ2aWNlLnVzZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hMYW5nKHZhbHVlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICB2YXIgdmFsdWUgPSAnZW4nO1xyXG4gICAgICAgICAgdHJhbnNsYXRlU2VydmljZS5zZXREZWZhdWx0TGFuZyh2YWx1ZSk7XHJcbiAgICAgICAgICB0cmFuc2xhdGVTZXJ2aWNlLnVzZSh2YWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLnN3aXRjaExhbmcodmFsdWUpO1xyXG4gICAgICB9KTs7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVBcHAoKSB7XHJcbiAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIC8vIE9rYXksIHNvIHRoZSBwbGF0Zm9ybSBpcyByZWFkeSBhbmQgb3VyIHBsdWdpbnMgYXJlIGF2YWlsYWJsZS5cclxuICAgICAgLy8gSGVyZSB5b3UgY2FuIGRvIGFueSBoaWdoZXIgbGV2ZWwgbmF0aXZlIHRoaW5ncyB5b3UgbWlnaHQgbmVlZC5cclxuICAgICAgdGhpcy5zdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlblBhZ2UocGFnZSkge1xyXG4gICAgLy8gUmVzZXQgdGhlIGNvbnRlbnQgbmF2IHRvIGhhdmUganVzdCB0aGlzIHBhZ2VcclxuICAgIC8vIHdlIHdvdWxkbid0IHdhbnQgdGhlIGJhY2sgYnV0dG9uIHRvIHNob3cgaW4gdGhpcyBzY2VuYXJpb1xyXG4gICAgaWYocGFnZS5pc1B1c2gpXHJcbiAgICAgIHRoaXMubmF2LnB1c2gocGFnZS5jb21wb25lbnQpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLm5hdi5zZXRSb290KHBhZ2UuY29tcG9uZW50KTtcclxuICB9XHJcblxyXG4gIHN3aXRjaExhbmcobGFuZyl7XHJcblx0ICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdzd2l0Y2hMYW5nRXZlbnQnLGxhbmcpO1xyXG5cdCAgdGhpcy5ldmVudHMucHVibGlzaCgnc3dpdGNoTGFuZ0V2ZW50Q29udGFjdCcsIGxhbmcpO1xyXG4gICAgc3dpdGNoKGxhbmcpe1xyXG4gICAgICBjYXNlICdlcyc6XHJcbiAgICAgICAgdGhpcy5sYW5nX2VuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfZXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxhbmdfcHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFuZ19mciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2dyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfaXQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgdGhpcy5sYW5nX2VuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYW5nX2VzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfcHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFuZ19mciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2dyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfaXQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdwdCc6XHJcbiAgICAgICAgdGhpcy5sYW5nX2VuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfZXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFuZ19wdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFuZ19mciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2dyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfaXQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdpdCc6XHJcbiAgICAgICAgdGhpcy5sYW5nX2VuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfZXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFuZ19wdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2ZyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfZ3IgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFuZ19pdCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdncic6XHJcbiAgICAgICAgdGhpcy5sYW5nX2VuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfZXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFuZ19wdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2ZyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfZ3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxhbmdfaXQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdmcic6XHJcbiAgICAgICAgdGhpcy5sYW5nX2VuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfZXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFuZ19wdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYW5nX2ZyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYW5nX2dyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhbmdfaXQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcclxuICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nLCBsYW5nKTtcclxuICAgIHRoaXMubWVudUN0cmwuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdlBhcmFtcywgVmlld0NvbnRyb2xsZXIsIExvYWRpbmdDb250cm9sbGVyLCBBbGVydENvbnRyb2xsZXIsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgUm91dGluZXNQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9yb3V0aW5lcy9yb3V0aW5lcyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgRmF2b3JpdGVzUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1mYXZvcml0ZXMnLFxuICB0ZW1wbGF0ZVVybDogJ2Zhdm9yaXRlcy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVzUGFnZSB7XG4gIHByaXZhdGUgcHJvZ3JhbTEgOiBhbnk7XG4gIHByaXZhdGUgcHJvZ3JhbTIgOiBhbnk7XG4gIHByaXZhdGUgcHJvZ3JhbTMgOiBhbnk7XG4gIHByaXZhdGUgcHJvZ3JhbTQgOiBhbnk7XG4gIHByaXZhdGUgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwcml2YXRlIHJlc3BvbnNlX3RleHQgOiBzdHJpbmc7XG4gIHByaXZhdGUgc2F2ZVJvdXRpbmVGb3JtIDogRm9ybUdyb3VwO1xuICBwcml2YXRlIHNob3dTYXZlRm9ybSA6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIGZhdm9yaXRlc0xpc3QgOiBhbnk7XG4gIHByaXZhdGUgc2hvd0xvYWRpbmdMaXN0aW5nIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgb2ZmbGluZV9kZXZpY2UgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwdWJsaWMgdmlld0N0cmw6IFZpZXdDb250cm9sbGVyLCBwdWJsaWMgcm91dGluZXM6IFJvdXRpbmVzUHJvdmlkZXIsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlIDogQVBJU2VydmljZVByb3ZpZGVyLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsXG4gICAgcHVibGljIGFsZXJ0Q3RybCA6IEFsZXJ0Q29udHJvbGxlciwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHB1YmxpYyBldmVudHM6IEV2ZW50cykge1xuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIHZhciBwcm9ncmFtcyA9IHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbXMoKTtcbiAgICBpZihwcm9ncmFtc1swXSAmJiBwcm9ncmFtc1sxXSAmJiBwcm9ncmFtc1syXSAmJiBwcm9ncmFtc1szXSl7XG4gICAgICB0aGlzLnByb2dyYW0xID0gcHJvZ3JhbXNbMF07XG4gICAgICB0aGlzLnByb2dyYW0yID0gcHJvZ3JhbXNbMV07XG4gICAgICB0aGlzLnByb2dyYW0zID0gcHJvZ3JhbXNbMl07XG4gICAgICB0aGlzLnByb2dyYW00ID0gcHJvZ3JhbXNbM107XG4gICAgfVxuICAgIHRoaXMuc2F2ZVJvdXRpbmVGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgaWYobmF2UGFyYW1zLmdldCgnc2hvd1NhdmUnKSlcbiAgICAgIHRoaXMuc2hvd1NhdmVGb3JtID0gdHJ1ZTtcbiAgICBlbHNlXG4gICAgICB0aGlzLnNob3dTYXZlRm9ybSA9IGZhbHNlO1xuXG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChkZXZpY2UpPT57XG4gICAgICAgICAgdGhpcy5sb2FkRmF2b3JpdGVMaXN0KGRldmljZS5lbWFpbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChkZXZpY2UpPT57XG4gICAgICBpZih0eXBlb2YgZGV2aWNlICE9PSAndW5kZWZpbmVkJyAmJiBkZXZpY2UgIT0gbnVsbClcbiAgICAgICAgdGhpcy5sb2FkRmF2b3JpdGVMaXN0KGRldmljZS5lbWFpbCk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkRmF2b3JpdGVMaXN0KGVtYWlsKXtcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIC8vZm9ybURhdGEuYXBwZW5kKCd1dWlkJywgdXVpZCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd0eXBlJywgJ2dldCcpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCBlbWFpbCk7XG4gICAgaWYodGhpcy5pc0RldmljZU9ubGluZSl7XG4gICAgICB0aGlzLnNob3dMb2FkaW5nTGlzdGluZyA9IHRydWU7XG4gICAgICB0aGlzLmFwaVNlcnZpY2UucnVuUG9zdCgnZmF2b3JpdGVzLnBocCcsZm9ybURhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLnNob3dMb2FkaW5nTGlzdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgdGhpcy5mYXZvcml0ZXNMaXN0ID0gdGhpcy5yZXNwb25zZURhdGEuZmF2b3JpdGVzO1xuXG4gICAgICB9LChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZ0xpc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRpc21pc3MoZXZlbnQgOiBFdmVudCkge1xuICAgIGlmKGV2ZW50KXtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy52aWV3Q3RybC5kaXNtaXNzKCk7XG4gIH1cblxuICBkZWxldGUoZXZlbnQ6IEV2ZW50LCBpZCl7XG4gICAgaWYoZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgLy9mb3JtRGF0YS5hcHBlbmQoJ3V1aWQnLCB1dWlkKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCAnZGVsJyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIGlkKTtcblxuICAgIHRoaXMuYXBpU2VydmljZS5ydW5Qb3N0KCdmYXZvcml0ZXMucGhwJyxmb3JtRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChkZXZpY2UpPT57XG4gICAgICAgIHRoaXMubG9hZEZhdm9yaXRlTGlzdChkZXZpY2UuZW1haWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93UHJvZ3JhbShpZCwgbmFtZSwgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMywgcHJvZ3JhbTQpe1xuXG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgcHJvZ3JhbV8xID0gKHByb2dyYW0xID09ICdFLVNNT0cnID8gcHJvZ3JhbTEgOiB2YWx1ZVtwcm9ncmFtMV0pO1xuICAgICAgICBsZXQgcHJvZ3JhbV8yID0gKHByb2dyYW0yID09ICdFLVNNT0cnID8gcHJvZ3JhbTIgOiB2YWx1ZVtwcm9ncmFtMl0pO1xuICAgICAgICBsZXQgcHJvZ3JhbV8zID0gKHByb2dyYW0zID09ICdFLVNNT0cnID8gcHJvZ3JhbTMgOiB2YWx1ZVtwcm9ncmFtM10pO1xuICAgICAgICBsZXQgcHJvZ3JhbV80ID0gKHByb2dyYW00ID09ICdFLVNNT0cnID8gcHJvZ3JhbTQgOiB2YWx1ZVtwcm9ncmFtNF0pO1xuICAgICAgICBsZXQgYWxlcnQgPSB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgICAgIHRpdGxlOiAnUnV0aW5hIC0gJyArIG5hbWUsXG4gICAgICAgICAgbWVzc2FnZTogcHJvZ3JhbV8xICsgJ1xcbicgKyBwcm9ncmFtXzIgKyAnXFxuJyArIHByb2dyYW1fMyArICdcXG4nICsgcHJvZ3JhbV80LFxuICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHZhbHVlWydjaG9vc2UnXSxcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ2FkZFByb2dyYW1zRXZlbnQnLCB7IG5hbWUgOiBwcm9ncmFtMSB9LCB7IG5hbWUgOiBwcm9ncmFtMiB9LCB7IG5hbWUgOiBwcm9ncmFtMyB9LCB7IG5hbWUgOiBwcm9ncmFtNCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICAgIGFsZXJ0LnByZXNlbnQoKTtcbiAgICAgICAgLy8gTW9zdHJhciB0ZXh0byBlbiBsYWJlbCBkZWJham8gZGVsIGJvdG9uXG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG5cbiAgYXR0ZW1wdFNhdmVGYXZvcml0ZSgpe1xuICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9ICcnO1xuXG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuZGV2aWNlSW5mb0tleSkudGhlbigoZGV2aWNlKT0+e1xuXG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgZm9ybURhdGEuYXBwZW5kKCd0eXBlJywgJ25ldycpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIGRldmljZS5lbWFpbCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCB0aGlzLnNhdmVSb3V0aW5lRm9ybS52YWx1ZS5uYW1lKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZ3JhbTEnLCB0aGlzLnByb2dyYW0xKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZ3JhbTInLCB0aGlzLnByb2dyYW0yKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZ3JhbTMnLCB0aGlzLnByb2dyYW0zKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZ3JhbTQnLCB0aGlzLnByb2dyYW00KTtcblxuXG4gICAgICB0aGlzLmFwaVNlcnZpY2UucnVuUG9zdCgnZmF2b3JpdGVzLnBocCcsZm9ybURhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgaWYodGhpcy5yZXNwb25zZURhdGEuc3RhdHVzID09ICdvaycpe1xuICAgICAgICAgICAgdGhpcy5zaG93U2F2ZUZvcm0gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVzTGlzdCA9IHRoaXMucmVzcG9uc2VEYXRhLmZhdm9yaXRlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2Zhdm9yaXRlcy9mYXZvcml0ZXMudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29mZmxpbmVfZGF0YSc7XG5cbi8qXG4gIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFJvdXRpbmVzUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVyc1xuICBhbmQgQW5ndWxhciBESS5cbiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGluZXNQcm92aWRlciB7XG4gIHB1YmxpYyBwcm9ncmFtMSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW0yIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbTMgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtNCA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmFnZTogU3RvcmFnZSkge1xuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBSb3V0aW5lc1Byb3ZpZGVyIFByb3ZpZGVyJyk7XG4gIH1cblxuICBwdWJsaWMgc2V0UHJvZ3JhbShpbmRleCxwcm9nKXtcbiAgICBzd2l0Y2ggKGluZGV4KXtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5wcm9ncmFtMSA9IHByb2c7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLnByb2dyYW0yID0gcHJvZztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMucHJvZ3JhbTMgPSBwcm9nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdGhpcy5wcm9ncmFtNCA9IHByb2c7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhblByb2dyYW1zKCl7XG4gICAgdGhpcy5wcm9ncmFtMSA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmFtMiA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmFtMyA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmFtNCA9IG51bGw7XG4gIH1cblxuICBwdWJsaWMgc2V0UHJvZ3JhbXMocHJvZzEsIHByb2cyLCBwcm9nMywgcHJvZzQpe1xuICAgIHRoaXMucHJvZ3JhbTEgPSBwcm9nMTtcbiAgICB0aGlzLnByb2dyYW0yID0gcHJvZzI7XG4gICAgdGhpcy5wcm9ncmFtMyA9IHByb2czO1xuICAgIHRoaXMucHJvZ3JhbTQgPSBwcm9nNDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcm9ncmFtcygpe1xuICAgIHJldHVybiBbIHRoaXMucHJvZ3JhbTEsIHRoaXMucHJvZ3JhbTIsIHRoaXMucHJvZ3JhbTMsIHRoaXMucHJvZ3JhbTQgXTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgZ2V0S2V5KGtleTpzdHJpbmcpe1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0KGtleSk7XG4gIH1cblxuICBwdWJsaWMgYWRkUHJvZ3JhbXMocm91dGluZU5hbWUsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMsIHByb2dyYW00KXtcbiAgICB2YXIgb2JqUHJvZ3JhbTEgPSB0aGlzLmdldFByb2dyYW0ocHJvZ3JhbTEpO1xuICAgIHZhciBvYmpQcm9ncmFtMiA9IHRoaXMuZ2V0UHJvZ3JhbShwcm9ncmFtMik7XG4gICAgdmFyIG9ialByb2dyYW0zID0gdGhpcy5nZXRQcm9ncmFtKHByb2dyYW0zKTtcbiAgICB2YXIgb2JqUHJvZ3JhbTQgPSB0aGlzLmdldFByb2dyYW0ocHJvZ3JhbTQpO1xuICAgIHRoaXMuaW5zZXJ0UHJlU2V0UHJvZ3JhbShyb3V0aW5lTmFtZSwgb2JqUHJvZ3JhbTEsIG9ialByb2dyYW0yLCBvYmpQcm9ncmFtMywgb2JqUHJvZ3JhbTQpO1xuXG4gICAgdGhpcy5zZXRQcm9ncmFtcyhvYmpQcm9ncmFtMS5uYW1lLCBvYmpQcm9ncmFtMi5uYW1lLCBvYmpQcm9ncmFtMy5uYW1lLCBvYmpQcm9ncmFtNC5uYW1lKTtcbiAgICByZXR1cm4gW29ialByb2dyYW0xLm5hbWUsIG9ialByb2dyYW0yLm5hbWUsIG9ialByb2dyYW0zLm5hbWUsIG9ialByb2dyYW00Lm5hbWVdO1xuICB9XG5cbiAgcHVibGljIGdldFByb2dyYW0obmFtZSl7XG4gICAgICBmb3IodmFyIGkgPSAwOyAgaSA8IERhdGEuUHJvZ3JhbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IERhdGEuUHJvZ3JhbXNbaV07XG4gICAgICAgIGlmKHByb2dyYW0uYXBpTmFtZSA9PSBuYW1lIHx8IHByb2dyYW0ubmFtZSA9PSBuYW1lLm5hbWUgfHwgcHJvZ3JhbS5uYW1lID09IG5hbWUpXG4gICAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgICB9XG4gIH1cblxuICBwdWJsaWMgaW5zZXJ0UHJlU2V0UHJvZ3JhbSAocm91dGluZU5hbWUsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMsIHByb2dyYW00KSB7XG5cbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnTXlNYXRfcm91dGluZU5hbWUnLCByb3V0aW5lTmFtZSk7XG4gICAgICAgIHRoaXMuYWRkUHJvZ3JhbVRvUm91dGluZSgxLCBcIlwiLCBwcm9ncmFtMS5uYW1lLCBwcm9ncmFtMS5ydW5uaW5ndGltZSwgcHJvZ3JhbTEuYXBpTmFtZSk7XG5cbiAgICAgICAgdGhpcy5hZGRQcm9ncmFtVG9Sb3V0aW5lKDIsIFwiXCIsIHByb2dyYW0yLm5hbWUsIHByb2dyYW0yLnJ1bm5pbmd0aW1lLCBwcm9ncmFtMi5hcGlOYW1lKTtcblxuICAgICAgICB0aGlzLmFkZFByb2dyYW1Ub1JvdXRpbmUoMywgXCJcIiwgcHJvZ3JhbTMubmFtZSwgcHJvZ3JhbTMucnVubmluZ3RpbWUsIHByb2dyYW0zLmFwaU5hbWUpO1xuXG4gICAgICAgIHRoaXMuYWRkUHJvZ3JhbVRvUm91dGluZSg0LCBcIlwiLCBwcm9ncmFtNC5uYW1lLCBwcm9ncmFtNC5ydW5uaW5ndGltZSwgcHJvZ3JhbTQuYXBpTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgYWRkUHJvZ3JhbVRvUm91dGluZSAoY3VycmVudEJ1YmJsZVNsb3QsIGlkUHJvZ3JhbSwgcHJvZ3JhbU5hbWUsIHByb2dyYW1SdW5uaW5nVGltZSwgYXBpTmFtZSkge1xuICAgICAgICBpZiAoY3VycmVudEJ1YmJsZVNsb3QgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW0xJywgaWRQcm9ncmFtICsgXCJ8XCIgKyBwcm9ncmFtTmFtZSArIFwifFwiICsgcHJvZ3JhbVJ1bm5pbmdUaW1lICsgXCJ8XCIgKyBhcGlOYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50QnViYmxlU2xvdCA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTInLCBpZFByb2dyYW0gKyBcInxcIiArIHByb2dyYW1OYW1lICsgXCJ8XCIgKyBwcm9ncmFtUnVubmluZ1RpbWUgKyBcInxcIiArIGFwaU5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRCdWJibGVTbG90ID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtMycsIGlkUHJvZ3JhbSArIFwifFwiICsgcHJvZ3JhbU5hbWUgKyBcInxcIiArIHByb2dyYW1SdW5uaW5nVGltZSArIFwifFwiICsgYXBpTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEJ1YmJsZVNsb3QgPT0gNCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW00JywgaWRQcm9ncmFtICsgXCJ8XCIgKyBwcm9ncmFtTmFtZSArIFwifFwiICsgcHJvZ3JhbVJ1bm5pbmdUaW1lICsgXCJ8XCIgKyBhcGlOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMudHMiXSwic291cmNlUm9vdCI6IiJ9