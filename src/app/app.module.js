var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http'; // solo se usa para hacer la prueba de conexion con el MyMat
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NetworkInterface } from '@ionic-native/network-interface';
//import { Network } from '@ionic-native/network';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
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
import { FavoritesPage } from '../pages/favorites/favorites';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RoutinesProvider } from '../providers/routines/routines';
import { APIServiceProvider } from '../providers/api-service/api-service';
import { Network } from '@ionic-native/network';
import { Device } from '@ionic-native/device';
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                ProgramPage,
                FavoritesPage
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
                WifiPage,
                PlayingPage,
                SubscribePage,
                SliderPage,
                ProgramPage,
                FavoritesPage
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
                APIServiceProvider,
                HTTP
            ],
            exports: [
                HomePage
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map