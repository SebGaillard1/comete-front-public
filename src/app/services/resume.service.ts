import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private baseUrl = 'http://localhost:5037';

  private http = inject(HttpClient);

  sendText(prompt: string, instructions: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { prompt, instructions };
    return this.http.post(this.baseUrl + '/Reports/GenerateResume', body, {
      headers: headers,
      responseType: 'text', // Assurez-vous de recevoir la réponse en tant que texte brut
    });
  }
}
