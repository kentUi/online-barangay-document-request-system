import { Component } from '@angular/core';
import { SidemenuComponent } from '../../layouts/sidemenu/sidemenu.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';


@Component({
  selector: 'app-certificate-of-indigency',
  standalone: true,
  imports: [SidemenuComponent, HeaderComponent, FooterComponent],
  templateUrl: './certificate-of-indigency.component.html',
  styleUrl: './certificate-of-indigency.component.css'
})
export class CertificateOfIndigencyComponent {

}
