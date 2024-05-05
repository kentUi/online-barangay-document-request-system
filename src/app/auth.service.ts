import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUsers = [
    { username: 'admin', password: 'admin', role: 'administrator' },
    { username: 'user', password: 'user', role: 'client' }
  ];

  isLoggedIn = false;
  errorMessage = '';

  login(username: string, password: string): void {
    const user = this.validUsers.find(u => u.username === username && u.password === password);
    if (user) {
      this.isLoggedIn = true;
      localStorage.setItem('userType', user.role);
      if(user.role === 'client'){
        window.location.href = '/dashboard'
      }else{
        window.location.href = '/admin-dashboard'
      }
      this.errorMessage = '';
    } else {
      this.isLoggedIn = false;
      this.errorMessage = 'Invalid username/password. Please try again.';
      this.showErrorMessage();
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    console.log('Logged out');
  }

  private showErrorMessage(): void {
    Swal.fire({
      title: 'Login Error',
      text: this.errorMessage,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
}
