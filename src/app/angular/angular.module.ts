import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';
import { FactoryComponent } from './factory/factory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormarrayexComponent } from './formarrayex/formarrayex.component';
import { DidecoComponent } from './dideco/dideco.component';
import { ChildComponent } from './dideco/child/child.component';
import { ParentComponent } from './dideco/parent/parent.component';
import { ContentComponent } from './dideco/content/content.component';
import { NestedarrayComponent } from './nestedarray/nestedarray.component';
import { OperatorsComponent } from './operators/operators.component';



@NgModule({
  declarations: [
    FactoryComponent,
    FormarrayexComponent,
    DidecoComponent,
    ChildComponent,
    ParentComponent,
    ContentComponent,
    NestedarrayComponent,
    OperatorsComponent,
   
  

  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    ReactiveFormsModule
  ]
})
export class AngularModule { }
