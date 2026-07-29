# Rivacolor - Landing Page Corporativa

Sitio web oficial y corporativo para **Rivacolor S.A. de C.V.**, empresa especializada en soluciones de color e ingredientes para diversas industrias (Alimentaria, Bebidas, Cosmética, Farmacéutica, Nutrición Animal y Cuidado del Hogar). 

## 🚀 Tecnologías utilizadas
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Librería UI:** [React](https://reactjs.org/)
- **Lenguaje:** TypeScript
- **Estilos:** CSS Modules (Vanilla CSS puro con variables corporativas)
- **Despliegue:** Preparado para Node.js estándar o plataformas como Vercel.

## 🌟 Características Principales
- **Diseño Moderno y Responsivo:** Adaptable 100% a dispositivos móviles, tablets y escritorio.
- **Carruseles Interactivos:** Sliders automáticos y manuales para explorar las áreas de especialidad y soluciones con efecto de fundido nativo.
- **Integración de Mapas:** Ubicación de la empresa enlazada en vivo mediante Google Maps (Iframe embebido).
- **Tipografía Corporativa:** Integración completa de la fuente *ITC Avant Garde Gothic Pro* (Bold, Medium, Book).
- **Micro-interacciones:** Animaciones suaves en botones, filtros de color en íconos (`filter: brightness(0) invert(1)`) y efectos visuales para mejorar la experiencia de usuario.

## 🛠️ Instalación y Desarrollo Local

1. Clona este repositorio:
   ```bash
   git clone git@github.com:JesusPineda29/RIVACOLOR.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el proyecto en vivo.

## 📁 Estructura del Proyecto
- `/app`: Configuración del enrutador de Next.js (`page.tsx`, `layout.tsx`, `globals.css`).
- `/components`: Componentes modulares y reutilizables de React (`Header`, `HeroCarousel`, `Features`, `Industries`, `Solutions`, `Location`, `Footer`, `TopBar`), cada uno con su respectivo archivo `.module.css`.
- `/public/assets`: Todos los recursos visuales optimizados (imágenes, íconos, tipografías y logos).
