import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {



  constructor() { }

  message(){
    console.log('Hi hello ! I am message 1');
    }

   
}
