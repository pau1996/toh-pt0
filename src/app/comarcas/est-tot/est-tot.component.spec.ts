import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstTotComponent } from './est-tot.component';

describe('EstTotComponent', () => {
  let component: EstTotComponent;
  let fixture: ComponentFixture<EstTotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstTotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstTotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
