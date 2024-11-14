import { HttpClient } from '@angular/common/http';
import { Injectable, ɵisEnvironmentProviders } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProviderClass } from '../models/providers.class';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  apiUrl = environment.apiUrl
  apiUrll=environment.apiUrll

  constructor(private http: HttpClient) { }
  getproviders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  addproviders(newProvider: ProviderClass): Observable<any> {
    return this.http.post(this.apiUrl, newProvider);
  }
  //get one record
  getonerecord(id: number): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }
  updateProvider(id: number, newProvider: ProviderClass): Observable<ProviderClass> {
    return this.http.put<ProviderClass>(this.apiUrl + id, newProvider);

  }
  deleteProvider(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + id);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }
  //login
 

  // ...
  
  loginProvider(data: { name: string }): Observable<any> {
    // Send the data in the request body
    return this.http.post(this.apiUrll, data); // Note the "login" path here
  }
  
}
