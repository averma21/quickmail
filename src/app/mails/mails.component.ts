import { MailComponent } from './../mail/mail.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent implements OnInit {

  mails: MailComponent[] = [];
  
  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 10; i++) {
      this.mails.push(
        new MailComponent(
          "Testing this application with subject " + i,
          "someone_mysterious" + i + "@quickmail.com",
          "To " + i,
          "This is mail " + i + "'s content. This should be a long string. How should we make it long? Is there any other way except writing such meaningless sentences. Yes. May be lorem ipsum."));
    }
  }

}
