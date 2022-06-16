import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  constructor() { }

  sendMessage(): void {
    if (this.contactForm.invalid) {
      return;
    }

    var name = this.contactForm.get("name")?.value;
    var email = this.contactForm.get("email")?.value;
    var message = this.contactForm.get("message")?.value;

    console.log(this.contactForm.value)
    // TODO: Send a message to my aunt's nephew's brother's sister-in-law's husband in North Korea.
  }
}
