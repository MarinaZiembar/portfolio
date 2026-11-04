# Marina Ziembar — Portfolio

Portfolio en **Next.js 15 (App Router) + React 19 + TypeScript**, con la paleta del CV (rojo `#E63B2A`, negro y blanco) y una estética inspirada en jozue.fr.

Sin librerías de animación: todo está hecho con canvas, CSS y unos pocos hooks, así que pesa poco y es fácil de tocar.

## Empezar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
```

Se puede deployar directo en Vercel (importar el repo, sin configuración extra).

## Dónde editar

| Qué | Archivo |
| --- | --- |
| Textos, proyectos, experiencia, skills, idiomas | `src/data/content.ts` |
| Colores, tipografía y todas las animaciones CSS | `src/app/globals.css` (variables en `:root`) |
| Fuente (Inter Tight) y metadata/SEO | `src/app/layout.tsx` |
| Botón "Descargar CV" | `cvUrl` en `src/data/content.ts` (vacío = oculto) |

**Proyectos:** los 6 de `content.ts` son de ejemplo, armados a partir de tu experiencia. Cambiá título, descripción, tags y agregá `href` con el link real. El número `seed` genera una ilustración geométrica distinta para cada card; cuando tengas capturas, reemplazá `<ProjectArt />` en `Works.tsx` por un `<Image />` de `next/image`.

## Animaciones

- **Hero (`GeometryCanvas.tsx`)**: formas Bauhaus en canvas que flotan, rotan, tienen parallax con el mouse y se apartan del cursor con física de resorte. Click en el hero → se reacomodan en una nueva composición. Se pausa cuando sale de pantalla.
- **Titular**: entrada línea por línea con máscara; el `+` rojo gira al hacer hover.
- **Marquees**: se aceleran con la velocidad del scroll y cambian de dirección según hacia dónde scrolleás.
- **Trabajos**: frase-filtro interactiva (“hago … para …”) con contadores; las miniaturas giran sus piezas en hover.
- **Experiencia**: acordeón con barrido rojo al hacer hover.
- **Cursor personalizado** (solo con mouse): punto + anillo que crece en links y muestra etiquetas (“ver”, “copiar”).
- **Reveal on scroll**, menú mobile con apertura circular, badge giratorio, órbita de formas en Contacto, email que se copia al portapapeles.

Todo respeta `prefers-reduced-motion`.

## Estructura

```
src/
  app/          layout, page, globals.css
  components/   Hero, GeometryCanvas, Nav, Cursor, Marquee, Works, ProjectArt,
                Experience, About, Contact, Footer, ui (Reveal, RollText, Shape)
  data/         content.ts
```

Los estilos están en CSS plano para no depender de configuración extra; si preferís Tailwind, las clases son BEM y se migran fácil componente por componente.
