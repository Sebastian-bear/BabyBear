import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { 
  menuAbierto = false;
  dropdownAbierto = false;

  toggleDropdown() {
    this.dropdownAbierto = !this.dropdownAbierto;
  }

  cerrarDropdown() {
    this.dropdownAbierto = false;
  }

  cerrarMenu() {
    this.menuAbierto = false;
    this.dropdownAbierto = false;
  }
}
