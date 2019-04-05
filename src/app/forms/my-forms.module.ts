import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { ValidFormComponent } from './valid-form/valid-form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    BasicFormComponent, 
    NestedFormComponent, 
    ArrayFormComponent, 
    ValidFormComponent, 
    SubmitFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  exports: [
    BasicFormComponent, 
    NestedFormComponent, 
    ArrayFormComponent, 
    ValidFormComponent, 
    SubmitFormComponent
  ]
})
export class MyFormsModule { }
