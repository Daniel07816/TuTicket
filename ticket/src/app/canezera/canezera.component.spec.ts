import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanezeraComponent } from './canezera.component';

describe('CanezeraComponent', () => {
  let component: CanezeraComponent;
  let fixture: ComponentFixture<CanezeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanezeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanezeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
