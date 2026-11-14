# semanal

> **Integrado en [compactor](https://github.com/manuelfp88/compactor) desde su versión 0.2.0.** Si usas compactor 0.2.0 o posterior, no instales este mod: verías `📅` dos veces. Este repositorio se queda como está.

Muestra en el pie del cuadro de escribir de Claude Code el porcentaje usado de tu límite semanal, por ejemplo `📅 6 %`.

- Se actualiza al abrir la sesión y al terminar cada turno.
- Muestra `–` hasta que llega el dato, normalmente con la primera respuesta de Claude. Sin límite semanal, como con una clave de API, se queda en `–`.
- Es solo informativo: se dibuja como botón para colocarse a la izquierda en la app de escritorio, pero pulsarlo no hace nada.
- Puede ir hasta un punto por debajo del popup de límites de la app, que es la cifra de referencia.

Combina bien con [compactor](https://github.com/manuelfp88/compactor), desde su versión 0.1.2.

## Instalación

En una sesión de Claude Code en la terminal:

```
/plugin install semanal --marketplace manuelfp88/semanal
```

Responde `y` para añadir el catálogo y elige dónde instalarlo.

## Licencia

MIT
