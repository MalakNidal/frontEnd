import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentComponent } from './content/content.component';
import { AppsSearchComponent } from './content/apps-search/apps-search.component';
import { AppsPredictionComponent } from './content/apps-prediction/apps-prediction.component';
import { ShowAppsComponent } from './content/show-apps/show-apps.component';
import { PredictionRateComponent } from './content/prediction-rate/prediction-rate.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AppsSearchComponent,
    AppsPredictionComponent,
    ShowAppsComponent,
    PredictionRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'getRate', component: AppsPredictionComponent },
      { path: 'search', component: AppsSearchComponent},
      { path: 'showApps', component: ShowAppsComponent},
      { path: 'showPredict', component: PredictionRateComponent}
    ]),
    HttpClientModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
