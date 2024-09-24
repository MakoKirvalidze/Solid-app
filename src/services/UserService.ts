import { IUserService, User } from "../interfaces/IUserService";

export class UserService implements IUserService {
  private users: User[] = [
    { id: 1, name: 'Mako Kirvalidze', email: 'Makokirvalidze@gmail.com' },
    { id: 2, name: 'Mariam Kervalishvili', email: 'Mariamkervalishvili@gmail.com' },
  ];

  async getUsers(): Promise<User[]> {
    return this.users;
  }

  async createUser(user: User): Promise<void> {
    this.users.push({ ...user, id: this.users.length + 1 });
  }

  async updateUser(user: User): Promise<void> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  async deleteUser(id: number): Promise<void> {
    this.users = this.users.filter(user => user.id !== id);
  }
}
