import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WifiPage } from './wifi';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/_i18n/', '.json');
}

@NgModule({
  declarations: [
    WifiPage,
  ],
  imports: [
    IonicPageModule.forChild(WifiPage),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
})
export class WifiPageModule {}
