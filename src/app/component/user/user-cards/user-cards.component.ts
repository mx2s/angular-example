import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {User} from "../../../model/user/user";
import axios from "axios";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})
export class UserCardsComponent implements OnInit {
  @HostBinding('class') class = 'full-width';

  @Input()
  users: User[] = [];

  allUsers: User[] = [];

  usersCount: number = 0;

  async ngOnInit() {
    this.getUsers();
  }

  filterUsers(users, query) {
    return users.filter((user) => {
      return user.id.includes(query) ||
        user.name.includes(query) ||
        user.surname.includes(query) ||
        user.email.includes(query);
    })
  }

  async getUsers(skip = 0, limit = 10) {
    axios.get(`http://localhost:8000/api/v1/users?skip=${skip}&limit=${limit}`)
      .then((response) => {
        this.usersCount = response.data.meta.totalCount;
        this.allUsers = response.data.data.users;
        this.users = this.allUsers;
      });
  }

  performSearch(e) {
    console.log(e.target);
    this.users = this.filterUsers(this.allUsers, e.target.value);
  }

  async pageChanged(e: PageEvent) {
    await this.getUsers(e.pageIndex * e.pageSize, e.pageSize);
  }
}
