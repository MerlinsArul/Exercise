import { Component, Inject, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Message2Service } from '../message2.service';
import { SubService } from '../sub.service';


@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {
  fromsub = null;
  fromsub2 = null;

  constructor(private messageservice: MessageService, private messageservice2: Message2Service,
    @Inject('App_Title') public config: any, private subservice: SubService) { }


  public ngOnInit(): void {

    // Subject
    this.subservice.sub.next(10) // It won't execute

    this.subservice.sub.subscribe(x => {
      console.log('From message Subject', x)
      this.fromsub = x
    })
    this.subservice.sub.next(200);

    this.subservice.sub.subscribe(x => {
      console.log('From message Subject ', x)
      this.fromsub = x
    })
     this.subservice.sub.next(20);

    // Behaviour Subject

    this.subservice.behSub.next(30)  // It will execute

    this.subservice.behSub.subscribe(y => {
      console.log('From message Behaviour Subject', y)
      this.fromsub2 = y
    })

    this.subservice.behSub.next(100);

    this.subservice.behSub.subscribe(y => {
      console.log('From message Behaviour Subject', y)
      this.fromsub2 = y

    })

    //Replay Subject
    this.subservice.reSub.next(500)

    this.subservice.reSub.subscribe(z => {
      console.log('From message 1 Replay', z);
      this.fromsub = z
    })
    this.subservice.reSub.next(1000);
    this.subservice.reSub.subscribe(z => {
      console.log('From message 1 Replay', z);
      this.fromsub = z
    })
    this.subservice.reSub.next(2000);


  }
  public show() {
    this.messageservice.message();
  }
  public emit1() {
    this.subservice.sendata(Math.random())
  }
  public emit2() {
    this.subservice.sendata2(Math.random())
  }


}
