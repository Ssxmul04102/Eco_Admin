// src/admin/services/usersService.js
let users = [
  { id: 1, name: "Johan Castillo", email: "johan@gmailcom", role: "Adminstrador" },
  { id: 2, name: "Emmanuel Piñeros", email: "emmanuel@gmail.com", role: "Administrador" },
  { id: 2, name: "JuanJose Forero", email: "jujofoca@gmail.com", role: "Administrador" },
];

// Obtener todos los usuarios
export const getUsers = () => [...users];

// Crear un nuevo usuario
export const createUser = (user) => {
  const newUser = { ...user, id: Date.now() };
  users.push(newUser);
  return newUser;
};

// Actualizar usuario
export const updateUser = (id, updatedData) => {
  users = users.map((u) => (u.id === id ? { ...u, ...updatedData } : u));
  return users.find((u) => u.id === id);
};

// Eliminar usuario
export const deleteUser = (id) => {
  users = users.filter((u) => u.id !== id);
  return users;
};
