import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
const options = {

  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }: any) =>
      `<center><img src="${fields.file.url}" height="50%" width="50%" alt="${fields.description}"/></center>`,

  },
};
@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  pageId = '/article';

  postDetail: Entry<any>[] = []


  constructor(
    private contentfulService: ContentfulService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getPostOne(id)
      .then((postDetail) => this.postDetail.push(postDetail));
  }


  _returnHtmlFromRichText(richText: any) {
    console.log(richText)
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText, options);
  }

}
