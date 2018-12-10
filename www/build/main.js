webpackJsonp([0],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutinesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
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
    function RoutinesProvider(http, storage) {
        this.http = http;
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], RoutinesProvider);
    return RoutinesProvider;
}());

//# sourceMappingURL=routines.js.map

/***/ }),

/***/ 143:
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
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 187:
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
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__programs_programs__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wifi_wifi__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_routines_routines__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(44);
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
    function HomePage(navCtrl, storage, routines, translateService, events, apiService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.routines = routines;
        this.translateService = translateService;
        this.events = events;
        this.apiService = apiService;
        this.checkAllBubbles();
        this.events.subscribe('sharesBubbles', function (bubbles) {
            for (var i = 1; i <= bubbles.length; i++) {
                _this.updateBubbles(i, bubbles[i - 1]);
            }
            _this.AllBubblesChecked(_this.routines.getPrograms());
        });
        this.events.subscribe('switchLangEvent', function (lang) {
            //call methods to refresh content
            _this.storage.set(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyLang, lang);
            _this.checkAllBubbles();
        });
        this.AllBubblesChecked(this.routines.getPrograms());
    }
    HomePage.prototype.removeProgramFromRoutine = function (prg) {
        console.log('hold: ' + prg);
    };
    HomePage.prototype.selectBubble = function (prg, add) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__programs_programs__["a" /* ProgramsPage */], { bubble: prg });
    };
    HomePage.prototype.runRoutine = function () {
        var programs = this.routines.getPrograms();
        if (this.AllBubblesChecked(programs)) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__wifi_wifi__["a" /* WifiPage */]);
        }
    };
    HomePage.prototype.AllBubblesChecked = function (programs) {
        if (typeof programs[0] !== 'undefined' && programs[0] != null && programs[0].length > 0 &&
            typeof programs[1] !== 'undefined' && programs[1] != null && programs[1].length > 0 &&
            typeof programs[2] !== 'undefined' && programs[2] != null && programs[2].length > 0 &&
            typeof programs[3] !== 'undefined' && programs[3] != null && programs[3].length > 0) {
            this.EnableRunRoutine = true;
        }
        else {
            this.EnableRunRoutine = false;
        }
        return this.EnableRunRoutine;
    };
    HomePage.prototype.cleanRoutine = function () {
        this.routines.cleanPrograms();
        this.AllBubblesChecked(this.routines.getPrograms());
        this.storage.set(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyBubble1, '');
        this.storage.set(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyBubble2, '');
        this.storage.set(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyBubble3, '');
        this.storage.set(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyBubble4, '');
        this.updateBubbles(1, '');
        this.updateBubbles(2, '');
        this.updateBubbles(3, '');
        this.updateBubbles(4, '');
    };
    HomePage.prototype.updateBubbles = function (bubble, name) {
        var _this = this;
        switch (bubble) {
            case 1:
                if (typeof name !== 'undefined' && name.length > 0) {
                    this.bubblesCurrentState1 = true;
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
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
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
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
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
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
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
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
        this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyBubble1).then(function (val) {
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
        this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyBubble2).then(function (val) {
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
        this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyBubble3).then(function (val) {
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
        this.storage.get(__WEBPACK_IMPORTED_MODULE_7__services_constants__["a" /* Constants */].storageKeyBubble4).then(function (val) {
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar class="bar">\n    <button ion-button menuToggle end class="button button-clear">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <div class="logo"></div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home">\n    <div padding class="bubblescontainer">\n        <div class="bubbles">\n            <div (click)="selectBubble(1)" on-hold="removeProgramFromRoutine(1)" [ngStyle]="bubblesCurrentState1 && {\'background-image\':\'url(assets/img/bubble-violet.png)\'}" class="single-bubble-1"></div>\n            <div class="bubbles-program-name-1" (click)="selectBubble(1,true)">{{ bubblesNames1 }}</div>\n\n            <div (click)="selectBubble(2)" on-hold="removeProgramFromRoutine(2)" [ngStyle]="bubblesCurrentState2 && {\'background-image\':\'url(assets/img/bubble-red.png)\'}" class="single-bubble-2"></div>\n            <div class="bubbles-program-name-2" (click)="selectBubble(2,true)">{{ bubblesNames2 }}</div>\n\n            <div (click)="selectBubble(3)" on-hold="removeProgramFromRoutine(3)" [ngStyle]="bubblesCurrentState3 && {\'background-image\':\'url(assets/img/bubble-yellow.png)\'}" class="single-bubble-3"></div>\n            <div class="bubbles-program-name-3" (click)="selectBubble(3,true)">{{ bubblesNames3 }}</div>\n\n            <div (click)="selectBubble(4)" on-hold="removeProgramFromRoutine(4)" [ngStyle]="bubblesCurrentState4 && {\'background-image\':\'url(assets/img/bubble-green.png)\'}" class="single-bubble-4"></div>\n            <div class="bubbles-program-name-4" (click)="selectBubble(4,true)">{{ bubblesNames4 }}</div>\n        </div>\n    </div>\n\n    <div class="bubbleexplain">\n        <br>\n        <b>{{ \'tap-bubble\' | translate }}</b><br><br>\n        <!--<p translate="press-hold"> Press and hold a hearth to remove</p>-->\n        <button [disabled]="!EnableRunRoutine" class="greenbtn" menu-close nav-transition="ios" nav-direction="forward" (click)="runRoutine()" href="#">{{ \'run-routine\' | translate }}</button>\n        <br><br>\n        <button class="graybtn" menu-close nav-transition="ios" nav-direction="forward" (click)="cleanRoutine()" href="#">{{ \'clean-routine\' | translate }}</button>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_routines_routines__["a" /* RoutinesProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* APIServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offline_data__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_routines_routines__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__program_program__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(29);
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
    function ProgramsPage(navCtrl, storage, navParams, routines, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.routines = routines;
        this.events = events;
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
    ProgramsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyCurrentProgram).then(function (program) {
            _this.getPrograms(program != null ? program : 'basic');
        });
        this.programs = __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs;
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
    ProgramsPage.prototype.getProgram = function (name) {
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs.length; i++) {
            var program = __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs[i];
            if (program.apiName == name)
                return program;
        }
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
        }
        var groups = [];
        var groupIndex = 0;
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Groups.length; i++) {
            var group = __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Groups[i];
            if (group.category == category) {
                groups[groupIndex] = group;
                for (var j = 0; j < group.programs.length; j++) {
                    var program = group.programs[j];
                    group.programs[j] = this.getProgram(program.apiName);
                }
                groupIndex++;
            }
        }
        this.predefinedPrograms = groups;
    };
    ProgramsPage.prototype.addPrograms = function (routineName, program1, program2, program3, program4) {
        var objProgram1 = this.getProgram(program1);
        var objProgram2 = this.getProgram(program2);
        var objProgram3 = this.getProgram(program3);
        var objProgram4 = this.getProgram(program4);
        this.routines.insertPreSetProgram(routineName, objProgram1, objProgram2, objProgram3, objProgram4);
        this.navCtrl.pop();
        var bubbleNames = [objProgram1.name, objProgram2.name, objProgram3.name, objProgram4.name];
        this.routines.setPrograms(objProgram1.name, objProgram2.name, objProgram3.name, objProgram4.name);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], ProgramsPage.prototype, "content", void 0);
    ProgramsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-programs',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\programs\programs.html"*/'<!--\n  Generated template for the ProgramsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Programs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="home center">\n    <br>\n    <div class="modaltitle">{{ \'program-kits\' | translate }}</div>\n    <div class="modaldesc">{{ \'popular-routines\' | translate }}</div>\n\n    <ion-scroll scrollX="true" scrollY="false" class="wide-as-needed programs">\n\n            <ion-row nowrap class="program {{ basicButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'basic\')">\n                <div class="programpic"><img src="assets/img/Basic.png"></div>\n                <div class="programdesc" [innerHTML]="\'basic\' | translate"><br><br></div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ businessTravelButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'business and travel\')">\n                <div class="programpic"><img src="assets/img/BusinessTraveller.png"></div>\n                <div class="programdesc" [innerHTML]="\'business-traveler\' | translate"></div>\n            </ion-row>\n\n           <ion-row nowrap class="program {{ familiyButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'family\')">\n                <div class="programpic"><img src="assets/img/family.png"></div>\n                <div class="programdesc" [innerHTML]="\'family-kit\' | translate"></div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ athleteButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'athlete\')">\n                <div class="programpic"><img src="assets/img/Athlete.png"></div>\n                <div class="programdesc" [innerHTML]="\'athlete\' | translate"></div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ spaButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'spa\')">\n                <div class="programpic"><img src="assets/img/Spa.png"></div>\n                <div class="programdesc" [innerHTML]="\'spa-wellness\' | translate"><br><br></div>\n            </ion-row>\n\n\n            <ion-row nowrap class="program {{ stressButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'stress relief\')">\n                <div class="programpic"><img src="assets/img/stress.png"></div>\n                <div class="programdesc" [innerHTML]="\'stress-relief\' | translate"></div>\n            </ion-row>\n\n\n            <ion-row nowrap class="program {{ seniorButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'senior\')">\n                <div class="programpic"><img src="assets/img/Senior.png"></div>\n                <div class="programdesc" [innerHTML]="\'senior-upper\' | translate"><br><br></div>\n            </ion-row>\n\n\n            <ion-row nowrap class="program {{ chakraButton ? \'\' : \'opacity-50\' }}"  (click)="selectPreSetProgram(\'chakra balancing\')">\n                <div class="programpic"><img src="assets/img/chakra.png"></div>\n                <div class="programdesc" [innerHTML]="\'chakra-balancing\' | translate"></div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ elementsButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'elements\')">\n                <div class="programpic"><img src="assets/img/Elements.png"></div>\n                <div class="programdesc" [innerHTML]="\'elements-meridians\' | translate"><br></div>\n            </ion-row>\n\n    </ion-scroll>\n\n\n    <div class="modaltitle">{{ \'programs\' | translate }}</div>\n    <div *ngFor="let routine of predefinedPrograms">\n\n        {{ routine.name | translate }}\n        <!--<div class="purchase-status">{{ routine.purchaseStatus }}</div>-->\n\n        <div class="paddingmodal">\n\n\n            <ion-list (click)="addPrograms(routine.name, routine.programs[0].apiName, routine.programs[1].apiName,\n                routine.programs[2].apiName,routine.programs[3].apiName)">\n\n                <ion-item *ngFor="let program of routine.programs" class="addiction center">\n                     {{ program.name | translate }}\n                </ion-item>\n\n\n            </ion-list>\n\n        </div>\n\n    </div>\n\n\n    <div class="modaltitle">{{ \'independent-programs\' | translate }}</div>\n    <div class="modaldesc" [innerHTML]="\'tap-program\' | translate">PROGRAMS</div>\n    <div class="paddingmodal">\n        <ion-list class="programlist">\n\n\n            <ion-item class="addiction center" *ngFor="let program of programs" nav-transition="ios" nav-direction="forward" href="#/app/routines">\n                <div class="programAddButton" (click)="add1Program(program.name, program.runningtime, program.apiName)">\n                    {{ program.name | translate }}\n                </div>\n                <div class="programInfoButton" end (click)="moreProgramInfo(program.name, program.runningtime, program.description, program.apiName)">\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                </div>\n            </ion-item>\n\n\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\programs\programs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_routines_routines__["a" /* RoutinesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], ProgramsPage);
    return ProgramsPage;
}());

//# sourceMappingURL=programs.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
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
            selector: 'page-program',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\program\program.html"*/'<!--\n\n  Generated template for the ProgramPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ programName }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="home center">\n\n\n\n    <div class="program-info-modal-holder">\n\n        <div class="program-info-modal-header">\n\n          <h2 class="program-info-modal-running-time-title">{{ \'running-time\' | translate }} </h2>\n\n        	<h2 class="program-info-modal-running-time">\n\n             {{ programRunningTime  }} \n\n        	</h2>\n\n        </div>\n\n       \n\n        <div class="program-info-modal-mainbody">\n\n          <ion-scroll style="height:100%;overflow-y:scroll;">\n\n            <div style="height:100%; line-height:25px;">{{ programDescription }}</div>\n\n            <br/>\n\n            <button class="button-add-program" ion-button (click)="add1Program(programName, programRunningTime, programApiName)">{{ \'add-program\' | translate }}</button>\n\n          </ion-scroll>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\program\program.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], ProgramPage);
    return ProgramPage;
}());

//# sourceMappingURL=program.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WifiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playing_playing__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network_interface__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(44);
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
    function WifiPage(navCtrl, navParams, storage, apiService, translateService, networkInterface, platform, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.apiService = apiService;
        this.translateService = translateService;
        this.networkInterface = networkInterface;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.intervalCount = 0;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
            _this.translateService.getTranslation(lang).subscribe(function (value) {
                _this.coilText = typeof value['coil'] === 'undefined' ? 'Antena' : value['coil'];
            });
        });
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
                if (response === __WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].localIPAddress) {
                    _this.showIPButton();
                }
                else
                    _this.failIPVerification();
            }, function (response) {
                _this.failIPVerification();
            });
        }
        else {
            this.showIPButton();
        }
        this.mymatWifi = true;
        this.intervalCount = 0;
    };
    WifiPage.prototype.showIPButton = function () {
        //this.mymatStatus = true;
        //this.showStatusTable = true;
        var _this = this;
        this.batteryImg = 'assets/img/b100.pn';
        this.coilText1 = 'N/A';
        this.coilText2 = 'N/A';
        this.coilText3 = 'N/A';
        this.coilText4 = 'N/A';
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
                _this.failStatusVerification();
            }
        }, function (response) {
            _this.failStatusVerification();
        });
    };
    WifiPage.prototype.showNoStatus = function () {
        this.mymatNoStatus = true;
    };
    WifiPage.prototype.showStatus = function () {
        this.mymatWifi = false;
        this.mymatStatus = true;
        this.showStatusTable = true;
        this.showLoading = false;
        this.isRunRoutineEnabled = true;
        clearInterval(this.testStatusInterval);
        clearInterval(this.testIPInterval);
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
                if (response === __WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].localIPAddress)
                    _this.showIPButton();
            });
        }, 3000);
    };
    WifiPage.prototype.failStatusVerification = function () {
        var _this = this;
        this.testStatusInterval = setInterval(function () {
            // timeout of mymat detection 180 segundos
            var failMyMatTest = _this.apiService.test();
            failMyMatTest.then(function (response) {
                if (_this.verifyValues(response)) {
                    _this.showStatus();
                }
            }, function (response) {
                if (_this.intervalCount >= 5) {
                    _this.showNoStatus();
                }
            });
            _this.intervalCount += 1;
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
        }*/
    };
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
                var program1Obj;
                var program2Obj;
                var program3Obj;
                var program4Obj;
                var error1Obj;
                var error2Obj;
                var error3Obj;
                var error4Obj;
                var isValidateSuccessProgram = 0;
                var isValidateErrorProgram = 0;
                for (var i = 1; i <= 4; i++) {
                    switch (i) {
                        case 1:
                            _this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble1).then(function (val) {
                                program1Obj = val;
                                isValidateSuccessProgram += 1;
                            }).catch(function (err) {
                                isValidateErrorProgram += 1;
                                error1Obj = err;
                            });
                            break;
                        case 2:
                            _this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble2).then(function (val) {
                                program2Obj = val;
                                isValidateSuccessProgram += 1;
                            }).catch(function (err) {
                                isValidateErrorProgram += 1;
                                error2Obj = err;
                            });
                            break;
                        case 3:
                            _this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble3).then(function (val) {
                                program3Obj = val;
                                isValidateSuccessProgram += 1;
                            }).catch(function (err) {
                                isValidateErrorProgram += 1;
                                error3Obj = err;
                            });
                            break;
                        case 4:
                            _this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble4).then(function (val) {
                                program4Obj = val;
                                isValidateSuccessProgram += 1;
                            }).catch(function (err) {
                                isValidateErrorProgram += 1;
                                error4Obj = err;
                            });
                            break;
                    }
                }
                _this.testBeginRoutineInterval = setInterval(function () {
                    if (isValidateSuccessProgram == 4) {
                        clearInterval(_this.testBeginRoutineInterval);
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
                            console.log(response);
                        });
                        /* CORRER RUTINA */
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__playing_playing__["a" /* PlayingPage */]);
                    }
                    else if (isValidateSuccessProgram + isValidateErrorProgram == 4) {
                        clearInterval(_this.testBeginRoutineInterval);
                        var toast = _this.toastCtrl.create({
                            message: 'Ha ocurrido un error (Code: 2)',
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                }, 1000);
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
    WifiPage.prototype.stop = function () {
        clearInterval(this.testStatusInterval);
        clearInterval(this.testIPInterval);
    };
    WifiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wifi',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\wifi\wifi.html"*/'<!--\n\n  Generated template for the WifiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="bar">\n\n    <button ion-button menuToggle end class="button button-clear">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <div class="logo"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="home center">\n\n        <br>\n\n        <div *ngIf="mymatWifi">\n\n            <img src="assets/img/wifi.png">\n\n            <div class="titleinstructions" [innerHTML]="\'please-pair\' | translate"></div>\n\n            <br>\n\n            <p [innerHTML]="\'activate-wifi\' | translate">Steps to pair your MyMat</p>\n\n            <p [innerHTML]="\'activate-wifi-1\' | translate">1. Turn on your MyMat</p>\n\n            <p [innerHTML]="\'activate-wifi-2\' | translate">2. On your device, navigate to your Wi-Fi settings</p>\n\n            <p [innerHTML]="\'activate-wifi-3\' | translate">3. Connect your device\'s WiFi with your MyMat network</p>\n\n            <p [innerHTML]="\'activate-wifi-4\' | translate">4. Once is connected, return to the MyMat app</p>\n\n            <!--<p class="interval-counter">0</p>-->\n\n            <br/>\n\n            <div *ngIf="mymatNoStatus">\n\n                <p [innerHTML]="\'no-detect-1\' | translate">We were unable to detect your MyMat</p>\n\n                <p [innerHTML]="\'no-detect-2\' | translate">Please follow the steps to do so</p>\n\n            </div>\n\n            <img *ngIf="showLoading" src="assets/img/loading.gif" width="200" />\n\n        </div>\n\n        <div *ngIf="mymatStatus">\n\n            <iframe *ngIf="showIframeStatus" height="100%" width="100%" [src]="iframeUrl" (click)="startRoutine()"></iframe>\n\n            <div *ngIf="showStatusTable" class="status-table divTable">\n\n                <div class="divTableHeading">\n\n                    <div class="divTableRow">\n\n                        <div class="divTableHead divTableCellFirstLeft">\n\n                            <h4 [innerHTML]="\'battery-power\' | translate"></h4>\n\n                        </div>\n\n                        <div class="divTableHead divTableCellFirstRight">\n\n                            <h4 id="battery">{{ batteryCharge }} <img src="{{ batteryImg }}" height="16"></h4>\n\n\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="divTableBody">\n\n                    <div class="divTableRow">\n\n                        <div class="divTableCell">{{ coilText }} 1</div>\n\n                        <div class="divTableCell" id="coil1">{{ coilText1 }}</div>\n\n                    </div>\n\n                    <div class="divTableRow">\n\n                        <div class="divTableCell coilOdd">{{ coilText }} 2</div>\n\n                        <div class="divTableCell coilOdd" id="coil2">{{ coilText2 }}</div>\n\n                    </div>\n\n                    <div class="divTableRow">\n\n                        <div class="divTableCell">{{ coilText }} 3</div>\n\n                        <div class="divTableCell" id="coil3">{{ coilText3 }}</div>\n\n                    </div>\n\n                    <div class="divTableRow">\n\n                        <div class="divTableCell coilOdd divTableCellLastLeft">{{ coilText }} 4</div>\n\n                        <div class="divTableCell coilOdd divTableCellLastRight" id="coil4">{{ coilText4 }}</div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <p>&nbsp;</p>\n\n            <button [disabled]="!isRunRoutineEnabled" class="greenbtn start-routine" menu-close nav-transition="ios" nav-direction="forward" (click)="startRoutine()" [innerHTML]="\'start-routine\' | translate">LAUNCH MYMAT</button>\n\n            <img *ngIf="showLoading" src="assets/img/loading.gif" width="200" />\n\n        </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\wifi\wifi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* APIServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network_interface__["a" /* NetworkInterface */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], WifiPage);
    return WifiPage;
}());

