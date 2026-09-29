import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import emailjs from '@emailjs/browser';
import { CONTACT_CONFIG } from '../../../core/config/contact.config';

const EMAILJS_CONFIG = {
  publicKey: 'G19Tdul1-giBQos9b',
  serviceId: 'service_b2rf0u4',
  templateId: 'template_jpm81vk',
};

type EstadoEnvio = 'idle' | 'enviando' | 'ok' | 'error';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EmailComponent {
  readonly estado = signal<EstadoEnvio>('idle');
  readonly whatsappUrl = CONTACT_CONFIG.whatsappUrl;
  readonly tiempoRespuesta = CONTACT_CONFIG.responseTime;

  constructor() {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }

  enviarEmail(e: Event): void {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const datos = new FormData(form);
    const valor = (campo: string): string => String(datos.get(campo) ?? '').trim();

    // Campo trampa: si un bot lo llena, simulamos éxito y no enviamos nada.
    if (valor('website')) {
      this.estado.set('ok');
      form.reset();
      return;
    }

    // El nombre viaja dentro de "message" para no depender de cambios en la plantilla de EmailJS.
    const mensaje = [`Nombre: ${valor('user_name')}`, '', valor('message')].join('\n');

    this.estado.set('enviando');

    emailjs
      .send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          user_email: valor('user_email'),
          user_name: valor('user_name'),
          message: mensaje,
        },
        EMAILJS_CONFIG.publicKey
      )
      .then(
        () => {
          this.estado.set('ok');
          form.reset();
        },
        (error) => {
          console.error('Error al enviar:', error);
          this.estado.set('error');
        }
      );
  }
}
