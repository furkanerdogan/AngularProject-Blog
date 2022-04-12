import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContentfulService } from './contentful.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NaviComponent } from './navi/navi.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfilesideComponent } from './profileside/profileside.component';
import { ProjectsComponent } from './projects/projects.component';
import { RightsideComponent } from './rightside/rightside.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { DisqusModule } from "ngx-disqus";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContentComponent,
    FooterComponent,
    NaviComponent,
    NotfoundComponent,
    PortfolioComponent,
    ProfilesideComponent,
    ProjectsComponent,
    RightsideComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisqusModule.forRoot('furkanerdogan')
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
