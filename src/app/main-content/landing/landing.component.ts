import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  mail = 'kube.florian13@gmail.com';
  translate = inject(TranslationService);
}
