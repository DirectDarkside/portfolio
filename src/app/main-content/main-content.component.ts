import { Component } from '@angular/core';
import { HeaderComponent } from '../../assets/shared/components/header/header.component';
import { LandingComponent } from './landing/landing.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, LandingComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
