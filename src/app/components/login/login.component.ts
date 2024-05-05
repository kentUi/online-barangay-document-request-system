import { Component } from '@angular/core';

import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = ''; // Define username property
  password: string = ''; // Define password property

  constructor(private authService: AuthService) {}

  login() {
    const username = this.username;
    const password = this.password;
    this.authService.login(username, password);
  }

  
}
