import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  // @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
  }

  voteUp(): void {
    this.article.voteUp();
  }

  voteDown(): void {
    this.article.voteDown();
  }

  ngOnInit() {
  }
}
