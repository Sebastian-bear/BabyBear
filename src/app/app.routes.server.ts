import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Cada página se genera como HTML estático al compilar (prerender),
 * para que buscadores y redes sociales lean el contenido real de cada ruta.
 * Las rutas deben coincidir con prerender-routes.txt.
 */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'web', renderMode: RenderMode.Prerender },
  { path: 'movil', renderMode: RenderMode.Prerender },
  { path: 'transformacion', renderMode: RenderMode.Prerender },
  { path: 'nosotros', renderMode: RenderMode.Prerender },
  { path: 'contacto', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client },
];
