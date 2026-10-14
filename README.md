# t3_act4_react

Aplicación pequeña desarrollada con **React + Vite** como parte de la **Act4: Introducción a React - Fundamentos y Primer Componente**.

La aplicación integra los conceptos fundamentales del framework vistos en el video proveido: componentes funcionales, props, estado (`useState`), eventos, renderizado condicional y listas dinámicas.

---

## Cómo ejecutar el proyecto localmente

```bash
npm install
npm run dev
```

Luego abre en el navegador la URL que indique la terminal (normalmente `http://localhost:5173/t3_act4_react/`).

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

Para desplegar en GitHub Pages:

```bash
npm run deploy
```

---

## Componentes y conceptos aplicados

| Componente | Concepto demostrado |
|---|---|
| `Saludo.jsx` | Componente funcional simple |
| `TarjetaPerfil.jsx` | Componente que recibe y muestra **props** |
| `Contador.jsx` | Componente que usa **estado (`useState`)** y eventos |
| `ListaTareas.jsx` | Lista renderizada dinámicamente con **`.map()`** y **`key`** |
| `App.jsx` | Integra todo y maneja el formulario de agregar tareas |

### Funcionalidad principal

La aplicación muestra un saludo, una tarjeta de perfil con props, un contador con botones para sumar y restar, y una lista de tareas donde el usuario puede agregar nuevas tareas escribiendo en un input. También se aplica renderizado condicional para mostrar un mensaje cuando no hay tareas.

---

## Cuestionario

### a) ¿Qué diferencia hay entre props y state en React?

Ambos afectan el renderizado pero cumplen funciones distintas:

**Props:** Son datos de entrada que recibe un componente desde fuera. Dentro del componente receptor se tratan como inmutables.

**State:** es memoria interna del componente y representa datos que cambian con el tiempo por interacción del usuario o por lógica de negocio.

---

### b) ¿Por qué es importante usar una `key` al renderizar una lista de elementos?

El propósito del atributo "key" en React es proporcionar una identificación única a cada elemento en una lista renderizada dinámicamente. Esto permite a React identificar qué elementos han cambiado, añadido o eliminado de la lista cuando se realiza una actualización.

Cuando se renderiza una lista sin el atributo "key" React tiene dificultades para identificar correctamente cambios en la lista lo que puede generar errores.

---

### c) Explicación de qué hace la función `useState` y ejemplo de su uso.

`useState` es un **hook** de React que permite agregar estado a un componente funcional. Devuelve un arreglo con dos elementos:

1. El **valor actual** del estado.
2. Una **función** para actualizarlo.

Cuando se llama a esa función con un nuevo valor, React vuelve a renderizar el componente y refleja el cambio en la pantalla.

**Ejemplos de uso en mi aplicación:**

- En `Contador.jsx` lo usé para llevar la cuenta:

  ```jsx
  const [contador, setContador] = useState(0);
  ```

  Cada vez que se hace clic en "Sumar" o "Restar", se llama a `setContador` y el número cambia en pantalla.

---

### d) Enlace del repositorio en GitHub

🔗 https://github.com/Lordynt/t3_act4_react

---

### e) Enlace del proyecto desplegado en GitHub Pages

🔗 https://Lordynt.github.io/t3_act4_react/

---