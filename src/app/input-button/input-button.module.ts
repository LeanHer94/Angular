import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import { InputButtonComponent } from './input-button.component';

@NgModule({
  declarations: [
    InputButtonComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [
    InputButtonComponent
  ]
})
export class InputButtonModule { }
