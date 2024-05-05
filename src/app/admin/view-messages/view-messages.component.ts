import { Component } from '@angular/core';
import { SidemenuComponent } from '../../layouts/sidemenu/sidemenu.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-view-messages',
  standalone: true,
  imports: [SidemenuComponent, HeaderComponent, FooterComponent],
  templateUrl: './view-messages.component.html',
  styleUrl: './view-messages.component.css'
})
export class ViewMessagesComponent {

}
