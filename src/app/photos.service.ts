import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

interface unsplashResponse{
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto(){
    return this.http.get<unsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID Puwq9kjdJQ2LMCOfJgoxWNYiKJqbrZfnI4DjzgVob1g'
      }
    }).pipe(
      map(response => response.urls.regular)
    );
  }
}
