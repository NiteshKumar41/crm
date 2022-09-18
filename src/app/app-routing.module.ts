import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componenets/dashboard/dashboard/dashboard.component';
import { LayoutComponent } from './componenets/dashboard/layout/layout.component';
import { LoginComponent } from './componenets/login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  {
    path:'', component:LayoutComponent,
    children:[
      {
        path:'',loadChildren: () =>import('./componenets/dashboard/layout.module').then(m=>m.LayoutModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
