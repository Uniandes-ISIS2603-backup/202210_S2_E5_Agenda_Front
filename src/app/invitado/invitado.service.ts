import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invitado } from './invitado';
import { environment } from 'src/environments/environment';
import { InvitadoDetail } from './invitado-detail';

@Injectable({
  providedIn: 'root'
})
export class InvitadoService {

  private apiUrl: string = environment.baseUrl + 'invitados';

  constructor(private http: HttpClient) { }

  getInvitados(): Observable<InvitadoDetail[]> {
    return this.http.get<InvitadoDetail[]>(this.apiUrl);
  }

  getInvitado(id: string): Observable<InvitadoDetail> {
    return this.http.get<InvitadoDetail>(this.apiUrl + "/" + id);
  }

 }
