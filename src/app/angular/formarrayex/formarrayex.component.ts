import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarrayex',
  templateUrl: './formarrayex.component.html',
  styleUrls: ['./formarrayex.component.css']
})
export class FormarrayexComponent implements OnInit {

  public employeeForm : FormGroup;
  constructor() { }

  public ngOnInit(): void {
    this.employeeForm = new FormGroup({
      firstname:new FormControl(''),
      lastname:new FormControl(''),
      email:new FormControl(''),
      skills: new FormArray([
        new FormControl('')
      ])
    })
    
  }
  submit(){
    console.log(this.employeeForm.value);
    
  }
   
  addSkill(){
  (<FormArray> this.employeeForm.get('skills')).push(new FormControl)
  }
}
