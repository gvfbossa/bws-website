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

    console.log('Payload ' + payload)

    return this.http.post(this.googleFormUrl, body.toString(), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        responseType: 'text',
    });
  }

  submitForm(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post<any>('https://bws-website-backend-1f2a0c7560ec.herokuapp.com/api/sendEmail', JSON.stringify(formData), { headers })
  }
  
}
