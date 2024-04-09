import { Component } from '@angular/core';
import { HeaderComponent } from '../../assets/shared/components/header/header.component';
import { FooterComponent } from '../../assets/shared/components/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  mail = 'kube.florian13@gmail.com';
}
