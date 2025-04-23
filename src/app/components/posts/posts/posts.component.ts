import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/types/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  standalone: true,
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {
  posts$: Observable<Post[]>;

  constructor(private postService: PostService, private router: Router) {}
  ngOnInit(): void {
    this.posts$ = this.postService.getAllPosts()
  }

  gotoDetail(id: number) {
    this.router.navigate([`/posts/${id}`]);
  }
}
