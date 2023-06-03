# Docker Fundamentals Ejercicio Final

## Objetivo

El objetivo de este ejercicio es crear un fichero docker-compose.yml que levante una aplicación web con un frontend y un backend. El frontend será una aplicación web que se conectará al backend para obtener información de una base de datos. La base de datos será MongoDB.

## Requisitos

Para realizar este ejercicio necesitarás tener instalado Docker y Docker Compose.

## Instrucciones

### 1. Crear el fichero docker-compose.yml

Crea un fichero docker-compose.yml que levante los siguientes servicios:

- Un servicio llamado `database` que construya y levante la imagen `mongo`. Esta imagen expone el puerto 27017.

- Un servicio llamado `backend` que construya y levante la imagen dentro del directorio `backend`. Esta imagen expone el puerto 4000 y se conecta al servicio `database` en el puerto 27017. Se debe exponer el puerto 4000 para que el servicio `frontend` pueda conectarse a él.

- Un servicio llamado `frontend` que construya y levante la imagen dentro del directorio `frontend`. Esta imagen expone el puerto 3000 y se conecta al servicio `backend` en el puerto 4000. Esta conexión, al ser a través del cliente, debe ser a través de la red del host, no de la red de Docker.

Asegurarse de que la aplicación funcione como la demo en [dobleb.cf](https://dobleb.cf).

#### Tips

- Utiliza el comando docker compose up -d --build para levantar los servicios en segundo plano. El flag --build es necesario para que se construyan las imágenes siempre antes de levantar los servicios.

- Para que el servicio `frontend` se conecte al servicio `backend` a través de la red del host, utiliza localhost.

### 2. Desplegar las imágenes en Docker Hub

Una vez que la aplicación funcione correctamente, despliega las imágenes en Docker Hub para que puedan ser descargadas por cualquier persona.

#### Tips

- Para desplegar las imágenes en tu repositorio de Docker Hub, recuerda utilizar el comando docker tag para etiquetar las imágenes con tu nombre de usuario de Docker Hub y el nombre de la imagen antes de hacer el push. Por ejemplo, si tu nombre de usuario es `dobleb` y la imagen se llama `backend`, la etiqueta sería `dobleb/backend`.

### 3. Crear un fichero docker-compose.yml para producción

Crea otro fichero `docker-compose.yml` y copia el contenido del fichero anterior. Modifica el fichero para que:

- El servicio `database` utilice un volumen para almacenar los datos de la base de datos en el host.

- Los servicios `backend` y `frontend` no construyan la imagen desde el directorio, sino que descarguen la imagen que subiste desde Docker Hub.

- No se exponga ningún puerto en el contenedor `database`.

- Modifica los nombres de los servicios para que sean menos genéricos.

### 4. Enviar docker-compose.yml vía email

Envía el fichero `docker-compose.yml` a la dirección de email que te indique el profesor.