import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private apiUrl = 'http://localhost:3000/match';
    matches: any[] = []; // Array to hold matches

  constructor(private http: HttpClient) {}

  getAllMatches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getMatchesByFilter(filter: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/filter`, filter);
  }
}