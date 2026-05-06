# 📊 Guía SEO - Orsetto

## ⚠️ IMPORTANTE: Cambio en URLs (Hash Routing)

A partir de ahora, **las URLs usan hash routing** (#) para resolver el problema de 404 en GitHub Pages:

### URLs Antiguas → URLs Nuevas
```
https://orsetto.pro/contacto    →  https://orsetto.pro/#/contacto
https://orsetto.pro/web          →  https://orsetto.pro/#/web
https://orsetto.pro/movil        →  https://orsetto.pro/#/movil
https://orsetto.pro/nosotros     →  https://orsetto.pro/#/nosotros
https://orsetto.pro/transformacion → https://orsetto.pro/#/transformacion
```

**¿Por qué?** GitHub Pages + Angular SPA requiere hash routing para acceso directo a URLs.  
**¿Problema de SEO?** Mínimo - Google indexa y entiende rutas con hash correctamente.

---

## ✅ Cambios Implementados

Tu proyecto ahora cuenta con un sistema SEO profesional y centralizado que **persiste automáticamente** después de cada `ng build`. Aquí está todo lo que hemos configurado:

### 1. **Servicio SEO Centralizado** 
- **Archivo**: `src/app/core/services/seo.service.ts`
- **Función**: Gestiona todos los metatags, títulos y datos estructurados desde un único lugar
- **Ventaja**: Cambios en el código fuente que se incluyen automáticamente en cada build

### 2. **Configuración de Metatags por Página**
- **Archivo**: `src/app/core/config/seo.config.ts`
- **Incluye**:
  - Títulos optimizados para cada página
  - Descripciones únicas y persuasivas
  - Keywords relevantes
  - Open Graph tags (para redes sociales)
  - Twitter Card tags
  - URLs canónicas
  - Schema JSON-LD

### 3. **Gestión Automática de Rutas**
- **Archivo**: `src/app/app.component.ts`
- **Función**: Detecta cambios de ruta y actualiza automáticamente los metatags
- **Beneficio**: Los usuarios y buscadores siempre ven los metatags correctos

### 4. **Componentes Simplificados**
Los componentes de todas las páginas ahora tienen código limpio sin duplicación:
- `src/app/public/pages/inicio/`
- `src/app/public/pages/nosotros/`
- `src/app/public/pages/contacto/`
- `src/app/public/pages/web/`
- `src/app/public/pages/movil/`
- `src/app/public/pages/transformacion/`

### 5. **Archivos SEO Técnicos**
- **robots.txt**: Mejorado con reglas específicas para Google, Bing y otros buscadores
- **sitemap.xml**: Actualizado con todas las rutas correctas y prioridades

---

## 🚀 Cómo Usar

### Agregar/Actualizar Metatags para una Página

Si necesitas modificar los metatags de una página existente:

1. **Edita** `src/app/core/config/seo.config.ts`
2. **Localiza** la página (ej: 'home', 'contacto', 'web')
3. **Modifica** los valores:

```typescript
'web': {
  title: 'Tu nuevo título aquí',
  description: 'Tu nueva descripción',
  keywords: 'palabra1, palabra2, palabra3',
  // ... más opciones
}
```

4. **Ejecuta** `ng build` - Los cambios se incluirán automáticamente ✅

### Agregar una Nueva Página

Si creaste una nueva página/ruta:

1. **Crea** el componente normalmente
2. **Añade** la configuración en `src/app/core/config/seo.config.ts`:

```typescript
'nueva-pagina': {
  title: 'Mi Página Nueva - Orsetto',
  description: 'Descripción de mi página nueva',
  // ... config completa
}
```

3. **Actualiza** el mapeo de rutas en `src/app/app.component.ts`:

```typescript
const routeMap: { [key: string]: string } = {
  // ... rutas existentes
  '/nueva-pagina': 'nueva-pagina'
};
```

4. **Compila** con `ng build` 🎉

---

## 📋 Estructura SEO Implementada

### Metatags Dinámicos
✅ Title (título de la página)  
✅ Meta Description  
✅ Meta Keywords  
✅ Canonical URL  
✅ Open Graph (og:title, og:description, og:image, og:url)  
✅ Twitter Cards  
✅ JSON-LD Schema (Organization, Service, AboutPage, ContactPage)  

### Archivos Técnicos
✅ robots.txt - Guía para buscadores  
✅ sitemap.xml - Mapa del sitio  
✅ favicon y apple-touch-icon  
✅ Theme color  

---

## 🔍 Mejores Prácticas SEO

### 1. **Títulos**
- **Longitud ideal**: 50-60 caracteres
- **Estructura**: Palabra clave + Marca (ej: "Desarrollo Web - Orsetto")
- **Evitar**: Títulos genéricos o muy largos

### 2. **Descripciones**
- **Longitud ideal**: 150-160 caracteres
- **Contenido**: Resumen claro de qué ofrece la página
- **Llamada a acción**: Incluye verbos de acción cuando sea posible

### 3. **Keywords**
- Máximo 5-7 palabras clave por página
- Deben ser relevantes al contenido
- Evitar keywords no relacionadas

### 4. **URLs Canónicas**
- Especifica cuál es la URL "preferida" de cada página
- Ayuda con contenido duplicado

### 5. **Schema JSON-LD**
- Ayuda a los buscadores a entender tu contenido
- Mejora los rich snippets en resultados de búsqueda

---

## 🛠️ Herramientas para Validar SEO

### Verificar Metatags
1. **Google Chrome DevTools**: F12 → Pestaña "Elements"
2. **Herramienta de búsqueda**: Click derecho → Inspeccionar

### Validar JSON-LD
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

### Analizar SEO General
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse (en Chrome DevTools)](https://chrome.google.com/webstore)
- [SEMrush](https://www.semrush.com/) o [Ahrefs](https://ahrefs.com/)

---

## 📝 Próximos Pasos Recomendados

### 1. **Google Search Console**
   - Verifica tu sitio: https://search.google.com/search-console
   - Envía el sitemap
   - Monitorea tu presencia en búsqueda

### 2. **Google Analytics 4**
   - Instala GA4 para medir tráfico
   - Añade el código en `index.html` o usa Google Tag Manager

### 3. **Optimización de Contenido**
   - Mejora los textos de cada página
   - Asegura keywords en títulos, descripciones y contenido
   - Crea contenido único y valioso

### 4. **Link Building**
   - Busca backlinks de sitios de autoridad
   - Crea contenido que valga la pena compartir

### 5. **Velocidad de Carga**
   - Optimiza imágenes
   - Usa compresión
   - Considera usar CDN

---

## ⚡ Comando de Build

Para compilar tu proyecto con todas las optimizaciones SEO:

```bash
# Build de producción
npm run build

# O si lo prefieres:
ng build

# Para GitHub Pages (si aplica)
npm run build:gh
```

Los cambios en `src/app/core/config/seo.config.ts` se incluirán **automáticamente** en la carpeta `docs/` (o tu `outputPath` configurada).

---

## ✨ Beneficios de esta Implementación

✅ **Persistente**: Los cambios surviven a cada `ng build`  
✅ **Centralizado**: Un lugar único para gestionar SEO  
✅ **Dinámico**: Metatags actualizados según la ruta  
✅ **Mantenible**: Código limpio y fácil de actualizar  
✅ **Escalable**: Fácil agregar nuevas páginas  
✅ **Profesional**: Incluye todas las mejores prácticas modernas  

---

**¿Preguntas?** Revisa la estructura en:
- Servicio: `/src/app/core/services/seo.service.ts`
- Config: `/src/app/core/config/seo.config.ts`
- App: `/src/app/app.component.ts`
