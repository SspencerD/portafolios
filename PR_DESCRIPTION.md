# Actualizar Astro/Tailwind/React y corregir idiomas y timeline

El selector de idioma y varios botones no tenían acciones válidas; el timeline utilizaba offsets fijos y hooks dentro de un map. Ahora el portafolio genera español en `/` e inglés en `/en/`, comparte traducciones y estructura, y muestra una línea de tiempo responsive mediante CSS Grid sin hidratación.

- Astro 7.4.5, React 19.3.1, Tailwind CSS 4.3.4 con Vite; Node >=22.23.4. npm y un único lockfile.
- Navegación accesible, selector que conserva sección, metadatos traducidos y rutas antiguas redirigidas.
- Mantu desde abril de 2026, fin de Scotiabank en marzo de 2026 y SportPro vigente, según confirmación del propietario.
- TanStack y TanStack Query en tecnologías; proyectos con copy específico, imágenes públicas correctas y sin URLs duplicadas ajenas.
- Se retiran botones de CV/contacto y perfiles sociales sin destino verificable; detalles pendientes documentados en README.

Validación: build sin errores, advertencias ni hints; 3 pruebas de contenido; 9 pruebas en Chromium en 4 anchos y sin JavaScript; npm audit sin vulnerabilidades.

No incluye despliegue. Revisar textos laborales históricos y configurar Node compatible en hosting. Faltan CV y enlaces públicos confirmados para habilitar esas acciones.
