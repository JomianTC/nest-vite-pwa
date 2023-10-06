<p align="center">
	<img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
	<img src="https://vitejs.dev/logo-with-shadow.png" width="200" alt="Vite Logo" />
	<img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pwa-icon.png" width="200" alt="PWA Logo" />
</p>

# NestJS + Vite + PWA

Rama de la aplicación de producción del Backend

Esta aplicación está desplegada en Render y la puedes consultar en el siguiente link

__https://nestjs-vite-pwa-api.onrender.com/__

# Ejecución

Para ejecutar esta aplicación de NestJS en local seguiremos los siguientes pasos

1. Clonar Repositorio ( Rama BanckendProduccion )
2. Instalar dependencias con el siguiente comando
```
npm install
```
3. Ejecutar la aplicación en producción
```
node dist/main
```

# Documentacion

## Endpoint Seed

Este endpoint sirve para cargar la API de datos aleatorios

```
URL: https://nestjs-vite-pwa-api.onrender.com/seed
Metodo: GET
Parametros: ninguno
```

## Endpoint Users

Este endpoint se encarga del CRUD de usuarios de la API

#### Obtener usuarios

Retorna la lista de todos los usuarios en la API

```
URL: https://nestjs-vite-pwa-api.onrender.com/users
Metodo: GET
Parametros: ninguno
```

#### Obtener usuario por Id

Retorna el usuario que coincide con esa Id

```
URL: https://nestjs-vite-pwa-api.onrender.com/users/<UserID>
Metodo: GET
Parametros: UserID en URL
```

#### Crear usuario

Retorna el usuario que fue creado

```
URL: https://nestjs-vite-pwa-api.onrender.com/users
Metodo: POST
Parametros: 
	Body: {
		nombre: string,
		email: string
	}
```

#### Actualizar usuario por Id

Retorna el usuario que coincide con la ID actualizado

```
URL: https://nestjs-vite-pwa-api.onrender.com/users/<UserID>
Metodo: POST
Parametros: UserID en URL
	Body: {
		nombre: string,
		email: string
	}
```

#### Eliminar usuario por Id

Retorna el usuario que coincide con la Id y lo elimina de la API

```
URL: https://nestjs-vite-pwa-api.onrender.com/users/<UserID>
Metodo: DELETE
Parametros: UserID en URL
```