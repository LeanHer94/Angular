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
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    HomeComponent,
    SettingsComponent,
    PageNotFoundComponent,
    SettingsProfileComponent,
    SettingsContactComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AddressCardModule,
    InputButtonModule,
    CardListModule,
    AppRoutingModule
  ],
  providers: [ //it is used for lazy loading. It is not needed to get it works but it is okey to use lazy loading.
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
