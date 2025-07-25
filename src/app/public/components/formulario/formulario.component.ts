import { ChangeDetectionStrategy, Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioComponent {
  enviarEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      'service_b2rf0u4',     
      'template_2e7itm9',   
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
