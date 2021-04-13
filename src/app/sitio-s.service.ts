import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SitioSService {
  private baseUrl = 'http://localhost:9898/api/v2/InfoSitio/';

  constructor(private http: HttpClient) { }
  getSitio(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
}

createSitio(sitio: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, sitio);
}

updateSitio(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
}

deleteSitio(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
}

getSitioList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
}
}


