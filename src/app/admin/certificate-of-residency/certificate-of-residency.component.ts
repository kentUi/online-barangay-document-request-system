import { Component } from '@angular/core';
import { SidemenuComponent } from '../../layouts/sidemenu/sidemenu.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-certificate-of-residency',
  standalone: true,
  imports: [SidemenuComponent, HeaderComponent, FooterComponent],
  templateUrl: './certificate-of-residency.component.html',
  styleUrl: './certificate-of-residency.component.css'
})
export class CertificateOfResidencyComponent {

}
