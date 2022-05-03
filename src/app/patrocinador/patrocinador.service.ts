import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patrocinador } from './patrocinador';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatrocinadorService {


constructor( private http: HttpClient) { }

  getPatrocinadores(): Observable<Patrocinador[]> {
    return this.http.get<Patrocinador[]>("http://localhost:8080/patrocinadores");
  }
}
