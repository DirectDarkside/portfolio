import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: {
    imageUrl: string,
    testUrl: string,
    gitHubUrl: string,
    title: string,
    stack: string,
    description: string,
  }[] = [
    {
      imageUrl: 'join.png',
      testUrl: '',
      gitHubUrl: '',
      title: 'Join',
      stack: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanbas System. Create and organize tasks useng drag and drop functions, assign users and categories.'
    },
    {
      imageUrl: 'sharky.png',
      testUrl: '',
      gitHubUrl: '',
      title: 'Sharkie',
      stack: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.'
    },
    {
      imageUrl: 'pokedex.png',
      testUrl: 'https://pokedex.florian-kube.de/',
      gitHubUrl: 'https://github.com/DirectDarkside/pokedex',
      title: 'Pokedex',
      stack: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéApi a simple library that provides and catalogues pokemon information.'
    },
  ];

}
