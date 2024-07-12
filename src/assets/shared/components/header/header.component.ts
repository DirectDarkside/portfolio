import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../../app/services/translation/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  englishButton = true;
  germanButton = false;

  popup: boolean = false;
  translate = inject(TranslationService);

  setDe() {
    this.englishButton = false;
    this.germanButton = true;
  }

  setEn() {
    this.englishButton = true;
    this.germanButton = false;
  }

  changeStatus() {
    !this.popup ? this.popup = true : this.popup = false;
  }

}
