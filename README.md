# ES: Openbank

# Instalación y Documentación

## DESARROLLO

En el directorio del proyecto, puede ejecutar:

1. Instale el proyecto con `npm install` // `yarn install`
2. Inicialice la aplicación con `npm run start`

# Información sobre la app

La app está envuelta por react router v6 la cual crea 3 rutas, para la home `(/)` que sería la primera pantalla de la app, `(/form)` en la cual se rellena el formulario con las contraseñas y por último `(/feedback)` para mostrar el resultado de la consulta a la API.

- Para la gestión del estado, he decicido utilizar Redux con Redux Toolkit, para que veais un poco como lo utilizo. Para una app de 3 pantallas si es cierto que no haría falta y se podría usar otros metodos como useContext.

  - En todas las vistas, al entrar, se guarda que estás viendo esa pantalla para que el menú superior pueda marcar automáticamente la pantalla que estás viendo.
  - También al finalizar de completar la información y querer pasar de pantalla (si cumples los requisitos) se guarda en que ya has finalizado esa vista y modifica el el nombre por un check.
  - Al terminar la primera vista, se guarda en el estado que has marcado el check para así saber en la vista dos que lo has marcado y no poder entrar directamente por esa ruta.
  - En la vista de formulario al entrar se ejecuta un useEffect el cual comprueba que ya has pasado por la pantalla uno mirando si tienes el check en el estado marcado a true. Al terminar de completar los datos, también guarda en el estado esos datos que has completado para así en la tercera pantalla saber que has pasado por ella.
  - La tercera vista ejecuta también un useEffect el cual comprueba que has pasado por la pantalla anterior viendo si tienes esos datos guardados. Si cumples estos requisitos, hace una llamada a la “API” y devuelve la respuesta.

- El formulario está hecho con Formik y para validar los datos Yup.
- El cambio de idioma se hizo utilizado el paquete i18next cargando el idioma por defecto la de tu navegador y al elegir otra (desde los 3 puntos de la esquina superior) la guarda en una cookie con el idioma elegido para que no se vuelva a cambiar al entrar a otra página.
- Para el estilo se está utilizando Styled-Components.

# Organización del proyecto

- components: Componentes utilizados en la app y alguno que se ha utilizado varias veces.
- data: Información de redux y gestión de estados.
- locale: Configuración de las traducciones.
- views: Pantallas de la web con sus componentes.
- services: Llamadas a api.
- styles: Guarda los colores usados.
- assets: Imágenes usadas

---
