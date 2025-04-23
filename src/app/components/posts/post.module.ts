import { NgModule } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostService } from 'src/services/post.service';

@NgModule({
  declarations: [],
  imports: [ PostsComponent, PostDetailComponent],
  exports: [PostsComponent, PostDetailComponent],
  providers: [PostService]
})
export class PostModule {}
