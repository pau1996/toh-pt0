import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstFemComponent } from './est-fem.component';

describe('EstFemComponent', () => {
  let component: EstFemComponent;
  let fixture: ComponentFixture<EstFemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstFemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstFemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
