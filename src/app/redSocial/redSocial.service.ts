import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { redSocial } from './redSocial';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class redSocialService {



  constructor(private http: HttpClient) { }

  getRedesSociales(): Observable<redSocial[]> {
    return this.http.get<redSocial[]>('http://localhost:8080/api/redesSociales');
  }
}
