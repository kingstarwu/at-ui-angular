import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtColorSketchComponent } from './at-color-sketch.component';

describe('AtColorSketchComponent', () => {
  let component: AtColorSketchComponent;
  let fixture: ComponentFixture<AtColorSketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtColorSketchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtColorSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
