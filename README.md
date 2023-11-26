/////////////////////
## integrantes 

Valentina Ramirez - comision 3
Malena Castro - comision 1

## github 

El repositorio con carrusel: https://github.com/valennramirez/tp-final-labo4.git 

## instalar libreria ngx-slick-carrousel 

Esta libreria se utiliza para que funcione el carrusel, se instala mediante 3 comandos, luego se cambia los scripts y styles del angular.json. 

https://www.npmjs.com/package/ngx-slick-carousel?activeTab=readme

//en caso de que no funcione, mande un zip que no tiene el carrousel, y solo muestra las primeras cinco peliculas que devuelve la api. 

## json de los usuarios

El json server lo utilizamos para manejar los usuarios, en una carpeta db adentro del src. 

El comando: json-server .db/usuarios.json -p 4000 

## usuario ya ingresado 

Para visualizar la informacion de las peliculas, se necesita ingresar con el usuario. 

En caso de querer ingresar directamente, hay un usuario ya creado previamente con peliculas guardadas en las listas: 

user: valennramirez22
contraseña: Valen345 

## registrarse 

En cuanto a las validaciones del registro, no pudimos lograr la de manejar usuarios y gmail repetidos, por lo cual te deja registrarte incluso si ya existe. 

## lista de peliculas vistas y por ver 

En el manejo de las listas, decidimos que una pelicula no pueda estar en las dos listas. O ya la viste, o la vas a ver. Por lo cual, al agregarla a una, se elimina automaticamente de la otra. 

Para visualizar las listas, primero se ingresa a visualizar mi usuario, y ahi hay dos botones que te llevan a la lista elegida. 

## buscar peliculas 

Para buscar peliculas desde el inicio, al apretar buscar te lleva directamente a la pagina con los resultados de la busqueda. Pero al buscar desde alli, se tiene que renovar la pagina porque se queda estatica. 

## visualizar las peliculas por genero  (agregado despues de la presentacion)

Si se apreta sobre el nombre del genero en el inicio, te lleva a una pagina con peliculas de ese genero. El resultado esta dividido en paginas de 20, y se puede navegar entre las paginas. 
