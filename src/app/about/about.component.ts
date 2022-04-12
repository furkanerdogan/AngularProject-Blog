import { Component, OnInit } from '@angular/core';
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
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: Entry<any>[] = []
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getAboutme()
      .then(about => this.about = about);
    console.log(this.about);
  }
  _returnHtmlFromRichText(richText: any) {
    console.log(richText)
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText, options);
  }

}
