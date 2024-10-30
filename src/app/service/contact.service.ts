import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  submitForm(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post<any>('https://bws-website-backend-1f2a0c7560ec.herokuapp.com/api/sendEmail', JSON.stringify(formData), { headers })
  }
  
}
