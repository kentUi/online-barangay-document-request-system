import { Component } from '@angular/core';
import { SidemenuComponent } from '../../layouts/sidemenu/sidemenu.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidemenuComponent, HeaderComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
