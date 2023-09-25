import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Station } from '../models/station';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getStations() {
    return this.http.get<Station[]>(this.baseUrl);
  }

  createStation(station:Station) {
    return this.http.post<Station>(this.baseUrl, station);
  }

  deleteStation(idStation: string) {
    return this.http.delete(this.baseUrl + '/' + idStation);
  }
}








 



