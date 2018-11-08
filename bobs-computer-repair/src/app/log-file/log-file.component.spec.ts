import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFileComponent } from './log-file.component';

describe('LogFileComponent', () => {
  let component: LogFileComponent;
  let fixture: ComponentFixture<LogFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
