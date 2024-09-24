import React, { useState } from 'react';
import { User } from '../interfaces/IUserService';

interface UserFormProps {
  onSubmit: (user: User) => void;
  user?: User;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, user }) => {
  const [formData, setFormData] = useState<User>(user || { id: 0, name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
