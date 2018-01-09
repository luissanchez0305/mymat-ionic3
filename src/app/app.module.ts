import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';
import { ContactPage } from '../pages/contact/contact';
import { ProgramsPage } from '../pages/programs/programs';
import { WifiPage } from '../pages/wifi/wifi';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RoutinesProvider } from '../providers/routines/routines';
import { APIServiceProvider } from '../providers/api-service/api-service';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
 
@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    HelpPage,
    ContactPage,
    ProgramsPage,
    WifiPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    WifiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RoutinesProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    APIServiceProvider
  ]
})
export class AppModule {}
