import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

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
