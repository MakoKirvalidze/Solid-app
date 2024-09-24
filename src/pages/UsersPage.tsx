import React, { useEffect, useState } from 'react';
import { UserService } from '../services/UserService';
import { User } from '../interfaces/IUserService';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const UsersPage: React.FC = () => {
  const userService = new UserService();
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    userService.getUsers().then(setUsers);
  }, []);

  const handleCreateOrUpdateUser = (user: User) => {
    if (user.id === 0) {
      userService.createUser(user).then(() => {
        setUsers([...users, user]);
      });
    } else {
      userService.updateUser(user).then(() => {
        setUsers(users.map(u => (u.id === user.id ? user : u)));
      });
    }
    setEditingUser(null);
  };

  const handleDeleteUser = (id: number) => {
    userService.deleteUser(id).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
  };

  return (
    <div>
      <h1>Users</h1>
      <UserForm onSubmit={handleCreateOrUpdateUser} user={editingUser || undefined} />
      <UserList users={users} onDelete={handleDeleteUser} onEdit={handleEditUser} />
    </div>
  );
};

export default UsersPage;
