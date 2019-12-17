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
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Constants } from '../../services/constants';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular';
/**
 * Generated class for the PlayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayingPage = /** @class */ (function () {
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
        var _this_1 = this;
        var program1CurrentTimeDecreasing;
        var program2CurrentTimeDecreasing;
        var program3CurrentTimeDecreasing;
        var program4CurrentTimeDecreasing;
        for (var i = 1; i <= 4; i++) {
            switch (i) {
                case 1:
                    this.storage.get(Constants.storageKeyBubble1).then(function (val) {
                        var value = val.split('|');
                        _this_1.program1CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
                        program1CurrentTimeDecreasing = value[2];
                        _this_1.storage.get(Constants.storageKeyLang).then(function (lang) {
                            _this_1.translateService.getTranslation(lang).subscribe(function (prog) {
                                _this_1.programTitle1 = typeof prog[value[1]] === 'undefined' ? value[1] : prog[value[1]];
                            });
                        });
                    });
                    break;
                case 2:
                    this.storage.get(Constants.storageKeyBubble2).then(function (val) {
                        var value = val.split('|');
                        _this_1.program2CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
                        program2CurrentTimeDecreasing = value[2];
                        _this_1.storage.get(Constants.storageKeyLang).then(function (lang) {
                            _this_1.translateService.getTranslation(lang).subscribe(function (prog) {
                                _this_1.programTitle2 = typeof prog[value[1]] === 'undefined' ? value[1] : prog[value[1]];
                            });
                        });
                    });
                    break;
                case 3:
                    this.storage.get(Constants.storageKeyBubble3).then(function (val) {
                        var value = val.split('|');
                        _this_1.program3CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
                        program3CurrentTimeDecreasing = value[2];
                        _this_1.storage.get(Constants.storageKeyLang).then(function (lang) {
                            _this_1.translateService.getTranslation(lang).subscribe(function (prog) {
                                _this_1.programTitle3 = typeof prog[value[1]] === 'undefined' ? value[1] : prog[value[1]];
                            });
                        });
                    });
                    break;
                case 4:
                    this.storage.get(Constants.storageKeyBubble4).then(function (val) {
                        var value = val.split('|');
                        _this_1.program4CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
                        program4CurrentTimeDecreasing = value[2];
                        _this_1.storage.get(Constants.storageKeyLang).then(function (lang) {
                            _this_1.translateService.getTranslation(lang).subscribe(function (prog) {
                                _this_1.programTitle4 = typeof prog[value[1]] === 'undefined' ? value[1] : prog[value[1]];
                            });
                        });
                        if (program1CurrentTimeDecreasing > program2CurrentTimeDecreasing && program1CurrentTimeDecreasing > program3CurrentTimeDecreasing && program1CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                            _this_1.displayRunningTime = program1CurrentTimeDecreasing; //this.convertSecondsToTime(program1CurrentTimeDecreasing);
                        else if (program2CurrentTimeDecreasing > program3CurrentTimeDecreasing && program2CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                            _this_1.displayRunningTime = program2CurrentTimeDecreasing; //this.convertSecondsToTime(program2CurrentTimeDecreasing);
                        else if (program3CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                            _this_1.displayRunningTime = program3CurrentTimeDecreasing; //this.convertSecondsToTime(program3CurrentTimeDecreasing);
                        else
                            _this_1.displayRunningTime = program4CurrentTimeDecreasing; //this.convertSecondsToTime(program4CurrentTimeDecreasing);
                        _this_1.displayRunningTime = _this_1.displayRunningTime;
                        var t = new Date();
                        _this_1.finishTime = Math.round(t.getTime() / 1000) + _this_1.getSeconds(_this_1.displayRunningTime);
                        _this_1.timerRemain = _this_1.getSeconds(_this_1.displayRunningTime);
                        _this_1.timerId = 1;
                        _this_1.startTimer(_this_1.timerId);
                        var $this = _this_1;
                        _this_1.storage.get(Constants.storageKeyLang).then(function (lang) {
                            _this_1.translateService.getTranslation(lang).subscribe(function (prog) {
                                _this_1.localNotifications.schedule({
                                    id: 1,
                                    title: 'MyMat Light',
                                    text: prog['time-expire-text'],
                                    sound: 'file://assets/sounds/' + (_this_1.plt.is('ios') ? 'gong_c5.m4r' : 'gong_c5.mp3'),
                                    trigger: { at: new Date(t.getTime() + _this_1.getSeconds(_this_1.displayRunningTime) * 1000) }
                                });
                                _this_1.localNotifications.on("click").subscribe({ next: function (notification) {
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
        var _this_1 = this;
        setTimeout(function () {
            if (_this_1.timerRemain == 0 || _this_1.timerId != id) {
                return;
            }
            _this_1.timerRemain--;
            _this_1.zone.run(function () {
                _this_1.displayRunningTime = _this_1.decreaseSecond(_this_1.displayRunningTime);
            });
            if (_this_1.timerRemain > 0) {
                _this_1.startTimer(_this_1.timerId);
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
        Component({
            selector: 'page-playing',
            templateUrl: 'playing.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Storage,
            TranslateService, LocalNotifications, Platform,
            NgZone])
    ], PlayingPage);
    return PlayingPage;
}());
export { PlayingPage };
//# sourceMappingURL=playing.js.map