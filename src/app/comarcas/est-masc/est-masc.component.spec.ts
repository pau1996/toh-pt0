import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstMascComponent } from './est-masc.component';

describe('EstMascComponent', () => {
  let component: EstMascComponent;
  let fixture: ComponentFixture<EstMascComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstMascComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstMascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
