import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {

  @Output() submitted = new EventEmitter<string>();

  name: string;

  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.submitted.emit(this.name);
  }
}
