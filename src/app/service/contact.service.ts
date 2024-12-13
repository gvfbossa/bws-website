import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSehwMgZAyVgcBpUtkVPG0FQNvavWna8g6l_ABJtTIBh9l8atA/formResponse'

  constructor(private http: HttpClient) { }

  submitGoogleForm(payload: { [key: string]: any }) {
    const body = new URLSearchParams();

    Object.entries(payload).forEach(([key, control]) => {
        if (control?.value) {
            body.set(key, control.value.toString());
        }
    });

    return this.http.post(this.googleFormUrl, body.toString(), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        responseType: 'text',
    });
  }
  
}
