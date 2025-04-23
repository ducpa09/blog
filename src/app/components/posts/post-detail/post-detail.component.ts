import { Component, Input, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { CommentService } from 'src/services/comment.service';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/types/post.model';
import { Comment } from 'src/types/comment.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  standalone: true
})
export class PostDetailComponent implements OnInit {
  constructor(
    private postService: PostService,
    private commentService: CommentService
  ) {}

  @Input() id!: string;
  post: Post;
  comments: Comment[] = [];

  ngOnInit(): void {
    if (this.id) {
      this.postService
        .getPostDetail(this.id)
        .pipe(
          switchMap((post) => {
            this.post = post;
            return this.commentService.getPostDetail(post.id);
          })
        )
        .subscribe((comments) => {
          this.comments = comments;
        });
    }
  }
}
