import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDisplayComponent } from './child-display.component';

describe('ChildDisplayComponent', () => {
  let component: ChildDisplayComponent;
  let fixture: ComponentFixture<ChildDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
