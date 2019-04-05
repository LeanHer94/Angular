import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  myForm: FormGroup;

  careers = [ 
    {value: 1, viewValue: 'Teacher'},
    {value: 2, viewValue: 'Engineer'},
    {value: 3, viewValue: 'Doctor'},
    {value: 4, viewValue: 'Electrician'}
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: 'default@email.com',
      message: 'default message.',
      career: 2
    });

    let multicastStream = this.myForm.valueChanges
      .pipe(share());
    
    multicastStream.subscribe(console.log);
  }
}
