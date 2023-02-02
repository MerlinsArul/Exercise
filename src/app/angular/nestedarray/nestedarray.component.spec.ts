import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedarrayComponent } from './nestedarray.component';

describe('NestedarrayComponent', () => {
  let component: NestedarrayComponent;
  let fixture: ComponentFixture<NestedarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
