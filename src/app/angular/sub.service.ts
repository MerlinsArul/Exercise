import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubService {
  
  public sub = new Subject<number>();
  public behSub = new BehaviorSubject<number>(10);

  constructor() { 
    console.log('This is DiService for explaining Selfskip');
    
  }

  sendata(data:number){
    this.sub.next(data)
 }
 sendata2(data:number){
  this.behSub.next(data)
}

  msg(message:string){
  console.log(`Self Skip:${message}`);
 
}

}
