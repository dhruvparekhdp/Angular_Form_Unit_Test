import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService) { }

  login(): void {
    if (this.loginForm.valid) {
      
          let email: string = this.loginForm.get('email')?.value as string;
          let password: string = this.loginForm.get('password')?.value as string;
      
          this.authService.login(email, password);
      return;
    }

  }

}