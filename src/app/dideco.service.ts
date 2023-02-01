import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DidecoService {

  constructor() {
    console.log("Service of Dependency Injection");
    
   }

   msg(message:string){
  console.log(`DidecoService: ${message}`)
   }
}
