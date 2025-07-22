import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-desconocido',
  imports: [],
  template: `<p>desconocido works!</p>`,
  styleUrl: './desconocido.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesconocidoComponent { }
