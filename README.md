# Portfolio Personas: gpolanco.com

## Instalación

1. Clona el repositorio: `git clone https://github.com/Polanco08/portfolio.git`
2. Instala las dependencias: npm install
3. Genera la carpeta 'public' : gulp - La carpeta public es la carpeta donde express busca los archivos estáticos de la aplicación.
4. Ejecuta el servidor: node server.js

Por ahora es el proceso de instalación del proyecto en local, más adelante seguro cambia ya que se irán agregando más automatizaciones de tareas y otras configuraciones.

##Estructura del proyecto:

    ROOR
      |-- public
        |-- app.css
        |-- app.js
        |-- images

      |-- src : Archivos fuentes javaScript del cliente.
        |-- modelos [habilidades, homepage, portfolio, sobremi, contacto]
        |-- index.js
        |-- index.scss

      |-- assets
      |-- .gitignore
      |-- Gulpfile.js
      |-- index.html
      |-- package.json
      |-- README.md
      |-- server.js

## Dependencias del proyecto:
1. jQuery
2. Express
3. page.js
4. empty-element:
5. yo-yo:
6. title:

##Herramientas Utilizadas en el desarrollo:

1. GULP: Para automatizar las tareas, como compilado de css, javascript y html con jade(pug).
2. SASS: Pre procesador de css.
3. GIT: para el control de versiones.
4. Node y Express: Para la parte del servidor simple de desarrollo.
5. npm: para la gestión de dependencias.
6. Browserify.js: package bundle, une todas las dependencias css y js y las une en un archivo app.js y app.css.
7. Babel.js: Transforma ECMAScript 6 a ECMAScript 5, con esto puedo utilizar las nuevas funcionalidades de JavaScript.


## Proceso de desarrollo

1. Crear estructura básica de carpetas
2. Iniciar git y agregar un repositorio remoto
3. Iniciar npm para que sea nuestro gestor de dependencias "npm init"
4. configurar Gulfile.js las tareas iniciales


## Tareas programas en Gulpfile.js

1. **estilos:** Compila el archivo /src/index.scss a /public/app.css
2. **assets:** Genera la carpeta /public/ con el contenido de la carpeta /assets/ y los bundle js y css

La tarea 'default' ejecuta las tareas ates mencionadas, ahora es muy simple pero se irá complicando según vaya avanzando.
