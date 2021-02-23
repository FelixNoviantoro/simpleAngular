import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Komponen } from './Komponen';
import { map } from 'rxjs/operators';

@Injectable()
export class KomponenService {

  constructor(private httpClient: HttpClient) { }

  getKategori(id : string): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/editjson/' + id)
    .pipe(map(data => data));
  }

   simpanKategori(komponen : Komponen, isEdit : boolean): Observable<any> {
     let url = 'savekategorijson';
     if (isEdit) {
       url = 'savekategorijson'
     }
     return this.httpClient.post(environment.baseUrl + url, komponen);
   }

}
