import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mails-page',
  templateUrl: './mails-page.component.html',
  styleUrls: ['./mails-page.component.css']
})
export class MailsPageComponent implements OnInit {

  private currentURL : string;

  constructor(private router : Router) { }

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentURL = e.url;
      }
    });
  }

}
