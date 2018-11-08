import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcrusionsComponent } from './excrusions.component';

describe('ExcrusionsComponent', () => {
  let component: ExcrusionsComponent;
  let fixture: ComponentFixture<ExcrusionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcrusionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcrusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
