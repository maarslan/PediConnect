export interface User {
  id: string;
  email: string;
  name: string;
  role: 'parent' | 'professional';
  isPremium: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
  role: 'parent' | 'professional';
  credentials?: string; // For professionals
}