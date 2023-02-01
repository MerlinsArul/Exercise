import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularModule } from './angular/angular.module';
import { MessageService } from './angular/message.service';
import { Message2Service } from './angular/message2.service';
import { TestserviceService } from './angular/testservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularModule
  ],

  providers: [{ provide: MessageService, useClass: Message2Service },
  {
    provide: MessageService, useFactory: (testservice: TestserviceService) => testservice.status ? new MessageService() : new Message2Service,
    deps: [TestserviceService]
  },
  { provide: 'App_Title', useValue: { title: 'This is for Service Provider', description: 'In this we know about useValue' } },
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
