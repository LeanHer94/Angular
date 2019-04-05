import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    const phone = this.formBuilder.group({
      area: [],
      prefix: [],
      line: []
    });

    this.form = this.formBuilder.group({
      email: 'example@com.com',
      homePhone: phone,
      cellPhone: phone
    });
  }

}
