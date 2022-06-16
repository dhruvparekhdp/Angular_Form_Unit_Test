import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require valid email', () => {
    component.contactForm.setValue({
      "name": "", 
      "email": "invalidemail", 
      "message": ""
    });

    expect(component.contactForm.valid).toEqual(false);
  });


  it('should be valid if form value is valid', () => {
    component.contactForm.setValue({
      "name": "Bobby", 
      "email": "bobby@bobby.com", 
      "message": "Email me a soda, please."
    });

    expect(component.contactForm.valid).toEqual(true);
  });
});