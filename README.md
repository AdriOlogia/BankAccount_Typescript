# Proyecto React con TypeScript, Vite, React Router y Estilizado con Bootstrap y Styled Components

Este proyecto es una aplicación web construida utilizando React con TypeScript, Vite como herramienta de desarrollo, React Router DOM para la navegación entre componentes, y se ha estilizado utilizando tanto Bootstrap como Styled Components.

Se realizo testing unitario con Jest

## Inicio Rápido
1- Al clonar el repositorio se necesitar instalar las dependencias con el comando: 
 ```
   npm i
```

2- Para inicializar el proyecto ejecuta el comando en la consola:



   ```
   npm run dev
```


## Agregar el .env
En el archivo helpers/get_users.jsx se encuentra la conexion a la API. 
Si se quiere usar las variables de entorno descomentar la linea 7 y comenta la 8 y en la raiz del proyecto se debe crear un archivo con el nombre ".env.local" y adentro copiar lo siguiente:

 ```
   VITE_URL_API = https://api.npoint.io/97d89162575a9d816661
```

Si no, solo hacer el pull.




