import { Models } from 'node-appwrite';

export type T_NavLink = {
  path: string;
  label: string;
  icon?: string;
  isNew?: boolean;
};

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
export interface I_User extends Models.Document {
  $id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  avatarId: string | null;
  firstname: string;
  lastname: string;
  role: UserRole;
  liked: string[];
}
