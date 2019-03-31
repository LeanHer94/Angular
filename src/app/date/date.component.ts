import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: string;

  constructor() { 
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = `${ currentDate.toLocaleTimeString() } ${ currentDate.toLocaleDateString() }`;
    }, 1000);
  }

  ngOnInit() {
  }

  addTwoNumbers(a: number, b: number) : number {
    return a + b;
  }

}
