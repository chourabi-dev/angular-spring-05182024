import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidmenuComponent } from './sidmenu.component';

describe('SidmenuComponent', () => {
  let component: SidmenuComponent;
  let fixture: ComponentFixture<SidmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
