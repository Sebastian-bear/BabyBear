import { ChangeDetectionStrategy, Component } from '@angular/core';
import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  publicKey: 'G19Tdul1-giBQos9b',
  serviceId: 'service_b2rf0u4',
  templateId: 'template_jpm81vk',
};

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EmailComponent {
  constructor() {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }

  enviarEmail(e: Event): void {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form,
        EMAILJS_CONFIG.publicKey
      )
      .then(
        () => {
          alert('✅ ¡Mensaje enviado con éxito!');
          form.reset();
        },
        (error) => {
          console.error('❌ Error al enviar:', error);
          alert('Ocurrió un error al enviar el mensaje.');
        }
      );
  }
}
