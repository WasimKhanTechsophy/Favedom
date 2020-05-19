import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { FaveBackgroundComponent } from './fave-background/fave-background.component';

const routes: Routes = [
  {
    path: '',
    component: FaveBackgroundComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
