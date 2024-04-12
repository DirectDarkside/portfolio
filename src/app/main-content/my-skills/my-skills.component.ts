import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  translate = inject(TranslateService);
  skills: {
    url: string,
    title: string
  }[] = [
    {
      url: 'angular-icon.png',
      title: 'Angular'
    },
    {
      url: 'typescript-icon.png',
      title: 'TypeScript'
    },
    {
      url: 'javascript-icon.png',
      title: 'JavaScript'
    },
    {
      url: 'html-icon.png',
      title: 'HTML'
    },
    {
      url: 'css-icon.png',
      title: 'CSS'
    },
    {
      url: 'firebase-icon.png',
      title: 'Firebase'
    },
    {
      url: 'git-icon.png',
      title: 'Git'
    },
    {
      url: 'scrum-icon.png',
      title: 'Scrum'
    },
    {
      url: 'rest-api-icon.png',
      title: 'Rest-Api'
    },
    {
      url: 'material-design-icon.png',
      title: 'Material design'
    }
  ];

}
