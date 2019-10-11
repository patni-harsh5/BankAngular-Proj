import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DBConnect } from './shared/dbConnect.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { CardapplicationComponent } from './cardapplication/cardapplication.component';
import { HomeComponent } from './home/home.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationItemComponent } from './application-list/application-item/application-item.component';
import { ApplicationEditorComponent } from './application-editor/application-editor.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CardapplicationComponent,
    HomeComponent,
    ApplicationListComponent,
    ApplicationItemComponent,
    ApplicationEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DBConnect],
  bootstrap: [AppComponent]
})
export class AppModule { }
