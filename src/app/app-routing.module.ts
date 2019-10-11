import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardapplicationComponent } from './cardapplication/cardapplication.component';
import { HomeComponent } from './home/home.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationEditorComponent } from './application-editor/application-editor.component';


const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "cardapp", component:CardapplicationComponent},
  {path: "appList", component: ApplicationListComponent},
  {path: "appEdit", component: ApplicationEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
