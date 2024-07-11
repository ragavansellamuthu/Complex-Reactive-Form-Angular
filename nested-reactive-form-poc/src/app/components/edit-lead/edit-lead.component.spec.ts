import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeadComponent } from './edit-lead.component';

describe('EditLeadComponent', () => {
  let component: EditLeadComponent;
  let fixture: ComponentFixture<EditLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLeadComponent]
    });
    fixture = TestBed.createComponent(EditLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
