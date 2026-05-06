import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // importa tus rutas reales

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withHashLocation(),  // ✅ Usa hash routing: /#/contacto en lugar de /contacto
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // siempre sube al inicio
        anchorScrolling: 'enabled'        // opcional, si usas #anclas
      })
    ),
  ],
}).catch((err) => console.error(err));
