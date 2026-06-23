# Manual Técnico - Landing Page Semana de Ingeniería 2025

## 1. Descripción General del Proyecto

### 1.1 Propósito
Landing page interactiva desarrollada para presentar los eventos y actividades de la Semana de Ingeniería 2025 de la Universidad Ricardo Palma.

### 1.2 Tecnologías Utilizadas
- **React** v18.3.1 - Framework principal
- **Vite** v5.4.10 - Build tool y servidor de desarrollo
- **Tailwind CSS** v3.4.15 - Framework CSS para estilos
- **Framer Motion** v11.11.17 - Librería de animaciones
- **AOS (Animate On Scroll)** v2.3.4 - Animaciones al hacer scroll

### 1.3 Estructura del Proyecto
```
LANDINGBOLETIN/
├── public/                 # Archivos estáticos (imágenes, videos)
├── src/
│   ├── assets/            # Assets del proyecto
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos del componente App
│   ├── LandingPage.jsx    # Componente principal de la landing
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── index.html             # HTML principal
├── package.json           # Dependencias del proyecto
├── vite.config.js         # Configuración de Vite
├── tailwind.config.js     # Configuración de Tailwind
└── eslint.config.js       # Configuración de ESLint
```

---

## 2. Arquitectura de Componentes

### 2.1 Componente Principal: `LandingPage`

**Ubicación:** `src/LandingPage.jsx`

**Estado del Componente:**
```javascript
const [selectedDay, setSelectedDay] = useState('Inicio');
```
- `selectedDay`: Controla qué día de la semana se está visualizando

**Hooks Utilizados:**
- `useState`: Gestión del estado del día seleccionado
- `useEffect`: Inicialización de AOS (Animate On Scroll)

### 2.2 Componente Carousel

**Propósito:** Visualización de múltiples imágenes en forma de carrusel

**Props:**
- `images` (array): Array de rutas de imágenes a mostrar

**Estado Interno:**
```javascript
const [currentIndex, setCurrentIndex] = useState(0);
```

**Funcionalidades:**
- Auto-play cada 4 segundos
- Navegación manual (anterior/siguiente)
- Indicadores de posición interactivos
- Contador de imágenes
- Transiciones animadas con Framer Motion

---

## 3. Estructura de Datos

### 3.1 Configuración de Días
```javascript
const weekDays = ['Inicio', 'Lunes 10', 'Martes 11', 'Miércoles 12', 'Jueves 13', 'Viernes 21'];
```

### 3.2 Estructura de Eventos (sections)
```javascript
const sections = {
  'Día': [
    {
      id: number,              // ID único del evento
      title: string,           // Título del evento
      description: string,     // Descripción detallada
      imageUrl: string,        // URL de imagen individual (opcional)
      carouselImages: array,   // Array de imágenes para carrusel (opcional)
      videoLink: string,       // Link a video en Facebook (opcional)
      youtubeLink: string      // Link a video en YouTube (opcional)
    }
  ]
}
```

**Días Configurados:**
- `Inicio`: Página de bienvenida (array vacío)
- `Lunes 10`: 5 eventos
- `Martes 11`: 6 eventos
- `Miércoles 12`: 9 eventos
- `Jueves 13`: 2 eventos
- `Viernes 21`: 2 eventos

---

## 4. Características Técnicas

### 4.1 Animaciones

#### Framer Motion
```javascript
// Animación de entrada
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}

// Hover effects
whileHover={{ scale: 1.03 }}
whileTap={{ scale: 0.95 }}
```

#### AOS (Animate On Scroll)
```javascript
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
  });
}, []);
```

### 4.2 Responsive Design

**Breakpoints de Tailwind:**
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px

**Ejemplos de Implementación:**
```javascript
// Altura responsive del carrusel
className="h-[250px] sm:h-[300px] md:h-[400px]"

// Texto responsive
className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"

// Layout responsive
className="flex flex-col md:flex-row"
```

### 4.3 Navegación Sticky

```javascript
className="sticky top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl z-50"
```
- Barra de navegación fija en scroll
- Backdrop blur para efecto glassmorphism
- Z-index alto para superposición

---

## 5. Estilos y Diseño

### 5.1 Paleta de Colores

**Colores Principales:**
- Verde: `green-600`, `green-700`, `green-800`
- Esmeralda: `emerald-600`, `emerald-700`, `emerald-800`
- Teal: `teal-600`

**Gradientes:**
```javascript
bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600
bg-gradient-to-br from-white to-green-50
```

