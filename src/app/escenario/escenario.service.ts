import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escenario } from './escenario';
import { environment } from 'src/environments/environment';
import { EscenarioDetail } from './escenario-detail';

@Injectable({
  providedIn: 'root'
})
export class EscenarioService {

  private apiUrl: string = environment.baseUrl + 'escenarios';

  constructor( private http: HttpClient) { }

    getEscenarios(): Observable<EscenarioDetail[]> {
      return this.http.get<EscenarioDetail[]>(this.apiUrl);
    }
}
