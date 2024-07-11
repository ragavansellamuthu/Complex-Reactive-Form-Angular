import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeadComponent } from './create-lead.component';

describe('CreateLeadComponent', () => {
  let component: CreateLeadComponent;
  let fixture: ComponentFixture<CreateLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLeadComponent]
    });
    fixture = TestBed.createComponent(CreateLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
