import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: "";
  password: "";
  constructor(public http: Http) {

  }

  login() {
    let data = {username:this.username,
                password: this.password}
    return new Promise(resolve => {
      this.http.post('http://127.0.0.1/laeksheet/login.php', JSON.stringify(data))
      .subscribe(data => {
        resolve(data);
        console.log(data['_body']);
      }, err => {
        console.log(err);// Error getting the data
        });
    });
  }

}
