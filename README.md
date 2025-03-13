Proyecto hecho con react y nodejs  esta es la parte del backend

primero inicias el proyecto

```bash
npm init -y

```

lo configuramos para que entienda que archivos son el main y del cual debe escuchar los cambios en cada archivo

```bash
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js", Aqui es donde estara pasando toda la informacion de todos los archivos dentro del backend
  "scripts": {
    OJO PUEDES CONFIGURAR TODOS LOS SCRIPTS QUE QUIERAS PERO PRIMERO DEBES ENTENDER PARA QUE FUNCIONA CADA UNO

    "start": "node index.js", INSTANCIA DE PRODUCCION
    "dev": "nodemon index.js", INSTANCIA DE DESARROLLO
    "build": "tsc", INSTANCIA PRE PRODUCCION ESTO COMPILA OSEA QUE CARGA Y REVISA CADA ARCHIVO PARA QUE ESTEN CORRECTAMENTE ANCLADOS Y BONITOS
    "test": "jest", INSTANCIA PRUEBAS/ERROES
    "lint": "eslint .", INSTANCIA DE ANALISIS DE CODIGO REVISA LA SINTAXIS
    "format": "prettier --write .", ESTO SOLO TABULA TODOS LOS ARCHIVOS POR SI LO OLVIDASTE
    "prestart": "npm run build", LOS PRE SE ESJECUTAN ANTES DE INICIAR EL TEST O LA PRODUCCION ASEGURANDO QUE NO EXISTAN FALLOS
    "pretest": "npm run lint"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


```


tambien necesitas las siguientes dependencias

```bash

npm install mongoose dotenv cookie-parser jsonwebtoken nodemon express bcryptjs

Or

yarn install mongoose dotenv cookie-parser jsonwebtoken nodemon express bcryptjs

```

una vez instalado y configurado tu servidor en nodejs
debes hacer que entienda  las funciones de tu proyecto para ello elegimos la arquitectura de software MVC  (Model - view - Controller)
y la arquitectura API Rest (Transferencia de estado representacional),
esto se acompaña de frameworks como nodejs(Express )

 ```bash

Método	Acción	    Uso común
GET	    Obtener	    Recupera información de un recurso
POST	  Crear	      Envía datos para crear un nuevo recurso
PUT	    Actualizar	Modifica un recurso existente (sustitución completa)
PATCH  	Modificar  	Modifica parcialmente un recurso
DELETE	Eliminar	  Borra un recurso

```

por eso dividi mi backend y frontend los cuales puedes encontrarlos en mi perfil de github como:

Dani-BlogBackend
Dani-BlogFrontend.

Puedes ayudarte con postman https://www.postman.com/
recuerda tener tu cuenta en Mongo DB o la Base de datos que prefieras https://www.mongodb.com/es/cloud/atlas/register

una vez entendido eso necesitas crear
Los Model que serian los objetos/personas/autos de tu proyecto
con atributos como: Nombre, Marca, Edad
luego la vista en este caso Routes
ahi estaran todas las acciones del Model por ejemplo
de un Model llamado Auto estara la fabriacion de uno nuevo, la eliminacion y la actualizacion de este. en ese apartado tambien podras agregar middlewares o hooks para asegurar por ejemplo que antes de eliminar o crear auto el usuario debe ser Admin o debe escribir un codigo de 6 dijitos que solo te lo da tu jefe cosas de ese estilo
y por ultimo ni menos importante el Controller
hay esta la accion en detalle de Crear-Eliminar-Actualizar o si bien las funciones en estas deberas
colocar toda  la informacion como nombre, marca, año y ojo que no falte ningun atributo del model auto ya declarado en el archivo model ya que al compilar ocasionara error.
luego valida la informacion, llama las funcions de encriptacion middlewares de seguridad y listo
puedes revisar todo el condigo hacer copypaste o intentar mejorarlo suerte con el BACKEND!!!!
