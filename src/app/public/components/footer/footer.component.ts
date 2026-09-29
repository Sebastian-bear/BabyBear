import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CONTACT_CONFIG } from '../../../core/config/contact.config';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly whatsappUrl = CONTACT_CONFIG.whatsappUrl;
  readonly anio = new Date().getFullYear();
}
