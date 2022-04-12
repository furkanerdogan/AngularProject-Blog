import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

const options = {

  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }: any) =>
      `<center><img src="${fields.file.url}" height="50%" width="50%" alt="${fields.description}"/></center>`,

  },
};
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {

  post: Entry<any>[] = []


  constructor(private router: Router, private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getPost()
      .then(post => this.post = post);

  }
  goToPostDetailsPage(postId: any) {
    this.router.navigate(['/article', postId]);
  }

  _returnHtmlFromRichText(richText: any) {
    console.log(richText)
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText, options);
  }

}
