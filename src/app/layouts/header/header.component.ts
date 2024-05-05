import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  role: string | null = localStorage.getItem('userType');

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
    localStorage.setItem('userRole', '');
    window.location.href = '/login';
  }

}
