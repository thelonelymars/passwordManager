import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    {path:'signup',component:SignUpComponent},{path:'signin', component:SignInComponent},{path:'mainpage', component:MainPageComponent}
];
