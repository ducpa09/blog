import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/api-token';
import { Comment } from 'src/types/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(
    @Inject(API_URL) public apiUrl: string,
    private httpClient: HttpClient) {}

  getPostDetail(id: number): Observable<Comment[]> {
    return this.httpClient
      .get<Comment[]>(`${this.apiUrl}/comments?postId=${id}`)
      .pipe();
  }
}
