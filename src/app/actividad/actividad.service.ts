import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actividad } from './actividad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {


URL ="";
constructor(private http: HttpClient) { }
  getActividades():Observable<Actividad[]>{

    return this.http.get<Actividad[]>(this.URL);
  }

}
