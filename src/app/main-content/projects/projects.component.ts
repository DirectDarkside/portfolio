import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  translate = inject(TranslateService);
  projects: {
    imageUrl: string,
    testUrl: string,
    gitHubUrl: string,
    title: string,
    stack: string,
    language_key: string,
  }[] = [
    {
      imageUrl: 'join.png',
      testUrl: 'https://join.florian-kube.de/',
      gitHubUrl: 'https://github.com/DirectDarkside/join',
      title: 'Join',
      stack: 'JavaScript | HTML | CSS',
      language_key: 'projects_join',
    },
    {
      imageUrl: 'sharky.png',
      testUrl: 'https://sharkie.florian-kube.de/',
      gitHubUrl: 'https://github.com/DirectDarkside/sharky',
      title: 'Sharkie',
      stack: 'JavaScript | HTML | CSS',
      language_key: 'projects_sharkie',
    },
    {
      imageUrl: 'pokedex.png',
      testUrl: 'https://pokedex.florian-kube.de/',
      gitHubUrl: 'https://github.com/DirectDarkside/pokedex',
      title: 'Pokedex',
      stack: 'JavaScript | HTML | CSS | API',
      language_key: 'projects_pokedex',
    },
    {
      imageUrl: 'ring-of-fire.png',
      testUrl: 'https://ring-of-fire.florian-kube.de/',
      gitHubUrl: 'https://github.com/DirectDarkside/ring-of-fire',
      title: 'Ring Of Fire',
      stack: 'Angular | TypeScript | Firebase | HTML | SCSS',
      language_key: 'projects_ring_of_fire',
    }
  ];

}
