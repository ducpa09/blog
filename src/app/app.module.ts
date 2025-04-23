import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PostModule } from './components/posts/post.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule
  ],
  providers: [],
})
export class AppModule { }
