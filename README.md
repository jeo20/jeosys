# JEOSYS IA - Landing Page

Sitio web corporativo de JEOSYS IA - Ingeniería de Inteligencia Artificial y Ciencia de Datos.

## Descripción

Landing page con diseño cyberpunk/tech para empresa de IA y automatización. Incluye:
- Sistema de partículas animado (canvas)
- Diseño responsivo
- Formulario de contacto funcional (EmailJS)
- Multiidioma (ES/EN)
- PWA ready
- SEO optimizado

## Estructura

```
jeosys/
├── index.html          # Página principal
├── css/style.css      # Estilos
├── js/script.js       # Funcionalidad
├── favicon.svg        # Favicon
├── manifest.json     # PWA Manifest
├── sw.js              # Service Worker
├── assets/img/        # Imágenes
└── docs/logo/         # Logos fuente
```

## Características

### SEO
- Meta tags (description, keywords, OG)
- Semantic HTML
- ARIA labels
- Open Graph tags

### Funcionalidad
- Formulario EmailJS conectado
- Multiidioma ES/EN
- Animaciones scroll (Intersection Observer)
- Mobile menu hamburguesa
- Partículas canvas

### PWA
- manifest.json configurado
- Service Worker para offline
- Installable en móviles

## Configuración

### EmailJS
El formulario está configurado con credenciales de EmailJS. Para modificar:
1. Editar `js/script.js` líneas 166, 184
2. Reemplazar SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY

### Google Analytics
1. Abrir `index.html`
2. Buscar `G-XXXXXXXXXX` (línea 155, 160)
3. Reemplazar con tu ID de GA4

### Multiidioma
Los textos están en `index.html` líneas 165-219. Editar el objeto `translations` para cambiar textos.

## Desarrollo

Abrir `index.html` en navegador o servir con:
```bash
# Python
python -m http.server 8000

# Node
npx serve
```

## Tecnologías

- HTML5
- CSS3 (variables, flexbox, grid)
- Vanilla JS (ES6+)
- EmailJS SDK
- Google Fonts (Orbitron, Syncopate, JetBrains Mono)
- Canvas API

## Licencia

© 2026 JEOSYS IA // TECNOLOGÍA AUTÓNOMA