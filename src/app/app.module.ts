import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './main/app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';

import { AddressCardModule } from './address-card/address-card.module';
import { InputButtonModule } from './input-button/input-button.module';
import { CardListModule } from './card-list/card-list.module';

import { UserService } from 'src/services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';
import { TruncatePipe } from './truncate.pipe';
import { MissionControlComponent } from './mission-control/mission-control.component';
import { AstronautComponent } from './astronaut/astronaut.component';
import { HighlightDirective } from './highlight.directive';
import { MyFormsModule } from './forms/my-forms.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    HomeComponent,
    SettingsComponent,
    PageNotFoundComponent,
    SettingsProfileComponent,
    SettingsContactComponent,
    TruncatePipe,
    MissionControlComponent,
    AstronautComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule, 
    AddressCardModule,
    InputButtonModule,
    CardListModule,
    AppRoutingModule,
    MyFormsModule
  ],
  providers: [ //it is used for lazy loading. It is not needed to get it works but it is okey to use lazy loading.
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
