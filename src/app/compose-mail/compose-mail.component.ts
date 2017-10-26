import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.css']
})
export class ComposeMailComponent implements OnInit {

  private show = true;
  private currentURL : string;
  private previousURL : string;

  constructor(private route : ActivatedRoute, private router : Router) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(
      params => {
        let cm = params.get("cm");
        if (cm != null && cm == "true") {
          this.show = true;
        } else {
          this.show = false;
        }
      }
    );
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.previousURL = this.currentURL;
        this.currentURL = e.url;
      }
    });
  }

  destroy() {
    this.show = false;
    let url = this.previousURL;
    if (url == null) {
      url = this.currentURL.replace("cm=true", "");
      if (url.endsWith("?")) {
        url = url.substring(0, url.length - 1);
      }
    }
    this.router.navigateByUrl(url);
  }

}
