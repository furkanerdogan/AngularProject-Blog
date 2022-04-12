import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { last } from 'rxjs';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.css']
})
export class RightsideComponent implements OnInit {
  allArticle: Entry<any>[] = []
  time = new Date().getMilliseconds();
  dailyQuote: Entry<any>[] = []
  i = 500;
  m = 0;



  constructor(private contentfulService: ContentfulService) {

    // this.allArticle = contentfulService.quote;
  }




  ngOnInit(): void {
    this.contentfulService.getPost()
      .then((allArticle) => {
        this.allArticle.push(allArticle[0]);
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxssss", allArticle[0]);
        console.log("sssss", this.allArticle);
      });
    this.changeQuote();

  }


  changeQuote() {
    this.contentfulService.getRightSide_dailyQuote()
      .then((dailyQuote) => {
        this.dailyQuote.push(dailyQuote[this.m]);
        console.log("5 saniy geçti");
        this.time = 0;
        this.m++;


      });
    this.m = 0;
  }



}
