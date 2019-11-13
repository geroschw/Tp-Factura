import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmFormComponent } from './itm-form.component';

describe('ItmFormComponent', () => {
  let component: ItmFormComponent;
  let fixture: ComponentFixture<ItmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
