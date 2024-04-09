import { Component } from '@angular/core';
import { HeaderComponent } from '../../assets/shared/components/header/header.component';
import { FooterComponent } from '../../assets/shared/components/footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  mail = 'kube.florian13@gmail.com';
}
