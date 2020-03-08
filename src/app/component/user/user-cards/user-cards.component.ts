import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {User} from "../../../model/user/user";
import axios from "axios";

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})
export class UserCardsComponent implements OnInit {
  @HostBinding('class') class = 'full-width';

  @Input()
  users: User[] = [];

  constructor() { }

  async ngOnInit() {
    axios.get('http://localhost:8000/api/v1/users')
      .then((response) => {
        this.users = response.data.data.users;
      });
  }
}
