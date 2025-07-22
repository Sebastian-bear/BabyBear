import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-movil',
  imports: [],
  template: `<p>movil works!</p>`,
  styleUrl: './movil.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovilComponent { }
