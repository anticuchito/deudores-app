import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeudoresRegisterComponent } from './deudores-register/deudores-register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VistaDeudaComponent } from './vista-deuda/vista-deuda.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ver-deudas', component: VistaDeudaComponent },
  { path: 'registrar-deudor', component: DeudoresRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
