import { Component, Input, OnInit } from '@angular/core';
import {User} from "../../../model/user/user";
import axios from "axios";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  private readonly notifier: NotifierService;

  @Input()
  user: User;

  isDeleted: boolean = false;

  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {}

  deleteUser() {
    axios.delete(`http://localhost:8000/api/v1/users/${this.user.id}`)
      .then(() => {
        this.notifier.notify("success", "user was deleted successfully");
        this.isDeleted = true;
      });
  }
}
