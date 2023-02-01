import { Component, OnInit } from '@angular/core';
import { DidecoService } from 'src/app/dideco.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [DidecoService]
})
export class ParentComponent implements OnInit {

  constructor(private diservice: DidecoService) { }

  ngOnInit(): void {
    this.diservice.msg('The Parent Component')
  }

}
