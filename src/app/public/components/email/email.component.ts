import { ChangeDetectionStrategy, Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EmailComponent {
  constructor() {
    emailjs.init('G19Tdul1-giBQos9b'); // 👈 Agrega esto
  }

  enviarEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      'service_b2rf0u4',
      'template_jpm81vk',
      e.target as HTMLFormElement,
      'G19Tdul1-giBQos9b'
    ).then(
      () => {
        alert('✅ ¡Mensaje enviado con éxito!');
        (e.target as HTMLFormElement).reset();
      },
      (error) => {
        console.error('❌ Error al enviar:', error);
        alert('Ocurrió un error al enviar el mensaje.');
      }
    );
  }
}
