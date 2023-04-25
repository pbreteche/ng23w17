import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTemplateFormComponent } from './contact-template-form.component';

describe('ContactTemplateFormComponent', () => {
  let component: ContactTemplateFormComponent;
  let fixture: ComponentFixture<ContactTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
