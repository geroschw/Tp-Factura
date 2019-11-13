import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliListComponent } from './cli-list.component';

describe('CliListComponent', () => {
  let component: CliListComponent;
  let fixture: ComponentFixture<CliListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
