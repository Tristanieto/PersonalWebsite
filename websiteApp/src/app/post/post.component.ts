import { Component, OnInit, Input} from '@angular/core';
import { Post } from './post.model';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],

})
export class PostComponent implements OnInit {

  private _post: Post;

  @Input() public post: Post;


  constructor() {
      
  }

  ngOnInit() {
  }



}
