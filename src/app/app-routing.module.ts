import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Forms/login/login.component';
import { RegisterComponent } from './Forms/register/register.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  // { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
          path: '',
          loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
