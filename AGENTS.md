# JEOSYS IA - Documentación del Agente

## Descripción del Proyecto

Sitio web corporativo de JEOSYS IA - Ingeniería de Inteligencia Artificial y Ciencia de Datos. Landing page con diseño cyberpunk/tech para empresa de automatización y análisis de datos.

## Estructura del Proyecto

```
jeosys/
├── index.html              # Página principal (255 líneas)
├── css/style.css           # Estilos completos (424 líneas)
├── js/
│   ├── script.js           # Funcionalidad JS (285 líneas)
│   └── sw.js               # Service Worker PWA (56 líneas)
├── favicon.svg             # Favicon SVG
├── manifest.json           # Manifiesto PWA (26 líneas)
├── .htaccess              # Headers de seguridad Apache (53 líneas)
├── assets/img/             # Imágenes y logos
├── docs/logo/              # Logos fuente
└── README.md               # Documentación general (104 líneas)
```

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Variables CSS, Flexbox, Grid, Media Queries
- **Vanilla JS (ES6+)** - Sin frameworks
- **Canvas API** - Sistema de partículas animadas
- **EmailJS SDK** - Formulario de contacto
- **Google Fonts** - Orbitron, Syncopate, JetBrains Mono

## Funcionalidades Implementadas

### 1. Sistema de Partículas (Canvas)
- Animación de partículas con glow effect
- Conexiones entre partículas cercanas
- Optimizado para rendimiento

### 2. Navegación
- Sticky header con blur
- Menú hamburguesa para móvil
- Links suaves (smooth scroll)

### 3. Multiidioma (ES/EN)
- Selector de idioma en escritorio
- Selector de idioma en menú móvil
- Traducción dinámica de todo el contenido

### 4. Formulario de Contacto
- Integración con EmailJS
- Validación de campos
- Sanitización de inputs (seguridad)
- Mensajes de éxito/error

### 5. PWA (Progressive Web App)
- Manifest.json configurado
- Service Worker para offline
- Instalable en móviles

### 6. Seguridad
- CSP (Content Security Policy)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy (bloqueo de geolocalización, micrófono, cámara)
- Sanitización de inputs en formulario

### 7. SEO
- Meta tags (description, keywords, author)
- Open Graph tags
- Semantic HTML (nav, main, section, footer)
- ARIA labels para accesibilidad

### 8. Diseño Responsivo
- Breakpoints: 1400px, 1200px, 1024px, 900px, 600px, 400px
- Menú móvil adaptativo
- Tipografía fluida con clamp()
- Imágenes y spacing responsivos

### 9. Social Links
- Facebook
- Instagram

## Configuración Externa

### EmailJS
- **SERVICE_ID**: `service_lpndc49`
- **TEMPLATE_ID**: `template_qj19ozw`
- **PUBLIC_KEY**: `xVwdbB46eyW5LrqW4`

### Google Analytics
- Reemplazar `G-XXXXXXXXXX` en `index.html` líneas 175-181 con ID real

### Redes Sociales
- Facebook: `https://facebook.com/jeosys`
- Instagram: `https://instagram.com/jeosys`

## Cómo Ejecutar

### Desarrollo Local
```bash
# Python
python -m http.server 8000

# Node.js
npx serve
```

### Producción
1. Subir archivos al servidor
2. Configurar HTTPS (obligatorio para PWA)
3. Configurar .htaccess en Apache
4. Registrar en Google Search Console

## Variables CSS (style.css)

```css
:root {
    --bg: #000000;           /* Fondo principal */
    --card-bg: #0a0a0a;      /* Fondo de tarjetas */
    --accent: #00f6ff;       /* Color cyan */
    --text-primary: #ffffff; /* Texto principal */
    --text-secondary: #b0b0b0; /* Texto secundario */
    --border: #222222;       /* Bordes */
    --font-logo: 'Orbitron', sans-serif;
    --font-header: 'Syncopate', sans-serif;
    --font-body: 'JetBrains Mono', monospace;
}
```

## Notas Importantes

1. **Caché**: En Chrome/Brave usar Ctrl+Shift+R para limpar caché
2. **HTTPS**: El Service Worker solo funciona en HTTPS o localhost
3. **PWA**: Para instalar, acceder desde móvil y seleccionar "Instalar app"
4. **Formulario**: Requiere configuración de plantilla en EmailJS
5. **Archivos docs**: El archivo `favicon.svg` está en `assets/img/`, no en raíz

## Mantenimiento

- Actualizar translations en `index.html` líneas 184-239
- Revisar .htaccess para headers adicionales
- Mantener EmailJS actualizado
- Monitorear GA4 para analytics

---

© 2026 JEOSYS IA // TECNOLOGÍA AUTÓNOMA