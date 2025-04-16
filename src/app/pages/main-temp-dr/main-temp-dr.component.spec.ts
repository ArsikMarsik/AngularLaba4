import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTempDrComponent } from './main-temp-dr.component';

describe('MainTempDrComponent', () => {
  let component: MainTempDrComponent;
  let fixture: ComponentFixture<MainTempDrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainTempDrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTempDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
