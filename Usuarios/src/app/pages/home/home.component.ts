import { UsersService } from './../../services/users.service';
import { Component, inject } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-home',
  imports: [UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  misUsuarios: User[];

  UsersService = inject(UsersService);

  constructor() {
    this.misUsuarios = [];
  }

  ngOnInit(): void {
    this.misUsuarios = this.UsersService.getAll();
  }
}
