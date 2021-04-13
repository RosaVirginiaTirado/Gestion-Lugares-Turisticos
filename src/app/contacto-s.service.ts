import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoSService {
  private baseUrl = 'http://localhost:9898/api/v3/infoContacto/';
  constructor(private http: HttpClient) { }
  getContacto(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
}

createContacto(contacto: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, contacto);
}

updateContacto(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
}

deleteContacto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
}

getContactoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
}
}


