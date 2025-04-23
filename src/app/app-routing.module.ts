import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts/posts.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    loadComponent: () => import('./components/posts/posts/posts.component').then(mod => mod.PostsComponent)
  },
  {
    path: 'posts/:id',
    loadComponent: () => import('./components/posts/post-detail/post-detail.component').then(mod => mod.PostDetailComponent)

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
