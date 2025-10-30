# JAVASCRIPT_101

Para evitar errores en la carga de los archivos de JS deberiamos cargarlos siempre al final del HTML justo antes de cerrar el <body>


## VARIABLES DE JS

En JS tenemos 3 posibilidades de declarar una variable:

1. var
2. let - esta es la que más vamos a usar
3. const


## TIPOS DE DATOS DE JS


1. Texto (String)

Cadena de caracteres que se debe encontrar siempre entre comillas. Estas comillas pueden ser dobles o simples


2. Números (number)

- integer
- float (los decimales usan un punto .)


3. Array - []

Un array es una colección de uno o de varios de tipos de datos.


4. Boolean

- true (1)
- false (0)


5. null 

Se puede usar para declarar una variable con un valor vacío


6. undefined

Va a aparecer como un tipo de error cuando intente trabajar con variables que no se han definido previamente


7. Object - {}

Es un tipo de dato complejo que me permite guardar datos en formato clave: valor, (key: value)



## Operaciones aritmeticas:

- Suma -> +
- Resta -> -
- Multiplicación -> *
- División -> /
- Módulo -> %


## Operaciones lógicas (dan como resultado un boolean true o false):

- AND -> &&
- OR -> ||
- Mayor que -> >
- Menor que -> <
- Mayor o igual que -> >=
- Menor o igual que -> <=
- Igual que -> == (COMPARADOR DE IGUAL SUAVE)
- Totalmente igual -> === (COMPARADOR DE IGUAL FUERTE)



## Expresiones de control:

### Condicional -> if

if (condition) {
    // Lo que hay dentro de este bloque de código se ejecutará dependiendo de si la condicion es true
} else {

}

- Mas de una condición:

if (condition1) {

} else if (contidion2) {

} else {

}




## FUNCIONES BUILT-IN DE JS:

- console.log() -> imprime un valor o variable en la consola del navegador

- alert() -> muestra una ventana modal del navegador con un posible mensaje

- prompt() -> Igual que un alert pero con un input incluido

- parseInt() -> convierte un float en in integer


### Selectores de JS:

Son un tipo de funciones built-it de JS que me permiten seleccionar uno o varios elementos del DOM (Document Object Model).

Tenemos diferentes tipos de selectores, algunos mas limitados y otros más versátiles.


- Selector por nombre de etiqueta -> document.getElementByTagName()
- Selector por nombre de clase -> document.getElementByClassName()
- Selector por id -> document.getElementById() 


Selectores tipo query (se definen igual que los selectores de CSS):

- Selector único -> document.querySelector()
- Selector múltiple -> document.querySelectorAll()



## Lógica de interacción usuario-web ó client-web:

1) Seleccionamos los elementos que van a interactuar.
2) Asignamos un evento al elemento que interactua con el usuario (o cliente)
3) Al lanzarse el evento la web ejecuta un código determinado en respuesta.