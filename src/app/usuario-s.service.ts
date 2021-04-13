import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioSService {
  private baseUrl = 'http://localhost:9898/api/v1/usuario/';

  constructor(private http: HttpClient) { }

    getUsuario(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
  }
  

  createUsuario(user: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, user);
  }

  updateUsuario(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUsuario(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsuarioList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
  }

}
