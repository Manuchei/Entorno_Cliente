import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { Page404Component } from './pages/page404/page404.component';
import { UserViewComponent } from './pages/user-view/user-view.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'newuser', component: NewUserComponent},
    {path: 'updateuser', component: UpdateUserComponent},
    {path: 'user/:id', component: UserViewComponent},
    {path: '**', component: Page404Component}



];
