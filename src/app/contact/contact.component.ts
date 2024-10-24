import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  submitting = false;

  constructor(private snackBar: MatSnackBar, private contactService: ContactService) { }

  submitForm(contactForm: NgForm) {
    if (contactForm.valid) {
      const nameControl = contactForm.controls['name'];
      const emailControl = contactForm.controls['email'];
      const phoneControl = contactForm.controls['phone'];
      const messageControl = contactForm.controls['message'];

      if (nameControl.invalid || 
          emailControl.invalid || 
          phoneControl.invalid || 
          messageControl.invalid ||
          !messageControl.touched ||
          (messageControl.value && messageControl.value.length < 20)) {
        return;
      }
      
      this.submitting = true;
      
      const formData = {
        name: contactForm.value.name,
        email: contactForm.value.email,
        phone: contactForm.value.phone,
        message: contactForm.value.message
      };

      this.contactService.submitForm(formData).subscribe(
        () => {
          this.submitting = false;
          this.resetForm(contactForm);
          this.openSnackBar('Agradecemos seu contato!', 'X', 'success');
          this.scrollToBottom();
        },
        error => {
          console.log('Erro do servidor: ' + error.message)
          this.submitting = false;
          this.openSnackBar('Ocorreu um erro =(', 'X', 'error');
          this.scrollToBottom();
        }
      );
    }
  }

  validateField(field: string, form: NgForm) {
    const control = form.controls[field];
    if (control) {
      control.markAsTouched();
    }
  }

  resetForm(contactForm: NgForm) {
    contactForm.resetForm();
  }

  scrollToBottom() {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' });
  }

  openSnackBar(message: string, action: string, messageType: string) {
    const panelClass = messageType === 'success' ? 'success-snackbar' : 'error-snackbar';

    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: panelClass
    });
}
}