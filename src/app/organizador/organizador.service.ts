import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organizador } from './organizador';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizadorService {



  constructor(private http: HttpClient) { }

  getOrganizadores(): Observable<Organizador[]> {
    return this.http.get<Organizador[]>('http://localhost:8080/api/organizadores');
  }
}
