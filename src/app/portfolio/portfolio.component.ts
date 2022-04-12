import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { last } from 'rxjs';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio: Entry<any>[] = []

  constructor(private contentfulService: ContentfulService) {

    // this.allArticle = contentfulService.quote;
  }


  ngOnInit(): void {
    this.contentfulService.getPortfolio()
      .then((portfolio) => {
        this.portfolio = portfolio;
        console.log("22222222222222", this.portfolio);
      });

  }

}
