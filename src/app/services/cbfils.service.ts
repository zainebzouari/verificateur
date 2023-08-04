import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cbfils } from '../models/cbfils';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CbfilsService {
  private url;

  constructor(private http: HttpClient) {
    this.url = "https://localhost:7021/api/CBFils";
  }

 
    public GetCbfils(): Observable<Cbfils[]> {
    let header = new HttpHeaders();
   header.append('Content-Type','applications/json');
   return this.http.get<Cbfils[]>(`${this.url}`,{headers:header});
   }
    public updateCbfils(cbfils:Cbfils): Observable<Cbfils[]> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.put<Cbfils[]>(`${this.url}/${cbfils.idFils}`, cbfils, { headers: header });
    }
    public createCbfils(cbfils: Cbfils): Observable<Cbfils[]> {
    let header = new HttpHeaders();
    header.append('Content-T"ype', 'application/json');
    return this.http.post<Cbfils[]>(`${this.url}`, cbfils, { headers: header });
   }
    public deleteCbfils(cbfils: Cbfils): Observable<Cbfils[]> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.delete<Cbfils[]>(`${this.url}/${cbfils.idFils}`, { headers: header });
  }
}