import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NetworkInterface } from '@ionic-native/network-interface';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { DatePicker } from '@ionic-native/date-picker';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';
import { ContactPage } from '../pages/contact/contact';
import { ProgramsPage } from '../pages/programs/programs';
import { WifiPage } from '../pages/wifi/wifi';
import { PlayingPage } from '../pages/playing/playing';
import { ProgramPage } from '../pages/program/program';
import { SubscribePage } from '../pages/subscribe/subscribe';
import { SliderPage } from '../pages/slider/slider';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RoutinesProvider } from '../providers/routines/routines';
import { APIServiceProvider } from '../providers/api-service/api-service';
import { Network } from '@ionic-native/network';
import { Device } from '@ionic-native/device';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HelpPage,
    ContactPage,
    ProgramsPage,
    WifiPage,
    PlayingPage,
    SubscribePage,
    SliderPage,
    ProgramPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HelpPage,
    ContactPage,
    ProgramsPage,
    WifiPage,
    PlayingPage,
    SubscribePage,
    SliderPage,
    ProgramPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RoutinesProvider,
    NetworkInterface,
    Network,
    Device,
    LocalNotifications,
    DatePicker,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    APIServiceProvider
  ]
})
export class AppModule {}
