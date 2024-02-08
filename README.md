# Individual Project - Countries page.
(Proyecto individual realizado en la etapa final del bootcamp de "Soy Henry")


<p align="left">
  <img height="200" src="./globe.gif" />
</p>

## [Link al deploy](https://countries-page-plum.vercel.app/)

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node, Express y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- El mismo se realizo en un lapso de dos semanas.

## Descripción

La idea principal es crear una aplicación que muestra datos de distintos países usando la información de la api externa [RestCountries](https://restcountries.com/) y a partir de la misma tener las siguientes funcionalidades:

- Mostrar todos los países.
- Poder hacer búsquedas de los mismos.
- Filtrarlos y ordenarlos por nombre, continentes, actividades disponibles y población.
- Poder crear actividades turísticas nuevas, asociarlas a uno o más países y mostrarlas en la descripción de cada país.

(Todos los filtrados son realizados dentro del proyecto, NO se utilizan los endpoints de filtrado de la api externa)


### Únicos Endpoints/Flags utilizados de restCountries

- GET <https://restcountries.com/v3/all>
- GET <https://restcountries.com/v3/name/{name}>

## Frontend

__Landing page__: 

- Imagen de fondo
- Botón para ingresar al home (`Ruta principal`)

__Home__:

- Input de búsqueda para encontrar países por nombre
- Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta `GET /countries`(De nuestro back end).
- Botones con opciones para filtrado.
- Paginado para ir buscando y mostrando los paises.

__Country detail__:
- Haciendo click en un país en la ruta principal(Home) te redirecciona a la pagina de detalle del mismo
    - Donde se especifica:
        - Imagen de bandera.
        - Nombre.
        - Continente.
        - Capital.
        - Subregión.
        - Área en km2.
        - Población.
        - Actividades turísticas con toda su información asociada.

__Ruta de creación de actividad turística__:

- Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Dificultad
  - Duración
  - Temporada
- Posibilidad de seleccionar/agregar varios países en simultáneo
- Posibilidad de eliminar los países seleccionados
- [ ] Botón/Opción para crear una nueva actividad turística

- El formulario tiene validaciones en javaScript y si no estan todos los campos completos no permite enviarlo.

## Base de datos

El modelo de la base de datos posee las siguientes propiedades:

- [ ] País con las siguientes propiedades:
  - ID (Código de 3 letras) *
  - Nombre *
  - Imagen de la bandera *
  - Continente *
  - Capital *
  - Subregión
  - Área
  - Población
- [ ] Actividad Turística con las siguientes propiedades:
  - ID
  - Nombre
  - Dificultad (Entre 1 y 5)
  - Duración
  - Temporada (Verano, Otoño, Invierno o Primavera)

La relación entre ambas entidades debe ser de muchos a muchos ya que un país puede contener varias actividades turísticas y, a su vez, una actividad turística puede darse en múltiples países. Por ejemplo una actividad podría ser "Ski" que podría ocurrir en Argentina y también en Estados Unidos, pero a su vez Argentina podría también incluir "Rafting".

## Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /countries__:
  - En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal)
  - Obtener un listado de los paises.
- [ ] __GET /countries/{idPais}__:
  - Obtener el detalle de un país en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de país
  - Incluir los datos de las actividades turísticas correspondientes
- [ ] __GET /countries?name="..."__:
  - Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
  - Si no existe ningún país mostrar un mensaje adecuado
- [ ] __POST /activities__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
  - Crea una actividad turística en la base de datos, relacionada con los países correspondientes
