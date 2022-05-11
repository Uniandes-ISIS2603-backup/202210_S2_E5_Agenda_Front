import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invitado } from './invitado';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvitadoService {



  constructor(private http: HttpClient) { }

  getInvitados(): Observable<Invitado[]> {
    return this.http.get<Invitado[]>('http://localhost:8080/api/invitados');
  }
}
