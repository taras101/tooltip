import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipbtnComponent } from './tooltipbtn.component';

describe('TooltipbtnComponent', () => {
  let component: TooltipbtnComponent;
  let fixture: ComponentFixture<TooltipbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
