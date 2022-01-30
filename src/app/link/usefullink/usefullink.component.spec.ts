import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefullinkComponent } from './usefullink.component';

describe('UsefullinkComponent', () => {
  let component: UsefullinkComponent;
  let fixture: ComponentFixture<UsefullinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefullinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefullinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
