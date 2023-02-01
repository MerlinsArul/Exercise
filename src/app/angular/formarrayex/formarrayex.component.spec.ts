import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarrayexComponent } from './formarrayex.component';

describe('FormarrayexComponent', () => {
  let component: FormarrayexComponent;
  let fixture: ComponentFixture<FormarrayexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormarrayexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormarrayexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
