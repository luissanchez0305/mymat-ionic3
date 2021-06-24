import { Component, ViewChild } from '@angular/core';
import { MenuController, Events } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Constants } from '../services/constants';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';
import { ContactPage } from '../pages/contact/contact';
import { SliderPage } from '../pages/slider/slider';
import { FavoritesPage } from '../pages/favorites/favorites';
import { OneSignal } from '@ionic-native/onesignal';
import { NativeRingtones } from '@ionic-native/native-ringtones';

// import { BackgroundMode } from '@ionic-native/background-mode';
import { Device } from '@ionic-native/device';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  lang_en: boolean;
  lang_es: boolean;
  lang_pt: boolean;
  lang_fr: boolean;
  lang_gr: boolean;
  lang_it: boolean;

  pages: Array<{ title: string, component: any, icon: any, isPush: boolean }>;


  signal_app_id_ANDROID: string = 'd3aad1d0-7a05-4639-8467-40c8d41f84b6';
  signal_app_id_IOS: string = 'ad0ffa67-dd23-4ea1-8f4f-77b553537e5a'
  firebase_id: string = '692447891372';

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private translateService: TranslateService, public menuCtrl: MenuController, private storage: Storage,
    public events: Events, private oneSignal: OneSignal, private ringtones: NativeRingtones, /*private backgroundMode: BackgroundMode,*/ private device: Device) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'home-title', component: HomePage, icon: 'menuitemhome', isPush: false },
      { title: 'help-title', component: HelpPage, icon: 'menuitemhelp', isPush: false },
      { title: 'contact-title', component: ContactPage, icon: 'menuitemcontact', isPush: false },
      { title: 'fav-title', component: FavoritesPage, icon: 'menufavorites', isPush: true },
      { title: 'slider-title', component: SliderPage, icon: 'menuiteminfo', isPush: true }
    ];
    platform.ready().then(() => {
      this.storage.get(Constants.storageKeyLang).then((value) => {
        if (!value) {
          value = navigator.language.split('-')[0];
          if (!value)
            value = 'en';
          translateService.setDefaultLang(value);
        }
        translateService.use(value);
        this.switchLang(value);
      })
        .catch(err => {
          var value = 'en';
          translateService.setDefaultLang(value);
          translateService.use(value);
          this.switchLang(value);
        });;
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      let uuid = '';
      if (window.hasOwnProperty('cordova')) {
        uuid = this.device.uuid;
      }
      else {
        uuid = Constants.test_uuid
      }

      if (uuid != '') {
        this.settingOneSignal(uuid);
      }
    });
  }
  sonarRington() {
    this.ringtones.playRingtone('file://assets/sounds/gong_c5.mp3');
  }

  // Funcion asyncrona para evitar pantalla de demora en dispositivos con conexiones lentas
  async settingOneSignal(prmuuid) {
    console.debug(" Inicializando OneSignal ");
    this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 0 });
    // Set your iOS Settings
    // var iosSettings = {};
    // iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    // iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
    let idApp: string = '';
    if (this.platform.is('ios')) {
      // This will only print when on iOS
      idApp = this.signal_app_id_IOS;
    }
    if (this.platform.is('android')) {
      // This will only print when on iOS
      idApp = this.signal_app_id_ANDROID;
    }

    this.oneSignal.startInit(idApp, this.firebase_id);
    this.oneSignal.handleNotificationReceived().subscribe((res) => {
      // do something when notification is received
      console.log(res);
      this.sonarRington();
    });
    this.oneSignal.iOSSettings({ kOSSettingsKeyAutoPrompt: false, kOSSettingsKeyInAppLaunchURL: false });
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    // this.oneSignal.handleNotificationOpened().subscribe((res) => {
    //   // do something when a notification is opened
    //   console.log(res);
    // });
    this.oneSignal.setEmail(prmuuid + "@mymat.com");
    this.oneSignal.endInit();
    // Habilitamos el modo de fondo
    // this.backgroundMode.enable();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.isPush)
      this.nav.push(page.component);
    else
      this.nav.setRoot(page.component);
  }

  switchLang(lang) {
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
    this.storage.set(Constants.storageKeyLang, lang);
    this.menuCtrl.close();
  }

}
