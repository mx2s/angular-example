import { Component, OnInit } from '@angular/core';
import { NotifierService } from "angular-notifier";
import axios from 'axios';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  private readonly notifier: NotifierService;

  formData: object;

  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
    this.formData = {};
  }

  async ngOnInit() {
  }

  formUpdated(e: any) {
    this.formData[e.target.name] = e.target.value;
  }

  async createUser() {
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
