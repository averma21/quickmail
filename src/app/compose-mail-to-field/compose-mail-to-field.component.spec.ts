import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeMailToFieldComponent } from './compose-mail-to-field.component';

describe('ComposeMailToFieldComponent', () => {
  let component: ComposeMailToFieldComponent;
  let fixture: ComponentFixture<ComposeMailToFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeMailToFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeMailToFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
