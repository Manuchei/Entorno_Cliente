import { User } from './../../interfaces/user';
import { UsersService } from './../../services/users.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  imports: [],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {

miUsuario!: User;

UsersService = inject(UsersService)
activatedRoute = inject(ActivatedRoute)
router = inject(Router)

ngOnInit(): void{
  this.activatedRoute.params.subscribe((params: any) => {
    let miId: number = params.id as number
    let response = this.UsersService.getById(miId);

    if(response != undefined){
      this.miUsuario = response
    }
    else {
      this.router.navigate(['/home'])
    }
  })
}

delete(): void {
console.log("Hello form delete")  }
  

}
