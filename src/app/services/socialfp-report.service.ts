import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})

export class SocialfpReportService {

  private readonly EMAIL_REPORT_URL = `${environment.apiUrl}/email`;
  private readonly TEST_URL = `${environment.apiUrl}/test`;

  private readonly HTTP_OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  testBackend(): Observable<any> {
    return this.http.get<any>(this.TEST_URL)
      .pipe(
        map(response => response),
        catchError(this.handleError<any>('testBackend'))
      );
  }

  submitReportRequest(userRequest: any): Observable<any> {
    const URL = `${this.EMAIL_REPORT_URL}`;
    return this.http.post<any>(URL, userRequest, this.HTTP_OPTIONS)
      .pipe(
        map(response => response),
        catchError(response => {
          if (response.status === 403) {
            return Observable.throw({limitReached: true, error: response.error.error});
          } else {
            
          }
        })
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
