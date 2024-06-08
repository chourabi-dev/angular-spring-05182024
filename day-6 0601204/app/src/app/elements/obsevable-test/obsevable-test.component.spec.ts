import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsevableTestComponent } from './obsevable-test.component';

describe('ObsevableTestComponent', () => {
  let component: ObsevableTestComponent;
  let fixture: ComponentFixture<ObsevableTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsevableTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsevableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
