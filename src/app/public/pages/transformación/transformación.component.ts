import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-transformación',
  imports: [],
  template: `<p>transformación works!</p>`,
  styleUrl: './transformación.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransformaciónComponent { }
