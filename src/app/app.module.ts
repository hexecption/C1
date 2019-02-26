import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { StoriesComponent } from './stories/stories.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './data.service';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    HomeComponent,
    CategoryComponent,
    FooterComponent,
    StoriesComponent,
    ContactComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
