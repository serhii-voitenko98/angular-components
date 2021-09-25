import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent implements OnInit {
  @Input() baseHref = 'https://google.com';
  @Input() hashTags: string[] = ['JavaScript'];

  faTwitter = faTwitter;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
  }

  get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(`Check out ${this.titleService.getTitle()}`);
    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute() {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=noone&url=${route}&text=`;
  }
}
