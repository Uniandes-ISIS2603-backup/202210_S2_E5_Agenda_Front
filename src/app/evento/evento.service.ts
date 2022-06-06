import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from './evento';
import { environment } from 'src/environments/environment';
import { EventoDetail } from './evento-detail';
import { Multimedia } from '../multimedia/multimedia';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiUrl = environment.baseUrl + 'eventos';

constructor(private http: HttpClient) { }

getEventos(): Observable<EventoDetail[]>{
  console.log("url",this.apiUrl);
  return this.http.get<EventoDetail[]>(this.apiUrl);
}
getEvento(id: string): Observable<EventoDetail> {
  return this.http.get<EventoDetail>(this.apiUrl + "/" + id);
}
}
