import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: any[] = [];

  addUserReactive(user: any) {
    this.users = [...this.users, user];
  }

  addUserTemplate(user: any) {
    this.users = [...this.users, user];
  }
}