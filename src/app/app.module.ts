import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NetworkInterface } from '@ionic-native/network-interface';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { LongPressModule } from 'ionic-long-press';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';
import { ContactPage } from '../pages/contact/contact';
import { ProgramsPage } from '../pages/programs/programs';
import { WifiPage } from '../pages/wifi/wifi';
import { PlayingPage } from '../pages/playing/playing';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RoutinesProvider } from '../providers/routines/routines';
import { APIServiceProvider } from '../providers/api-service/api-service';

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
    PlayingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    LongPressModule,
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
    PlayingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RoutinesProvider,
    NetworkInterface,
    LocalNotifications,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    APIServiceProvider
  ]
})
export class AppModule {}
