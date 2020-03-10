import { Component, OnInit } from '@angular/core';
import { NotifierService } from "angular-notifier";
import axios from 'axios';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  private readonly notifier: NotifierService;

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(20)
  ]);

  surNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(20)
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher: any;

  formData: object;

  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
    this.formData = {};
  }

  async ngOnInit() {
  }

  formIsValid(): boolean {
    return this.nameFormControl.status === "VALID" &&
      this.surNameFormControl.status === "VALID" &&
      this.emailFormControl.status === "VALID";
  }

  formUpdated(e: any) {
    this.formData[e.target.name] = e.target.value;
  }

  async createUser() {
    if (!this.formIsValid()) {
      this.notifier.notify("warning", "Please fill the form correctly");
      return;
    }
    axios.post('http://localhost:8000/api/v1/users', this.formData)
      .then((response) => {
        this.notifier.notify("success", "user was created successfully");
      })
      .catch((e) => {
        try {
          e.response.data.errors.forEach((err) => {
            this.notifier.notify("error", err.message);
          })
        } catch (e) {console.error(e)}
      });
  }
}

