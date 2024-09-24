export interface IUserService {
    getUsers(): Promise<User[]>;
    createUser(user: User): Promise<void>;
    updateUser(user: User): Promise<void>;
    deleteUser(id: number): Promise<void>;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
  }
  