import { AuthService } from './login/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailsPageComponent } from './mails-page/mails-page.component';
import { MailsComponent } from './mails/mails.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatInputModule, MatCardModule, MatButtonModule, MatListModule, MatGridListModule, MatIconModule } from '@angular/material';
import { MailComponent } from './mail/mail.component';

@NgModule({
  declarations: [
    AppComponent,
    MailsPageComponent,
    MailsComponent,
    LoginComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
