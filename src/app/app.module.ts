import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AfterProcessBidComponent } from './after-process-bid/after-process-bid.component';
import { AfterSubmitComponent } from './after-submit/after-submit.component';
import { AfterMyLandComponent } from './after-my-land/after-my-land.component';
import { MylandComponent } from './myland/myland.component';
import { UserService } from '../app/services/user.service';
import { AgmCoreModule } from '@agm/core';
import { ViewLandComponent } from './view-land/view-land.component';
import { ViewHarvestComponent } from './view-harvest/view-harvest.component';
import { ChartComponent } from './chart/chart.component';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';
import { BuyerBidComponent } from './buyer-bid/buyer-bid.component';
import { BidResponsesComponent } from './bid-responses/bid-responses.component';
import { BidService } from '../app/services/bid.service'




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SigninComponent,
    AfterProcessBidComponent,
    AfterSubmitComponent,
    AfterMyLandComponent,
    MylandComponent,
    ViewLandComponent,
    ViewHarvestComponent,
    ChartComponent,
    BuyerProfileComponent,
    BuyerBidComponent,
    BidResponsesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBjTh5fhWEMqiDEtMYmmQyVfNYdvNcB39A',
      libraries: ['places']
    }),
  ],
  providers: [
    UserService,
    BidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
