# Nexup Frontend Challenge

Aplicación React + TypeScript para mostrar y filtrar una lista de productos con filtro por categoría y búsqueda.

🌐 **Demo en vivo**: [https://nexup-frontend-challenge.vercel.app/](https://nexup-frontend-challenge.vercel.app/)

## 🚀 Características

### Requisitos Principales
- ✅ **Visualización de Productos**: Muestra todos los productos con indicadores de estado, nombre, categoría y precio formateado
- ✅ **Filtro por Categoría**: Selector desplegable con opción de filtrado por categoría
- ✅ **Indicadores de Estado**: Puntos codificados por color (azul claro para Activo, gris para Inactivo)
- ✅ **Formato de Precio**: Todos los precios mostrados como `$XX.XX` con dos decimales

### Características Opcionales Implementadas
- ✅ **Búsqueda por texto**: Filtrado de búsqueda en tiempo real por nombre de producto
- ✅ **Estados de Carga**: Spinner y mensaje de carga durante la carga de datos
- ✅ **Manejo de Errores**: Mensajes de error amigables para el usuario en caso de fallos de API
- ✅ **Diseño Responsive**: Funciona perfectamente en móvil, tablet y escritorio

## 📁 Estructura del Proyecto

```
src/
├── api/
│   └── products.ts
├── components/
│   ├── CategoryFilter.tsx
│   ├── ProductList.tsx
│   ├── ProductManager.tsx
│   └── SearchFilter.tsx
├── models/
│   ├── Product.ts
│   ├── ProductCategory.ts
│   └── ProductStatus.ts
└── App.tsx
```

## 🏗️ Arquitectura y Enfoque

### Arquitectura de Componentes
- **ProductManager**: Gestiona todo el estado de la aplicación, obtención de datos y lógica de negocio
- **CategoryFilter, SearchFilter, ProductList**: Componentes presentacionales que reciben props y manejan el renderizado de la UI

### Gestión de Estado
- Utiliza hooks de React (`useState`, `useEffect`, `useMemo`) para la gestión de estado
- Estado centralizado en el componente `ProductManager`
- Lógica de filtrado memorizada para optimización de rendimiento

### Decisiones de Diseño

#### 1. Lógica de Filtrado Combinada
- Los filtros de categoría y búsqueda funcionan juntos
- Los filtros se aplican secuencialmente: categoría primero, luego búsqueda
- Mensaje de estado cuando ningún producto coincide con los criterios de búsqueda

#### 2. Organización del Código
- Funciones atómicas y reutilizables
- Componentes modulares con responsabilidad única
- Separación de intereses (SoC) (API, modelos, componentes, estilos)

#### 3. Datos Mock
La aplicación utiliza datos mock de productos ubicados en `src/api/products.ts`:
- 9 productos en 3 categorías (Fruta, Verduras, Carne)


## Instalación

### Requisitos Previos
- Node.js (v14 o superior)
- npm o yarn

1. Clonar el repositorio:
```bash
git clone https://github.com/andixeneize/nexup-frontend-challenge.git
cd nexup-frontend-challenge
```

2. Instalar las dependencias:
```bash
npm install
```

3. Iniciar el servidor:
```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

- `npm start`: Ejecuta la aplicación en modo desarrollo
- `npm run build`: Crea una versión de producción
- `npm test`: Ejecuta la suite de pruebas
- `npm run lint`: Ejecuta ESLint para verificar la calidad del código
- `npm run lint:fix`: Corrige automáticamente los problemas de linting


## 🚀 Mejoras Futuras

Mejoras potenciales:
- Pruebas unitarias y de integración
- Funcionalidad de stock con filtrado por disponibilidad
- Búsqueda avanzada (múltiples campos)
- Opciones de ordenamiento de productos
- Paginación para grandes sets de datos


## 👤 Autor

**Andres Sanchez**
- GitHub: [@andixeneize](https://github.com/andixeneize)
