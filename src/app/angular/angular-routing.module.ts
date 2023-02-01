import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DidecoComponent } from './dideco/dideco.component';
import { FactoryComponent } from './factory/factory.component';
import { FormarrayexComponent } from './formarrayex/formarrayex.component';

const routes:
 Routes = [{path:'factory',component:FactoryComponent},
 {path:'formarrayex',component:FormarrayexComponent},
 {path:'dideco',component:DidecoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
