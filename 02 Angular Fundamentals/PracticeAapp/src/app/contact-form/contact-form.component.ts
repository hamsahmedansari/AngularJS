import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactFormValidator } from './contact-form.validator';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

 form = new FormGroup({
  'username' : new FormControl('',[
    Validators.required,
    Validators.minLength(2),
    ContactFormValidator.cannotContainSpace,
  ],  
  ContactFormValidator.shouldBeUnique,
  ),
  'password' : new FormControl('',Validators.required)
 });

}
