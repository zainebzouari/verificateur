import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station} from '../models/station';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class StationService {
  private url;

  constructor(private http: HttpClient) {
    this.url = "https://localhost:7248/api/Stations";
  }


    public getStations(): Observable<Station[]> {
    let header = new HttpHeaders();
   header.append('Content-Type','applications/json');
   return this.http.get<Station[]>(`${this.url}`,{headers:header});
    }
    public updateStation(station: any): Observable<any> {
    let header = new HttpHeaders();
   header.append('Content-Type', 'application/json');
    return this.http.put<Station[]>(`${this.url}/${station.idStation}`, station, { headers: header });
   }
    public createStation(station: Station): Observable<Station[]> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post<Station[]>(`${this.url}`, station, { headers: header });
    }
    public deleteStation(station: any): Observable<Station[]> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.delete<Station[]>(`${this.url}/${station.idStation}`, { headers: header });
  }
}








 



