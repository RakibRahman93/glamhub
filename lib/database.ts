// This is an in-memory database for demonstration purposes.
// Data stored here will not persist after the server restarts.

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

export const users: User[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "user@example.com",
    password: "password123",
    phone: "1234567890",
  },
];

export const addUser = (newUser: Omit<User, 'id'>): User => {
  const userWithId = { ...newUser, id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1 };
  users.push(userWithId);
  return userWithId;
};

export const updateUser = (updatedUser: User): User | undefined => {
  const userIndex = users.findIndex(user => user.id === updatedUser.id);
  if (userIndex !== -1) {
    users[userIndex] = updatedUser;
    return users[userIndex];
  }
  return undefined;
};