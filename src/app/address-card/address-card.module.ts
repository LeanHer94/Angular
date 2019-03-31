import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { AddressCardComponent } from './address-card.component';

@NgModule({
  declarations: [
    AddressCardComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  exports: [
    AddressCardComponent
  ]
})
export class AddressCardModule { }