### 5.2 Efectos Visuales

**Shadows:**
- `shadow-xl`: Sombras pronunciadas
- `shadow-2xl`: Sombras muy pronunciadas
- `shadow-lg shadow-green-500/50`: Sombras con color

**Blur Effects:**
```javascript
backdrop-blur-md  // Desenfoque del fondo
blur-3xl         // Desenfoque completo
```

**Overlays:**
```javascript
bg-gradient-to-t from-black/40 via-transparent to-transparent
```

---

## 6. Secciones de la Página

### 6.1 Header Principal
- Video de fondo (`/fondo_encabezado.mp4`)
- Overlay verde con gradiente
- Logos URP y BVI
- Título y fechas del evento
- Layout diferenciado para móvil y desktop

### 6.2 Menú de Navegación
- Botones para cada día de la semana
- Estado activo visual
- Scroll horizontal en móvil
- Animaciones de hover y tap

### 6.3 Página de Inicio
Contiene tres subsecciones:

1. **Presentación del Decano**
   - Imagen del decano
   - Texto de presentación
   - Layout en dos columnas (responsive)

2. **Biblioteca Virtual** (comentada)
   - Estructura similar al decano
   - Actualmente deshabilitada

3. **Descripción de la Semana**
   - Card destacada con gradientes
   - Texto descriptivo del evento

### 6.4 Páginas de Eventos (Lunes-Viernes)

**Estructura:**
1. Header del día seleccionado
2. Lista de eventos con layout alternado
   - Imagen izquierda / Texto derecha (eventos pares)
   - Texto izquierda / Imagen derecha (eventos impares)

**Elementos de Cada Evento:**
- Badge con día y número de evento
- Título del evento
- Descripción
- Imagen individual o carrusel
- Botones a redes sociales (condicionales)

---

## 7. Configuración de Herramientas

### 7.1 Vite (vite.config.js)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### 7.2 Tailwind CSS (tailwind.config.js)
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 7.3 ESLint (eslint.config.js)
- Configuración para React
- Reglas de hooks de React
- Warnings para refrescos de React

---

## 8. Dependencias del Proyecto

### 8.1 Dependencies
```json
{
  "aos": "^2.3.4",
  "framer-motion": "^11.11.17",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

### 8.2 DevDependencies
```json
{
  "@eslint/js": "^9.13.0",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "@vitejs/plugin-react": "^4.3.3",
  "autoprefixer": "^10.4.20",
  "eslint": "^9.13.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.14",
  "globals": "^15.11.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.15",
  "vite": "^5.4.10"
}
```

---

## 9. Comandos de Desarrollo

### 9.1 Instalación
```bash
npm install
```

### 9.2 Desarrollo
```bash
npm run dev
```
Inicia servidor de desarrollo en `http://localhost:5173`

### 9.3 Build
```bash
npm run build
```
Genera archivos de producción en `/dist`

### 9.4 Preview
```bash
npm run preview
```
Previsualiza la build de producción

### 9.5 Lint
```bash
npm run lint
```
Ejecuta ESLint para verificar código

---

## 10. Optimizaciones y Buenas Prácticas

### 10.1 Performance
- Lazy loading de imágenes
- Animaciones optimizadas con `will-change` implícito
- Transiciones suaves con `duration-*` controlados
- `AnimatePresence` de Framer Motion para transiciones fluidas

### 10.2 Accesibilidad
- `aria-label` en botones del carrusel
- Estructura semántica HTML5
- Contraste de colores adecuado
- Navegación por teclado

### 10.3 SEO
- Meta tags en `index.html`
- Estructura de headings jerárquica
- Alt text en imágenes
- URLs amigables en enlaces externos

---

## 11. Gestión de Assets

### 11.1 Imágenes
**Ubicación:** `/public/`

**Formatos Utilizados:**
- `.jpg` - Fotografías de eventos
- `.png` - Logos y gráficos

**Nomenclatura:**
- Logos: `logo_*.png`
- Eventos: `CONFERENCIA*.jpg`, `AUDITORIO*.jpg`, etc.
- Específicas: `BANDA.jpg`, `HIMNO.jpg`, `FLORES.jpg`, etc.

### 11.2 Videos
- `fondo_encabezado.mp4` - Video de fondo del header
- Formato: MP4 (compatible cross-browser)
- Atributos: `autoPlay`, `loop`, `muted`, `playsInline`

