import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {User} from "../../model/user/user";

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

  ngOnInit(): void {
    let newUser : User = {
      id: "1",
      name: "John",
      surname: "Doe",
      email: "johndoe@microsoft.com"
    };
    this.users.push(newUser);
    this.users.push(newUser);
    this.users.push(newUser);
    this.users.push(newUser);
    this.users.push(newUser);
  }
}
