import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { retry } from 'rxjs';

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
      firstname:new FormControl('',[Validators.required,Validators.minLength(6)]),
      lastname:new FormControl('',Validators.minLength(4)),
      email:new FormControl('',Validators.email),
      skills: new FormArray([
        new FormControl('')
      ])
    })
    
  }
  get skills(){
    return this.employeeForm.get('skills') as FormArray
  }

  public addSkill(){
    this.skills.push(new FormControl(''))
}

public remove(i:number){
  this.skills.removeAt(i)
}
  
public submit(){
    console.log(this.employeeForm.value);
    }

  }
