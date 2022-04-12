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
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Entry<any>[] = []
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getProjects()
      .then(projects => this.projects = projects);
  }
  _returnHtmlFromRichText(richText: any) {
    console.log(richText)
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText, options);
  }
}
