import { Component, Host, Input, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { DidecoService } from 'src/app/dideco.service';
import { SubService } from '../../sub.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: []
  // providers:[{provide:DidecoService,useClass:SubService}]

})
export class ChildComponent implements OnInit {

  @Input() id: string;

  constructor(@Optional() @Host() private diservice?: DidecoService) { }
  // @SkipSelf() private server:DidecoService) { }

  public ngOnInit(): void {

    this.diservice?.msg(`For Child Component ${this.id} message  is received`)
  }

  public msg() {
    //this.server.msg(`For Child Component ${this.id} logging`)
  }

}
