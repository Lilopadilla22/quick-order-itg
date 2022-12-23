## Quick Order

Quick order es un componente que le ayudara al cliente a realizar una compra rapida, escoge su proudcto por SKU y lo lleva directo a su checkout
 ## vista del modal

![quick-order](https://user-images.githubusercontent.com/97923792/209363053-ec77310c-17ad-4fff-afc9-e3e4361a56a9.png)

## CONFUGURACION 

### Primero - Configuración Básica 

Ingresar al siguiente repositorio en GitHub react-app-template (https://github.com/vtex-apps/react-app-template) y crear un nuevo repositorio usando este template

### Segundo - Clonación del repositorio 

Abrir la terminal e ingresar el comando git clone mas la URL del repositorio en gitHub así:
git clone [url](), posteriormente acceda a la carpeta del proyecto en su repositorio local.

### Tercero - Editar el Manifest.json

Modificar en el archivo manifest.json:
1ro. El valor del vendor con el nombre correspondiente a su vendor
2do. El valor del name con el nombre con el que va a usar su componente. 
3ro. Opcionalmente puede modificar la versión, el título y agregar una descripción, para darle un mejor esquema y explicación de lo que hace nuestro componente. 
4to. Agregar las dependencias necesarias, que vaya a utilizar para su desarrollo.

Ejemplo:  
{  
  "vendor": "itgloberspartnercl",  
  "name": "quick-order-v2",  
  "version": "0.0.1",  
  "title": "Add to cart info",    
  "description": "Es un componente que desarrolla un modal con el resumen de compra del usuario"  
}

Adicionalmente debe asegurarse de tener en los builders el store en su version 0.x así:

"builders":{   
"store": "0.x"   
}

## depedencias

1. "vtex.css-handles": "0.x",
2. "vtex.checkout-graphql": "0.x",
3. "vtex.search-graphql": "0.x"


### Cuarto - Editar el Package.json 

Modificar en los archivos package.json ubicado de manera global asi como el que esta ubicado en la carpeta de react, el nombre y la versión de igual forma como fueron modificados en el archivo manifest.json

Ejemplo:  

{  
  "version": "0.0.1",  
  "name": "quick-order-v2" 
}

### Quinto - Instalar apps

En la terminar dar ubicarse en la carpeta de react que nos proporciona el temple, cd react, luego escribir "yarn" para darle inicio a la instalacion de todos los nodulos que haran funcionar la aplicacion. 

## Sexto - Ejecutar el preview de la tienda.

En su terminal digite el comando vtex link, si su aplicacion es lanzada sin ningún error, en su ternimal aparecerá la siguiente información:   
(info: App linked successfully). 

Para usar la aplicación en su tienda debe adicionar en el archivo manifest.json la dependencia correspondiente al componente.

Ejemplo:  
"dependencies": {  
 "itgloberspartnercl.quick-order-v2": "0.x",  
}

## Firma
1. Lilia padilla Arends
