import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loginAlert(){
    Swal.fire({
      title: 'Message Sent',
      text: '',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

}
