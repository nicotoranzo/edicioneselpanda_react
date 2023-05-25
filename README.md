# Ediciones El Panda


Este proyecto se inició con [Create React App](https://github.com/facebook/create-react-app).
Es el E-Commerce de Ediciones El Panda.

## Deploy

El sitio se puede ver en [Ediciones El Panda](https://646d02344981432abcb691fd--jade-sherbet-40c589.netlify.app/)

## Scripts Disponibles

En este proyecto se puede ejecutar:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo en [http://localhost:3000](http://localhost:3000)
La página se volverá a cargar cuando realice cambios.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

## Librerias utilizadas:

"bootstrap": "^5.2.3",
"firebase": "^9.22.0",
"react": "^18.2.0",
"react-bootstrap": "^2.7.2",
"react-dom": "^18.2.0",
"react-router-dom": "^6.10.0",
"react-scripts": "5.0.1",

## Descripción:

### Home y Categorías

La barra de navegación provee las rutas a toda la pagina. El Logo dirige al Home. El sitio tiene dos categorías: cuentos y novelas.

### Productos

De cada producto se visualiza la foto, el titulo del libro, el autor, el precio y el stock. Se puede agregar al carrito y comprarlo.

### Carrito

En la barra de navegación se ve cuantos productos hay agregados en el carrito y cuando se hace click ahi se despliega el detalle con sus respectivos subtotales y se puede finalizar la compra.

### Checkout

El usuario completa con sus datos y finaliza la compra. El sitio le devuelve el Id de su Orden.



