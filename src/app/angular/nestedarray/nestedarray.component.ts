import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nestedarray',
  templateUrl: './nestedarray.component.html',
  styleUrls: ['./nestedarray.component.css']
})
export class NestedarrayComponent implements OnInit {

  profileForm :  FormGroup;
  constructor() { }

  public ngOnInit(): void {
    this.profileForm = new FormGroup({
      Firstname : new FormControl(''),
      Lastname:new FormControl(''),
      Address:new FormGroup({
        DoorNo : new FormControl(''),
        StreetName:new FormControl(''),
        PinCode:new FormControl('')

      })
    })

  }
  public submit(){
    console.log(this.profileForm.value);
    
  }

  public updateProfile(){
    this.profileForm.patchValue({
      Firstname:'Merlins',
      Address:{
        StreetName:'vayalur'
      }
    })
    console.log(this.profileForm.value);
    
  }

}