//# sourceMappingURL=wifi.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(235);
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
    function PlayingPage(navCtrl, navParams, storage, translateService, localNotifications, plt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translateService = translateService;
        this.localNotifications = localNotifications;
        this.plt = plt;
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
            clearInterval(this.timerInterval);
        }
        else {
            var secondsLeft = this.finishTime - Math.round(now / 1000);
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
                        _this.timerInterval = setInterval(function () {
                            _this.displayRunningTime = _this.decreaseSecond(_this.displayRunningTime);
                            if (_this.displayRunningTime == '00:00') {
                                clearInterval(_this.timerInterval);
                            }
                        }, 1000);
                        var $this = _this;
                        _this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
                            _this.translateService.getTranslation(lang).subscribe(function (prog) {
                                _this.localNotifications.schedule({
                                    id: 1,
                                    title: 'MyMat Light',
                                    text: prog['time-expire-text'],
                                    sound: 'file://assets/sounds/' + (_this.plt.is('ios') ? 'gong_c5.m4r' : 'gong_c5.mp3'),
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
            selector: 'page-playing',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\playing\playing.html"*/'<!--\n\n  Generated template for the PlayingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="bar">\n\n    <button ion-button menuToggle end class="button button-clear">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <div class="logo"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="home center">\n\n  <div class="list card paddingSmall">\n\n      <div class="item">\n\n\n\n          <h2>{{ \'remaining-time\' | translate }} </h2>\n\n          <h3 style="color:white;">{{ displayRunningTime }}</h3>\n\n          \n\n      </div>\n\n\n\n      <div class="item item-time item-body">\n\n          <div class="program-running-left">\n\n            <div class="program-running-title">{{ programTitle1 }}</div>\n\n            <div class="program-running-duration">{{ program1CurrentTimeDecreasingAsTime }}</div>\n\n          </div>\n\n      </div>\n\n      \n\n      <div class="item item-time item-body">\n\n          <div class="program-running-left">\n\n            <div class="program-running-title">{{ programTitle2 }}</div>\n\n            <div class="program-running-duration">{{  program2CurrentTimeDecreasingAsTime }}</div>\n\n          </div>\n\n      </div>\n\n\n\n       <div class="item item-time item-body">\n\n          <div class="program-running-left">\n\n            <div class="program-running-title">{{ programTitle3 }}</div>\n\n            <div class="program-running-duration">{{  program3CurrentTimeDecreasingAsTime }}</div>\n\n          </div>\n\n      </div>\n\n      \n\n      <div class="item item-time item-body">\n\n          <div class="program-running-left">\n\n            <div class="program-running-title">{{ programTitle4 }}</div>\n\n            <div class="program-running-duration">{{  program4CurrentTimeDecreasingAsTime }}</div>\n\n          </div>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\playing\playing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], PlayingPage);
    return PlayingPage;
}());

//# sourceMappingURL=playing.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
            selector: 'page-help',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\help\help.html"*/'<!--\n\n  Generated template for the HelpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n    <ion-header>\n\n      <ion-navbar class="bar">\n\n        <button ion-button menuToggle end class="button button-clear">\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          <div class="logo"></div>\n\n        </ion-title>\n\n      </ion-navbar>\n\n    </ion-header>\n\n\n\n    <ion-content padding class="home">\n\n\n\n        <div class="list card cardprogram">\n\n\n\n            <div class="item">\n\n\n\n                <h2 padding [innerHTML]="\'help-text\' | translate">Help</h2>\n\n\n\n            </div>\n\n\n\n            <div padding class="item item-body">\n\n                <div class="" [innerHTML]="\'help-text1\' | translate">How do I know which programs to choose?</div>\n\n                <p class="lorems" [innerHTML]="\'help-text2\' | translate">\n\n                    It is always good to start with balancing the System. These are some ways you could start this with:\n\n                    Energy Balancing, E-Smog, Joy, Vitality<br><br>\n\n                    \n\n                    If you would like to enhance your sleeping pattern – choose:<br>\n\n                    Energy Balancing, E-Smog, Relax, Sleep<br><br>\n\n                    \n\n                    If you would like some extra energy in the morning:<br>\n\n                    Energy Balancing, Energy Booster, Concentration (and any program connected to a problem you are dealing with – as Pain, Muscle, Joints, Headache etc.) <br><br>\n\n                    \n\n                    For a full list of programs and their uses regarding symptoms refer to the user’s manual included with your purchase or available for free online.\n\n                </p>\n\n                <div class="" [innerHTML]="\'help-text3\' | translate">Which programs should I avoid in the evening?</div>\n\n                <p class="lorems" [innerHTML]="\'help-text4\' | translate">\n\n                    If you want to have a good night’s sleep it is better not to over stimulate your organism. If you are used to drinking coffee in the evening and still can sleep you may use any programs but if you are more sensitive – better do not to use the following programs before bed time: Circulation, Immune System, Adrenal, Exhaustion, Concentration and Energy Booster\n\n                </p>\n\n                <div class="" [innerHTML]="\'help-text5\' | translate">How do electromagnetic fields affect my body?</div>\n\n                <p class="lorems" [innerHTML]="\'help-text6\' | translate">\n\n                    Everything in our bodies is electric, our cells communicate with electromagnetic frequencies, our heart generates electromagnetic waves with every beat, our nervous system communicated when neurons react to electro magnetic signals through synapses. With this in mind we can understand how external magnetic, electric and electromagnetic fields react with every aspect of our body. By regulating specific low intensity frequencies we can chose exactly what we want to react with, acting on specified cells, organs and tissues.\n\n                </p>\n\n                <div class="" [innerHTML]="\'help-text7\' | translate">How does treatment at the cellular level help me?</div>\n\n                <p class="lorems" [innerHTML]="\'help-text8\' | translate">\n\n                    By charging magnetic fields surrounding cell membranes channels open up for better nutrient penetration. Opening the channels also promotes easier waste elimination, efficiently restoring proper cell function. An efficient system of cells creates efficient tissue, which come together to make organs. Restoring proper function from the cellular level brings beneficial long term effects to all related problems and improves overall well being. Healthy cell function also diminishes the need for cell replacement, slowing down aging processes and energy waste.\n\n                </p>\n\n                \n\n                <div class="" [innerHTML]="\'help-text9\' | translate">Can PEMF therapy protect me from future illnesses?</div>\n\n                <p class="lorems" [innerHTML]="\'help-text10\' | translate"> Operating effectively at a systematic level will reduce opportunities for diseases to develop. Diseases begin at a cellular level and injuries have to start healing at a cellular level. By using Pulsed Electromagnetic Frequencies one can improve general circulation thus accelerating reparation processes. By improving general cellular health they break down/wear out less often. Healthy operating cells will accelerate recuperation and balance bodily functions. </p>\n\n\n\n                <div class="" [innerHTML]="\'help-text11\' | translate">Aren’t Magnetic Fields bad for me?</div>\n\n                <p class="lorems" [innerHTML]="\'help-text12\' | translate"> The MyMat has a frequency range between 1Hz to 200 kHz and EMF strength wont exceed 10 micro Tesla per channel. The MyMat can operate up to 4 channels simultaneously due to its 4 antennae’s, thus a maximum of 40 micro Tesla. Magnetic fields outside of the low and extremely low frequencies such as microwave, infrared, radio and ultraviolet frequencies do have varied detrimental effects on our cells and body. Most of our exposure risk comes from higher frequencies such as power lines and cell phones attached to our heads daily. These frequencies pose higher risks because we are constantly exposed to them and they can induce tissue damage, alter cellular function and create general cellular damage. It is practically impossible to live a life avoiding these frequencies, they are everywhere and penetrate everything. We cant escape E-smog, but we can use the MyMat which has several programs that can help reduce damaging effects from all our constant electronic bombardment by adding frequencies that mantain our bodies in balance, mantaining the healthy, natural frequencies. </p>\n\n\n\n                <div class="" [innerHTML]="\'help-text13\' | translate">Will PEMF therapy replace my medication?</div>\n\n                <p class="lorems" [innerHTML]="\'help-text14\' | translate"> Therapy with the Pulsed Electromagnetic Frequencies can make a significant improvement in overall well-being and diminish many negative symptoms. It can be used alongside treatments and medication to improve results. It is important to discuss with medical professionals before replacing any treatments or medication. Once a proper plan is created and results are seen it is possible to reduce or eliminate treatments or medication. Always make sure to ask for medical advise or consultation before changing or replacing existing treatments. </p>\n\n\n\n                <div class="" [innerHTML]="\'help-text15\' | translate">How do electromagnetic fields affect my body?</div>\n\n                <p class="lorems" [innerHTML]="\'help-text16\' | translate">Everything in our bodies is electric, our cells communicate with electromagnetic frequencies, our heart generates electromagnetic waves with every beat, our nervous system communicated when neurons react to electro magnetic signals through synapses. With this in mind we can understand how external magnetic, electric and electromagnetic fields react with every aspect of our body. By regulating specific low intensity frequencies we can chose exactly what we want to react with, acting on specified cells, organs and tissues. </p>\n\n\n\n                <div class="" [innerHTML]="\'help-text23\' | translate">Can I overdose on a magnetic field?</div>\n\n                <p class="lorems" [innerHTML]="\'help-text24\' | translate"> The MyMat operates with very low intensity pulsed magnetic fields. A healthy cell operates at ideal capacity so has no need for more energy and cannot accept more energy, so it ignores these frequencies. A damaged or malfunctioning cell can absorb some of this energy but it is impossible for it to overcharge because there is no possibility of storing any more energy than is needed. </p>\n\n\n\n                <div class="" [innerHTML]="\'help-text25\' | translate">What are some of the basic beneficial actions PEMFs will have in my body?</div>\n\n                <p class="lorems" [innerHTML]="\'help-text26\' | translate">Improving tissue healing \n\n         Reducing pain<br>\n\nIncreasing energy<br>\n\nImproving sleep<br>\n\nMaking soft tissue more flexible<br>\n\nMeridian Stimulation<br>\n\nReducing Blood Pressure<br>\n\nImproving clotting factors<br>\n\nReducing Arthritis ontake<br>\n\nImmune system stimulation<br>\n\nDetox<br>\n\nHelping nerve function<br>\n\nImproving Nutrient Absorbtion<br>\n\nReducing Muscle tension</p>\n\n            </div>\n\n        </div>\n\n\n\n    </ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(37);
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
    function ContactPage(navCtrl, navParams, formBuilder, apiService, translateService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.translateService = translateService;
        this.storage = storage;
        this.contactForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.cleanForm();
        this.response_text = '';
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].storageKeyLang).then(function (lang) {
            _this.translateService.getTranslation(lang).subscribe(function (value) {
                _this.button_send = value['send-text'];
                // Mostrar texto en label debajo del boton
            });
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
        this.apiService.sendEmail(emailData).then(function (result) {
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
            selector: 'page-contact',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\contact\contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="bar">\n    <button ion-button menuToggle end class="button button-clear">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <div class="logo"></div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="home center">\n  <div class="list card cardprogram">\n    <div class="item">\n\n        <h2 padding>{{ \'contact-us-text\' | translate }}</h2>\n\n    </div>\n\n    <div padding class="item item-body">\n      <form [formGroup]="contactForm" (ngSubmit)="attemptSendMail()">\n        <p class="lorems center-forced" [innerHTML]="\'get-in-touch\' | translate">Text</p>\n        <label class="item-input contact">\n          <ion-input type="text" placeholder="{{ \'name-text\' | translate }}" formControlName="name" value="{{ name_value }}"></ion-input>\n        </label><br>\n        <label class="item-input contact">\n          <ion-input type="email" placeholder="Email"  autocapitalize="none"formControlName="email" value="{{ email_value }}"></ion-input>\n        </label><br>\n        <label class="item-input contact">\n          <ion-textarea placeholder="{{ \'message-text\' | translate }}" formControlName="message" value="{{ message_value }}"></ion-textarea>\n        </label><br>\n        <button type="submit" ion-button [disabled]="!contactForm.valid" [disabled]="contactDisabled" class="button-contact button-calm">{{ button_send }}</button>\n        <div padding>\n          {{ response_text }}\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* APIServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network_interface__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_help_help__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_programs_programs__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_wifi_wifi__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_playing_playing__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_program_program__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_routines_routines__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_api_service_api_service__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










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
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_programs_programs__["a" /* ProgramsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_wifi_wifi__["a" /* WifiPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_playing_playing__["a" /* PlayingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_program_program__["a" /* ProgramPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
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
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_programs_programs__["a" /* ProgramsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_wifi_wifi__["a" /* WifiPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_playing_playing__["a" /* PlayingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_program_program__["a" /* ProgramPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_21__providers_routines_routines__["a" /* RoutinesProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_network_interface__["a" /* NetworkInterface */],
                //    Network,
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_api_service_api_service__["a" /* APIServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_help_help__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(44);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'home-title', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], icon: 'menuitemhome' },
            { title: 'help-title', component: __WEBPACK_IMPORTED_MODULE_7__pages_help_help__["a" /* HelpPage */], icon: 'menuitemhelp' },
            { title: 'contact-title', component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */], icon: 'menuitemcontact' }
        ];
        platform.ready().then(function () {
            _this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyLang).then(function (value) {
                if (!value) {
                    value = navigator.language.split('-')[0];
                    translateService.setDefaultLang(value);
                }
                translateService.use(value);
                _this.switchLang(value);
            });
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
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.switchLang = function (lang) {
        this.events.publish('switchLangEvent', lang);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n    <ion-list>\n\n      <div class="menutitle"><img src="assets/img/logomenu.png"></div>\n\n      <ion-item class="menuitemhome" menu-close>\n\n        <img *ngIf="lang_en" src="assets/img/flag-england.png" width="35" height="35" (click)="switchLang(\'en\')">\n\n        <img *ngIf="lang_es" src="assets/img/flag-spain.png" width="35" height="35" (click)="switchLang(\'es\')">\n\n        <img *ngIf="lang_it" src="assets/img/flag-italy.png" width="35" height="35" (click)="switchLang(\'it\')">\n\n        <img *ngIf="lang_gr" src="assets/img/flag-germany.png" width="35" height="35" (click)="switchLang(\'gr\')">\n\n        <img *ngIf="lang_fr" src="assets/img/flag-france.png" width="35" height="35" (click)="switchLang(\'fr\')">\n\n        <img *ngIf="lang_pt" src="assets/img/flag-brazil.png" width="35" height="35" (click)="switchLang(\'pt\')">\n\n      </ion-item>\n\n      <button menuClose ion-item class="item-button item-block item-md {{ p.icon }}" *ngFor="let p of pages" (click)="openPage(p)">\n\n        <label class="item-content"></label>\n\n        {{p.title | translate}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = {
    localIPAddress: '192.168.0.100',
    myMatApiStartUrl: 'http://192.168.1.3/start.htm',
    myMatApiIndexUrl: 'http://192.168.1.3/index.htm',
    myMatApiUrl: 'https://www.esferasoluciones.com/api/mymat/',
    storageKeyLang: 'mymat_lang',
    storageKeyBubble1: 'MyMat_bubbleRoutineProgram1',
    storageKeyBubble2: 'MyMat_bubbleRoutineProgram2',
    storageKeyBubble3: 'MyMat_bubbleRoutineProgram3',
    storageKeyBubble4: 'MyMat_bubbleRoutineProgram4',
    storageKeyScrollTop: 'MyMat_scrollTop',
    storageKeyCurrentProgram: 'MyMat_currentProgram',
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

/***/ 417:
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
        }
    ],
    Programs: [
        {
            name: 'earth-element-upper',
            apiName: "Earth_Element",
            runningtime: "16:55",
            description: 'earth-element-description'
        },
        {
            name: 'fire-element-upper',
            apiName: "Fire_Element",
            runningtime: "15:05",
            description: 'fire-element-description'
        },
        {
            name: 'metal-element-upper',
            apiName: "Metal_Element",
            runningtime: "12:39",
            description: 'metal-element-description'
        },
        {
            name: 'water-element-upper',
            apiName: "Water_Element",
            runningtime: "17:20",
            description: 'water-element-description'
        },
        {
            name: 'wood-element-upper',
            apiName: "Wood_Element",
            runningtime: "17:09",
            description: 'wood-element-description'
        },
        {
            name: 'gallbladder-meridian-upper',
            apiName: "Gallbladder_Meridian",
            runningtime: "20:39",
            description: 'gallbladder-meridian-description'
        },
        {
            name: 'heart-meridian-upper',
            apiName: "Heart_Meridian",
            runningtime: "14:45",
            description: 'heart-meridian-description'
        },
        {
            name: 'kidney-meridian-upper',
            apiName: "Kidney_Meridian",
            runningtime: "16:27",
            description: 'kidney-meridian-description'
        },
        {
            name: 'large-intestine-meridian-upper',
            apiName: "Large_Intestine_Meridian",
            runningtime: "13:53",
            description: 'large-intestine-meridian-description'
        },
        {
            name: 'liver-meridian-upper',
            apiName: "Liver_Meridian",
            runningtime: "16:11",
            description: 'liver-meridian-description'
        },
        {
            name: 'lung-meridian-upper',
            apiName: "Lung_Meridian",
            runningtime: "16:38",
            description: 'lung-meridian-description'
        },
        {
            name: 'pericardium-meridian-upper',
            apiName: "Pericardium_Meridian",
            runningtime: "21:55",
            description: 'pericardium-meridian-description'
        },
        {
            name: 'small-intestine-meridian-upper',
            apiName: "Small_Intestine_Meridian",
            runningtime: "13:25",
            description: 'small-intestine-meridian-description'
        },
        {
            name: 'spleen-pancreas-meridian-upper',
            apiName: "Spleen_Meridian",
            runningtime: "15:37",
            description: 'spleen-pancreas-meridian-description'
        },
        {
            name: 'stomach-meridian-upper',
            apiName: "Stomach_Meridian",
            runningtime: "17:15",
            description: 'stomach-meridian-description'
        },
        {
            name: 'triple-warmer-meridian-upper',
            apiName: "Triple_Warmer_Meridian",
            runningtime: "13:20",
            description: 'triple-warmer-meridian-description'
        },
        {
            name: 'urinary-bladder-meridian-upper',
            apiName: "Urinary_Bladder_Meridian",
            runningtime: "14:19",
            description: 'urinary-bladder-meridian-description'
        },
        {
            name: "first-chakra-upper",
            apiName: "Root_Chakra",
            runningtime: "15:49",
            description: '1-chakra-description'
        },
        {
            name: "second-chakra-upper",
            apiName: "Sacral_Chakra",
            runningtime: "13:57",
            description: '2-chakra-description'
        },
        {
            name: "third-chakra-upper",
            apiName: "Solar_Plexus_Chakra",
            runningtime: "16:51",
            description: '3-chakra-description'
        },
        {
            name: "fourth-chakra-upper",
            apiName: "Heart_Chakra",
            runningtime: "18:16",
            description: '4-chakra-description'
        },
        {
            name: "fifth-chakra-upper",
            apiName: "Throat_Chakra",
            runningtime: "17:59",
            description: '5-chakra-description'
        },
        {
            name: "sixth-chakra-upper",
            apiName: "Brow_Chakra",
            runningtime: "16:13",
            description: '6-chakra-description'
        },
        {
            name: "seventh-chakra-upper",
            apiName: "Crown_Chakra",
            runningtime: "13:45",
            description: '7-chakra-description'
        },
        {
            name: 'addiction-upper',
            apiName: "Addiction",
            runningtime: "15:05",
            description: 'addiction-description'
        },
        {
            name: 'adrenal-gland-upper',
            apiName: "Adrenal_Gland",
            runningtime: "15:07",
            description: 'adrenal-gland-description'
        },
        {
            name: 'anti-aging-upper',
            apiName: "Anti_Aging",
            runningtime: "11:01",
            description: 'anti-aging-description',
        },
        {
            name: 'auditory-upper',
            apiName: "Auditory_System",
            runningtime: "14:31",
            description: 'auditory-description',
        },
        {
            name: 'backache-upper',
            apiName: "Backache",
            runningtime: "16:30",
            description: 'backache-description',
        },
        {
            name: 'bones-upper',
            apiName: "Bone_Tissues",
            runningtime: "15:04",
            description: 'bones-description'
        },
        {
            name: 'child-developement-upper',
            apiName: "Child_Development",
            runningtime: "13:50",
            description: 'child-developement-description',
        },
        {
            name: 'circulatory-system-upper',
            apiName: "Circulatory_System",
            runningtime: "15:06",
            description: 'circulatory-system-description',
        },
        {
            name: 'concentration-upper',
            apiName: "Concentration",
            runningtime: "21:19",
            description: 'concentration-description'
        },
        {
            name: 'connective-tissue-upper',
            apiName: "Connective_Tissues",
            runningtime: "16:54",
            description: 'connective-tissue-description',
        },
        {
            name: 'constipation-upper',
            apiName: "Constipation",
            runningtime: "14:49",
            description: 'constipation-description'
        },
        {
            name: 'detoxification-upper',
            apiName: "Detoxification",
            runningtime: "16:13",
            description: 'detoxification-description',
        },
        {
            name: 'diarrhea-upper',
            apiName: "Diarrhea",
            runningtime: "13:59",
            description: 'diarrhea-description'
        },
        {
            name: 'digestive-system-upper',
            apiName: "Digestive_System",
            runningtime: "16:41",
            description: 'digestive-system-description'
        },
        {
            name: 'discernment-upper',
            apiName: "Discernment",
            runningtime: "13:37",
            description: 'discernment-description'
        },
        {
            name: "E-SMOG",
            apiName: "Electro_Smog",
            runningtime: "14:51",
            description: 'e-smog-description'
        },
        {
            name: 'energy-balancing-upper',
            apiName: "Energy_Balancing",
            runningtime: "17:55",
            description: 'energy-balancing-description',
        },
        {
            name: 'energy-booster-upper',
            apiName: "Energy_Booster",
            runningtime: "13:53",
            description: 'energy-booster-description'
        },
        {
            name: 'exhaustion-upper',
            apiName: "Exhaustion",
            runningtime: "14:59",
            description: 'exhaustion-description'
        },
        {
            name: 'eyesight-upper',
            apiName: "Eyesight",
            runningtime: "16:11",
            description: 'eyesight-description'
        },
        {
            name: 'female-upper',
            apiName: "Female_Hormone_Balance",
            runningtime: "14:17",
            description: 'female-description'
        },
        {
            name: 'flu-upper',
            apiName: "Flu",
            runningtime: "13:59",
            description: 'flu-description'
        },
        {
            name: 'glucose-metabolic-disorders-upper',
            apiName: "Glucose_Metabolic_Disorders",
            runningtime: "16:28",
            description: 'glucose-metabolic-disorders-description',
        },
        {
            name: 'hair-growth-upper',
            apiName: "Hair_Growth",
            runningtime: "19:07",
            description: 'hair-growth-description'
        },
        {
            name: 'headache-upper',
            apiName: "Headache",
            runningtime: "18:38",
            description: 'headache-description'
        },
        {
            name: 'heart-function-upper',
            apiName: "Heart_Function",
            runningtime: "13:30",
            description: 'heart-function-description'
        },
        {
            name: 'hemorrhoids-upper',
            apiName: "Hemorrhoids",
            runningtime: "21:13",
            description: 'hemorrhoids-description'
        },
        {
            name: 'hypertension-upper',
            apiName: "Hypertension",
            runningtime: "18:53",
            description: 'hypertension-description'
        },
        {
            name: 'immune-system-upper',
            apiName: "Immune_System",
            runningtime: "14:50",
            description: 'immune-system-description'
        },
        {
            name: 'injury-upper',
            apiName: "Injury",
            runningtime: "18:46",
            description: 'injury-description'
        },
        {
            name: 'intestinal-flora-upper',
            apiName: "Intestinal_Flora",
            runningtime: "18:58",
            description: 'intestinal-flora-description'
        },
        {
            name: "JET-LAG",
            apiName: "Jet-Lag/Climate_Change",
            runningtime: "16:14",
            description: 'jet-lag-description'
        },
        {
            name: 'joints-upper',
            apiName: "Joints",
            runningtime: "17:07",
            description: 'joints-description'
        },
        {
            name: 'joy-upper',
            apiName: "Joy",
            runningtime: "21:04",
            description: 'joy-description'
        },
        {
            name: 'low-mental-drive-upper',
            apiName: "Low_Mental_Drive",
            runningtime: "15:49",
            description: 'low-mental-drive-description'
        },
        {
            name: 'low-physical-drive-upper',
            apiName: "Low_Physical_Drive",
            runningtime: "16:49",
            description: 'low-physical-drive-description'
        },
        {
            name: 'lymphatic-system-upper',
            apiName: "Lymphatic_System",
            runningtime: "16:04",
            description: 'lymphatic-system-description'
        },
        {
            name: 'male-upper',
            apiName: "Male_Hormone_Balance",
            runningtime: "12:31",
            description: 'male-description'
        },
        {
            name: 'meditation-1-upper',
            apiName: "Meditation_1",
            runningtime: "33:15",
            description: 'meditation-1-description'
        },
        {
            name: 'meditation-2-upper',
            apiName: "Meditation_2",
            runningtime: "29:43",
            description: 'meditation-2-description'
        },
        {
            name: 'meditation-3-upper',
            apiName: "Meditation_3",
            runningtime: "22:49",
            description: 'meditation-3-description'
        },
        {
            name: 'mineral-metabolic-activity-upper',
            apiName: "Mineral_Metabolic_Activity",
            runningtime: "17:25",
            description: 'mineral-metabolic-activity-description'
        },
        {
            name: 'muscle-tissue-upper',
            apiName: "Muscle_Tissues",
            runningtime: "15:59",
            description: 'muscle-tissue-description'
        },
        {
            name: 'neck-shoulder-upper',
            apiName: "Neck/Shoulder",
            runningtime: "16:16",
            description: 'neck-shoulder-description'
        },
        {
            name: 'nervous-system-upper',
            apiName: "Nervous_System",
            runningtime: "19:10",
            description: 'nervous-system-description'
        },
        {
            name: 'pain-upper',
            apiName: "Pain_Conditions",
            runningtime: "15:18",
            description: 'pain-description'
        },
        {
            name: 'peace-upper',
            apiName: "Peace",
            runningtime: "22:08",
            description: 'peace-description'
        },
        {
            name: 'regeneration-upper',
            apiName: "Regeneration",
            runningtime: "17:12",
            description: 'regeneration-description'
        },
        {
            name: 'relaxation-upper',
            apiName: "Relaxation",
            runningtime: "19:55",
            description: 'relaxation-description'
        },
        {
            name: 'respiratory-system-upper',
            apiName: "Respiratory_System",
            runningtime: "15:52",
            description: 'respiratory-system-description'
        },
        {
            name: 'sinus-cavities-upper',
            apiName: "Sinus_Cavities",
            runningtime: "15:33",
            description: 'sinus-cavities-description'
        },
        {
            name: 'skin-conditions-upper',
            apiName: "Skin_Conditions",
            runningtime: "15:50",
            description: 'skin-conditions-description'
        },
        {
            name: 'sleep-enhancer-upper',
            apiName: "Sleep_Enhancer",
            runningtime: "19:58",
            description: 'sleep-enhancer-description'
        },
        {
            name: 'stress-relief-upper',
            apiName: "Frustration",
            runningtime: "18:55",
            description: 'stress-relief-description'
        },
        {
            name: 'thyroid-glands-upper',
            apiName: "Thyroid_Glands",
            runningtime: "17:53",
            description: 'thyroid-glands-description'
        },
        {
            name: 'urinary-upper',
            apiName: "Urinary_System/Cystitis",
            runningtime: "13:39",
            description: 'urinary-description'
        },
        {
            name: 'vertebrae-upper',
            apiName: "Vertebrae",
            runningtime: "12:53",
            description: 'vertebrae-description'
        },
        {
            name: 'vitality-upper',
            apiName: "Vitality",
            runningtime: "14:00",
            description: 'vitality-description'
        },
        {
            name: 'weight-control-upper',
            apiName: "Weight_Control",
            runningtime: "14:50",
            description: 'weight-control-description'
        }
    ]
};
//# sourceMappingURL=offline_data.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__);
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
    function APIServiceProvider(http, httpNative /*, private network: Network*/) {
        this.http = http;
        this.httpNative = httpNative; /*, private network: Network*/
    }
    APIServiceProvider.prototype.test_language = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* Constants */].myMatApiIndexUrl)
                .map(function (res) { return res.text(); })
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
        //headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8');
        /*headers.append('Accept-Encoding', 'gzip, deflate');
        headers.append('Accept-Language', 'en-US,en;q=0.9,es-PA;q=0.8,es;q=0.7');
        headers.append('Upgrade-Insecure-Requests', '1');*/
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* Constants */].myMatApiIndexUrl, { headers: headers })
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["timeout"])(5000) //5 seconds
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
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* Constants */].myMatApiUrl + 'report_error.php', JSON.stringify(data), { headers: headers })
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
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* Constants */].myMatApiUrl + 'contact_us.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
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
        //var url = Constants.myMatApiStartUrl+"?P1="+program1+"&P2="+program2+"&P3="+program3+"&P4="+program4;
        var params = "P1=" + program1 + "&P2=" + program2 + "&P3=" + program3 + "&P4=" + program4;
        return this.httpNative.get(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* Constants */].myMatApiStartUrl, params, {});
    };
    APIServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */] /*, private network: Network*/])
    ], APIServiceProvider);
    return APIServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ })

},[258]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9lc201IGxhenkiLCIuLi8uLi9zcmMgbGF6eSIsIi4uLy4uL3NyYy9wYWdlcy9ob21lL2hvbWUudHMiLCIuLi8uLi9zcmMvcGFnZXMvcHJvZ3JhbXMvcHJvZ3JhbXMudHMiLCIuLi8uLi9zcmMvcGFnZXMvcHJvZ3JhbS9wcm9ncmFtLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3dpZmkvd2lmaS50cyIsIi4uLy4uL3NyYy9wYWdlcy9wbGF5aW5nL3BsYXlpbmcudHMiLCIuLi8uLi9zcmMvcGFnZXMvaGVscC9oZWxwLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2NvbnRhY3QvY29udGFjdC50cyIsIi4uLy4uL3NyYy9hcHAvbWFpbi50cyIsIi4uLy4uL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi4uLy4uL3NyYy9zZXJ2aWNlcy9jb25zdGFudHMudHMiLCIuLi8uLi9zcmMvc2VydmljZXMvb2ZmbGluZV9kYXRhLnRzIiwiLi4vLi4vc3JjL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDTTtBQUNGO0FBRXpDOzs7OztFQUtFO0FBRUY7SUFNRSwwQkFBbUIsSUFBVSxFQUFTLE9BQWdCO1FBQW5DLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0scUNBQVUsR0FBakIsVUFBa0IsS0FBSyxFQUFDLElBQUk7UUFDMUIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUM7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QUM7Z0JBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixLQUFLLENBQUM7WUFDUixLQUFLLElBQUk7Z0JBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxJQUFJO2dCQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQztZQUNSLEtBQUssSUFBSTtnQkFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcs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K0JBQThCO09BRDFFLGtCQUFrQixDQXFGOUI7SUFBRCx5QkFBQztDQUFBO0FBckY4QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcblxuLypcbiAgR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgUm91dGluZXNQcm92aWRlciBwcm92aWRlci5cblxuICBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uIGZvciBtb3JlIGluZm8gb24gcHJvdmlkZXJzXG4gIGFuZCBBbmd1bGFyIERJLlxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0aW5lc1Byb3ZpZGVyIHtcbiAgcHVibGljIHByb2dyYW0xIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbTIgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtMyA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW00IDogc3RyaW5nO1xuICBcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHAsIHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlKSB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvIFJvdXRpbmVzUHJvdmlkZXIgUHJvdmlkZXInKTtcbiAgfVxuICBcbiAgcHVibGljIHNldFByb2dyYW0oaW5kZXgscHJvZyl7XG4gICAgc3dpdGNoIChpbmRleCl7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMucHJvZ3JhbTEgPSBwcm9nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5wcm9ncmFtMiA9IHByb2c7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLnByb2dyYW0zID0gcHJvZztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHRoaXMucHJvZ3JhbTQgPSBwcm9nO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIHB1YmxpYyBjbGVhblByb2dyYW1zKCl7XG4gICAgdGhpcy5wcm9ncmFtMSA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmFtMiA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmFtMyA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmFtNCA9IG51bGw7XG4gIH1cbiAgXG4gIHB1YmxpYyBzZXRQcm9ncmFtcyhwcm9nMSwgcHJvZzIsIHByb2czLCBwcm9nNCl7XG4gICAgdGhpcy5wcm9ncmFtMSA9IHByb2cxO1xuICAgIHRoaXMucHJvZ3JhbTIgPSBwcm9nMjtcbiAgICB0aGlzLnByb2dyYW0zID0gcHJvZzM7XG4gICAgdGhpcy5wcm9ncmFtNCA9IHByb2c0O1xuICB9XG4gIFxuICBwdWJsaWMgZ2V0UHJvZ3JhbXMoKXtcbiAgICByZXR1cm4gWyB0aGlzLnByb2dyYW0xLCB0aGlzLnByb2dyYW0yLCB0aGlzLnByb2dyYW0zLCB0aGlzLnByb2dyYW00IF07XG4gIH1cbiAgcHVibGljIGFzeW5jIGdldEtleShrZXk6c3RyaW5nKXtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmdldChrZXkpO1xuICB9XG5cbiAgcHVibGljIGluc2VydFByZVNldFByb2dyYW0gKHJvdXRpbmVOYW1lLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zLCBwcm9ncmFtNCkge1xuXG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ015TWF0X3JvdXRpbmVOYW1lJywgcm91dGluZU5hbWUpO1xuICAgICAgICB0aGlzLmFkZFByb2dyYW1Ub1JvdXRpbmUoMSwgXCJcIiwgcHJvZ3JhbTEubmFtZSwgcHJvZ3JhbTEucnVubmluZ3RpbWUsIHByb2dyYW0xLmFwaU5hbWUpO1xuXG4gICAgICAgIHRoaXMuYWRkUHJvZ3JhbVRvUm91dGluZSgyLCBcIlwiLCBwcm9ncmFtMi5uYW1lLCBwcm9ncmFtMi5ydW5uaW5ndGltZSwgcHJvZ3JhbTIuYXBpTmFtZSk7XG5cbiAgICAgICAgdGhpcy5hZGRQcm9ncmFtVG9Sb3V0aW5lKDMsIFwiXCIsIHByb2dyYW0zLm5hbWUsIHByb2dyYW0zLnJ1bm5pbmd0aW1lLCBwcm9ncmFtMy5hcGlOYW1lKTtcblxuICAgICAgICB0aGlzLmFkZFByb2dyYW1Ub1JvdXRpbmUoNCwgXCJcIiwgcHJvZ3JhbTQubmFtZSwgcHJvZ3JhbTQucnVubmluZ3RpbWUsIHByb2dyYW00LmFwaU5hbWUpO1xuICB9XG4gIFxuICBwdWJsaWMgYWRkUHJvZ3JhbVRvUm91dGluZSAoY3VycmVudEJ1YmJsZVNsb3QsIGlkUHJvZ3JhbSwgcHJvZ3JhbU5hbWUsIHByb2dyYW1SdW5uaW5nVGltZSwgYXBpTmFtZSkge1xuICAgICAgICBpZiAoY3VycmVudEJ1YmJsZVNsb3QgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW0xJywgaWRQcm9ncmFtICsgXCJ8XCIgKyBwcm9ncmFtTmFtZSArIFwifFwiICsgcHJvZ3JhbVJ1bm5pbmdUaW1lICsgXCJ8XCIgKyBhcGlOYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50QnViYmxlU2xvdCA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTInLCBpZFByb2dyYW0gKyBcInxcIiArIHByb2dyYW1OYW1lICsgXCJ8XCIgKyBwcm9ncmFtUnVubmluZ1RpbWUgKyBcInxcIiArIGFwaU5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRCdWJibGVTbG90ID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtMycsIGlkUHJvZ3JhbSArIFwifFwiICsgcHJvZ3JhbU5hbWUgKyBcInxcIiArIHByb2dyYW1SdW5uaW5nVGltZSArIFwifFwiICsgYXBpTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEJ1YmJsZVNsb3QgPT0gNCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW00JywgaWRQcm9ncmFtICsgXCJ8XCIgKyBwcm9ncmFtTmFtZSArIFwifFwiICsgcHJvZ3JhbVJ1bm5pbmdUaW1lICsgXCJ8XCIgKyBhcGlOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMudHMiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXRjaGVkIGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSAxNDM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9lc201IGxhenlcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXRjaGVkIGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSAxODc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMgbGF6eVxuLy8gbW9kdWxlIGlkID0gMTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgRXZlbnRzIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IFByb2dyYW1zUGFnZSB9IGZyb20gJy4uL3Byb2dyYW1zL3Byb2dyYW1zJztcbmltcG9ydCB7IFdpZmlQYWdlIH0gZnJvbSAnLi4vd2lmaS93aWZpJztcbmltcG9ydCB7IFJvdXRpbmVzUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuICBwdWJsaWMgYnViYmxlc05hbWVzMSA6IHN0cmluZztcbiAgcHVibGljIGJ1YmJsZXNOYW1lczIgOiBzdHJpbmc7XG4gIHB1YmxpYyBidWJibGVzTmFtZXMzIDogc3RyaW5nO1xuICBwdWJsaWMgYnViYmxlc05hbWVzNCA6IHN0cmluZztcbiAgcHVibGljIEVuYWJsZVJ1blJvdXRpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0N1cnJlbnRTdGF0ZTEgOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0N1cnJlbnRTdGF0ZTIgOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0N1cnJlbnRTdGF0ZTMgOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0N1cnJlbnRTdGF0ZTQgOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyByb3V0aW5lczogUm91dGluZXNQcm92aWRlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsIHB1YmxpYyBldmVudHM6IEV2ZW50cywgcHVibGljIGFwaVNlcnZpY2UgOiBBUElTZXJ2aWNlUHJvdmlkZXIpIHtcbiAgICB0aGlzLmNoZWNrQWxsQnViYmxlcygpO1xuICAgIHRoaXMuZXZlbnRzLnN1YnNjcmliZSgnc2hhcmVzQnViYmxlcycsIChidWJibGVzKSA9PiB7XG4gICAgICBmb3IodmFyIGkgPSAxOyBpIDw9IGJ1YmJsZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoaSwgYnViYmxlc1tpIC0gMV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5BbGxCdWJibGVzQ2hlY2tlZCh0aGlzLnJvdXRpbmVzLmdldFByb2dyYW1zKCkpO1xuICAgIH0pO1xuICAgIHRoaXMuZXZlbnRzLnN1YnNjcmliZSgnc3dpdGNoTGFuZ0V2ZW50JywobGFuZykgPT4ge1xuICAgICAgICAvL2NhbGwgbWV0aG9kcyB0byByZWZyZXNoIGNvbnRlbnRcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcsIGxhbmcpXG4gICAgICAgIHRoaXMuY2hlY2tBbGxCdWJibGVzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5BbGxCdWJibGVzQ2hlY2tlZCh0aGlzLnJvdXRpbmVzLmdldFByb2dyYW1zKCkpO1xuICB9XG5cbiAgcmVtb3ZlUHJvZ3JhbUZyb21Sb3V0aW5lKHByZyl7XG4gICAgY29uc29sZS5sb2coJ2hvbGQ6ICcgKyBwcmcpO1xuICB9XG5cbiAgc2VsZWN0QnViYmxlKHByZywgYWRkKXtcbiAgICB0aGlzLm5hdkN0cmwucHVzaChQcm9ncmFtc1BhZ2UsIHsgYnViYmxlOiBwcmcgfSk7XG4gIH1cblxuICBydW5Sb3V0aW5lKCl7XG4gICAgdmFyIHByb2dyYW1zID0gdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpO1xuICAgIGlmKHRoaXMuQWxsQnViYmxlc0NoZWNrZWQocHJvZ3JhbXMpKXtcbiAgICAgIHRoaXMubmF2Q3RybC5wdXNoKFdpZmlQYWdlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIEFsbEJ1YmJsZXNDaGVja2VkKHByb2dyYW1zKXtcblxuICAgIGlmKHR5cGVvZiBwcm9ncmFtc1swXSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvZ3JhbXNbMF0gIT0gbnVsbCAmJiBwcm9ncmFtc1swXS5sZW5ndGggPiAwICYmXG4gICAgdHlwZW9mIHByb2dyYW1zWzFdICE9PSAndW5kZWZpbmVkJyAmJiBwcm9ncmFtc1sxXSAhPSBudWxsICYmIHByb2dyYW1zWzFdLmxlbmd0aCA+IDAgJiZcbiAgICB0eXBlb2YgcHJvZ3JhbXNbMl0gIT09ICd1bmRlZmluZWQnICYmIHByb2dyYW1zWzJdICE9IG51bGwgJiYgcHJvZ3JhbXNbMl0ubGVuZ3RoID4gMCAmJlxuICAgIHR5cGVvZiBwcm9ncmFtc1szXSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvZ3JhbXNbM10gIT0gbnVsbCAmJiBwcm9ncmFtc1szXS5sZW5ndGggPiAwKXtcbiAgICAgICAgdGhpcy5FbmFibGVSdW5Sb3V0aW5lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRoaXMuRW5hYmxlUnVuUm91dGluZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuRW5hYmxlUnVuUm91dGluZTtcbiAgfVxuXG4gIGNsZWFuUm91dGluZSgpe1xuICAgIHRoaXMucm91dGluZXMuY2xlYW5Qcm9ncmFtcygpO1xuICAgIHRoaXMuQWxsQnViYmxlc0NoZWNrZWQodGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMSwnJyk7XG4gICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTIsJycpO1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUzLCcnKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlNCwnJyk7XG4gICAgdGhpcy51cGRhdGVCdWJibGVzKDEsJycpO1xuICAgIHRoaXMudXBkYXRlQnViYmxlcygyLCcnKTtcbiAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoMywnJyk7XG4gICAgdGhpcy51cGRhdGVCdWJibGVzKDQsJycpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVCdWJibGVzKGJ1YmJsZSxuYW1lKXtcbiAgICBzd2l0Y2goYnViYmxlKXtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaWYodHlwZW9mIG5hbWUgIT09ICd1bmRlZmluZWQnICYmIG5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT57XG4gICAgICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMSA9IHR5cGVvZiB2YWx1ZVtuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBuYW1lIDogdmFsdWVbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTEgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczEgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaWYodHlwZW9mIG5hbWUgIT09ICd1bmRlZmluZWQnICYmIG5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT57XG4gICAgICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMiA9IHR5cGVvZiB2YWx1ZVtuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBuYW1lIDogdmFsdWVbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTIgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczIgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaWYodHlwZW9mIG5hbWUgIT09ICd1bmRlZmluZWQnICYmIG5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT57XG4gICAgICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMyA9IHR5cGVvZiB2YWx1ZVtuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBuYW1lIDogdmFsdWVbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTMgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczMgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaWYodHlwZW9mIG5hbWUgIT09ICd1bmRlZmluZWQnICYmIG5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlNCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT57XG4gICAgICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzNCA9IHR5cGVvZiB2YWx1ZVtuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBuYW1lIDogdmFsdWVbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQWxsQnViYmxlcygpe1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUxKS50aGVuKCh2YWwpPT57XG4gICAgICBpZih2YWwgIT09IG51bGwpe1xuICAgICAgICB2YXIgbmFtZSA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoMSxuYW1lKTtcbiAgICAgICAgdGhpcy5yb3V0aW5lcy5zZXRQcm9ncmFtKDEsbmFtZSlcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB2YXIgZW1haWxEYXRhID0geyBhcmVhIDogJ2NoZWNrQWxsQnViYmxlcyAxJywgbWVzc2FnZSA6IGVyciB9O1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRFcnJvcihlbWFpbERhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMikudGhlbigodmFsKT0+e1xuICAgICAgaWYodmFsICE9PSBudWxsKXtcbiAgICAgICAgdmFyIG5hbWUgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzKDIsbmFtZSk7XG4gICAgICAgIHRoaXMucm91dGluZXMuc2V0UHJvZ3JhbSgyLG5hbWUpXG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdmFyIGVtYWlsRGF0YSA9IHsgYXJlYSA6ICdjaGVja0FsbEJ1YmJsZXMgMicsIG1lc3NhZ2UgOiBlcnIgfTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZW5kRXJyb3IoZW1haWxEYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTMpLnRoZW4oKHZhbCk9PntcbiAgICAgIGlmKHZhbCAhPT0gbnVsbCl7XG4gICAgICAgIHZhciBuYW1lID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlcygzLG5hbWUpO1xuICAgICAgICB0aGlzLnJvdXRpbmVzLnNldFByb2dyYW0oMyxuYW1lKVxuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHZhciBlbWFpbERhdGEgPSB7IGFyZWEgOiAnY2hlY2tBbGxCdWJibGVzIDMnLCBtZXNzYWdlIDogZXJyIH07XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2VuZEVycm9yKGVtYWlsRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGU0KS50aGVuKCh2YWwpPT57XG4gICAgICBpZih2YWwgIT09IG51bGwpe1xuICAgICAgICB2YXIgbmFtZSA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoNCxuYW1lKTtcbiAgICAgICAgdGhpcy5yb3V0aW5lcy5zZXRQcm9ncmFtKDQsbmFtZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuQWxsQnViYmxlc0NoZWNrZWQodGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpKVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHZhciBlbWFpbERhdGEgPSB7IGFyZWEgOiAnY2hlY2tBbGxCdWJibGVzIDQnLCBtZXNzYWdlIDogZXJyIH07XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2VuZEVycm9yKGVtYWlsRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIEV2ZW50cywgQ29udGVudCB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29mZmxpbmVfZGF0YSc7XG5pbXBvcnQgeyBSb3V0aW5lc1Byb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3JvdXRpbmVzL3JvdXRpbmVzJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQcm9ncmFtUGFnZSB9IGZyb20gJy4uL3Byb2dyYW0vcHJvZ3JhbSc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFByb2dyYW1zUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1wcm9ncmFtcycsXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3JhbXMuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyYW1zUGFnZSB7XG4gIEBWaWV3Q2hpbGQoQ29udGVudCkgY29udGVudDogQ29udGVudDtcbiAgcHVibGljIHByZWRlZmluZWRQcm9ncmFtcyA6IGFueTtcbiAgcHVibGljIHByb2dyYW1zIDogYW55O1xuICBwdWJsaWMgcHJvZ3JhbSA6IG51bWJlcjtcbiAgcHVibGljIHByb2dyYW1OYW1lMSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1OYW1lMiA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1OYW1lMyA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1OYW1lNCA6IHN0cmluZztcbiAgcHVibGljIGJhc2ljQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIGJ1c2luZXNzVHJhdmVsQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIGZhbWlsaXlCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgYXRobGV0ZUJ1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBzcGFCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgc3RyZXNzQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIHNlbmlvckJ1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBjaGFrcmFCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgZWxlbWVudHNCdXR0b24gOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHVibGljIHJvdXRpbmVzOiBSb3V0aW5lc1Byb3ZpZGVyLFxuICAgIHB1YmxpYyBldmVudHM6IEV2ZW50cykge1xuICAgICAgdGhpcy5wcm9ncmFtID0gbmF2UGFyYW1zLmdldCgnYnViYmxlJyk7XG5cbiAgICAgIHRoaXMuZXZlbnRzLnN1YnNjcmliZSgnYWRkMVByb2dyYW1FdmVudCcsIChwcm9ncmFtTnVtYmVyLCBwcm9ncmFtTmFtZSwgcHJvZ3JhbVJ1bm5pbmdUaW1lLCBwcm9ncmFtQXBpTmFtZSkgPT4ge1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtTnVtYmVyO1xuICAgICAgICB0aGlzLmFkZDFQcm9ncmFtKHByb2dyYW1OYW1lLCBwcm9ncmFtUnVubmluZ1RpbWUsIHByb2dyYW1BcGlOYW1lKTtcbiAgICAgICAgdGhpcy5uYXZDdHJsLnBvcCgpO1xuICAgICAgfSk7XG4gIH1cbiAgaW9uVmlld0RpZExlYXZlKCl7XG4gICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleVNjcm9sbFRvcCwgdGhpcy5jb250ZW50LmdldENvbnRlbnREaW1lbnNpb25zKCkuc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCl7XG4gICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5Q3VycmVudFByb2dyYW0pLnRoZW4oKHByb2dyYW0pPT57XG4gICAgICAgIHRoaXMuZ2V0UHJvZ3JhbXMocHJvZ3JhbSAhPSBudWxsID8gcHJvZ3JhbSA6ICdiYXNpYycpO1xuICAgICAgfSlcbiAgICAgIHRoaXMucHJvZ3JhbXMgPSBEYXRhLlByb2dyYW1zO1xuXG4gICAgICB0aGlzLnJvdXRpbmVzLmdldEtleShDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTEpLnRoZW4odmFsID0+IHtcbiAgICAgICAgaWYodGhpcy5wcm9ncmFtICE9IDEgJiYgdmFsICE9IG51bGwgJiYgdmFsLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUxID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lMSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMucm91dGluZXMuZ2V0S2V5KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMikudGhlbih2YWwgPT4ge1xuICAgICAgICBpZih0aGlzLnByb2dyYW0gIT0gMiAmJiB2YWwgIT0gbnVsbCAmJiB2YWwubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTIgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUyID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5yb3V0aW5lcy5nZXRLZXkoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUzKS50aGVuKHZhbCA9PiB7XG4gICAgICAgIGlmKHRoaXMucHJvZ3JhbSAhPSAzICYmIHZhbCAhPSBudWxsICYmIHZhbC5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lMyA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTMgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnJvdXRpbmVzLmdldEtleShDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTQpLnRoZW4odmFsID0+IHtcbiAgICAgICAgaWYodGhpcy5wcm9ncmFtICE9IDQgJiYgdmFsICE9IG51bGwgJiYgdmFsLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWU0ID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lNCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5U2Nyb2xsVG9wKS50aGVuKChzY3JvbGwpPT57XG4gICAgICAgICAgdGhpcy5jb250ZW50LnNjcm9sbFRvKDAsIHNjcm9sbCwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MDApO1xuICB9XG5cbiAgc2VsZWN0UHJlU2V0UHJvZ3JhbShjYXRlZ29yeSl7XG4gICAgICB0aGlzLmdldFByb2dyYW1zKGNhdGVnb3J5KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZ3JhbShuYW1lKXtcbiAgICAgIGZvcih2YXIgaSA9IDA7ICBpIDwgRGF0YS5Qcm9ncmFtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBwcm9ncmFtID0gRGF0YS5Qcm9ncmFtc1tpXTtcbiAgICAgICAgaWYocHJvZ3JhbS5hcGlOYW1lID09IG5hbWUpXG4gICAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgICB9XG4gIH1cblxuICBnZXRQcm9ncmFtcyhjYXRlZ29yeSl7XG4gICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleUN1cnJlbnRQcm9ncmFtLCBjYXRlZ29yeSk7XG4gICAgdGhpcy5iYXNpY0J1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuYnVzaW5lc3NUcmF2ZWxCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmZhbWlsaXlCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmF0aGxldGVCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnNwYUJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuc3RyZXNzQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5zZW5pb3JCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmNoYWtyYUJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudHNCdXR0b24gPSBmYWxzZTtcbiAgICBzd2l0Y2goY2F0ZWdvcnkpe1xuICAgICAgY2FzZSAnYmFzaWMnOlxuICAgICAgICB0aGlzLmJhc2ljQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdidXNpbmVzcyBhbmQgdHJhdmVsJzpcbiAgICAgICAgdGhpcy5idXNpbmVzc1RyYXZlbEJ1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmFtaWx5JzpcbiAgICAgICAgdGhpcy5mYW1pbGl5QnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhdGhsZXRlJzpcbiAgICAgICAgdGhpcy5hdGhsZXRlQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzcGEnOlxuICAgICAgICB0aGlzLnNwYUJ1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyZXNzIHJlbGllZic6XG4gICAgICAgIHRoaXMuc3RyZXNzQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZW5pb3InOlxuICAgICAgICB0aGlzLnNlbmlvckJ1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hha3JhIGJhbGFuY2luZyc6XG4gICAgICAgIHRoaXMuY2hha3JhQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbGVtZW50cyc6XG4gICAgICAgIHRoaXMuZWxlbWVudHNCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGdyb3VwcyA9IFtdO1xuICAgIHZhciBncm91cEluZGV4ID0gMDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgRGF0YS5Hcm91cHMubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIGdyb3VwID0gRGF0YS5Hcm91cHNbaV07XG4gICAgICBpZihncm91cC5jYXRlZ29yeSA9PSBjYXRlZ29yeSl7XG4gICAgICAgIGdyb3Vwc1tncm91cEluZGV4XSA9IGdyb3VwO1xuICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgZ3JvdXAucHJvZ3JhbXMubGVuZ3RoOyBqKyspe1xuICAgICAgICAgIHZhciBwcm9ncmFtID0gZ3JvdXAucHJvZ3JhbXNbal07XG4gICAgICAgICAgZ3JvdXAucHJvZ3JhbXNbal0gPSB0aGlzLmdldFByb2dyYW0ocHJvZ3JhbS5hcGlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBncm91cEluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJlZGVmaW5lZFByb2dyYW1zID0gZ3JvdXBzO1xuICB9XG5cbiAgYWRkUHJvZ3JhbXMocm91dGluZU5hbWUsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMsIHByb2dyYW00KXtcbiAgICB2YXIgb2JqUHJvZ3JhbTEgPSB0aGlzLmdldFByb2dyYW0ocHJvZ3JhbTEpO1xuICAgIHZhciBvYmpQcm9ncmFtMiA9IHRoaXMuZ2V0UHJvZ3JhbShwcm9ncmFtMik7XG4gICAgdmFyIG9ialByb2dyYW0zID0gdGhpcy5nZXRQcm9ncmFtKHByb2dyYW0zKTtcbiAgICB2YXIgb2JqUHJvZ3JhbTQgPSB0aGlzLmdldFByb2dyYW0ocHJvZ3JhbTQpO1xuICAgIHRoaXMucm91dGluZXMuaW5zZXJ0UHJlU2V0UHJvZ3JhbShyb3V0aW5lTmFtZSwgb2JqUHJvZ3JhbTEsIG9ialByb2dyYW0yLCBvYmpQcm9ncmFtMywgb2JqUHJvZ3JhbTQpO1xuICAgIHRoaXMubmF2Q3RybC5wb3AoKTtcbiAgICB2YXIgYnViYmxlTmFtZXMgPSBbb2JqUHJvZ3JhbTEubmFtZSwgb2JqUHJvZ3JhbTIubmFtZSwgb2JqUHJvZ3JhbTMubmFtZSwgb2JqUHJvZ3JhbTQubmFtZV07XG5cbiAgICB0aGlzLnJvdXRpbmVzLnNldFByb2dyYW1zKG9ialByb2dyYW0xLm5hbWUsIG9ialByb2dyYW0yLm5hbWUsIG9ialByb2dyYW0zLm5hbWUsIG9ialByb2dyYW00Lm5hbWUpO1xuICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJzaGFyZXNCdWJibGVzXCIsIGJ1YmJsZU5hbWVzKTtcbiAgfVxuXG4gIGFkZDFQcm9ncmFtKHByb2dyYW1OYW1lLCBwcm9ncmFtUnVubmluZ1RpbWUsIHByb2dyYW1BcGlOYW1lKXtcbiAgICB0aGlzLnJvdXRpbmVzLmFkZFByb2dyYW1Ub1JvdXRpbmUodGhpcy5wcm9ncmFtLCAnJywgcHJvZ3JhbU5hbWUsIHByb2dyYW1SdW5uaW5nVGltZSwgcHJvZ3JhbUFwaU5hbWUpO1xuXG4gICAgdGhpcy5wcm9ncmFtTmFtZTEgPSB0aGlzLnByb2dyYW0gPT0gMSA/IHByb2dyYW1OYW1lIDogKHRoaXMucHJvZ3JhbU5hbWUxLmxlbmd0aCA+IDAgPyB0aGlzLnByb2dyYW1OYW1lMSA6ICcnKTtcbiAgICB0aGlzLnByb2dyYW1OYW1lMiA9IHRoaXMucHJvZ3JhbSA9PSAyID8gcHJvZ3JhbU5hbWUgOiAodGhpcy5wcm9ncmFtTmFtZTIubGVuZ3RoID4gMCA/IHRoaXMucHJvZ3JhbU5hbWUyIDogJycpO1xuICAgIHRoaXMucHJvZ3JhbU5hbWUzID0gdGhpcy5wcm9ncmFtID09IDMgPyBwcm9ncmFtTmFtZSA6ICh0aGlzLnByb2dyYW1OYW1lMy5sZW5ndGggPiAwID8gdGhpcy5wcm9ncmFtTmFtZTMgOiAnJyk7XG4gICAgdGhpcy5wcm9ncmFtTmFtZTQgPSB0aGlzLnByb2dyYW0gPT0gNCA/IHByb2dyYW1OYW1lIDogKHRoaXMucHJvZ3JhbU5hbWU0Lmxlbmd0aCA+IDAgPyB0aGlzLnByb2dyYW1OYW1lNCA6ICcnKTtcblxuICAgIHRoaXMucm91dGluZXMuc2V0UHJvZ3JhbXModGhpcy5wcm9ncmFtTmFtZTEsIHRoaXMucHJvZ3JhbU5hbWUyLCB0aGlzLnByb2dyYW1OYW1lMywgdGhpcy5wcm9ncmFtTmFtZTQpO1xuXG4gICAgdmFyIGJ1YmJsZU5hbWVzID0gW1xuICAgICAgdGhpcy5wcm9ncmFtTmFtZTEsXG4gICAgICB0aGlzLnByb2dyYW1OYW1lMixcbiAgICAgIHRoaXMucHJvZ3JhbU5hbWUzLFxuICAgICAgdGhpcy5wcm9ncmFtTmFtZTRcbiAgICBdO1xuICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJzaGFyZXNCdWJibGVzXCIsIGJ1YmJsZU5hbWVzKTtcbiAgICB0aGlzLm5hdkN0cmwucG9wKCk7XG4gIH1cblxuICBtb3JlUHJvZ3JhbUluZm8obmFtZSwgcnVuVGltZSwgZGVzY3JpcHRpb24sIGFwaU5hbWUpe1xuICAgIHRoaXMubmF2Q3RybC5wdXNoKFByb2dyYW1QYWdlLCB7IHByb2dyYW1OdW1iZXI6IHRoaXMucHJvZ3JhbSwgbmFtZTogbmFtZSwgcnVuVGltZTogcnVuVGltZSwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBhcGlOYW1lOiBhcGlOYW1lIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcHJvZ3JhbXMvcHJvZ3JhbXMudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgRXZlbnRzIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBQcm9ncmFtUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1wcm9ncmFtJyxcbiAgdGVtcGxhdGVVcmw6ICdwcm9ncmFtLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmFtUGFnZSB7XG4gIHB1YmxpYyBwcm9ncmFtTmFtZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1SdW5uaW5nVGltZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1EZXNjcmlwdGlvbiA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1BcGlOYW1lIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbU51bWJlciA6IG51bWJlcjtcbiAgcHVibGljIHByb2dyYW1SZWFsTmFtZSA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwdWJsaWMgc3RvcmFnZTogU3RvcmFnZSxcbiAgICBwdWJsaWMgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHVibGljIGV2ZW50czogRXZlbnRzKSB7XG4gIH1cbiAgaW9uVmlld0RpZExvYWQoKXtcbiAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKChwcm9nKSA9PntcbiAgICAgICAgICB0aGlzLnByb2dyYW1SZWFsTmFtZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnbmFtZScpO1xuICAgICAgICAgIHZhciBwcm9ncmFtVHJhbnNsYXRlTmFtZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnbmFtZScpO1xuICAgICAgICAgIGlmKHRoaXMuaXNOYW1lT25BcnJheShDb25zdGFudHMuc2hvcnRUaXRsZXMsIHByb2dyYW1UcmFuc2xhdGVOYW1lKSlcbiAgICAgICAgICAgIHByb2dyYW1UcmFuc2xhdGVOYW1lID0gcHJvZ3JhbVRyYW5zbGF0ZU5hbWUucmVwbGFjZSgnLXVwcGVyJywgJy1zaG9ydCcpO1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUgPSB0eXBlb2YgcHJvZ1twcm9ncmFtVHJhbnNsYXRlTmFtZV0gPT09ICd1bmRlZmluZWQnID8gcHJvZ3JhbVRyYW5zbGF0ZU5hbWUgOiBwcm9nW3Byb2dyYW1UcmFuc2xhdGVOYW1lXTtcbiAgICAgICAgICB0aGlzLnByb2dyYW1SdW5uaW5nVGltZSA9IHR5cGVvZiBwcm9nW3RoaXMubmF2UGFyYW1zLmdldCgncnVuVGltZScpXSA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm5hdlBhcmFtcy5nZXQoJ3J1blRpbWUnKSA6IHByb2dbdGhpcy5uYXZQYXJhbXMuZ2V0KCdydW5UaW1lJyldO1xuICAgICAgICAgIHRoaXMucHJvZ3JhbURlc2NyaXB0aW9uID0gdHlwZW9mIHByb2dbdGhpcy5uYXZQYXJhbXMuZ2V0KCdkZXNjcmlwdGlvbicpXSA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm5hdlBhcmFtcy5nZXQoJ2Rlc2NyaXB0aW9uJykgOiBwcm9nW3RoaXMubmF2UGFyYW1zLmdldCgnZGVzY3JpcHRpb24nKV07XG4gICAgICAgICAgdGhpcy5wcm9ncmFtQXBpTmFtZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnYXBpTmFtZScpO1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU51bWJlciA9IHRoaXMubmF2UGFyYW1zLmdldCgncHJvZ3JhbU51bWJlcicpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBhZGQxUHJvZ3JhbShwcm9ncmFtTmFtZSwgcHJvZ3JhbVJ1bm5pbmdUaW1lLCBwcm9ncmFtQXBpTmFtZSl7XG4gICAgdGhpcy5ldmVudHMucHVibGlzaChcImFkZDFQcm9ncmFtRXZlbnRcIiwgdGhpcy5wcm9ncmFtTnVtYmVyLCB0aGlzLnByb2dyYW1SZWFsTmFtZSwgdGhpcy5wcm9ncmFtUnVubmluZ1RpbWUsIHRoaXMucHJvZ3JhbUFwaU5hbWUpO1xuICB9XG5cbiAgaXNOYW1lT25BcnJheShuYW1lcywgbmFtZSl7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKG5hbWVzW2ldID09IG5hbWUpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcHJvZ3JhbS9wcm9ncmFtLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgUGxhdGZvcm0sIFRvYXN0Q29udHJvbGxlciAgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGxheWluZ1BhZ2UgfSBmcm9tICcuLi9wbGF5aW5nL3BsYXlpbmcnO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBOZXR3b3JrSW50ZXJmYWNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrLWludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBXaWZpUGFnZSBwYWdlLlxyXG4gKlxyXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cclxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXHJcbiAqL1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYWdlLXdpZmknLFxyXG4gIHRlbXBsYXRlVXJsOiAnd2lmaS5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZmlQYWdlIHtcclxuICBwdWJsaWMgdGVzdEJlZ2luUm91dGluZUludGVydmFsIDogYW55O1xyXG4gIHB1YmxpYyB0ZXN0SVBJbnRlcnZhbCA6IGFueTtcclxuICBwdWJsaWMgdGVzdFN0YXR1c0ludGVydmFsIDogYW55O1xyXG4gIHB1YmxpYyBpbnRlcnZhbENvdW50IDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbXltYXRTdGF0dXMgOiBib29sZWFuO1xyXG4gIHB1YmxpYyBteW1hdFdpZmkgOiBib29sZWFuO1xyXG4gIHB1YmxpYyBteW1hdE5vU3RhdHVzIDogYm9vbGVhbjtcclxuICBwdWJsaWMgYmF0dGVyeUNoYXJnZSA6IHN0cmluZztcclxuICBwdWJsaWMgYmF0dGVyeUltZyA6IHN0cmluZztcclxuICBwdWJsaWMgY29pbFRleHQgOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvaWxUZXh0MSA6IHN0cmluZztcclxuICBwdWJsaWMgY29pbFRleHQyIDogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb2lsVGV4dDMgOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvaWxUZXh0NCA6IHN0cmluZztcclxuICBwdWJsaWMgc2hvd1N0YXR1c1RhYmxlIDogYm9vbGVhbjtcclxuICBwdWJsaWMgc2hvd0xvYWRpbmcgOiBib29sZWFuO1xyXG4gIHB1YmxpYyBpc1J1blJvdXRpbmVFbmFibGVkIDogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGlmcmFtZVVybDogYW55O1xyXG4gIHB1YmxpYyBzaG93SWZyYW1lU3RhdHVzIDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgYXBpU2VydmljZSA6IEFQSVNlcnZpY2VQcm92aWRlcixcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHVibGljIG5ldHdvcmtJbnRlcmZhY2UgOiBOZXR3b3JrSW50ZXJmYWNlLCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIHRvYXN0Q3RybDogVG9hc3RDb250cm9sbGVyKSB7XHJcbiAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PntcclxuICAgICAgICAgIHRoaXMuY29pbFRleHQgPSB0eXBlb2YgdmFsdWVbJ2NvaWwnXSA9PT0gJ3VuZGVmaW5lZCcgPyAnQW50ZW5hJyA6IHZhbHVlWydjb2lsJ107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW9uVmlld0RpZExlYXZlKCl7XHJcbiAgICB0aGlzLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIGlvblZpZXdEaWRMb2FkKCkge1xyXG4gICAgdGhpcy5teW1hdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93SWZyYW1lU3RhdHVzID0gZmFsc2U7XHJcbiAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IHRydWU7XHJcbiAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xyXG4gICAgICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UuZ2V0V2lGaUlQQWRkcmVzcygpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgIGlmKHJlc3BvbnNlID09PSBDb25zdGFudHMubG9jYWxJUEFkZHJlc3Mpe1xyXG4gICAgICAgICAgdGhpcy5zaG93SVBCdXR0b24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgfSwocmVzcG9uc2UpPT57XHJcbiAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0aGlzLnNob3dJUEJ1dHRvbigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5teW1hdFdpZmkgPSB0cnVlO1xyXG4gICAgdGhpcy5pbnRlcnZhbENvdW50ID0gMDtcclxuICB9XHJcblxyXG4gIHNob3dJUEJ1dHRvbigpe1xyXG4gICAgLy90aGlzLm15bWF0U3RhdHVzID0gdHJ1ZTtcclxuICAgIC8vdGhpcy5zaG93U3RhdHVzVGFibGUgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuYmF0dGVyeUltZyA9ICdhc3NldHMvaW1nL2IxMDAucG4nO1xyXG4gICAgdGhpcy5jb2lsVGV4dDEgPSAnTi9BJztcclxuICAgIHRoaXMuY29pbFRleHQyID0gJ04vQSc7XHJcbiAgICB0aGlzLmNvaWxUZXh0MyA9ICdOL0EnO1xyXG4gICAgdGhpcy5jb2lsVGV4dDQgPSAnTi9BJztcclxuXHJcbiAgICAvL3RoaXMubXltYXRXaWZpID0gZmFsc2U7XHJcbiAgICAvL3RoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0SVBJbnRlcnZhbCk7XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgbXltYXQgaXMgY29ubmVjdGVkXHJcbiAgICB2YXIgbXlNYXRUZXN0ID0gdGhpcy5hcGlTZXJ2aWNlLnRlc3QoKTtcclxuICAgIG15TWF0VGVzdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAvLyBpZiBpcyBjb25uZWN0ZWQgcXVpdGFyIGltYWdlbiwgdGV4dG9zIHkgbG9hZGluZyB5IHBvbmVyIHN0YXR1cyBkZWwgbWF0XHJcbiAgICAgIGlmKHRoaXMudmVyaWZ5VmFsdWVzKHJlc3BvbnNlKSl7XHJcbiAgICAgICAgdGhpcy5zaG93U3RhdHVzKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICB0aGlzLmZhaWxTdGF0dXNWZXJpZmljYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHRoaXMuZmFpbFN0YXR1c1ZlcmlmaWNhdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93Tm9TdGF0dXMoKXtcclxuICAgICAgdGhpcy5teW1hdE5vU3RhdHVzID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNob3dTdGF0dXMoKXtcclxuICAgICAgdGhpcy5teW1hdFdpZmkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmlzUnVuUm91dGluZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGVzdFN0YXR1c0ludGVydmFsKTtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RJUEludGVydmFsKTtcclxuICB9XHJcblxyXG4gIHZlcmlmeVZhbHVlcyhyZXNwb25zZSl7XHJcbiAgICBpZihyZXNwb25zZS5pbmRleE9mKFwiPHA+PGg0PlBvd2VyOiBcIikgPiAtMSl7XHJcbiAgICAgIHZhciBwb3dlciA9IHJlc3BvbnNlLnNwbGl0KFwiPHA+PGg0PlBvd2VyOiBcIik7XHJcbiAgICAgIHBvd2VyID0gcG93ZXJbMV0uc3BsaXQoXCI8L2g0PjwvcD5cIik7XHJcbiAgICAgIHZhciBjb2lsMSA9IHJlc3BvbnNlLnNwbGl0KFwiPHRyPjx0ZD4xLjwvdGQ+PHRkPlwiKTtcclxuICAgICAgY29pbDEgPSBjb2lsMVsyXS5zcGxpdChcIjwvdGQ+PC90cj5cIik7XHJcbiAgICAgIHZhciBjb2lsMiA9IHJlc3BvbnNlLnNwbGl0KFwiPHRyPjx0ZD4yLjwvdGQ+PHRkPlwiKTtcclxuICAgICAgY29pbDIgPSBjb2lsMlsyXS5zcGxpdChcIjwvdGQ+PC90cj5cIik7XHJcbiAgICAgIHZhciBjb2lsMyA9IHJlc3BvbnNlLnNwbGl0KFwiPHRyPjx0ZD4zLjwvdGQ+PHRkPlwiKTtcclxuICAgICAgY29pbDMgPSBjb2lsM1syXS5zcGxpdChcIjwvdGQ+PC90cj5cIik7XHJcbiAgICAgIHZhciBjb2lsNCA9IHJlc3BvbnNlLnNwbGl0KFwiPHRyPjx0ZD40LjwvdGQ+PHRkPlwiKTtcclxuICAgICAgY29pbDQgPSBjb2lsNFsyXS5zcGxpdChcIjwvdGQ+PC90cj5cIik7XHJcbiAgICAgIHRoaXMuYmF0dGVyeUNoYXJnZSA9IHBvd2VyWzBdO1xyXG5cclxuICAgICAgdmFyIHBvd2VyVmFsID0gcG93ZXJbMF0uc3Vic3RyKDAscG93ZXJbMF0ubGVuZ3RoLTEpO1xyXG4gICAgICBpZihwb3dlclZhbCA+IDc1KVxyXG4gICAgICAgICAgdGhpcy5iYXR0ZXJ5SW1nID0gJ2Fzc2V0cy9pbWcvYjEwMC5wbmcnO1xyXG4gICAgICBlbHNlIGlmKHBvd2VyVmFsID4gNTApXHJcbiAgICAgICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iNzUucG5nJztcclxuICAgICAgZWxzZSBpZihwb3dlclZhbCA+IDI1KVxyXG4gICAgICAgICAgdGhpcy5iYXR0ZXJ5SW1nID0gJ2Fzc2V0cy9pbWcvYjUwLnBuZyc7XHJcbiAgICAgIGVsc2UgaWYocG93ZXJWYWwgPiAxMClcclxuICAgICAgICAgIHRoaXMuYmF0dGVyeUltZyA9ICdhc3NldHMvaW1nL2IyNS5wbmcnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iMTAucG5nJztcclxuXHJcbiAgICAgIHRoaXMuY29pbFRleHQxID0gY29pbDFbMF07XHJcbiAgICAgIHRoaXMuY29pbFRleHQyID0gY29pbDJbMF07XHJcbiAgICAgIHRoaXMuY29pbFRleHQzID0gY29pbDNbMF07XHJcbiAgICAgIHRoaXMuY29pbFRleHQ0ID0gY29pbDRbMF07XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmYWlsSVBWZXJpZmljYXRpb24oKXtcclxuICAgICAgdGhpcy50ZXN0SVBJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UuZ2V0V2lGaUlQQWRkcmVzcygpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZSA9PT0gQ29uc3RhbnRzLmxvY2FsSVBBZGRyZXNzKVxyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0lQQnV0dG9uKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICBmYWlsU3RhdHVzVmVyaWZpY2F0aW9uKCl7XHJcbiAgICB0aGlzLnRlc3RTdGF0dXNJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gdGltZW91dCBvZiBteW1hdCBkZXRlY3Rpb24gMTgwIHNlZ3VuZG9zXHJcbiAgICAgIHZhciBmYWlsTXlNYXRUZXN0ID0gdGhpcy5hcGlTZXJ2aWNlLnRlc3QoKTtcclxuICAgICAgZmFpbE15TWF0VGVzdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMudmVyaWZ5VmFsdWVzKHJlc3BvbnNlKSl7XHJcbiAgICAgICAgICB0aGlzLnNob3dTdGF0dXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuaW50ZXJ2YWxDb3VudCA+PSA1KXtcclxuICAgICAgICAgIHRoaXMuc2hvd05vU3RhdHVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuaW50ZXJ2YWxDb3VudCArPSAxO1xyXG4gICAgfSwgMzAwMCk7XHJcblxyXG4gICAgLyp2YXIgcHJvZ3JhbXMgPSAnJztcclxuXHJcbiAgICBmb3IodmFyIGkgPSAxOyBpIDw9IDQ7IGkrKyl7XHJcbiAgICAgIHN3aXRjaChpKXtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMSkudGhlbigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2dyYW1zICs9IFwiP1AxPVwiICsgdmFsLnNwbGl0KFwifFwiKVszXSArICcmJztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTIpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9ncmFtcyArPSBcIlAyPVwiICsgdmFsLnNwbGl0KFwifFwiKVszXSArICcmJztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTMpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9ncmFtcyArPSBcIlAzPVwiICsgdmFsLnNwbGl0KFwifFwiKVszXSArICcmJztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTQpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9ncmFtcyArPSBcIlA0PVwiICsgdmFsLnNwbGl0KFwifFwiKVszXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0lmcmFtZVN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubXltYXRXaWZpID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXltYXRTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlmcmFtZVVybCA9IHRoaXMuc2FuaXRpemUuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKENvbnN0YW50cy5teU1hdEFwaUluZGV4VXJsICsgcHJvZ3JhbXMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSovXHJcbiAgfVxyXG5cclxuICBzdGFydFJvdXRpbmUoKXtcclxuICAgIC8qIEFOVEVTIERFIENPQ1JSRVIgUlVUSU5BIFZFUklGSUNBUiBTSSBTRSBFU1RBIENPTkVDVEFETyBBTCBXSUZJIERFTCBNWU1BVCAqL1xyXG4gICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmlzUnVuUm91dGluZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYXBpU2VydmljZS50ZXN0KCkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy52ZXJpZnlWYWx1ZXMocmVzcG9uc2UpKXtcclxuICAgICAgICAgIC8qIENPUlJFUiBSVVRJTkEgKi9cclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0U3RhdHVzSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RJUEludGVydmFsKTtcclxuICAgICAgICAgIHZhciBwcm9ncmFtMU9iajtcclxuICAgICAgICAgIHZhciBwcm9ncmFtMk9iajtcclxuICAgICAgICAgIHZhciBwcm9ncmFtM09iajtcclxuICAgICAgICAgIHZhciBwcm9ncmFtNE9iajtcclxuICAgICAgICAgIHZhciBlcnJvcjFPYmo7XHJcbiAgICAgICAgICB2YXIgZXJyb3IyT2JqO1xyXG4gICAgICAgICAgdmFyIGVycm9yM09iajtcclxuICAgICAgICAgIHZhciBlcnJvcjRPYmo7XHJcblxyXG4gICAgICAgICAgdmFyIGlzVmFsaWRhdGVTdWNjZXNzUHJvZ3JhbSA9IDA7XHJcbiAgICAgICAgICB2YXIgaXNWYWxpZGF0ZUVycm9yUHJvZ3JhbSA9IDA7XHJcblxyXG4gICAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8PSA0OyBpKyspe1xyXG4gICAgICAgICAgICBzd2l0Y2goaSl7XHJcbiAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTEpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBwcm9ncmFtMU9iaiA9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgaXNWYWxpZGF0ZVN1Y2Nlc3NQcm9ncmFtICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlzVmFsaWRhdGVFcnJvclByb2dyYW0gKz0gMTtcclxuICAgICAgICAgICAgICAgICAgZXJyb3IxT2JqID0gZXJyO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMikudGhlbigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHByb2dyYW0yT2JqID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgICBpc1ZhbGlkYXRlU3VjY2Vzc1Byb2dyYW0gKz0gMTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaXNWYWxpZGF0ZUVycm9yUHJvZ3JhbSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICBlcnJvcjJPYmogPSBlcnI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUzKS50aGVuKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcHJvZ3JhbTNPYmogPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgIGlzVmFsaWRhdGVTdWNjZXNzUHJvZ3JhbSArPSAxO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpc1ZhbGlkYXRlRXJyb3JQcm9ncmFtICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgIGVycm9yM09iaiA9IGVycjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTQpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBwcm9ncmFtNE9iaiA9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgaXNWYWxpZGF0ZVN1Y2Nlc3NQcm9ncmFtICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlzVmFsaWRhdGVFcnJvclByb2dyYW0gKz0gMTtcclxuICAgICAgICAgICAgICAgICAgZXJyb3I0T2JqID0gZXJyO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMudGVzdEJlZ2luUm91dGluZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihpc1ZhbGlkYXRlU3VjY2Vzc1Byb2dyYW0gPT0gNCl7XHJcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RCZWdpblJvdXRpbmVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgdmFyIHByb2dyYW1zID0gW1xyXG4gICAgICAgICAgICAgICAgICBwcm9ncmFtMU9iaixcclxuICAgICAgICAgICAgICAgICAgcHJvZ3JhbTJPYmosXHJcbiAgICAgICAgICAgICAgICAgIHByb2dyYW0zT2JqLFxyXG4gICAgICAgICAgICAgICAgICBwcm9ncmFtNE9ialxyXG4gICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5zdGFydChwcm9ncmFtcykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlICsgJycpO1xyXG4gICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICAvKnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgZW1haWxEYXRhID0geyBlcnJvciA6IHJlc3BvbnNlLmRhdGEgfTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRFcnJvcihlbWFpbERhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAxMjAwMDApOyovXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAvKiBDT1JSRVIgUlVUSU5BICovXHJcbiAgICAgICAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoUGxheWluZ1BhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoaXNWYWxpZGF0ZVN1Y2Nlc3NQcm9ncmFtICsgaXNWYWxpZGF0ZUVycm9yUHJvZ3JhbSA9PSA0KXtcclxuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGVzdEJlZ2luUm91dGluZUludGVydmFsKTtcclxuICAgICAgICAgICAgICBsZXQgdG9hc3QgPSB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0hhIG9jdXJyaWRvIHVuIGVycm9yIChDb2RlOiAyKScsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwMCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHRvYXN0LnByZXNlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmlzUnVuUm91dGluZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5teW1hdFdpZmkgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5zaG93U3RhdHVzVGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzUnVuUm91dGluZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubXltYXRXaWZpID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm15bWF0U3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93U3RhdHVzVGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZhaWxJUFZlcmlmaWNhdGlvbigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0b3AoKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0U3RhdHVzSW50ZXJ2YWwpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RJUEludGVydmFsKTtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy93aWZpL3dpZmkudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBMb2NhbE5vdGlmaWNhdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2xvY2FsLW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBQbGF5aW5nUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1wbGF5aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICdwbGF5aW5nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQbGF5aW5nUGFnZSB7XG4gIHB1YmxpYyBwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nQXNUaW1lIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1UaXRsZTEgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtVGl0bGUyIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbVRpdGxlMyA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1UaXRsZTQgOiBzdHJpbmc7XG4gIHB1YmxpYyBkaXNwbGF5UnVubmluZ1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBmaW5pc2hUaW1lIDogYW55O1xuICBwdWJsaWMgdGltZXJJbnRlcnZhbCA6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwdWJsaWMgc3RvcmFnZTogU3RvcmFnZSxcbiAgICBwdWJsaWMgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBsb2NhbE5vdGlmaWNhdGlvbnMgOiBMb2NhbE5vdGlmaWNhdGlvbnMsIHB1YmxpYyBwbHQ6IFBsYXRmb3JtKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzdW1lJywgKCkgPT4ge1xuICAgICAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIF90aGlzLnJlc3VtZSh0LmdldFRpbWUoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNpbXVsYXRlUmVzdW1lKCl7XG4gICAgdmFyIHQgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMucmVzdW1lKHQuZ2V0VGltZSgpICsgMTApO1xuICB9XG5cbiAgcmVzdW1lKG5vdyl7XG4gICAgaWYoTWF0aC5yb3VuZChub3cgLyAxMDAwKSA+IHRoaXMuZmluaXNoVGltZSl7XG4gICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9ICcwMDowMCc7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJbnRlcnZhbCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB2YXIgc2Vjb25kc0xlZnQgPSB0aGlzLmZpbmlzaFRpbWUgLSBNYXRoLnJvdW5kKG5vdyAvIDEwMDApO1xuICAgICAgdGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPSB0aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHNlY29uZHNMZWZ0KTtcbiAgICB9XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICB2YXIgcHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmc7XG4gICAgdmFyIHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nO1xuICAgIHZhciBwcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZztcbiAgICB2YXIgcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmc7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8PSA0OyBpKyspe1xuICAgICAgc3dpdGNoKGkpe1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTEpLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsLnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nQXNUaW1lID0gdmFsdWVbMl07IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZSh2YWx1ZVsyXSk7XG4gICAgICAgICAgICBwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZyA9IHZhbHVlWzJdO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgocHJvZykgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtVGl0bGUxID0gdHlwZW9mIHByb2dbdmFsdWVbMV1dID09PSAndW5kZWZpbmVkJyA/IHZhbHVlWzFdIDogcHJvZ1t2YWx1ZVsxXV07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMikudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWwuc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgPSB2YWx1ZVsyXTsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHZhbHVlWzJdKTtcbiAgICAgICAgICAgIHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nID0gdmFsdWVbMl07XG5cbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKChwcm9nKSA9PntcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW1UaXRsZTIgPSB0eXBlb2YgcHJvZ1t2YWx1ZVsxXV0gPT09ICd1bmRlZmluZWQnID8gdmFsdWVbMV0gOiBwcm9nW3ZhbHVlWzFdXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUzKS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbC5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA9IHZhbHVlWzJdOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUodmFsdWVbMl0pO1xuICAgICAgICAgICAgcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcgPSB2YWx1ZVsyXTtcblxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHByb2cpID0+e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbVRpdGxlMyA9IHR5cGVvZiBwcm9nW3ZhbHVlWzFdXSA9PT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZVsxXSA6IHByb2dbdmFsdWVbMV1dO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTQpLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsLnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nQXNUaW1lID0gdmFsdWVbMl07IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZSh2YWx1ZVsyXSk7XG4gICAgICAgICAgICBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZyA9IHZhbHVlWzJdO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgocHJvZykgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtVGl0bGU0ID0gdHlwZW9mIHByb2dbdmFsdWVbMV1dID09PSAndW5kZWZpbmVkJyA/IHZhbHVlWzFdIDogcHJvZ1t2YWx1ZVsxXV07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmKHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nID4gcHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmcgJiYgcHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmcgPiBwcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZyAmJiBwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZyA+IHByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nKVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gcHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmc7IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZShwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZyk7XG4gICAgICAgICAgICBlbHNlIGlmKHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nID4gcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcgJiYgcHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmcgPiBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZylcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9IHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUocHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmcpO1xuICAgICAgICAgICAgZWxzZSBpZihwcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZyA+IHByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nKVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmc7IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZShwcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZyk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPSBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZzsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nKTtcblxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPSB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZTtcbiAgICAgICAgICAgIHZhciB0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoVGltZSA9IE1hdGgucm91bmQodC5nZXRUaW1lKCkgLyAxMDAwKSArIHRoaXMuZ2V0U2Vjb25kcyh0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSk7XG5cbiAgICAgICAgICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPSB0aGlzLmRlY3JlYXNlU2Vjb25kKHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lKTtcbiAgICAgICAgICAgICAgaWYodGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPT0gJzAwOjAwJyl7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySW50ZXJ2YWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgocHJvZykgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoe1xuICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ015TWF0IExpZ2h0JyxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHByb2dbJ3RpbWUtZXhwaXJlLXRleHQnXSxcbiAgICAgICAgICAgICAgICAgIHNvdW5kOiAnZmlsZTovL2Fzc2V0cy9zb3VuZHMvJyArICh0aGlzLnBsdC5pcygnaW9zJykgPyAnZ29uZ19jNS5tNHInIDogJ2dvbmdfYzUubXAzJyksXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB7IGF0OiBuZXcgRGF0ZSh0LmdldFRpbWUoKSArIHRoaXMuZ2V0U2Vjb25kcyh0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSkgKiAxMDAwKSB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5vbihcImNsaWNrXCIpLnN1YnNjcmliZSh7IG5leHQobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3RpZmljYXRpb24uaWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5yZXN1bWUodC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVjcmVhc2VTZWNvbmQodGltZSl7XG4gICAgdmFyIG1pbnV0ZXNTdHIgPSB0aW1lLnN1YnN0cigwLHRpbWUuaW5kZXhPZignOicpKTtcbiAgICB2YXIgbWludXRlcyA9IG1pbnV0ZXNTdHJbMF0gPT0gJzAnID8gcGFyc2VJbnQobWludXRlc1N0clsxXSkgOiBwYXJzZUludChtaW51dGVzU3RyKTtcbiAgICB2YXIgc2Vjb25kc1N0ciA9IHRpbWUuc3Vic3RyKHRpbWUuaW5kZXhPZignOicpICsgMSk7XG4gICAgdmFyIHNlY29uZHMgPSBzZWNvbmRzU3RyWzBdID09ICcwJyA/IHBhcnNlSW50KHNlY29uZHNTdHJbMV0pIDogcGFyc2VJbnQoc2Vjb25kc1N0cik7XG4gICAgaWYoc2Vjb25kcyAtIDEgPT0gLTEpe1xuICAgICAgbWludXRlc1N0ciA9IG1pbnV0ZXMgLSAxIDwgMTAgJiYgbWludXRlcyAtIDEgPj0gMCA/ICcwJyArIChtaW51dGVzIC0gMSkgOiBtaW51dGVzIC0gMSA9PSAtMSA/ICcwMCcgOiAnJyArIChtaW51dGVzIC0gMSk7XG4gICAgICBzZWNvbmRzU3RyID0gJzU5JztcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHNlY29uZHNTdHIgPSBzZWNvbmRzIC0gMSA8IDEwID8gJzAnICsgKHNlY29uZHMgLSAxKSA6ICcnICsgKHNlY29uZHMgLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIG1pbnV0ZXNTdHIgKyAnOicgKyBzZWNvbmRzU3RyO1xuICB9XG5cbiAgZ2V0U2Vjb25kcyh0aW1lKXtcbiAgICB2YXIgbWludXRlc1N0ciA9IHRpbWUuc3Vic3RyKDAsdGltZS5pbmRleE9mKCc6JykpO1xuICAgIHZhciBtaW51dGVzID0gbWludXRlc1N0clswXSA9PSAnMCcgPyBwYXJzZUludChtaW51dGVzU3RyWzFdKSA6IHBhcnNlSW50KG1pbnV0ZXNTdHIpO1xuICAgIHZhciBzZWNvbmRzU3RyID0gdGltZS5zdWJzdHIodGltZS5pbmRleE9mKCc6JykgKyAxKTtcbiAgICB2YXIgc2Vjb25kcyA9IHNlY29uZHNTdHJbMF0gPT0gJzAnID8gcGFyc2VJbnQoc2Vjb25kc1N0clsxXSkgOiBwYXJzZUludChzZWNvbmRzU3RyKTtcbiAgICByZXR1cm4gKG1pbnV0ZXMgKiA2MCkgKyBzZWNvbmRzO1xuICB9XG5cbiAgY29udmVydFNlY29uZHNUb1RpbWUodGltZUluU2Vjb25kcykge1xuICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lSW5TZWNvbmRzIC8gNjApO1xuICAgIHZhciBtaW51dGVzU3RyID0gXCIwXCIgKyBtaW51dGVzO1xuICAgIHZhciBzZWNvbmRzID0gXCIwXCIgKyAodGltZUluU2Vjb25kcyAtIG1pbnV0ZXMgKiA2MCk7XG4gICAgcmV0dXJuIG1pbnV0ZXNTdHIuc3Vic3RyKC0yKSArIFwiOlwiICsgc2Vjb25kcy5zdWJzdHIoLTIpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcGxheWluZy9wbGF5aW5nLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBIZWxwUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1oZWxwJyxcbiAgdGVtcGxhdGVVcmw6ICdoZWxwLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIZWxwUGFnZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcykge1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIEhlbHBQYWdlJyk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2hlbHAvaGVscC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIENvbnRhY3RQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWNvbnRhY3QnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbnRhY3QuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RQYWdlIHtcbiAgcHJpdmF0ZSBjb250YWN0Rm9ybSA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGNvbnRhY3REaXNhYmxlZCA6IGJvb2xlYW47XG4gIHB1YmxpYyAgbmFtZV92YWx1ZSA6IHN0cmluZztcbiAgcHVibGljICBlbWFpbF92YWx1ZSA6IHN0cmluZztcbiAgcHVibGljICBtZXNzYWdlX3ZhbHVlIDogc3RyaW5nO1xuICBwdWJsaWMgYnV0dG9uX3NlbmQgOiBzdHJpbmc7XG4gIHB1YmxpYyByZXNwb25zZV90ZXh0IDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgYXBpU2VydmljZSA6IEFQSVNlcnZpY2VQcm92aWRlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSkge1xuICAgIHRoaXMuY29udGFjdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIG1lc3NhZ2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuY2xlYW5Gb3JtKCk7XG4gICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gJyc7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLmJ1dHRvbl9zZW5kID0gdmFsdWVbJ3NlbmQtdGV4dCddO1xuICAgICAgICAvLyBNb3N0cmFyIHRleHRvIGVuIGxhYmVsIGRlYmFqbyBkZWwgYm90b25cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYW5Gb3JtKCl7XG4gICAgdGhpcy5jb250YWN0RGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubmFtZV92YWx1ZSA9ICcnO1xuICAgIHRoaXMuZW1haWxfdmFsdWUgPSAnJztcbiAgICB0aGlzLm1lc3NhZ2VfdmFsdWUgPSAnJztcbiAgfVxuXG4gIGF0dGVtcHRTZW5kTWFpbCgpe1xuICAgIHZhciBlbWFpbERhdGEgPSB7IGVtYWlsIDogdGhpcy5jb250YWN0Rm9ybS52YWx1ZS5lbWFpbCwgbmFtZSA6IHRoaXMuY29udGFjdEZvcm0udmFsdWUubmFtZSwgbWVzc2FnZSA6IHRoaXMuY29udGFjdEZvcm0udmFsdWUubWVzc2FnZSB9O1xuICAgIHRoaXMuYXBpU2VydmljZS5zZW5kRW1haWwoZW1haWxEYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgdmFyIG9iaiA6IGFueSA9IHJlc3VsdDtcbiAgICAgICAgaWYgKG9iai5zdGF0dXMgPT0gXCJva1wiKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSB2YWx1ZVsnZW1haWwtc3VjY2Vzcy1tZXNzYWdlJ107XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uX3NlbmQgPSB2YWx1ZVsnc2VudC10ZXh0J107XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbkZvcm0oKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gdmFsdWVbJ2VtYWlsLWVycm9yLW1lc3NhZ2UnXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9IHZhbHVlWydlbWFpbC1lcnJvci1tZXNzYWdlJ107XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9jb250YWN0L2NvbnRhY3QudHMiLCJpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi50cyIsImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEVycm9ySGFuZGxlciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IElvbmljQXBwLCBJb25pY0Vycm9ySGFuZGxlciwgSW9uaWNNb2R1bGUgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9odHRwJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXInO1xuaW1wb3J0IHsgTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yay1pbnRlcmZhY2UnO1xuLy9pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IExvY2FsTm90aWZpY2F0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbG9jYWwtbm90aWZpY2F0aW9ucyc7XG5cbmltcG9ydCB7IE15QXBwIH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaG9tZS9ob21lJztcbmltcG9ydCB7IEhlbHBQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaGVscC9oZWxwJztcbmltcG9ydCB7IENvbnRhY3RQYWdlIH0gZnJvbSAnLi4vcGFnZXMvY29udGFjdC9jb250YWN0JztcbmltcG9ydCB7IFByb2dyYW1zUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3Byb2dyYW1zL3Byb2dyYW1zJztcbmltcG9ydCB7IFdpZmlQYWdlIH0gZnJvbSAnLi4vcGFnZXMvd2lmaS93aWZpJztcbmltcG9ydCB7IFBsYXlpbmdQYWdlIH0gZnJvbSAnLi4vcGFnZXMvcGxheWluZy9wbGF5aW5nJztcbmltcG9ydCB7IFByb2dyYW1QYWdlIH0gZnJvbSAnLi4vcGFnZXMvcHJvZ3JhbS9wcm9ncmFtJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyJztcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XG5pbXBvcnQgeyBSb3V0aW5lc1Byb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL3JvdXRpbmVzL3JvdXRpbmVzJztcbmltcG9ydCB7IEFQSVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBIdHRwTG9hZGVyRmFjdG9yeShodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHAsICcuL2Fzc2V0cy9pMThuLycsICcuanNvbicpO1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNeUFwcCxcbiAgICBIb21lUGFnZSxcbiAgICBIZWxwUGFnZSxcbiAgICBDb250YWN0UGFnZSxcbiAgICBQcm9ncmFtc1BhZ2UsXG4gICAgV2lmaVBhZ2UsXG4gICAgUGxheWluZ1BhZ2UsXG4gICAgUHJvZ3JhbVBhZ2VcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIElvbmljTW9kdWxlLmZvclJvb3QoTXlBcHApLFxuICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KCksXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICBsb2FkZXI6IHtcbiAgICAgICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IEh0dHBMb2FkZXJGYWN0b3J5LFxuICAgICAgICAgICAgZGVwczogW0h0dHBDbGllbnRdXG4gICAgICAgIH1cbiAgICB9KVxuICBdLFxuICBib290c3RyYXA6IFtJb25pY0FwcF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIE15QXBwLFxuICAgIEhvbWVQYWdlLFxuICAgIEhlbHBQYWdlLFxuICAgIENvbnRhY3RQYWdlLFxuICAgIFByb2dyYW1zUGFnZSxcbiAgICBXaWZpUGFnZSxcbiAgICBQbGF5aW5nUGFnZSxcbiAgICBQcm9ncmFtUGFnZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTdGF0dXNCYXIsXG4gICAgU3BsYXNoU2NyZWVuLFxuICAgIFJvdXRpbmVzUHJvdmlkZXIsXG4gICAgTmV0d29ya0ludGVyZmFjZSxcbi8vICAgIE5ldHdvcmssXG4gICAgTG9jYWxOb3RpZmljYXRpb25zLFxuICAgIHsgcHJvdmlkZTogRXJyb3JIYW5kbGVyLCB1c2VDbGFzczogSW9uaWNFcnJvckhhbmRsZXIgfSxcbiAgICBBUElTZXJ2aWNlUHJvdmlkZXIsXG4gICAgSFRUUFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVudUNvbnRyb2xsZXIsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTmF2LCBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyJztcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vc2VydmljZXMvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgSGVscFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9oZWxwL2hlbHAnO1xuaW1wb3J0IHsgQ29udGFjdFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9jb250YWN0L2NvbnRhY3QnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTXlBcHAge1xuICBAVmlld0NoaWxkKE5hdikgbmF2OiBOYXY7XG5cbiAgcm9vdFBhZ2U6IGFueSA9IEhvbWVQYWdlO1xuICBsYW5nX2VuIDogYm9vbGVhbjtcbiAgbGFuZ19lcyA6IGJvb2xlYW47XG4gIGxhbmdfcHQgOiBib29sZWFuO1xuICBsYW5nX2ZyIDogYm9vbGVhbjtcbiAgbGFuZ19nciA6IGJvb2xlYW47XG4gIGxhbmdfaXQgOiBib29sZWFuO1xuXG4gIHBhZ2VzOiBBcnJheTx7dGl0bGU6IHN0cmluZywgY29tcG9uZW50OiBhbnksIGljb246IGFueX0+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sIHB1YmxpYyBzdGF0dXNCYXI6IFN0YXR1c0JhciwgcHVibGljIHNwbGFzaFNjcmVlbjogU3BsYXNoU2NyZWVuLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHVibGljIG1lbnVDdHJsOiBNZW51Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLFxuICAgIHB1YmxpYyBldmVudHMgOiBFdmVudHMpIHtcbiAgICB0aGlzLmluaXRpYWxpemVBcHAoKTtcblxuICAgIC8vIHVzZWQgZm9yIGFuIGV4YW1wbGUgb2YgbmdGb3IgYW5kIG5hdmlnYXRpb25cbiAgICB0aGlzLnBhZ2VzID0gW1xuICAgICAgeyB0aXRsZTogJ2hvbWUtdGl0bGUnLCBjb21wb25lbnQ6IEhvbWVQYWdlLCBpY29uOiAnbWVudWl0ZW1ob21lJyB9LFxuICAgICAgeyB0aXRsZTogJ2hlbHAtdGl0bGUnLCBjb21wb25lbnQ6IEhlbHBQYWdlLCBpY29uOiAnbWVudWl0ZW1oZWxwJyB9LFxuICAgICAgeyB0aXRsZTogJ2NvbnRhY3QtdGl0bGUnLCBjb21wb25lbnQ6IENvbnRhY3RQYWdlLCBpY29uOiAnbWVudWl0ZW1jb250YWN0JyB9XG4gICAgXTtcbiAgICBwbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKHZhbHVlKT0+e1xuICAgICAgICBpZighdmFsdWUpe1xuICAgICAgICAgIHZhbHVlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnNwbGl0KCctJylbMF07XG4gICAgICAgICAgdHJhbnNsYXRlU2VydmljZS5zZXREZWZhdWx0TGFuZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJhbnNsYXRlU2VydmljZS51c2UodmFsdWUpO1xuICAgICAgICB0aGlzLnN3aXRjaExhbmcodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXplQXBwKCkge1xuICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIE9rYXksIHNvIHRoZSBwbGF0Zm9ybSBpcyByZWFkeSBhbmQgb3VyIHBsdWdpbnMgYXJlIGF2YWlsYWJsZS5cbiAgICAgIC8vIEhlcmUgeW91IGNhbiBkbyBhbnkgaGlnaGVyIGxldmVsIG5hdGl2ZSB0aGluZ3MgeW91IG1pZ2h0IG5lZWQuXG4gICAgICB0aGlzLnN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcbiAgICAgIHRoaXMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5QYWdlKHBhZ2UpIHtcbiAgICAvLyBSZXNldCB0aGUgY29udGVudCBuYXYgdG8gaGF2ZSBqdXN0IHRoaXMgcGFnZVxuICAgIC8vIHdlIHdvdWxkbid0IHdhbnQgdGhlIGJhY2sgYnV0dG9uIHRvIHNob3cgaW4gdGhpcyBzY2VuYXJpb1xuICAgIHRoaXMubmF2LnNldFJvb3QocGFnZS5jb21wb25lbnQpO1xuICB9XG5cbiAgc3dpdGNoTGFuZyhsYW5nKXtcblx0ICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdzd2l0Y2hMYW5nRXZlbnQnLGxhbmcpO1xuICAgIHN3aXRjaChsYW5nKXtcbiAgICAgIGNhc2UgJ2VzJzpcbiAgICAgICAgdGhpcy5sYW5nX2VuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYW5nX2VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFuZ19wdCA9IHRydWU7XG4gICAgICAgIHRoaXMubGFuZ19mciA9IHRydWU7XG4gICAgICAgIHRoaXMubGFuZ19nciA9IHRydWU7XG4gICAgICAgIHRoaXMubGFuZ19pdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW4nOlxuICAgICAgICB0aGlzLmxhbmdfZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYW5nX2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYW5nX3B0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYW5nX2ZyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYW5nX2dyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYW5nX2l0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwdCc6XG4gICAgICAgIHRoaXMubGFuZ19lbiA9IHRydWU7XG4gICAgICAgIHRoaXMubGFuZ19lcyA9IHRydWU7XG4gICAgICAgIHRoaXMubGFuZ19wdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhbmdfZnIgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhbmdfZ3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhbmdfaXQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2l0JzpcbiAgICAgICAgdGhpcy5sYW5nX2VuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYW5nX2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYW5nX3B0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYW5nX2ZyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYW5nX2dyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYW5nX2l0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZ3InOlxuICAgICAgICB0aGlzLmxhbmdfZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmxhbmdfZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhbmdfcHQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhbmdfZnIgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhbmdfZ3IgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYW5nX2l0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmcic6XG4gICAgICAgIHRoaXMubGFuZ19lbiA9IHRydWU7XG4gICAgICAgIHRoaXMubGFuZ19lcyA9IHRydWU7XG4gICAgICAgIHRoaXMubGFuZ19wdCA9IHRydWU7XG4gICAgICAgIHRoaXMubGFuZ19mciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhbmdfZ3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhbmdfaXQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZywgbGFuZyk7XG4gICAgdGhpcy5tZW51Q3RybC5jbG9zZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJleHBvcnQgdmFyIENvbnN0YW50cyA9IHtcbiAgICBsb2NhbElQQWRkcmVzcyAgICA6ICcxOTIuMTY4LjAuMTAwJyxcbiAgXHRteU1hdEFwaVN0YXJ0VXJsICA6ICdodHRwOi8vMTkyLjE2OC4xLjMvc3RhcnQuaHRtJyxcbiAgICBteU1hdEFwaUluZGV4VXJsICA6ICdodHRwOi8vMTkyLjE2OC4xLjMvaW5kZXguaHRtJyxcbiAgXHRteU1hdEFwaVVybCAgICAgICA6ICdodHRwczovL3d3dy5lc2ZlcmFzb2x1Y2lvbmVzLmNvbS9hcGkvbXltYXQvJyxcbiAgICBzdG9yYWdlS2V5TGFuZyAgICA6ICdteW1hdF9sYW5nJyxcbiAgICBzdG9yYWdlS2V5QnViYmxlMSA6ICdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTEnLFxuICAgIHN0b3JhZ2VLZXlCdWJibGUyIDogJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtMicsXG4gICAgc3RvcmFnZUtleUJ1YmJsZTMgOiAnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW0zJyxcbiAgICBzdG9yYWdlS2V5QnViYmxlNCA6ICdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTQnLFxuICAgIHN0b3JhZ2VLZXlTY3JvbGxUb3AgOiAnTXlNYXRfc2Nyb2xsVG9wJyxcbiAgICBzdG9yYWdlS2V5Q3VycmVudFByb2dyYW0gOiAnTXlNYXRfY3VycmVudFByb2dyYW0nLFxuICAgIHNob3J0VGl0bGVzICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2VhcnRoLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpcmUtZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbWV0YWwtZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnd2F0ZXItZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnd29vZC1lbGVtZW50LXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdnYWxsYmxhZGRlci1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAna2lkbmV5LW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdoZWFydC1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFyZ2UtaW50ZXN0aW5lLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdsaXZlci1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbHVuZy1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAncGVyaWNhcmRpdW0tbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NtYWxsLWludGVzdGluZS1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3BsZWVuLXBhbmNyZWFzLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdG9tYWNoLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0cmlwbGUtd2FybWVyLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1cmluYXJ5LWJsYWRkZXItbWVyaWRpYW4tdXBwZXInXG4gICAgICAgICAgICAgICAgICAgICAgXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9jb25zdGFudHMudHMiLCJleHBvcnQgdmFyIERhdGEgPSB7IEdyb3VwcyA6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXG4gICAgICAgICAgICBuYW1lOiAncGFpbi1yZWxpZWYtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBhaW5fQ29uZGl0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXG4gICAgICAgICAgICBuYW1lOiAnaW5qdXJ5LXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxuICAgICAgICAgICAgbmFtZTogJ3N0cmVzcy1yZWxpZWYtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxuICAgICAgICAgICAgbmFtZTogJ2ltbXVuZS1zeXN0ZW0tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcbiAgICAgICAgICAgIG5hbWU6ICdyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNpbnVzX0Nhdml0aWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxuICAgICAgICAgICAgbmFtZTogJ2RldG94aWZpY2F0aW9uLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcbiAgICAgICAgICAgIG5hbWU6ICdoZWFkYWNoZS11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhZGFjaGVcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXG4gICAgICAgICAgICBuYW1lOiAnZ3JvdW5kaW5nLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWFydGhfRWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXG4gICAgICAgICAgICBuYW1lOiAnZW5lcmd5LWJvb3N0ZXItdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRXhoYXVzdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxuICAgICAgICAgICAgbmFtZTogJ0pFVC1MQUcnLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkpldC1MYWcvQ2xpbWF0ZV9DaGFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWFydGhfRWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxuICAgICAgICAgICAgbmFtZTogJ0pFVC1MQUcnLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkpldC1MYWcvQ2xpbWF0ZV9DaGFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFeGhhdXN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcbiAgICAgICAgICAgIG5hbWU6ICdjb25jZW50cmF0aW9uLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25jZW50cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlzY2Vybm1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBZHJlbmFsX0dsYW5kXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQnJvd19DaGFrcmFcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcbiAgICAgICAgICAgIG5hbWU6ICdkaWdlc3Rpb24tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1pbmVyYWxfTWV0YWJvbGljX0FjdGl2aXR5XCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcbiAgICAgICAgICAgIG5hbWU6ICdyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcbiAgICAgICAgICAgIG5hbWU6ICdsb3dlci1iYWNrYWNoZS11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQmFja2FjaGVcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxuICAgICAgICAgICAgbmFtZTogJ25lY2stc2hvdWxkZXItdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lY2svU2hvdWxkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgIH0sXG5cblxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXG4gICAgICAgICAgICBuYW1lOiAnc2xlZXAtZW5oYW5jZXItdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNsZWVwX0VuaGFuY2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxuICAgICAgICAgICAgbmFtZTogJ2NoaWxkcmVuLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaGlsZF9EZXZlbG9wbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXG4gICAgICAgICAgICBuYW1lOiAnZmVtYWxlLWhvcm1vbmFsLWltYmFsYW5jZXMtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZlbWFsZV9Ib3Jtb25lX0JhbGFuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcbiAgICAgICAgICAgIG5hbWU6ICdtYWxlLWhvcm1vbmFsLWltYmFsYW5jZXMtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1hbGVfSG9ybW9uZV9CYWxhbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXG4gICAgICAgICAgICBuYW1lOiAnY29sZC1mbHUtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZsdVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXG4gICAgICAgICAgICBuYW1lOiAnY29uc3RpcGF0aW9uLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25zdGlwYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxuICAgICAgICAgICAgbmFtZTogJ2RpYXJyaGVhLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWFycmhlYVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkludGVzdGluYWxfRmxvcmFcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxuICAgICAgICAgICAgbmFtZTogJ2Vhci1wcm9ibGVtcy11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQXVkaXRvcnlfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXG4gICAgICAgICAgICBuYW1lOiAnZXllc2lnaHQtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkV5ZXNpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXG4gICAgICAgICAgICBuYW1lOiAnaW50ZXN0aW5hbC1mbHUtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGbHVcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkludGVzdGluYWxfRmxvcmFcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxuICAgICAgICAgICAgbmFtZTogJ2VuZXJneS1ib29zdGVyLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQm9vc3RlclwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxuICAgICAgICAgICAgbmFtZTogJ3JlZ2VuZXJhdGlvbi11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVml0YWxpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcbiAgICAgICAgICAgIG5hbWU6ICdyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTaW51c19DYXZpdGllc1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcbiAgICAgICAgICAgIG5hbWU6ICdpbmp1cnktdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGFpbl9Db25kaXRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxuICAgICAgICAgICAgbmFtZTogJ3BhaW4tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGFpbl9Db25kaXRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxuICAgICAgICAgICAgbmFtZTogJ2JhY2thY2hlLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCYWNrYWNoZVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lY2svU2hvdWxkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJWZXJ0ZWJyYWVcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJHYWxsYmxhZGRlcl9NZXJpZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxuICAgICAgICAgICAgbmFtZTogJ211c2NsZXMtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcbiAgICAgICAgICAgIG5hbWU6ICdpbW11bmUtc3lzdGVtLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcbiAgICAgICAgICAgIG5hbWU6ICdhbnRpLWFnaW5nLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCb25lX1Rpc3N1ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBbnRpX0FnaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbm5lY3RpdmVfVGlzc3Vlc1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXG4gICAgICAgICAgICBuYW1lOiAnd2VpZ2h0LWNvbnRyb2wtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkZGljdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiV2VpZ2h0X0NvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUcmlwbGVfV2FybWVyX01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXG4gICAgICAgICAgICBuYW1lOiAnZGV0b3hpZmljYXRpb24tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNaW5lcmFsX01ldGFib2xpY19BY3Rpdml0eVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXG4gICAgICAgICAgICBuYW1lOiAnc2tpbi1jb25kaXRpb25zLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTa2luX0NvbmRpdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzcGEnLFxuICAgICAgICAgICAgbmFtZTogJ2hhaXItZ3Jvd3RoLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIYWlyX0dyb3d0aFwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXG4gICAgICAgICAgICBuYW1lOiAnbG93LXBoeXNpY2FsLWRyaXZlLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMb3dfUGh5c2ljYWxfRHJpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzcGEnLFxuICAgICAgICAgICAgbmFtZTogJ2xvdy1tZW50YWwtZHJpdmUtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMb3dfTWVudGFsX0RyaXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZXJ2b3VzX1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzdHJlc3MgcmVsaWVmJyxcbiAgICAgICAgICAgIG5hbWU6ICdzdHJlc3MtcmVsaWVmLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJKb3lcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXG4gICAgICAgICAgICBuYW1lOiAndml0YWxpdHktdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSm95XCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJWaXRhbGl0eVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzdHJlc3MgcmVsaWVmJyxcbiAgICAgICAgICAgIG5hbWU6ICdzbGVlcC1lbmhhbmNlci11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNsZWVwX0VuaGFuY2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzdHJlc3MgcmVsaWVmJyxcbiAgICAgICAgICAgIG5hbWU6ICdlbmVyZ3ktYm9vc3Rlci11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRyZW5hbF9HbGFuZFwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRXhoYXVzdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXG4gICAgICAgICAgICBuYW1lOiAnaHlwZXJ0ZW5zaW9uLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkh5cGVydGVuc2lvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0Z1bmN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXG4gICAgICAgICAgICBuYW1lOiAndGh5cm9pZC11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVGh5cm9pZF9HbGFuZHNcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRocm9hdF9DaGFrcmFcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXG4gICAgICAgICAgICBuYW1lOiAnbG93LW1lbnRhbC1kcml2ZS11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxvd19NZW50YWxfRHJpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcbiAgICAgICAgICAgIG5hbWU6ICdyZWdlbmVyYXRpb24tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxuICAgICAgICAgICAgbmFtZTogJ3ZpdGFsaXR5LXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQm9vc3RlclwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJWaXRhbGl0eVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXG4gICAgICAgICAgICBuYW1lOiAnam95LXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSm95XCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWV0YWxfRWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXG4gICAgICAgICAgICBuYW1lOiAnc2xlZXAtZW5oYW5jZXItdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTbGVlcF9FbmhhbmNlclwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcbiAgICAgICAgICAgIG5hbWU6ICdoZWFydC1mdW5jdGlvbi11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRmlyZV9FbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfRnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUcmlwbGVfV2FybWVyX01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcbiAgICAgICAgICAgIG5hbWU6ICdyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNpbnVzX0Nhdml0aWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcbiAgICAgICAgICAgIG5hbWU6ICdoeXBlcnRlbnNpb24tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSHlwZXJ0ZW5zaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcbiAgICAgICAgICAgIG5hbWU6ICdnbHVjb3NlLW1ldGFib2xpYy1kaXNvcmRlcnMtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlYWNlXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2x1Y29zZV9NZXRhYm9saWNfRGlzb3JkZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU3BsZWVuX01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXG4gICAgICAgICAgICBuYW1lOiAnaGVtb3JyaG9pZHMtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlbW9ycmhvaWRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29uc3RpcGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcbiAgICAgICAgICAgIG5hbWU6ICd1cmluYXJ5LXN5c3RlbS11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVXJpbmFyeV9TeXN0ZW0vQ3lzdGl0aXNcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJVcmluYXJ5X0JsYWRkZXJfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcbiAgICAgICAgICAgIG5hbWU6ICdjb2xkLWZsdS11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZsdVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxuICAgICAgICAgICAgbmFtZTogJ3BhaW4tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGFpbl9Db25kaXRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2NoYWtyYSBiYWxhbmNpbmcnLFxuICAgICAgICAgICAgbmFtZTogJ2xvd2VyLWNoYWtyYS1iYWxhbmNpbmctdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFYXJ0aF9FbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnY2hha3JhIGJhbGFuY2luZycsXG4gICAgICAgICAgICBuYW1lOiAndXBwZXItY2hha3JhLWJhbGFuY2luZy11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVGhyb2F0X0NoYWtyYVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ3Jvd25fQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnY2hha3JhIGJhbGFuY2luZycsXG4gICAgICAgICAgICBuYW1lOiAnbWVkaXRhdGlvbi1iYXNpY3MtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fMVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjaGFrcmEgYmFsYW5jaW5nJyxcbiAgICAgICAgICAgIG5hbWU6ICdtZWRpdGF0aW9uLW1lZGl1bS11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWVkaXRhdGlvbl8yXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVGhyb2F0X0NoYWtyYVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlYWNlXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2NoYWtyYSBiYWxhbmNpbmcnLFxuICAgICAgICAgICAgbmFtZTogJ21lZGl0YXRpb24tYWR2YW5jZWQtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fM1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ3Jvd25fQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSm95XCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ2VhcnRoLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlN0b21hY2hfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTcGxlZW5fTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFYXJ0aF9FbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTXVzY2xlX1Rpc3N1ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ2ZpcmUtZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTbWFsbF9JbnRlc3RpbmVfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGaXJlX0VsZW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdmaXJlLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZpcmVfRWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ21ldGFsLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNZXRhbF9FbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2tpbl9Db25kaXRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXG4gICAgICAgICAgICBuYW1lOiAnd2F0ZXItZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVXJpbmFyeV9CbGFkZGVyX01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiV2F0ZXJfRWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLCAgICAgICAgICAgIFxuICAgICAgICAgICAgbmFtZTogJ3dvb2QtZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJHYWxsYmxhZGRlcl9NZXJpZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIldvb2RfRWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkV5ZXNpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXG4gICAgICAgICAgICBuYW1lOiAnbGl2ZXItZnVuY3Rpb24tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdoZWFydC1mdW5jdGlvbi11cHBlcicsXG4gICAgICAgICAgICBwcm9ncmFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTbWFsbF9JbnRlc3RpbmVfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdraWRuZXktZnVuY3Rpb24tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlVyaW5hcnlfQmxhZGRlcl9NZXJpZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkV4aGF1c3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdsYXJnZS1pbnRlc3RpbmUtYmFsYW5jaW5nLXVwcGVyJyxcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ3BlcmljYXJkaXVtLWZsb3ctdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ3N0b21hY2gtbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlN0b21hY2hfTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTcGxlZW5fTWVyaWRpYW5cIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFByb2dyYW1zIDogWyAgICAgICAgXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdlYXJ0aC1lbGVtZW50LXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRWFydGhfRWxlbWVudFwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6NTVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZWFydGgtZWxlbWVudC1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZpcmUtZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkZpcmVfRWxlbWVudFwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6MDVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmlyZS1lbGVtZW50LWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbWV0YWwtZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk1ldGFsX0VsZW1lbnRcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEyOjM5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21ldGFsLWVsZW1lbnQtZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICd3YXRlci1lbGVtZW50LXVwcGVyJywgXG4gICAgICAgICAgICBhcGlOYW1lOiBcIldhdGVyX0VsZW1lbnRcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjIwXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3dhdGVyLWVsZW1lbnQtZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICd3b29kLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJXb29kX0VsZW1lbnRcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjA5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3dvb2QtZWxlbWVudC1kZXNjcmlwdGlvbidcbiAgICAgICAgfSwgICBcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2dhbGxibGFkZGVyLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIwOjM5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2dhbGxibGFkZGVyLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaGVhcnQtbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9NZXJpZGlhblwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6NDVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaGVhcnQtbWVyaWRpYW4tZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdraWRuZXktbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjI3XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2tpZG5leS1tZXJpZGlhbi1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2xhcmdlLWludGVzdGluZS1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkxhcmdlX0ludGVzdGluZV9NZXJpZGlhblwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbGFyZ2UtaW50ZXN0aW5lLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbGl2ZXItbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MTFcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbGl2ZXItbWVyaWRpYW4tZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2x1bmctbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjozOFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdsdW5nLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LCBcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3BlcmljYXJkaXVtLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVyaWNhcmRpdW1fTWVyaWRpYW5cIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIxOjU1XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3BlcmljYXJkaXVtLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnc21hbGwtaW50ZXN0aW5lLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU21hbGxfSW50ZXN0aW5lX01lcmlkaWFuXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzoyNVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzbWFsbC1pbnRlc3RpbmUtbWVyaWRpYW4tZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdzcGxlZW4tcGFuY3JlYXMtbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJTcGxlZW5fTWVyaWRpYW5cIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjM3XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3NwbGVlbi1wYW5jcmVhcy1tZXJpZGlhbi1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3N0b21hY2gtbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJTdG9tYWNoX01lcmlkaWFuXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzoxNVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzdG9tYWNoLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAndHJpcGxlLXdhcm1lci1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlRyaXBsZV9XYXJtZXJfTWVyaWRpYW5cIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjIwXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3RyaXBsZS13YXJtZXItbWVyaWRpYW4tZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICd1cmluYXJ5LWJsYWRkZXItbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJVcmluYXJ5X0JsYWRkZXJfTWVyaWRpYW5cIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjE5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3VyaW5hcnktYmxhZGRlci1tZXJpZGlhbi1kZXNjcmlwdGlvbidcbiAgICAgICAgfSwgICAgICAgICAgICBcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJmaXJzdC1jaGFrcmEtdXBwZXJcIixcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUm9vdF9DaGFrcmFcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjQ5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzEtY2hha3JhLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNlY29uZC1jaGFrcmEtdXBwZXJcIixcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTdcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnMi1jaGFrcmEtZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwidGhpcmQtY2hha3JhLXVwcGVyXCIsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjUxXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzMtY2hha3JhLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImZvdXJ0aC1jaGFrcmEtdXBwZXJcIixcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxODoxNlwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICc0LWNoYWtyYS1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJmaWZ0aC1jaGFrcmEtdXBwZXJcIixcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVGhyb2F0X0NoYWtyYVwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6NTlcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNS1jaGFrcmEtZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2l4dGgtY2hha3JhLXVwcGVyXCIsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjoxM1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICc2LWNoYWtyYS1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzZXZlbnRoLWNoYWtyYS11cHBlclwiLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJDcm93bl9DaGFrcmFcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjQ1XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzctY2hha3JhLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LCAgICAgICAgIFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnYWRkaWN0aW9uLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRkaWN0aW9uXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTowNVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdhZGRpY3Rpb24tZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdhZHJlbmFsLWdsYW5kLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRyZW5hbF9HbGFuZFwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6MDdcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYWRyZW5hbC1nbGFuZC1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2FudGktYWdpbmctdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJBbnRpX0FnaW5nXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMTowMVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdhbnRpLWFnaW5nLWRlc2NyaXB0aW9uJyxcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnYXVkaXRvcnktdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJBdWRpdG9yeV9TeXN0ZW1cIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjMxXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2F1ZGl0b3J5LWRlc2NyaXB0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2JhY2thY2hlLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQmFja2FjaGVcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjMwXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2JhY2thY2hlLWRlc2NyaXB0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2JvbmVzLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTowNFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdib25lcy1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2NoaWxkLWRldmVsb3BlbWVudC11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkNoaWxkX0RldmVsb3BtZW50XCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzo1MFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjaGlsZC1kZXZlbG9wZW1lbnQtZGVzY3JpcHRpb24nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnY2lyY3VsYXRvcnktc3lzdGVtLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTowNlwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjaXJjdWxhdG9yeS1zeXN0ZW0tZGVzY3JpcHRpb24nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAgJ2NvbmNlbnRyYXRpb24tdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJDb25jZW50cmF0aW9uXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMToxOVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjb25jZW50cmF0aW9uLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnY29ubmVjdGl2ZS10aXNzdWUtdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjU0XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2Nvbm5lY3RpdmUtdGlzc3VlLWRlc2NyaXB0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2NvbnN0aXBhdGlvbi11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkNvbnN0aXBhdGlvblwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6NDlcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnY29uc3RpcGF0aW9uLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZGV0b3hpZmljYXRpb24tdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MTNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGV0b3hpZmljYXRpb24tZGVzY3JpcHRpb24nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZGlhcnJoZWEtdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJEaWFycmhlYVwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTlcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGlhcnJoZWEtZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdkaWdlc3RpdmUtc3lzdGVtLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6NDFcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGlnZXN0aXZlLXN5c3RlbS1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2Rpc2Nlcm5tZW50LXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlzY2Vybm1lbnRcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjM3XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2Rpc2Nlcm5tZW50LWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkUtU01PR1wiLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjUxXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2Utc21vZy1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2VuZXJneS1iYWxhbmNpbmctdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzo1NVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdlbmVyZ3ktYmFsYW5jaW5nLWRlc2NyaXB0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2VuZXJneS1ib29zdGVyLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjUzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2VuZXJneS1ib29zdGVyLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZXhoYXVzdGlvbi11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkV4aGF1c3Rpb25cIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjU5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2V4aGF1c3Rpb24tZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdleWVzaWdodC11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkV5ZXNpZ2h0XCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjoxMVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdleWVzaWdodC1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZlbWFsZS11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkZlbWFsZV9Ib3Jtb25lX0JhbGFuY2VcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjE3XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZlbWFsZS1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZsdS11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkZsdVwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTlcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmx1LWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdnbHVjb3NlLW1ldGFib2xpYy1kaXNvcmRlcnMtdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJHbHVjb3NlX01ldGFib2xpY19EaXNvcmRlcnNcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjI4XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2dsdWNvc2UtbWV0YWJvbGljLWRpc29yZGVycy1kZXNjcmlwdGlvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdoYWlyLWdyb3d0aC11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkhhaXJfR3Jvd3RoXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxOTowN1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdoYWlyLWdyb3d0aC1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2hlYWRhY2hlLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhZGFjaGVcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjM4XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2hlYWRhY2hlLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaGVhcnQtZnVuY3Rpb24tdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9GdW5jdGlvblwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6MzBcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaGVhcnQtZnVuY3Rpb24tZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2hlbW9ycmhvaWRzLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVtb3JyaG9pZHNcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIxOjEzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2hlbW9ycmhvaWRzLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaHlwZXJ0ZW5zaW9uLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSHlwZXJ0ZW5zaW9uXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxODo1M1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdoeXBlcnRlbnNpb24tZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpbW11bmUtc3lzdGVtLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6NTBcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaW1tdW5lLXN5c3RlbS1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2luanVyeS11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTg6NDZcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaW5qdXJ5LWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaW50ZXN0aW5hbC1mbG9yYS11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkludGVzdGluYWxfRmxvcmFcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjU4XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ludGVzdGluYWwtZmxvcmEtZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiSkVULUxBR1wiLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJKZXQtTGFnL0NsaW1hdGVfQ2hhbmdlXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjoxNFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdqZXQtbGFnLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnam9pbnRzLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSm9pbnRzXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzowN1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdqb2ludHMtZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdqb3ktdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJKb3lcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIxOjA0XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2pveS1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2xvdy1tZW50YWwtZHJpdmUtdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJMb3dfTWVudGFsX0RyaXZlXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTo0OVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdsb3ctbWVudGFsLWRyaXZlLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbG93LXBoeXNpY2FsLWRyaXZlLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTG93X1BoeXNpY2FsX0RyaXZlXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjo0OVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdsb3ctcGh5c2ljYWwtZHJpdmUtZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdseW1waGF0aWMtc3lzdGVtLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MDRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbHltcGhhdGljLXN5c3RlbS1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ21hbGUtdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJNYWxlX0hvcm1vbmVfQmFsYW5jZVwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTI6MzFcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbWFsZS1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ21lZGl0YXRpb24tMS11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fMVwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMzM6MTVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbWVkaXRhdGlvbi0xLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbWVkaXRhdGlvbi0yLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTWVkaXRhdGlvbl8yXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyOTo0M1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtZWRpdGF0aW9uLTItZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdtZWRpdGF0aW9uLTMtdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJNZWRpdGF0aW9uXzNcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIyOjQ5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21lZGl0YXRpb24tMy1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ21pbmVyYWwtbWV0YWJvbGljLWFjdGl2aXR5LXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTWluZXJhbF9NZXRhYm9saWNfQWN0aXZpdHlcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjI1XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21pbmVyYWwtbWV0YWJvbGljLWFjdGl2aXR5LWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbXVzY2xlLXRpc3N1ZS11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTo1OVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtdXNjbGUtdGlzc3VlLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmVjay1zaG91bGRlci11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk5lY2svU2hvdWxkZXJcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjE2XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ25lY2stc2hvdWxkZXItZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICduZXJ2b3VzLXN5c3RlbS11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxOToxMFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICduZXJ2b3VzLXN5c3RlbS1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3BhaW4tdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJQYWluX0NvbmRpdGlvbnNcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjE4XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3BhaW4tZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdwZWFjZS11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlBlYWNlXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMjowOFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdwZWFjZS1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3JlZ2VuZXJhdGlvbi11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlJlZ2VuZXJhdGlvblwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6MTJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAncmVnZW5lcmF0aW9uLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncmVsYXhhdGlvbi11cHBlcicsXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE5OjU1XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3JlbGF4YXRpb24tZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjUyXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3Jlc3BpcmF0b3J5LXN5c3RlbS1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3NpbnVzLWNhdml0aWVzLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU2ludXNfQ2F2aXRpZXNcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjMzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3NpbnVzLWNhdml0aWVzLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnc2tpbi1jb25kaXRpb25zLXVwcGVyJyxcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU2tpbl9Db25kaXRpb25zXCIsXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTo1MFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdza2luLWNvbmRpdGlvbnMtZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdzbGVlcC1lbmhhbmNlci11cHBlcicsICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU2xlZXBfRW5oYW5jZXJcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE5OjU4XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3NsZWVwLWVuaGFuY2VyLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnc3RyZXNzLXJlbGllZi11cHBlcicsICBcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjU1XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3N0cmVzcy1yZWxpZWYtZGVzY3JpcHRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICd0aHlyb2lkLWdsYW5kcy11cHBlcicsICBcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVGh5cm9pZF9HbGFuZHNcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjUzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3RoeXJvaWQtZ2xhbmRzLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICd1cmluYXJ5LXVwcGVyJywgIFxuICAgICAgICAgICAgYXBpTmFtZTogXCJVcmluYXJ5X1N5c3RlbS9DeXN0aXRpc1wiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6MzlcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAndXJpbmFyeS1kZXNjcmlwdGlvbidcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAndmVydGVicmFlLXVwcGVyJywgXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlZlcnRlYnJhZVwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTI6NTNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAndmVydGVicmFlLWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAndml0YWxpdHktdXBwZXInLCBcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVml0YWxpdHlcIixcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjAwXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3ZpdGFsaXR5LWRlc2NyaXB0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnd2VpZ2h0LWNvbnRyb2wtdXBwZXInLFxuICAgICAgICAgICAgYXBpTmFtZTogXCJXZWlnaHRfQ29udHJvbFwiLFxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6NTBcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnd2VpZ2h0LWNvbnRyb2wtZGVzY3JpcHRpb24nXG4gICAgICAgIH1cbiAgICBdXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9vZmZsaW5lX2RhdGEudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9odHRwJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG4vL2ltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbi8qXG4gIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEF1dGhTZXJ2aWNlUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVyc1xuICBhbmQgQW5ndWxhciBESS5cbiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQVBJU2VydmljZVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHAsIHByaXZhdGUgaHR0cE5hdGl2ZTogSFRUUC8qLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmsqLykge1xuXG4gIH1cbiAgdGVzdF9sYW5ndWFnZSgpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmh0dHAuZ2V0KENvbnN0YW50cy5teU1hdEFwaUluZGV4VXJsKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLnRleHQoKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdGVzdCgpe1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvL2hlYWRlcnMuYXBwZW5kKCdBY2NlcHQnLCAndGV4dC9odG1sLGFwcGxpY2F0aW9uL3hodG1sK3htbCxhcHBsaWNhdGlvbi94bWw7cT0wLjksaW1hZ2Uvd2VicCxpbWFnZS9hcG5nLCovKjtxPTAuOCcpO1xuICAgIC8qaGVhZGVycy5hcHBlbmQoJ0FjY2VwdC1FbmNvZGluZycsICdnemlwLCBkZWZsYXRlJyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2VwdC1MYW5ndWFnZScsICdlbi1VUyxlbjtxPTAuOSxlcy1QQTtxPTAuOCxlcztxPTAuNycpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdVcGdyYWRlLUluc2VjdXJlLVJlcXVlc3RzJywgJzEnKTsqL1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmh0dHAuZ2V0KENvbnN0YW50cy5teU1hdEFwaUluZGV4VXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICAgICAgdGltZW91dCg1MDAwKSAvLzUgc2Vjb25kc1xuICAgICAgIClcbiAgICAgIC5tYXAocmVzID0+IHJlcy50ZXh0KCkpXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRFcnJvcihkYXRhKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgICAvKmxldCBjb25uZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7Ki9cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KENvbnN0YW50cy5teU1hdEFwaVVybCArICdyZXBvcnRfZXJyb3IucGhwJywgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5qc29uKCkpO1xuICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgLyp9KTsqL1xuICAgIH0pO1xuICB9XG5cbiAgc2VuZEVtYWlsKGRhdGEpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICAgIC8qbGV0IGNvbm5lY3RTdWJzY3JpcHRpb24gPSB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHsqL1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cbiAgICAgICAgdGhpcy5odHRwLnBvc3QoQ29uc3RhbnRzLm15TWF0QXBpVXJsICsgJ2NvbnRhY3RfdXMucGhwJywgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5qc29uKCkpO1xuICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgLyp9KTsqL1xuICAgIH0pO1xuICB9XG5cbiAgc3RhcnQocHJvZ3JhbXMpe1xuICAgIHZhciBwcm9ncmFtMSA9IHByb2dyYW1zWzBdLnNwbGl0KFwifFwiKVszXTtcbiAgICB2YXIgcHJvZ3JhbTIgPSBwcm9ncmFtc1sxXS5zcGxpdChcInxcIilbM107XG4gICAgdmFyIHByb2dyYW0zID0gcHJvZ3JhbXNbMl0uc3BsaXQoXCJ8XCIpWzNdO1xuICAgIHZhciBwcm9ncmFtNCA9IHByb2dyYW1zWzNdLnNwbGl0KFwifFwiKVszXTtcblxuICAgIC8qdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdQMScsIHByb2dyYW0xKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ1AyJywgcHJvZ3JhbTIpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnUDMnLCBwcm9ncmFtMyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdQNCcsIHByb2dyYW00KTsqL1xuXG4gICAgLy92YXIgdXJsID0gQ29uc3RhbnRzLm15TWF0QXBpU3RhcnRVcmwrXCI/UDE9XCIrcHJvZ3JhbTErXCImUDI9XCIrcHJvZ3JhbTIrXCImUDM9XCIrcHJvZ3JhbTMrXCImUDQ9XCIrcHJvZ3JhbTQ7XG4gICAgdmFyIHBhcmFtcyA9IFwiUDE9XCIrcHJvZ3JhbTErXCImUDI9XCIrcHJvZ3JhbTIrXCImUDM9XCIrcHJvZ3JhbTMrXCImUDQ9XCIrcHJvZ3JhbTQ7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwTmF0aXZlLmdldChDb25zdGFudHMubXlNYXRBcGlTdGFydFVybCwgcGFyYW1zLCB7fSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UudHMiXSwic291cmNlUm9vdCI6IiJ9