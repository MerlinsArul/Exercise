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

    this.subservice.sub.subscribe(x => {
      console.log('From message 1', x)
      this.fromsub = x
    })
    this.subservice.sub.next(200);

    this.subservice.sub.subscribe(x => {
      console.log('From message 1 after next', x)
      this.fromsub = x
    })
    this.subservice.sub.next(20);

    // Behaviour Subject

    this.subservice.behSub.subscribe(y => {
      console.log('From message 2', y)
      this.fromsub2 = y
    })

    this.subservice.behSub.next(100);

    this.subservice.behSub.subscribe(y => {
      console.log('From message 2', y)
      this.fromsub2 = y

    })


  }
  show() {
    this.messageservice.message();
  }
  emit1() {
    this.subservice.sendata(Math.random())
  }
  emit2() {
    this.subservice.sendata2(Math.random())
  }


}
