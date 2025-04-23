import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/types/post.model';
import { API_URL } from 'src/app/api-token';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpClient: HttpClient,
    @Inject(API_URL) public apiUrl: string,
  ) { }

  getAllPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.apiUrl}/posts`).pipe()
  }


  getPostDetail(id: string): Observable<Post>{
    return this.httpClient.get<Post>(`${this.apiUrl}/posts/${id}`).pipe()
  }
}
