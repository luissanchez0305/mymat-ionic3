import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayingPage } from './playing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    PlayingPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayingPage),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
})
export class PlayingPageModule {}
