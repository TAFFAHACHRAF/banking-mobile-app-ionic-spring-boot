import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // <-- Import IonicModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonicModule, FormsModule],
  standalone: true
})
export class LoginComponent  implements OnInit {

// You can define any properties you need, like username and password
username: string = '';
password: string = '';

constructor() {}

ngOnInit(): void {}

  // Define the login method
  login() {
    console.log('Login method triggered');
    alert("loginnn")
    // Add logic for handling login (e.g., API call)
  }

}
