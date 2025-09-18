// src/admin/services/usersService.js
let users = [
  { id: 1, name: "Johan Castillo", email: "johan@example.com", role: "Cliente" },
  { id: 2, name: "Emmanuel Torres", email: "emmanuel@example.com", role: "Administrador" },
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
