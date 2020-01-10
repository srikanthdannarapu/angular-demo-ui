import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestServiceService } from './test-service.service';
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

   //telling angular that I need testService object from constructor
  constructor(private svc: TestServiceService, private http: HttpClient) {
    this.user = new User();
    this.user.name = "Srikanth";
    this.user.designation = "Developer";
    this.user.address = "Shilpa Enclave, Chandanagar, 500050";
    this.user.phone = [
      "+91 9703555567",
      "+91 9849478067",
      "+91 9848772233"
    ]
    this.svc.printToConsole("calling service from app component!!");
  }

  ngOnInit() {
    let observable = this.http.get('https://api.github.com/users/sdannarapu');
    observable.subscribe((response) => console.log(response));
  }
}
