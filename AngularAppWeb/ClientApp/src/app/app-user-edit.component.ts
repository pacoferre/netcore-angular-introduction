import { Component, Input } from '@angular/core';
import { IUser } from './user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './app-user-edit.component.html'
})
export class AppUserEditComponent {
  @Input()
  selectedUser: IUser;
}
