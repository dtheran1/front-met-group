# Proyecto Frontend MetGroup

Este proyecto es una aplicación frontend que requiere de un backend para funcionar correctamente. El código del backend está almacenado en otro repositorio independiente. A continuación, se proporciona una guía de configuración y uso para el proyecto frontend.

## Configuración del entorno

1. Clona este repositorio en tu máquina local:

```
git clone https://github.com/dtheran1/front-met-group
```

2. Instala las dependencias del proyecto:
```
npm install
```
## Configuración del Backend
Para que el proyecto frontend funcione correctamente, necesitarás configurar y ejecutar el backend correspondiente. Sigue estos pasos:

1. Clona el repositorio del backend:

```
git clone https://github.com/dtheran1/back-met-group
```

2. Sigue las instrucciones proporcionadas en el README del repositorio del backend para configurar y ejecutar el servidor.

* Puedes necesitar instalar las dependencias.

## Uso del proyecto
1. Asegúrate de que el backend esté en ejecución.

2. Inicia la aplicación frontend:

```
ng serve --open
```

* Este comando abrirá automáticamente en tu navegador web la siguiente URL:

```
http://localhost:4200
```

3. La aplicación frontend se cargará y comenzará a interactuar con el backend a través de la API. Asegúrate de que la comunicación entre el frontend y el backend funcione correctamente y de que los datos se muestren y actualicen según lo esperado.

## Asegurate de iniciar el servidor que se encuentra en este [repositorio](https://github.com/dtheran1/back-met-group), donde esta el backend que consume este proyecto.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
