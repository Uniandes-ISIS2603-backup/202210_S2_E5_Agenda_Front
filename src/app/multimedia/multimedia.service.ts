import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Multimedia } from './multimedia';
import { environment } from 'src/environments/environment';
import { MultimediaDetail } from './multimedia-detail';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  private apiUrl: string = environment.baseUrl + 'multimedias';

  constructor( private http: HttpClient) { }

    getMultimedias(): Observable<MultimediaDetail[]> {
      return this.http.get<MultimediaDetail[]>(this.apiUrl);
    }
  }
