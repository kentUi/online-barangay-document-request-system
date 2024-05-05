import { Component } from '@angular/core';
import { SidemenuComponent } from '../../layouts/sidemenu/sidemenu.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-barangay-clearance',
  standalone: true,
  imports: [SidemenuComponent, HeaderComponent, FooterComponent],
  templateUrl: './barangay-clearance.component.html',
  styleUrl: './barangay-clearance.component.css'
})
export class BarangayClearanceComponent {

}
