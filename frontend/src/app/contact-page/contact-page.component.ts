import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { EnquireService } from '../enquire.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  // Constructor for formBuilder and EnquireService imports
  constructor(
    private formBuilder: FormBuilder,
    private _enquireService: EnquireService
  ) {
    // validators
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  // userModel constructor call to display user input details from User.ts
  userModel = new User('', '', '');

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    } else {
      this.success = true;
    }

    // Check if data is submitted or not
    this._enquireService
      .enquire(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      );

    // timeout method to hide input details
    // setTimeout(() => {
    //   this.userModel.name = '';
    //   this.userModel.email = '';
    //   this.userModel.message = '';
    // }, 3000);
    setTimeout(() => window.location.reload(), 3000);
  }

  ngOnInit() {}
}
