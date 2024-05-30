import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  private baseUrl = 'http://localhost:8080/api/images';

  constructor(private http: HttpClient) { }

  uploadImageUrl(imageUrl: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload-url`, { imageUrl });
  }

  getImageUrls(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
