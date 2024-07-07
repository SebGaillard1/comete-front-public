import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private baseurl = 'http://localhost:5037';

  // private http = inject(HttpClient);

  sendText(prompt: string, instructions: string) {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // const body = {
    //   prompt: prompt,
    //   instructions: instructions,
    // };
    // return this.http.post<any>(this.baseurl + '/Reports/GenerateResume', body, {
    //   headers: headers,
    // });
  }
  // sendText(prompt: string, instructions: string): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const body = {
  //     prompt: prompt,
  //     instructions: instructions,
  //   };
  //   return this.http.post<any>(this.baseurl + '/Reports/GenerateResume', body, {
  //     headers: headers,
  //   });
  // }
}
