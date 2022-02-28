# ES: Openbank

# Instalación y Documentación

## DESARROLLO

En el directorio del proyecto, puede ejecutar:

1. Instale el proyecto con `npm install` // `yarn install`
2. Inicialice la aplicación con `npm run start`

# Información sobre la app

La app está envuelta por react router v6 la cual crea 3 rutas, para la home `(/)` que es la primera pantalla de la app, `(/form)` en la cual se rellena el formulario con las contraseñas y por último `(/feedback)` para mostrar el resultado de la consulta a la API.

- Para la gestión del estado, he decicido utilizar Redux con Redux Toolkit, para que veais un poco como lo utilizo. Para una app de 3 pantallas si es cierto que no haría falta y se podría usar otros metodos como useContext.

  - En todas las vistas, al entrar, se guarda que estás viendo esa pantalla para que el menú superior pueda marcar automáticamente la pantalla que estás viendo.
  - También al finalizar de completar la información y querer pasar de pantalla (si cumples los requisitos) se guarda en que ya has finalizado esa vista y modifica el el nombre por un check.
  - Al terminar la primera vista, se guarda en el estado que has marcado el check para así saber en la vista dos que lo has marcado y no poder entrar directamente por esa ruta.
  - En la vista de formulario al entrar se ejecuta un useEffect el cual comprueba que ya has pasado por la pantalla uno mirando si tienes el check en el estado marcado a true. Al terminar de completar los datos, también guarda en el estado esos datos que has completado para así en la tercera pantalla saber que has pasado por ella.
  - La tercera vista ejecuta también un useEffect el cual comprueba que has pasado por la pantalla anterior viendo si tienes esos datos guardados. Si cumples estos requisitos, hace una llamada a la “API” y devuelve la respuesta.

- El formulario está hecho con Formik y para validar los datos Yup.
- El cambio de idioma se hizo utilizado el paquete i18next cargando el idioma por defecto la de tu navegador y al elegir otra la guarda en una cookie con el idioma elegido para que no se vuelva a cambiar al entrar a otra página.
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

# EN: Openbank

# Installation and Documentation

## GROWTH

In the project directory, you can run:

1. Install the project with `npm install` // `yarn install`
2. Start the app with `npm run start`

# Information about the app

The app is wrapped by react router v6 which creates 3 routes, for the home `(/)` which is the first screen of the app, `(/form)` in which the form is filled in with the passwords and finally `(/feedback)` to display the result of the API query.

- For state management, I have decided to use Redux with Redux Toolkit, so you can see a little how I use it. For a 3-screen app, it is true that it would not be necessary and other methods such as useContext could be used.

  - In all views, when you enter, it is saved that you are viewing that screen so that the top menu can automatically mark the screen you are viewing.
  - Also at the end of completing the information and wanting to pass the screen (if you meet the requirements) it is saved in that you have already finished that view and modifies the name by a check.
  - At the end of the first view, it is saved in the state that you have marked the check in order to know in view two that you have marked it and not be able to enter directly through that route.
  - In the form view when entering, a useEffect is executed which checks that you have already passed through the screen one looking if you have the check in the state marked true. When you finish completing the data, it also saves the data you have completed in the state so that on the third screen you know that you have gone through it.
  - The third view also executes a useEffect which checks that you have gone through the previous screen seeing if you have that data saved. If you meet these requirements, it makes a call to the "API" and returns the response.

- The form is made with Formik and to validate the data Yup.
- The language change was made using the i18next package, loading the default language of your browser and when choosing another it saves it in a cookie with the chosen language so that it is not changed again when entering another page.
- For the style, Styled-Components is being used.

# Project Organization

- components: Components used in the app and some that have been used several times.
- data: Redux information and state management.
- locale: Configuration of the translations.
- views: Screens of the web with its components.
- services: API calls.
- styles: Saves the colors used.
- assets: Images used
