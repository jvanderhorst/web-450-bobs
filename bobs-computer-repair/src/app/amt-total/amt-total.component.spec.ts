import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmtTotalComponent } from './amt-total.component';

describe('AmtTotalComponent', () => {
  let component: AmtTotalComponent;
  let fixture: ComponentFixture<AmtTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmtTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmtTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
