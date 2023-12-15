# Desarrollo de Aplicación con React, LocalStorage y Material UI

Este documento detalla el desarrollo de una aplicación que permite configurar acciones sostenibles, utilizando React como framework Frontend, LocalStorage como base de datos y Material UI para el diseño de componentes.

## Introducción

El objetivo de esta aplicación es proporcionar a los usuarios una interfaz para configurar acciones sostenibles, enfocándose en elementos clave que promuevan prácticas responsables en diferentes áreas.

### Desafío

El desafío busca evaluar las habilidades tanto en el desarrollo Frontend como en el Backend, pero se enfatiza la libertad para enfocarse en el área de mayor comodidad y especialización del desarrollador.

## Requerimientos

### Campos Obligatorios

- **Nombre de la Acción** (\*) 💬
- **Fecha de Inicio** (\*) 📅
- **Fecha Término** 📅

### Elementos de Interfaz

- Botón para indicar la presencia de un Responsable (switch) (\*) 👤
- Botón para indicar si la acción tiene un Objetivo (switch) (\*) 🎯
- Botones para seleccionar el tipo de acción (descritos abajo) ⚙️
- Botón para activar el cálculo de huella ecológica (switch) (\*) 👣
- Botón para indicar si es una obligación legal (switch) (\*) ⚖️
- Botón para guardar y crear la acción 💾
- Botón para cerrar y volver al Home ↩️

### Funciones Adicionales

- **Botón Acción**: Realiza una función específica (detallada en la aplicación).
- **Botón para guardar**: Almacena toda la información en la base de datos.
- **Botón cerrar**: Cierra la ventana y retorna a la vista Home.

### Tipos de Acción

1. **Accion Ambiental** (Better World 🌍)
2. **Accion Social** (Better Place 🤝)
3. **Accion Gobernabilidad** (Better Company🏛)
4. **Accion Economica** (Better Profit 💰)

Cada tipo de acción tiene una descripción asociada a su categoría y enfoque.

## Implementación

El desarrollo se llevó a cabo utilizando React como framework principal para la construcción del Frontend. La lógica de la aplicación se gestiona utilizando componentes funcionales, aprovechando el estado local y utilizando LocalStorage como base de datos para el almacenamiento de información.

### Componentes y Diseño

Se utilizó Material UI para el diseño de los componentes, aprovechando su extensa biblioteca de elementos predefinidos para garantizar una interfaz intuitiva y atractiva para los usuarios.

## Visualización y Ejecución

Para visualizar la aplicación desplegada, puedes acceder al siguiente enlace:

[Link de Deploy](https://a-sepulveda-r.github.io/pt-liftun/)

Si prefieres ejecutar la aplicación localmente, sigue estos pasos:

1. Clona el repositorio desde [GitHub](https://github.com/a-sepulveda-r/pt-liftun).

2. Instala las dependencias ejecutando `npm install`.

3. Inicia la aplicación con el comando `npm run dev`.

Esto te permitirá ejecutar la aplicación en un entorno local y explorar su funcionalidad.

## Notas Adicionales

Asegúrate de tener Node.js y npm instalados en tu entorno para poder ejecutar la aplicación de manera local.
