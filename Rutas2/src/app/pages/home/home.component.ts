import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';



@Component({
  selector: 'app-home',
  imports: [RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  router = inject(Router)

  getSuscribe(suscribeForm: NgForm) {
    if(suscribeForm.value.email !== ""){
      //redirigir a otra page
      this.router.navigate(['/productos']);
      suscribeForm.reset();
    }else{
      alert("El email no puede estar vacio")
    }
}
}