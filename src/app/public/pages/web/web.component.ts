import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-web',
  imports: [],
  template: `<p>web works!</p>`,
  styleUrl: './web.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebComponent { }
