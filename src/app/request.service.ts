// request.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

    private baseUrl = 'https://obdrs.portaltoo.cloud'; // Update with your PHP API URL

    constructor() { }
  
    submitRequest(formData: FormData) {
      return axios.post(`${this.baseUrl}/submit-request.php`, formData);
    }
}
