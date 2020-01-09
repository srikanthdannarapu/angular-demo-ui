import { User } from './address-card/user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'first-project';
  inputText: string = "initialValue";
   user: User;
  constructor() {
    this.user = new User();
    this.user.name = "Srikanth";
    this.user.designation = "Developer";
    this.user.address = "Shilpa Enclave, Chandanagar, 500050";
    this.user.phone = [
      "+91 9703555567",
      "+91 9849478067",
      "+91 9848772233"
    ]
  }
}
