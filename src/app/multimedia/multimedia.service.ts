import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Multimedia } from './multimedia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {


constructor( private http: HttpClient) { }

  getMultimedias(): Observable<Multimedia[]> {
    return this.http.get<Multimedia[]>("http://localhost:8080/multimedias");
  }
}
