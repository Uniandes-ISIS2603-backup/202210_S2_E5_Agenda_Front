import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Responsable } from './responsable';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ResponsableService {

constructor(private http: HttpClient) { }
getResponsables(): Observable<Responsable[]>{
  return this.http.get<Responsable[]>('http://localhost:8080/responsables');
}


}
