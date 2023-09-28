import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {

  constructor(private http: HttpClient) { }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error(error.message || 'An error occurred'));
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url)
      .pipe(catchError(this.handleError));
  }

  post<T>(url: string, data: any, headers?: HttpHeaders ): Observable<T> {
    return this.http.post<T>(url, data, {headers})
      .pipe(catchError(this.handleError));
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(url, data)
      .pipe(catchError(this.handleError));
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url)
      .pipe(catchError(this.handleError));
  }
}
