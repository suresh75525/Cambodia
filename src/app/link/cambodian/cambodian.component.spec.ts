import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambodianComponent } from './cambodian.component';

describe('CambodianComponent', () => {
  let component: CambodianComponent;
  let fixture: ComponentFixture<CambodianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambodianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambodianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
