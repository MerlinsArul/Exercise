import { Component, OnInit } from '@angular/core';
import { DidecoService } from 'src/app/dideco.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [DidecoService]
})
export class ContentComponent implements OnInit {

  constructor(private diservice: DidecoService) { }

  ngOnInit(): void {
    this.diservice.msg('The Content Component')
  }

}
