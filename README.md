# Aplicación de publicaciones

Esta aplicación fue creada con [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

Y con [NodeJS](https://nodejs.org/ja/blog/release/v10.15.3/) v10.15.3 LTS.

## Descripción

Esta aplicación muestra un lista de publicaciones en primera instancia, tambien permite filtrar las publicaciones
por autor, lo anterior selecionando un author de la barra lateral.

## Development server

### Pasos para ejecutar la aplicación

1. Clona el repositorio de github [Repositorio](https://github.com/AmadorHeE/coding-exercise.git)
2. Cambia el directorio `cd coding-exercise`
3. Instalar dependencias de la applicación Angular `npm i`
4. Generar version de producción de la aplicación angular `ng build --prod`
5. Cambia el directorio `cd server`
6. Instalar dependencias del servidor `npm i`
7. En caso de querer cambiar el schema db.json ejecutar `npm populate`, este paso es opcional
8. Ejecutar el servido `npm start`
9. Navegar a la url `http://localhost:3000`
