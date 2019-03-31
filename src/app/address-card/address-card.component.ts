import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  @Input('user') user: User;

  isNotCollapse: boolean;
  btnText: string;

  constructor() {
    this.isNotCollapse = true;

    this.setBtnText();
  }

  ngOnInit() {
  }

  toggleCollapse(){
    this.isNotCollapse = !this.isNotCollapse;

    this.setBtnText();
  }

  private setBtnText(){
    this.btnText = (this.isNotCollapse)? 'Collapse' : 'Expand'
  }
}
