import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-say-hi',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './say-hi.component.html',
  styleUrl: './say-hi.component.scss'
})
export class SayHiComponent {

  http = inject(HttpClient);
  checkBox:any;
  isChecked = true;
  contactData = {
    name: "",
    email: "",
    message: "",
  }
  sendMail = false;
  mailTest = false;

  post = {
    endPoint: 'https://florian-kube.de/php/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if(ngForm.form.controls['checkbox'].status == "INVALID") {
      this.isChecked = false;
    } else {
      if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              this.sendMail = true;
              setTimeout(() => {
                this.sendMail = false;
              }, 2000);
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
        console.info('test post complete', this.contactData);
        ngForm.resetForm();
      }
    }
    }

  goTopPage() {
    window.scroll(0, 0);
  }

}
