import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidecoComponent } from './dideco.component';

describe('DidecoComponent', () => {
  let component: DidecoComponent;
  let fixture: ComponentFixture<DidecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DidecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DidecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
