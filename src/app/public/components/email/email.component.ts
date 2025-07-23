import { ChangeDetectionStrategy, Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EmailComponent {
  enviarEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      'service_b2rf0u4',     // 👈 reemplaza esto
      'template_jpm81vk',    // 👈 reemplaza esto
      e.target as HTMLFormElement,
      'G19Tdul1-giBQos9b'      // 👈 reemplaza esto
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
