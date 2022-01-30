import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeativalsComponent } from './feativals.component';

describe('FeativalsComponent', () => {
  let component: FeativalsComponent;
  let fixture: ComponentFixture<FeativalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeativalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeativalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
