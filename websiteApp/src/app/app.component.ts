import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Personal website';

  private _posts = new Array<Post>();

  constructor(){
    const post1 = new Post("First post", "Content eerste post", "thumbnail.png");
    const post2 = new Post("Second post", "content tweede post", "default.png");

    this._posts.push(post1);
    this._posts.push(post2);
    this._posts.push(post1);
    this._posts.push(post2);
    this._posts.push(post1);
    this._posts.push(post2);        

    
  }

}
