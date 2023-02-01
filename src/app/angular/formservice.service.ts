import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
  public posts = new Subject()
  constructor() { }

  setPost(post:''){
    this.posts.next(post)
   }
   getPost(){
     return this.posts;
   }
}
