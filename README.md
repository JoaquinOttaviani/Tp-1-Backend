# TP Backend - CRUD con Node.js y MySQL

## 📌 Descripción

Aplicación de línea de comandos (CLI) desarrollada con Node.js que permite realizar operaciones CRUD (Create, Read, Update, Delete) sobre una base de datos MySQL.

---

## ⚙️ Tecnologías utilizadas

* Node.js
* MySQL
* mysql2
* uuid

---

## 🚀 Instalación

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPO>
```

2. Instalar dependencias:

```bash
npm install
```

---

## 🛠️ Configuración de la base de datos



Crear la base de datos:

```sql
CREATE DATABASE users_db;
```

Crear la tabla:

```sql
USE users_db;

CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);
```

---

## ▶️ Uso

### Obtener usuarios

```bash
node index.js get
```

---

### Crear usuario

```bash
node index.js add <username> <email> <password>
```

Ejemplo:

```bash
node index.js add juan juan@gmail.com 1234
```

---

### Actualizar usuario

```bash
node index.js update <username> <email> <password> <id>
```

Ejemplo:

```bash
node index.js update juan_actualizado juan@gmail.com 9999 ID
```

---

### Eliminar usuario

```bash
node index.js delete <id>
```

Ejemplo:

```bash
node index.js delete ID
```

---

## ⚠️ Validaciones

* Todos los campos son obligatorios en `add`
* El email debe terminar en `@gmail.com`

---

## 📁 Estructura del proyecto

```
TP/
│── config.js
│── controllers.js
│── index.js
│── package.json
```

---


