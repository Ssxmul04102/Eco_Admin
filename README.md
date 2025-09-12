# 🌱 Eco_Admin - Panel de Administración para EcoEnergix

Este proyecto es un **panel de administración** para la plataforma **EcoEnergix**, diseñado para que los administradores puedan **gestionar usuarios, productos, pedidos y domicilios** de manera eficiente.  
Está desarrollado con **React + Vite** y utiliza **TailwindCSS** para los estilos, además de componentes reutilizables y una arquitectura modular.

---

## 🚀 Características principales
- **Sidebar dinámica** que se retrae y expande al hacer clic en el logo.
- Secciones principales:
  - 👤 Gestión de **Usuarios**
  - 📦 Gestión de **Productos**
  - 🛒 Gestión de **Pedidos**
  - 🚚 Gestión de **Domicilios**
- **Diseño responsivo** que se adapta a dispositivos móviles, tablets y escritorio.
- Estructura modular separada en `componentes` y `pages`.
- Preparado para integrar un **CRUD completo** y conexión con base de datos en el futuro.

---

## 🗂 Estructura del Proyecto
src/
│
├── admin/
│ ├── componentes/ # Componentes reutilizables
│ │ └── Sidebar.jsx # Barra lateral dinámica
│ │
│ ├── pages/ # Páginas principales
│ │ ├── Users.jsx # Gestión de usuarios
│ │ ├── Products.jsx # Gestión de productos
│ │ ├── Orders.jsx # Gestión de pedidos
│ │ └── Deliveries.jsx # Gestión de domicilios
│ │
│ └── App.jsx # Punto principal de la aplicación
│
├── main.jsx # Configuración inicial de React
└── index.css # Estilos globales

---

## 🧩 Funciones y su propósito

### 1. **useState (React)**
```javascript
import { useState } from "react";
Propósito:
Manejar estados internos en componentes como:

Abrir/cerrar el Sidebar.

- Guardar datos temporales como listas de usuarios o productos.

Ejemplo en Sidebar.jsx:
const [isOpen, setIsOpen] = useState(true);
- Se utiliza para alternar el estado de la barra lateral: expandida o retraída.
import { Link } from "react-router-dom";

🛠 Tecnologías utilizadas

React
 - Librería para la interfaz.

Vite
 - Bundler rápido y moderno.

TailwindCSS
 - Estilos responsivos.

lucide-react
 - Íconos.

react-router-dom
 - Ruteo en la aplicación.