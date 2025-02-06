import { Routes } from '@angular/router';
import { Page404Component } from './pages/page404/page404.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'users'},
    {path: 'users', component: UserListComponent},
    {path: 'newuser', component: UserFormComponent},
    {path: 'serie/:_id', component: UserViewComponent},
    {path: 'actualizar/serie/:_id', component: UserFormComponent},
    {path: '**', component: Page404Component}



];
