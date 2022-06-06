import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actividad } from './actividad';
import { environment } from 'src/environments/environment';
import { ActividadDetail } from './actividad-detail';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {


URL =environment.baseUrl + 'actividades';

constructor(private http: HttpClient) { }
  getActividades():Observable<Actividad[]>{

    return this.http.get<Actividad[]>(this.URL);
  }
  getActividad(id: string): Observable<ActividadDetail> {
    return this.http.get<ActividadDetail>(this.URL + "/" + id);
  }

}
