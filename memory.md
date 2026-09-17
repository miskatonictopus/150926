# Seguimiento del proyecto

## 2026-09-16

- Repo clonado desde https://github.com/miskatonictopus/150926 en esta carpeta (rama `master`, remoto `origin`).
- [app/page.tsx](app/page.tsx): contenido de scaffold inicial (Next.js) eliminado por completo.
- Hero: `div` 100vw x 100vh, `background-color: #9333ea`, contenido centrado (flex center center).
  - Dentro, centrado horizontalmente: `div` de 1200px de ancho, alto 100%, `background-color: #ef4444`, también flex center center.
    - Dentro, un `<p>` con texto Lorem ipsum, estilos: `font-size: 55px`, `text-align: center`, `line-height: 1em`, `font-weight: 900`.
- Debajo del hero, dos `section` de 100vw, `min-height: 450px` (altura base 50vh):
  - 1ª sección: `background-color: #0a0a0a`.
  - 2ª sección: `background-color: #525252`.
- [app/layout.tsx](app/layout.tsx): fuente por defecto (`--font-sans`) cambiada de Inter a **Fredoka** (Google Fonts, categoría Playful/Expressive), vía `next/font/google`. Fredoka solo cubre pesos 300–700, por lo que `font-weight: 900` en el `<p>` se renderiza como 700 (no hay corte de fuente en 900); pendiente valorar fuente alternativa si se necesita un 900 real.

## 2026-09-17

- Hero sustituido: el bloque anterior (fondo `#9333ea`/`#ef4444` con el `<p>` Lorem ipsum) fue reemplazado por [components/ui/hero.tsx](components/ui/hero.tsx) (`ShaderShowcase`), un hero con fondo animado por shaders (`MeshGradient` + `PulsingBorder` de `@paper-design/shaders-react`) y animaciones con `framer-motion`.
- Origen: componente "Hero" del registro de 21st.dev (`reuno-ui/hero`, `npx shadcn add`), pero requería API key de pago (`API_KEY_21ST`, ver 21st.dev/mcp) para instalarse vía CLI. Se optó por pegar el código fuente del componente/demo directamente en el repo, sin depender del registro.
- Dependencias añadidas: `framer-motion`, `@paper-design/shaders-react` (v0.0.81 instalada).
- Ajustes de props respecto al snippet original, porque la API de `@paper-design/shaders-react` cambió desde la versión que generó el demo:
  - `MeshGradient`: eliminadas `backgroundColor` y `wireframe` (no existen en `MeshGradientProps`).
  - `PulsingBorder`: `spotsPerColor` renombrada a `spots`.
- [app/page.tsx](app/page.tsx): ahora importa y renderiza `<ShaderShowcase />` como hero, seguido de las mismas dos `section` (`#0a0a0a` y `#525252`) que ya existían.

## Próximos pasos
- (pendiente de definir)
