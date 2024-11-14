import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent {
  selectedSubject: string = '';
  handleSubmit(contactForm:NgForm)
  {
    console.log(contactForm.value);
  }

}
