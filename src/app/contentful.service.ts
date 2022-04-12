import { Injectable } from '@angular/core';
import { createClient, Entry } from "contentful"
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  quote: Entry<any>[] = []


  constructor() {
  }

  getPost(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'blog'
    }, query))
      .then(res => res.items)
      .then(x => this.quote = x)

  }

  getPostOne(postId: any): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'blog'
    }, { 'sys.id': postId }))
      .then(res => res.items[0]);

  }
  getGreetingSummary(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'profileSideGreetingComponent'
    }, query))
      .then(res => res.items);

  }
  getGreeting_downSide(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'profilesideAboutMe'
    }, query))
      .then(res => res.items);

  }
  getAboutme(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'about'
    }, query))
      .then(res => res.items);

  }

  getRightSide_dailyQuote(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'dailyQuote'
    }, query))
      .then(res => res.items);
  }

  getPortfolio(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'portfolio'
    }, query))
      .then(res => res.items);
  }
  getProjects(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'projects'
    }, query))
      .then(res => res.items);
  }




}
