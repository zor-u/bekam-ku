export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface ApiValidationError {
  message: string;
  errors: Record<string, string[]>;
}