### 11.3 Enlaces Externos
**Facebook:** Videos de eventos
**YouTube:** Transmisiones y grabaciones
**Unsplash:** Imágenes placeholder (algunas secciones)

---

## 12. Mantenimiento y Actualización

### 12.1 Agregar un Nuevo Evento

1. Localizar el objeto `sections` en `LandingPage.jsx`
2. Seleccionar el día correspondiente
3. Agregar objeto con la estructura:

```javascript
{
  id: [nuevo_id_único],
  title: "Hora - Título del Evento",
  description: "Descripción detallada...",
  imageUrl: "/ruta_imagen.jpg",
  // Opcionales:
  carouselImages: ["/img1.jpg", "/img2.jpg"],
  videoLink: "https://facebook.com/...",
  youtubeLink: "https://youtube.com/..."
}
```

### 12.2 Modificar Estilos Globales

**Tailwind:**
- Editar `tailwind.config.js` para extensiones
- Agregar clases personalizadas en `index.css`

**CSS Custom:**
- Editar `App.css` para estilos específicos de componentes

### 12.3 Cambiar Paleta de Colores

Buscar y reemplazar en `LandingPage.jsx`:
- `green-*` → nuevo color principal
- `emerald-*` → nuevo color secundario
- `teal-*` → nuevo color acento

---

## 13. Troubleshooting

### 13.1 Problemas Comunes

**Las imágenes no cargan:**
- Verificar que estén en `/public/`
- Revisar rutas (sensibles a mayúsculas/minúsculas)
- Comprobar extensiones correctas

**Animaciones no funcionan:**
- Verificar importación de AOS CSS: `import 'aos/dist/aos.css'`
- Comprobar inicialización de AOS en `useEffect`

**Build falla:**
```bash
# Limpiar cache y reinstalar
rm -rf node_modules
rm package-lock.json
npm install
```

**Video no reproduce:**
- Verificar formato MP4
- Comprobar atributos: `autoPlay`, `muted`, `playsInline`
- Verificar soporte del navegador

### 13.2 Debugging

**React Developer Tools:**
- Instalar extensión del navegador
- Inspeccionar componentes y props
- Verificar estado en tiempo real

**Console Logs:**
```javascript
console.log('Current day:', selectedDay);
console.log('Carousel index:', currentIndex);
```

---

## 14. Seguridad

### 14.1 Enlaces Externos
- Uso de `rel="noopener noreferrer"` en links externos
- Verificación de URLs antes de agregar

### 14.2 Validación de Datos
- Estructura de datos tipada (aunque sin TypeScript)
- Validación implícita en renderizado condicional

---

## 15. Deployment

### 15.1 Preparación para Producción

```bash
# Build de producción
npm run build

# Preview local
npm run preview
```

### 15.2 Opciones de Hosting

**Netlify:**
```bash
# Build command
npm run build

# Publish directory
dist
```

**Vercel:**
- Conectar repositorio GitHub
- Auto-deploy en push a master

**GitHub Pages:**
```bash
npm install --save-dev gh-pages

# Agregar a package.json:
"homepage": "https://[usuario].github.io/[repo]",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

---

## 16. Contacto y Soporte

**Desarrollador:** [Información de contacto]
**Repositorio:** GitHub - Gabrieldla/landingsemanaing
**Branch Principal:** master

---

## 17. Historial de Versiones

### v1.0.0 (Noviembre 2025)
- Lanzamiento inicial
- 5 días de eventos configurados
- Página de inicio con presentación del decano
- Sistema de carrusel de imágenes
- Navegación por días
- Responsive design completo

---

## 18. Anexos

### 18.1 Glosario de Términos

- **AOS:** Animate On Scroll - Librería de animaciones
- **Framer Motion:** Librería de animaciones para React
- **Tailwind CSS:** Framework CSS utility-first
- **Vite:** Build tool moderna para frontend
- **Carousel:** Componente de rotación de imágenes
- **Sticky:** Posición fija al hacer scroll
- **Backdrop Blur:** Efecto de desenfoque del fondo

### 18.2 Recursos Adicionales

- [Documentación React](https://react.dev)
- [Documentación Tailwind CSS](https://tailwindcss.com)
- [Documentación Framer Motion](https://www.framer.com/motion/)
- [Documentación AOS](https://michalsnik.github.io/aos/)
- [Documentación Vite](https://vitejs.dev)

---

**Última actualización:** Diciembre 2025
**Versión del Manual:** 1.0
