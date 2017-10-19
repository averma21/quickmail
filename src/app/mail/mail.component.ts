import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(private subject: string, private from: string, private to: string
  , private content: string) { }

  ngOnInit() {
  }

  getSubject(): string {
    return this.subject;
  }

  getSender() : string {
    return this.from;
  }

  getReceiver() : string {
    return this.to;
  }

  getContent() :  string {
    return this.content;
  }
 
}
