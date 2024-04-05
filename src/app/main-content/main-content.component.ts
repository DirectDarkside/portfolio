import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeaderComponent } from '../../assets/shared/components/header/header.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { SayHiComponent } from './say-hi/say-hi.component';
import { FooterComponent } from '../../assets/shared/components/footer/footer.component';

@Component({
  selector: 'app-main-content',
  host: {
    class: 'main-content',
  },
  standalone: true,
  imports: [
    LandingComponent,
    AboutMeComponent,
    HeaderComponent,
    MySkillsComponent,
    ProjectsComponent,
    SayHiComponent,
    FooterComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
