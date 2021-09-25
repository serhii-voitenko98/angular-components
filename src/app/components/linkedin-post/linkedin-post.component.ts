import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-linkedin-post',
  templateUrl: './linkedin-post.component.html',
  styleUrls: ['./linkedin-post.component.scss']
})
export class LinkedinPostComponent {
  faLinkedin = faLinkedin;

  constructor(public router: Router) {}

  get linkedinMessage(): string {
    const base = 'https://www.linkedin.com/shareArticle?mini=true';
    const currentSite = `&url=${this.router.url}`;

    return `${base}${currentSite}`;
  }
}
