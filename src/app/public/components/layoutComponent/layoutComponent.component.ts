import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { WhatsappFlotanteComponent } from '../whatsapp-flotante/whatsapp-flotante.component';

@Component({
  selector: 'app-layout-component',
  imports: [FooterComponent, HeaderComponent, RouterOutlet, WhatsappFlotanteComponent],
  templateUrl: './layoutComponent.component.html',
  styleUrl: './layoutComponent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponentComponent { }
