import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyResume } from '../components/my-resume-list/my-resume-list.component';
import { Folder } from '../components/folder-list/folder-list.component';

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
      responseType: 'text',
    });
  }

  // getMyResume(): Observable<MyResume[]> {

  // }

  createFolder(name: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      idUtilisateur: 0,
      name: name,
    };
    return this.http.post(this.baseUrl + '/Folders', body, {
      headers: headers,
    });
  }

  getFolders(idUtilisateur: number): Observable<Folder[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Folder[]>(
      `${this.baseUrl}/Folders?idUtilisateur=${idUtilisateur}`,
      {
        headers: headers,
      }
    );
  }
}
