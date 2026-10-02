import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CvService {

    constructor(private http: HttpClient) {}

    download(lang: 'fr' | 'en'): void {
    this.http.get(`${environment.apiUrl}/cv?lang=${lang}`, { responseType: 'blob' }).subscribe({
        next: (blob) => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `BOURAIMA-Fadyl-CV-${lang}.pdf`;
            link.click();
            window.URL.revokeObjectURL(url);
        },
        error: (err) => console.error('Erreur téléchargement CV :', err)
    });
  }
}