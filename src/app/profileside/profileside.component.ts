import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-profileside',
  templateUrl: './profileside.component.html',
  styleUrls: ['./profileside.component.css']
})
export class ProfilesideComponent implements OnInit {

  greeting: Entry<any>[] = [];
  greeting_downSide: Entry<any>[] = []
  constructor(private router: Router, private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getGreetingSummary()
      .then(greeting => this.greeting = greeting);

    this.contentfulService.getGreeting_downSide()
      .then(greeting_downSide => this.greeting_downSide = greeting_downSide);
  }
}
