import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestServiceService } from './../../test-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  response: any;
  userName: string;
  constructor(private svc: TestServiceService, private http: HttpClient) {
    this.svc.printToConsole("calling service from userProfile component")
   }

  ngOnInit() {
  }

  search() {
    this.http.get("https://api.github.com/users/" + this.userName)
    .subscribe((response) => {
      this.response = response;
      console.log(response);
    })
  }
}
