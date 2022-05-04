import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escenario } from './escenario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EscenarioService {


constructor( private http: HttpClient) { }

  getEscenarios(): Observable<Escenario[]> {
    return this.http.get<Escenario[]>("http://localhost:8080/escenarios");
  }
}
