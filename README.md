# Portafolio de Santiago Spencer

Actualización del repositorio existente `SspencerD/portafolios`.

## Desarrollo y validación

Requiere Node >=22.23.4 (ver `.nvmrc`) y npm >=9.6.5.

```sh
npm ci
npm run dev
npm run build
npm test
npx playwright install chromium
npm run test:e2e
```

Astro 7.4.5, React 19.3.1 y Tailwind CSS 4.3.4 mediante el plugin oficial de Vite. Se conserva React para componentes compatibles; el timeline se renderiza en servidor sin hidratación de React ni hooks. Un pequeño script con IntersectionObserver anima cada entrada una sola vez al entrar en pantalla; respeta movimiento reducido y el contenido sigue visible sin JavaScript. Se eliminaron librerías de animación y timeline que ya no se usan. npm es el gestor único; `package-lock.json` fija el árbol reproducible.

## Idiomas

- Español: `/`. Inglés: `/en/`.
- Astro configura ambos idiomas y genera rutas estáticas nativas.
- `src/translation/{es,en}/global.json` contiene textos y experiencia. Las claves y la cobertura se validan con `npm test`.
- `src/components/Portfolio.astro` comparte estructura entre idiomas. El idioma de la URL manda; no depende de almacenamiento local ni de hidratación.
- El selector funciona sin JavaScript. Con JavaScript conserva también el ancla de la sección.
- Las antiguas páginas `/home/`, `/experience/` y `/projects/` redirigen a las secciones correspondientes.
- `lang`, título, descripción y enlaces alternativos cambian por idioma. No se inventó un dominio de producción para metadatos absolutos.

## Contenido confirmado y pendiente

Confirmado por el propietario el 5 de noviembre de 2026:

- Mantu: primera semana de abril de 2026 hasta la actualidad, desarrollador FullStack, actualmente mobile con React Native. Se publica precisión mensual y Mantu como empresa pública.
- Scotiabank mediante SII Group: finalizó en marzo de 2026. El inicio se conserva del repositorio original.
- SportPro TV continúa vigente, con colaboración esporádica según el contenido original.
- Se incorpora conocimiento de TanStack y TanStack Query como tecnologías del perfil. No se instala un cliente de consultas en un sitio estático que no lo necesita.

Se conservaron los otros cargos y periodos del repositorio con precisión mensual. Se simplificaron descripciones y se eliminaron porcentajes sin evidencia adicional. El propietario puede revisar estos antecedentes en ambas traducciones.

Pendiente de información verificable: CV descargable, correo/LinkedIn y otros contactos públicos, URLs específicas de proyectos sin destino propio y captura de SportPro. Los controles sin destino se retiraron; GitHub y la navegación tienen destinos reales. Se conservan nombres, tecnologías e imágenes válidas de los proyectos y se corrige la descripción duplicada de Sabores Card. SportPro ya no usa la captura de AMOL.

## Verificación

- `npm run build`: diagnóstico de Astro y generación estática.
- `npm test`: paridad de traducciones, datos laborales confirmados y assets.
- `npm run test:e2e`: español/inglés a 320, 390, 768 y 1440 px; ancho sin desbordamiento, timeline sin superposición, imágenes, cambio de idioma y recarga, funcionamiento sin JavaScript, animación al hacer scroll y preferencia de movimiento reducido.

Revisar despliegue con Node >=22.23.4 antes de publicar. No se modifica ninguna configuración externa ni se despliega automáticamente.
