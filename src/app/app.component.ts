import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AppComponent {

  formData = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  formEnviado = false;
  formError = false;

  onSubmit(): void {
    if (!this.formData.nombre || !this.formData.email || !this.formData.mensaje) {
      this.formError = true;
      return;
    }

    this.formError = false;

    // Aquí conectas con tu servicio de envío (EmailJS, Formspree, etc.)
    console.log('Formulario enviado:', this.formData);

    this.formEnviado = true;

    // Reset después de 4 segundos
    setTimeout(() => {
      this.formEnviado = false;
      this.formData = { nombre: '', email: '', asunto: '', mensaje: '' };
    }, 4000);
  }
}