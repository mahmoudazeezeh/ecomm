import React, { createContext, useState, useContext, useEffect } from 'react';

// Types
interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Load auth state from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Mock user database
  const mockUsers = [
    { id: 1, name: 'Demo User', email: 'demo@example.com', password: 'password123', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'John Doe', email: 'john@example.com', password: 'password123', avatar: 'https://i.pravatar.cc/150?img=12' },
  ];

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Find user with matching credentials
    const user = mockUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Remove password from user object
      const { password, ...userWithoutPassword } = user;
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      
      return true;
    }
    
    return false;
  };

  // Register function
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Check if email already exists
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser) {
      return false;
    }
    
    // Create new user (in a real app, this would be an API call)
    const newUser = {
      id: mockUsers.length + 1,
      name,
      email,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
    };
    
    setUser(newUser);
    setIsAuthenticated(true);
    
    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(newUser));
    
    return true;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};