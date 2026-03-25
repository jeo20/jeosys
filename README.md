# JEOSYS IA - Landing Page

Sitio web corporativo de JEOSYS IA - Ingeniería de Inteligencia Artificial y Ciencia de Datos.

## Descripción

Landing page con diseño cyberpunk/tech para empresa de IA y automatización. Incluye:
- Sistema de partículas animado (canvas)
- Diseño 100% responsivo
- Formulario de contacto funcional (EmailJS)
- Multiidioma (ES/EN)
- PWA ready
- SEO optimizado
- Social links (Facebook, Instagram)
- Seguridad completa

## Estructura

```
jeosys/
├── index.html          # Página principal (255 líneas)
├── css/style.css       # Estilos (424 líneas)
├── js/
│   ├── script.js       # Funcionalidad (285 líneas)
│   └── sw.js          # Service Worker PWA (56 líneas)
├── favicon.svg        # Favicon
├── manifest.json      # PWA Manifest (26 líneas)
├── .htaccess          # Headers seguridad Apache (53 líneas)
├── assets/img/        # Imágenes
├── docs/logo/         # Logos fuente
├── AGENTS.md          # Documentación del agente
├── skills/jeosys.md  # Habilidades frontend
└── README.md          # Este archivo
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
- Partículas canvas con glow effect
- Social links en footer

### PWA
- manifest.json configurado
- Service Worker para offline
- Installable en móviles

### Seguridad
- CSP (Content Security Policy)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy
- Permissions-Policy
- Sanitización de inputs
- .htaccess configurado

## Configuración

### EmailJS
El formulario está configurado con credenciales de EmailJS:
- **SERVICE_ID**: `service_lpndc49`
- **TEMPLATE_ID**: `template_qj19ozw`
- **PUBLIC_KEY**: `xVwdbB46eyW5LrqW4`

Para modificar: editar `js/script.js`

### Google Analytics
1. Abrir `index.html`
2. Buscar `G-XXXXXXXXXX` (líneas 175-181)
3. Reemplazar con tu ID de GA4

### Redes Sociales
- Facebook: `https://facebook.com/jeosys`
- Instagram: `https://instagram.com/jeosys`

### Multiidioma
Los textos están en `index.html` líneas 184-239. Editar el objeto `translations` para cambiar textos.

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

## Variables CSS

```css
:root {
    --bg: #000000;
    --card-bg: #0a0a0a;
    --accent: #00f6ff;
    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
    --border: #222222;
    --font-logo: 'Orbitron', sans-serif;
    --font-header: 'Syncopate', sans-serif;
    --font-body: 'JetBrains Mono', monospace;
}
```

## Notas Importantes

1. **Caché**: En Chrome/Brave usar Ctrl+Shift+R para limpiar caché
2. **HTTPS**: El Service Worker solo funciona en HTTPS o localhost
3. **PWA**: Para instalar, acceder desde móvil y seleccionar "Instalar app"
4. **Favicon**: Located en `assets/img/favicon.svg`

## Licencia

© 2026 JEOSYS IA // TECNOLOGÍA AUTÓNOMA