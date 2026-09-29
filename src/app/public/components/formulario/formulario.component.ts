import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import emailjs from '@emailjs/browser';
import { CONTACT_CONFIG } from '../../../core/config/contact.config';

const EMAILJS_CONFIG = {
  publicKey: 'G19Tdul1-giBQos9b',
  serviceId: 'service_b2rf0u4',
  templateId: 'template_2e7itm9',
};

type EstadoEnvio = 'idle' | 'enviando' | 'ok' | 'error';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioComponent {
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

    // Todos los datos viajan dentro de "message" para no depender de cambios en la plantilla de EmailJS.
    const mensaje = [
      `Nombre: ${valor('user_name')}`,
      `Negocio: ${valor('company') || '—'}`,
      `WhatsApp / teléfono: ${valor('phone')}`,
      `Interés: ${valor('subject')}`,
      '',
      valor('message'),
    ].join('\n');

    this.estado.set('enviando');

    emailjs
      .send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          user_email: valor('user_email'),
          subject: valor('subject'),
          message: mensaje,
          user_name: valor('user_name'),
          company: valor('company'),
          phone: valor('phone'),
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
