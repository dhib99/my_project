import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';  
  password: string = '';  
  loginError: boolean = false;  

  constructor(private router: Router) {}

 
  onLogin() {
    if (this.email === 'test@example.com' && this.password === 'password123') {
      this.router.navigate(['/dashboard']); 
    } else {
      this.loginError = true;  
    }
  }
}