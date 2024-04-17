import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../../app/services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  mail = 'kube.florian13@gmail.com';
  translate = inject(TranslationService);

  goTopPage() {
    window.scroll(0, 0);
  }

}
