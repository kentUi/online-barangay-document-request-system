import { Component } from '@angular/core';
import { SidemenuComponent } from '../../layouts/sidemenu/sidemenu.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

import { RequestService } from '../../request.service';

@Component({
  selector: 'app-request-document',
  standalone: true,
  imports: [SidemenuComponent, HeaderComponent, FooterComponent],
  templateUrl: './request-document.component.html',
  styleUrl: './request-document.component.css'
})
export class RequestDocumentComponent {
  formData: FormData = new FormData();

  constructor(private requestService: RequestService) { }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Submit form data
    this.requestService.submitRequest(this.formData)
      .then(
        response => {
          console.log('Form submitted successfully!', response);
          // Handle success, e.g., show a success message
        }
      )
      .catch(
        error => {
          console.error('Error submitting form:', error);
          // Handle error, e.g., show an error message
        }
      );
  }


  onFileChange(event: Event, fieldName: string) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files && inputElement.files.length > 0) {
      const files = inputElement.files;
      for (let i = 0; i < files.length; i++) {
        this.formData.append(fieldName + '[]', files[i], files[i].name);
      }
    }
  }  

  changeOptions(value: string) {
    // Handle the change event for the inp_documents select input
    console.log('Selected value:', value);
    // Add your logic here
  }

}
