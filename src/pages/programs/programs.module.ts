import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramsPage } from './programs';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/_i18n/', '.json');
}

@NgModule({
  declarations: [
    ProgramsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramsPage),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
})
export class ProgramsPageModule {}
