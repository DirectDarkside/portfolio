import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeaderComponent } from '../../assets/shared/components/header/header.component';

@Component({
  selector: 'app-main-content',
  host: {
    class:'main-content'
  },
  standalone: true,
  imports: [LandingComponent, AboutMeComponent, HeaderComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
