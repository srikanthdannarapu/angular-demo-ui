import { User } from './user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  //user: any;
  @Input('userObj') userObject: User;
  isCollapsed: boolean = true;
  constructor() {
    console.log("constructor called");
  }
  
  ngOnInit() {
    console.log("ngOnInit() called");
    /*this.user = {
       name: this.userObj.name,
       title: this.userObj.designation,
       address: this.userObj.address,
       phone: this.userObj.phone
     };*/
  }

  ngOnChanges() {
    console.log("ngOnChanges() called");
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

}
